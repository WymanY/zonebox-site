import Image from 'next/image';
import Link from 'next/link';

import { LanguageToggle } from '@/components/language-toggle';
import { buttonVariants } from '@/components/ui/button';
import {
  DOWNLOAD_DMG,
  GITHUB_URL,
  type Copy,
  type Lang,
} from '@/lib/copy';
import { cn } from '@/lib/utils';

export function SiteHeader({ lang, t }: { lang: Lang; t: Copy }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-xl"
          />
          <span className="text-base font-semibold tracking-tight">{t.brand}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/#features"
            className="hidden rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground sm:inline"
          >
            {t.navFeatures}
          </Link>
          <Link
            href="/privacy"
            className="hidden rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground sm:inline"
          >
            {t.navPrivacy}
          </Link>
          <LanguageToggle lang={lang} label={t.langSwitch} ariaLabel={t.langAria} />
          <a
            href={DOWNLOAD_DMG}
            className={cn(buttonVariants({ size: 'sm' }), 'px-3')}
          >
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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>{t.footerNote}</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-foreground">
            {t.footerPrivacy}
          </Link>
          <a href={GITHUB_URL} className="hover:text-foreground">
            {t.footerGithub}
          </a>
        </div>
      </div>
    </footer>
  );
}
