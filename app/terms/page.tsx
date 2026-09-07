import {
  ArrowLeft,
  Check,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { buttonVariants } from '@/components/ui/button';
import { getCopy, getThemePreference } from '@/lib/language';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Terms of Service · ZoneBox',
};

export default async function TermsPage() {
  const { lang, t } = await getCopy();
  const theme = await getThemePreference();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_70%)]"
      />
      <div aria-hidden className="zone-grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]" />

      <SiteHeader lang={lang} t={t} theme={theme} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14 sm:px-8 lg:pt-20">
        <section className="max-w-3xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <FileText className="size-3.5 text-primary" />
            {t.termsKicker}
          </p>
          <h1 className="mt-5 text-[2.3rem] leading-[1.12] font-semibold tracking-[-0.02em] text-balance sm:text-[2.9rem]">
            {t.termsTitle}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            {t.termsIntro}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{t.termsUpdated}</p>
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {t.termsFacts.map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2.5 rounded-xl border bg-card/60 px-3.5 py-2.5 text-[14px] font-medium backdrop-blur"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 max-w-3xl space-y-4">
          {t.termsSections.map((section, index) => (
            <article
              key={section.title}
              className="card-surface rounded-[1.5rem] p-6 sm:p-7"
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">{section.title}</h2>
              <p className="mt-2.5 text-[15px] leading-7 text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </section>

        <div className="mt-6 max-w-3xl">
          <Link
            href="/privacy"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-10 rounded-xl bg-card/60 px-4 backdrop-blur',
            )}
          >
            <ShieldCheck className="size-4" />
            {t.termsPrivacyCta}
          </Link>
        </div>

        <p className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            <ArrowLeft className="size-4" />
            {t.backHome}
          </Link>
        </p>
      </main>
      <SiteFooter t={t} />
    </div>
  );
}
