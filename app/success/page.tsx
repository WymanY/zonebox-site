import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { LicenseKeyCard } from '@/components/license-key-card';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { buttonVariants } from '@/components/ui/button';
import { BUY_URL } from '@/lib/copy';
import { licenseKeyFromCheckout, retrieveCheckout } from '@/lib/creem';
import { getCopy, getThemePreference } from '@/lib/language';
import { cn } from '@/lib/utils';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout_id?: string; checkoutId?: string; status?: string }>;
}) {
  const params = await searchParams;
  const { lang, t } = await getCopy();
  const theme = await getThemePreference();
  const checkoutId = params.checkout_id ?? params.checkoutId;
  let licenseKey: string | null = null;
  let state: 'ok' | 'pending' | 'missing' = checkoutId ? 'pending' : 'missing';

  if (checkoutId) {
    try {
      const checkout = await retrieveCheckout(checkoutId);
      licenseKey = licenseKeyFromCheckout(checkout);
      const status = checkout && typeof checkout.status === 'string' ? checkout.status : '';
      if (licenseKey) {
        state = 'ok';
      } else if (status === 'completed' || status === 'pending' || status === 'processing') {
        state = 'pending';
      } else {
        state = 'missing';
      }
    } catch {
      state = 'pending';
    }
  } else if (params.status === 'successful') {
    state = 'pending';
  }

  const body =
    state === 'ok' ? t.successBody : state === 'pending' ? t.successPending : t.successMissing;

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <SiteHeader lang={lang} t={t} theme={theme} />
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{t.pricingProName}</p>
        <h1 className="mt-3 text-[2.1rem] leading-tight font-semibold tracking-tight sm:text-4xl">
          {t.successTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{body}</p>
        {licenseKey ? (
          <LicenseKeyCard
            licenseKey={licenseKey}
            copyLabel={t.successCopy}
            copiedLabel={t.successCopied}
            activateLabel={t.successActivate}
          />
        ) : null}
        <p className="mt-6 text-sm leading-6 text-muted-foreground">{t.successEmail}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={cn(buttonVariants({ size: 'lg' }), 'h-11 rounded-xl px-5 text-[15px]')}>
            {t.backHome}
          </Link>
          {state !== 'ok' ? (
            <a
              href={BUY_URL}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-11 rounded-xl px-5 text-[15px]',
              )}
            >
              {t.pricingCta}
              <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </main>
      <SiteFooter t={t} />
    </div>
  );
}
