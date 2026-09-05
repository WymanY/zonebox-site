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
    <div className="min-h-screen bg-background">
      <SiteHeader lang={lang} t={t} theme={theme} />
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <p className="mb-4 text-sm font-medium tracking-[0.18em] text-primary uppercase">
          ZoneBox
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">{t.privacyTitle}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{t.privacyIntro}</p>
        <div className="mt-12 space-y-10">
          {t.privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-medium tracking-tight">{section.title}</h2>
              <p className="mt-3 text-base leading-8 text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm">
          <Link href="/" className="text-primary hover:underline">
            {t.backHome}
          </Link>
          <span className="mx-3 text-muted-foreground">·</span>
          <a href={GITHUB_URL} className="text-primary hover:underline">
            GitHub
          </a>
        </p>
      </main>
      <SiteFooter t={t} />
    </div>
  );
}
