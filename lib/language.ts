import { cookies } from 'next/headers';

import { copy, type Copy, type Lang } from '@/lib/copy';
import { parseThemePreference, THEME_COOKIE, type ThemePreference } from '@/lib/theme';

export async function getLang(): Promise<Lang> {
  const jar = await cookies();
  const value = jar.get('zonebox-lang')?.value;
  return value === 'en' ? 'en' : 'zh';
}

export async function getCopy(): Promise<{ lang: Lang; t: Copy }> {
  const lang = await getLang();
  return { lang, t: copy[lang] };
}

export async function getThemePreference(): Promise<ThemePreference> {
  const jar = await cookies();
  return parseThemePreference(jar.get(THEME_COOKIE)?.value);
}
