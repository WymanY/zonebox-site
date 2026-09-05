import type { ThemePreference } from '@/lib/theme';

export function ThemeScript({ preference }: { preference: ThemePreference }) {
  const source = `(() => {
    const preference = ${JSON.stringify(preference)};
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    const root = document.documentElement;
    root.classList.toggle('dark', resolved === 'dark');
    root.dataset.theme = preference;
    root.style.colorScheme = resolved;
  })();`;

  return <script dangerouslySetInnerHTML={{ __html: source }} />;
}
