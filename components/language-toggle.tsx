'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import type { Lang } from '@/lib/copy';

export function LanguageToggle({
  lang,
  label,
  ariaLabel,
}: {
  lang: Lang;
  label: string;
  ariaLabel: string;
}) {
  const router = useRouter();
  const next: Lang = lang === 'zh' ? 'en' : 'zh';

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={ariaLabel}
      className="text-muted-foreground hover:text-foreground"
      onClick={() => {
        document.cookie = `zonebox-lang=${next}; path=/; max-age=31536000; samesite=lax`;
        router.refresh();
      }}
    >
      {label}
    </Button>
  );
}
