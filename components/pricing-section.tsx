import { Check } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { BUY_URL, DOWNLOAD_DMG, type Copy } from '@/lib/copy';
import { cn } from '@/lib/utils';

const primaryButton = cn(
  buttonVariants({ size: 'lg' }),
  'h-11 rounded-xl px-5 text-[15px] shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_24px_-10px_var(--primary)]',
);
const outlineButton = cn(
  buttonVariants({ variant: 'outline', size: 'lg' }),
  'h-11 rounded-xl bg-card/60 px-5 text-[15px] backdrop-blur',
);

export function PricingSection({ t }: { t: Copy }) {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{t.pricingKicker}</p>
        <h2 className="mt-3 text-[1.9rem] leading-tight font-semibold tracking-tight sm:text-[2.25rem]">
          {t.pricingTitle}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{t.pricingBody}</p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="card-surface rounded-[1.5rem] p-6 sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">{t.pricingFreeName}</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight">{t.pricingFreePrice}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.pricingFreeNote}</p>
          <ul className="mt-6 space-y-3">
            {t.pricingFreeItems.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-6">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={DOWNLOAD_DMG} className={cn(outlineButton, 'mt-8')}>
            {t.download}
          </a>
        </article>
        <article className="relative overflow-hidden rounded-[1.5rem] border border-primary/25 bg-primary/8 p-6 shadow-[0_20px_60px_-36px_var(--primary)] sm:p-8">
          <p className="text-sm font-medium text-primary">{t.pricingProName}</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight">{t.pricingProPrice}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.pricingProNote}</p>
          <ul className="mt-6 space-y-3">
            {t.pricingProItems.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-6">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href={BUY_URL} className={cn(primaryButton, 'mt-8')}>
            {t.pricingCta}
          </a>
          <p className="mt-4 text-[13px] text-muted-foreground">{t.pricingFine}</p>
        </article>
      </div>
    </section>
  );
}
