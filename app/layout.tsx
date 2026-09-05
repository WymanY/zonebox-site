import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeScript } from '@/components/theme-script';
import { ThemeSync } from '@/components/theme-sync';
import { getLang, getThemePreference } from '@/lib/language';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ZoneBox',
  description:
    '在屏幕上划出分区，拖一下或按个快捷键，窗口就吸附进去。原生 macOS 菜单栏应用，支持 macOS 14 与 Apple Silicon。',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();
  const theme = await getThemePreference();
  return (
    <html
      lang={lang === 'en' ? 'en' : 'zh-CN'}
      data-theme={theme}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript preference={theme} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeSync preference={theme} />
        {children}
      </body>
    </html>
  );
}
