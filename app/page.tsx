import {
  Apple,
  ArrowUpRight,
  BadgeCheck,
  Download,
  Grid2x2,
  HardDrive,
  Layers,
  MousePointer2,
  Pin,
  SeparatorVertical,
  type LucideIcon,
} from 'lucide-react';

import { GuidePanel } from '@/components/guide-panel';
import { HeroStage } from '@/components/hero-stage';
import { ZoneBoxGlyph } from '@/components/mock-display';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { buttonVariants } from '@/components/ui/button';
import { DOWNLOAD_DMG, RELEASES_URL } from '@/lib/copy';
import { getCopy, getThemePreference } from '@/lib/language';
import { cn } from '@/lib/utils';

const stepIcons: LucideIcon[] = [Grid2x2, MousePointer2, Layers];
const featureIcons: LucideIcon[] = [Grid2x2, SeparatorVertical, Layers, Pin];
const trustIcons: LucideIcon[] = [Apple, BadgeCheck, HardDrive];

const primaryButton = cn(
  buttonVariants({ size: 'lg' }),
  'h-11 rounded-xl px-5 text-[15px] shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_10px_24px_-10px_var(--primary)]',
);
const outlineButton = cn(
  buttonVariants({ variant: 'outline', size: 'lg' }),
  'h-11 rounded-xl bg-card/60 px-5 text-[15px] backdrop-blur',
);

export default async function Home() {
  const { lang, t } = await getCopy();
  const theme = await getThemePreference();
  const metaChips = t.downloadMeta.split(' · ');

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem] bg-[radial-gradient(70%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_70%)]"
      />
      <div aria-hidden className="zone-grid-bg pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]" />

      <SiteHeader lang={lang} t={t} theme={theme} />

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="animate-fade-up max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
              <span className="inline-flex size-4 items-center justify-center rounded-[4px] bg-screen">
                <ZoneBoxGlyph />
              </span>
              {t.heroKicker}
            </p>
            <h1 className="mt-5 text-[2.3rem] leading-[1.12] font-semibold tracking-[-0.02em] text-balance sm:text-[2.9rem]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground text-pretty">
              {t.heroBody}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={DOWNLOAD_DMG} className={primaryButton}>
                <Download />
                {t.download}
              </a>
              <a href={RELEASES_URL} className={outlineButton}>
                {t.otherRelease}
                <ArrowUpRight />
              </a>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted-foreground">
              {metaChips.map((chip) => (
                <li key={chip} className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <HeroStage layoutLabel={t.heroLayoutLabel} />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <SectionHeading kicker={t.stepsKicker} title={t.stepsTitle} />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {t.steps.map((step, index) => {
              const Icon = stepIcons[index] ?? Grid2x2;
              return (
                <li
                  key={step.n}
                  className="card-surface group relative overflow-hidden rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground/70">{step.n}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="guide" className="scroll-mt-24 border-y border-border/60 bg-[linear-gradient(180deg,color-mix(in_oklch,var(--muted)_55%,transparent),transparent)]">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading kicker={t.guideKicker} title={t.guideTitle} body={t.guideBody} />
            <div className="mt-10">
              <GuidePanel t={t} />
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{t.guideHint}</p>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8">
          <SectionHeading kicker={t.featuresKicker} title={t.featuresTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.features.map((feature, index) => {
              const Icon = featureIcons[index] ?? Grid2x2;
              return (
                <article
                  key={feature.title}
                  className="card-surface flex gap-5 rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_1px_0_rgba(255,255,255,0.3)_inset,0_8px_20px_-10px_var(--primary)]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8">
          <SectionHeading kicker={t.trustKicker} title={t.trustTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.trust.map((item, index) => {
              const Icon = trustIcons[index] ?? BadgeCheck;
              return (
                <article key={item.title} className="rounded-[1.5rem] border border-dashed p-6">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-4 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-screen px-8 py-12 text-screen-foreground shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7)] sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_20%,color-mix(in_oklch,var(--zone)_45%,transparent),transparent_70%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-16 hidden w-[22rem] grid-cols-[1.2fr_0.8fr] grid-rows-2 gap-2 opacity-70 md:grid"
            >
              <span className="row-span-2 h-56 rounded-[10px] border-2 border-white/60 bg-zone/40" />
              <span className="rounded-[10px] border-2 border-white/35 bg-zone/20" />
              <span className="rounded-[10px] border-2 border-white/35 bg-zone/20" />
            </div>
            <div className="relative max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">{t.ctaBody}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={DOWNLOAD_DMG}
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'h-11 rounded-xl bg-white px-5 text-[15px] text-[oklch(0.2_0.04_268)] hover:bg-white/90',
                  )}
                >
                  <Download />
                  {t.download}
                </a>
                <a
                  href={RELEASES_URL}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'h-11 rounded-xl border-white/20 bg-white/8 px-5 text-[15px] text-white hover:bg-white/14 hover:text-white dark:border-white/20 dark:bg-white/8 dark:hover:bg-white/14',
                  )}
                >
                  {t.otherRelease}
                  <ArrowUpRight />
                </a>
              </div>
              <p className="mt-4 text-[13px] text-white/55">{t.downloadMeta}</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter t={t} />
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{kicker}</p>
      <h2 className="mt-3 text-[1.9rem] leading-tight font-semibold tracking-tight sm:text-[2.25rem]">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-muted-foreground">{body}</p> : null}
    </div>
  );
}
