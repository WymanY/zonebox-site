import {
  Accessibility,
  ArrowLeft,
  ArrowUpRight,
  Check,
  HardDrive,
  MessageSquare,
  Monitor,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

import { PrivacyStage } from '@/components/privacy-stage';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { buttonVariants } from '@/components/ui/button';
import { GITHUB_URL } from '@/lib/copy';
import { getCopy, getThemePreference } from '@/lib/language';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Privacy · ZoneBox',
};

const sectionIcons: LucideIcon[] = [HardDrive, Accessibility, Monitor, ShieldCheck];

export default async function PrivacyPage() {
  const { lang, t } = await getCopy();
  const theme = await getThemePreference();
  const cards = t.privacySections.slice(0, -1);
  const contact = t.privacySections[t.privacySections.length - 1];

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_70%)]"
      />
      <div aria-hidden className="zone-grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]" />

      <SiteHeader lang={lang} t={t} theme={theme} />

      <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-14 sm:px-8 lg:pt-20">
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div className="animate-fade-up max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <ShieldCheck className="size-3.5 text-primary" />
              {t.privacyKicker}
            </p>
            <h1 className="mt-5 text-[2.3rem] leading-[1.12] font-semibold tracking-[-0.02em] text-balance sm:text-[2.9rem]">
              {t.privacyTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              {t.privacyIntro}
            </p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {t.privacyFacts.map((fact) => (
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
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <PrivacyStage t={t.privacyStage} />
          </div>
        </section>

        <section className="mt-20 grid gap-4 md:grid-cols-2">
          {cards.map((section, index) => {
            const Icon = sectionIcons[index] ?? ShieldCheck;
            return (
              <article
                key={section.title}
                className="card-surface relative rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border bg-background/70 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {section.tag}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-2.5 text-[15px] leading-7 text-muted-foreground">{section.body}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-6 flex flex-col gap-5 rounded-[1.5rem] border border-dashed p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
              <MessageSquare className="size-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">{contact.title}</h2>
              <p className="mt-1 text-[15px] leading-7 text-muted-foreground">{contact.body}</p>
            </div>
          </div>
          <a
            href={GITHUB_URL}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-10 shrink-0 rounded-xl bg-card/60 px-4 backdrop-blur',
            )}
          >
            {t.privacyContactCta}
            <ArrowUpRight />
          </a>
        </section>

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
