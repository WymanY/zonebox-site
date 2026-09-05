'use client';

import { Check, Monitor, Moon, Sun, SunMoon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEME_COOKIE, type ThemePreference } from '@/lib/theme';

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
            size="sm"
            aria-label={labels.aria}
            className="text-muted-foreground hover:text-foreground"
          />
        }
      >
        <SunMoon />
        {labels.aria}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        <ThemeOption
          selected={preference === 'system'}
          onSelect={() => setPreference('system')}
        >
          <Monitor />
          {labels.system}
        </ThemeOption>
        <ThemeOption
          selected={preference === 'light'}
          onSelect={() => setPreference('light')}
        >
          <Sun />
          {labels.light}
        </ThemeOption>
        <ThemeOption
          selected={preference === 'dark'}
          onSelect={() => setPreference('dark')}
        >
          <Moon />
          {labels.dark}
        </ThemeOption>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ThemeOption({
  selected,
  onSelect,
  children,
}: {
  selected: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) {
  return (
    <DropdownMenuItem
      onClick={onSelect}
      className="justify-between pr-2"
      aria-checked={selected}
    >
      <span className="flex items-center gap-1.5">{children}</span>
      {selected ? <Check /> : <span className="size-4" />}
    </DropdownMenuItem>
  );
}
