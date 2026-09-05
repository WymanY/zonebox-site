'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEME_COOKIE, type ThemePreference } from '@/lib/theme';

const icons = {
  system: Monitor,
  light: Sun,
  dark: Moon,
} as const;

export function ThemeToggle({
  preference,
  labels,
}: {
  preference: ThemePreference;
  labels: {
    aria: string;
    system: string;
    light: string;
    dark: string;
  };
}) {
  const router = useRouter();
  const Icon = icons[preference];

  function setPreference(next: ThemePreference) {
    document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    const resolved =
      next === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : next;
    const root = document.documentElement;
    root.classList.toggle('dark', resolved === 'dark');
    root.dataset.theme = next;
    root.style.colorScheme = resolved;
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={labels.aria}
            className="text-muted-foreground hover:text-foreground"
          />
        }
      >
        <Icon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        <DropdownMenuItem onClick={() => setPreference('system')}>
          <Monitor />
          {labels.system}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setPreference('light')}>
          <Sun />
          {labels.light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setPreference('dark')}>
          <Moon />
          {labels.dark}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
