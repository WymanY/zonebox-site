'use client';

import { useEffect } from 'react';

import type { ThemePreference } from '@/lib/theme';

function applyResolved(preference: ThemePreference) {
  const resolved =
    preference === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : preference;
  const root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.dataset.theme = preference;
  root.style.colorScheme = resolved;
}

export function ThemeSync({ preference }: { preference: ThemePreference }) {
  useEffect(() => {
    applyResolved(preference);
    if (preference !== 'system') {
      return;
    }
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyResolved('system');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  return null;
}
