import { ArrowUpRight, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import {
  DOWNLOAD_DMG,
  GITHUB_URL,
  type Copy,
  type Lang,
} from '@/lib/copy';
import type { ThemePreference } from '@/lib/theme';
import { cn } from '@/lib/utils';

export function SiteHeader({
  lang,
  t,
  theme,
}: {
  lang: Lang;
  t: Copy;
  theme: ThemePreference;
}) {
  const navLink =
    'hidden rounded-lg px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex';

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-3 shadow-[0_1px_0_color-mix(in_oklch,white_50%,transparent)_inset,0_8px_30px_-16px_color-mix(in_oklch,var(--foreground)_30%,transparent)] backdrop-blur-xl sm:px-4 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_10px_40px_-20px_rgba(0,0,0,0.8)]">
        <Link href="/" className="flex items-center gap-2.5 text-foreground">
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-[9px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_12px_-4px_rgba(0,122,255,0.6)]"
          />
          <span className="text-[15px] font-semibold tracking-tight">{t.brand}</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/#guide" className={navLink}>
            {t.navGuide}
          </Link>
          <Link href="/#features" className={navLink}>
            {t.navFeatures}
          </Link>
          <Link href="/privacy" className={navLink}>
            {t.navPrivacy}
          </Link>
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          <LanguageToggle lang={lang} label={t.langSwitch} ariaLabel={t.langAria} />
          <ThemeToggle
            preference={theme}
            labels={{
              aria: t.themeAria,
              system: t.themeSystem,
              light: t.themeLight,
              dark: t.themeDark,
            }}
          />
          <a
            href={DOWNLOAD_DMG}
            className={cn(
              buttonVariants({ size: 'sm' }),
              'ml-1 rounded-lg px-3 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_6px_16px_-8px_var(--primary)]',
            )}
          >
            <Download />
            {t.navDownload}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ t }: { t: Copy }) {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-[8px] opacity-90"
          />
          <p>{t.footerNote}</p>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/privacy"
            className="rounded-lg px-3 py-1.5 transition-colors hover:bg-muted hover:text-foreground"
          >
            {t.footerPrivacy}
          </Link>
          <a
            href={GITHUB_URL}
            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-muted hover:text-foreground"
          >
            {t.footerGithub}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
