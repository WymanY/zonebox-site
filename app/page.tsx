import Image from 'next/image';

import { GuidePanel } from '@/components/guide-panel';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { buttonVariants } from '@/components/ui/button';
import { DOWNLOAD_DMG, RELEASES_URL } from '@/lib/copy';
import { getCopy, getThemePreference } from '@/lib/language';
import { cn } from '@/lib/utils';

export default async function Home() {
  const { lang, t } = await getCopy();
  const theme = await getThemePreference();

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent),linear-gradient(180deg,var(--background)_0%,color-mix(in_oklch,var(--background)_88%,var(--primary)_12%)_100%)]">
      <SiteHeader lang={lang} t={t} theme={theme} />
      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-8 pt-12 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:pt-16">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium tracking-[0.18em] text-primary uppercase">
              {t.heroKicker}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 text-lg leading-7 text-muted-foreground text-pretty">
              {t.heroBody}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={DOWNLOAD_DMG}
                className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}
              >
                {t.download}
              </a>
              <a
                href={RELEASES_URL}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-11 px-5 text-base',
                )}
              >
                {t.otherRelease}
              </a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.downloadMeta}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.18),transparent_68%)]" />
            <Image
              src="/hero.png"
              alt={t.heroAlt}
              width={1600}
              height={1067}
              priority
              className="relative z-10 w-full rounded-[1.6rem] border border-primary/25 shadow-[0_24px_80px_color-mix(in_oklch,var(--foreground)_18%,transparent)]"
            />
          </div>
        </section>

        <section id="guide" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">{t.guideTitle}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            {t.guideBody}
          </p>
          <div className="mt-8">
            <GuidePanel t={t} />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{t.guideHint}</p>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">{t.featuresTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-border/80 bg-card/70 p-6"
              >
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">{t.trustTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.trust.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/80 bg-card/50 p-6"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-[1.8rem] border border-primary/25 bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary)_16%,transparent),color-mix(in_oklch,var(--card)_82%,transparent))] px-8 py-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">{t.ctaTitle}</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                {t.ctaBody}
              </p>
            </div>
            <a
              href={DOWNLOAD_DMG}
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}
            >
              {t.download}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter t={t} />
    </div>
  );
}
