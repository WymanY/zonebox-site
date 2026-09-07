import { NextResponse } from 'next/server';

import { createCheckoutSession, creemConfig } from '@/lib/creem';

export async function GET() {
  const { checkoutUrl } = creemConfig();
  try {
    const sessionUrl = await createCheckoutSession();
    return NextResponse.redirect(sessionUrl, 302);
  } catch {
    if (checkoutUrl) {
      return NextResponse.redirect(checkoutUrl, 302);
    }
    return new NextResponse('ZoneBox Pro checkout is not configured yet.', {
      status: 503,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  }
}
