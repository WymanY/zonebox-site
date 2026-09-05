import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { GITHUB_URL } from '@/lib/copy';
import { getCopy, getThemePreference } from '@/lib/language';

export const metadata = {
  title: 'Privacy · ZoneBox',
};

export default async function PrivacyPage() {
  const { lang, t } = await getCopy();
  const theme = await getThemePreference();

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_70%)]"
      />
      <SiteHeader lang={lang} t={t} theme={theme} />
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">ZoneBox</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t.privacyTitle}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
          {t.privacyIntro}
        </p>
        <div className="card-surface mt-12 divide-y rounded-[1.75rem]">
          {t.privacySections.map((section, index) => (
            <section key={section.title} className="grid gap-3 p-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:p-8">
              <span className="font-mono text-sm text-muted-foreground/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{section.body}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-2 text-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10"
          >
            <ArrowLeft className="size-4" />
            {t.backHome}
          </Link>
          <a
            href={GITHUB_URL}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium text-primary transition-colors hover:bg-primary/10"
          >
            GitHub
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </main>
      <SiteFooter t={t} />
    </div>
  );
}
