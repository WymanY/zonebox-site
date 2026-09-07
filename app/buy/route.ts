import { NextResponse } from 'next/server';

export function GET() {
  const checkout = process.env.CREEM_CHECKOUT_URL;
  if (!checkout) {
    return new NextResponse('ZoneBox Pro checkout is not configured yet.', {
      status: 503,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  }
  return NextResponse.redirect(checkout, 302);
}
