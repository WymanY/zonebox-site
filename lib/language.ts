import { cookies } from 'next/headers';

import { copy, type Copy, type Lang } from '@/lib/copy';

export async function getLang(): Promise<Lang> {
  const jar = await cookies();
  const value = jar.get('zonebox-lang')?.value;
  return value === 'en' ? 'en' : 'zh';
}

export async function getCopy(): Promise<{ lang: Lang; t: Copy }> {
  const lang = await getLang();
  return { lang, t: copy[lang] };
}
