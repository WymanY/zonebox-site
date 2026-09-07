const PRODUCT_RE = /prod_[A-Za-z0-9]+/;

export type CreemConfig = {
  apiKey: string;
  apiBase: string;
  checkoutUrl: string;
  productId: string;
  siteUrl: string;
};

export function creemConfig(): CreemConfig {
  const apiKey = process.env.CREEM_API_KEY ?? '';
  const checkoutUrl = process.env.CREEM_CHECKOUT_URL ?? '';
  const productId =
    process.env.CREEM_PRODUCT_ID ?? checkoutUrl.match(PRODUCT_RE)?.[0] ?? '';
  const apiBase =
    process.env.CREEM_API_BASE ??
    (apiKey.startsWith('creem_test_') ? 'https://test-api.creem.io' : 'https://api.creem.io');
  const siteUrl =
    process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    'https://zonebox-site.vercel.app';
  return { apiKey, apiBase: apiBase.replace(/\/$/, ''), checkoutUrl, productId, siteUrl };
}

export async function creemFetch(path: string, init: RequestInit = {}) {
  const { apiKey, apiBase } = creemConfig();
  if (!apiKey) {
    const error = new Error('not_configured');
    (error as Error & { status?: number }).status = 503;
    throw error;
  }
  const headers = new Headers(init.headers);
  headers.set('accept', 'application/json');
  headers.set('x-api-key', apiKey);
  headers.set('user-agent', 'ZoneBox-Site/1.0');
  if (init.body && !headers.has('content-type')) {
    headers.set('content-type', 'application/json');
  }
  const response = await fetch(`${apiBase}${path}`, {
    ...init,
    headers,
    cache: 'no-store',
  });
  const json = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  return { response, json };
}

export async function createCheckoutSession() {
  const { productId, siteUrl } = creemConfig();
  if (!productId) {
    throw new Error('missing_product');
  }
  const payload = {
    product_id: productId,
    success_url: `${siteUrl}/success`,
    metadata: { source: 'zonebox-site' },
  };
  let { response, json } = await creemFetch('/v1/checkouts', {
    method: 'POST',
    body: JSON.stringify({ ...payload, discount_code: 'LAUNCH30' }),
  });
  if (!response.ok) {
    ({ response, json } = await creemFetch('/v1/checkouts', {
      method: 'POST',
      body: JSON.stringify(payload),
    }));
  }
  if (!response.ok) {
    throw new Error((json.error as string) ?? (json.message as string) ?? 'checkout_failed');
  }
  const checkoutUrl = (json.checkout_url as string | undefined) ?? (json.checkoutUrl as string | undefined);
  if (!checkoutUrl) {
    throw new Error('checkout_failed');
  }
  return checkoutUrl;
}

export async function retrieveCheckout(checkoutId: string) {
  const { response, json } = await creemFetch(`/v1/checkouts?checkout_id=${encodeURIComponent(checkoutId)}`);
  if (!response.ok) return null;
  return json;
}

export function licenseKeyFromCheckout(checkout: Record<string, unknown> | null): string | null {
  if (!checkout) return null;
  const keys = checkout.license_keys;
  if (Array.isArray(keys) && keys[0] && typeof keys[0] === 'object') {
    const key = (keys[0] as { key?: unknown }).key;
    if (typeof key === 'string' && key.trim()) return key.trim();
  }
  const features = checkout.feature;
  if (Array.isArray(features)) {
    for (const feature of features) {
      if (!feature || typeof feature !== 'object') continue;
      const nested = (feature as { license_key?: { key?: unknown } }).license_key?.key;
      if (typeof nested === 'string' && nested.trim()) return nested.trim();
    }
  }
  return null;
}
