export type ThemePreference = 'system' | 'light' | 'dark';

export const THEME_COOKIE = 'zonebox-theme';

export function parseThemePreference(value: string | undefined): ThemePreference {
  if (value === 'light' || value === 'dark' || value === 'system') {
    return value;
  }
  return 'system';
}
