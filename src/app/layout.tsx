import 'src/styles/global.css';
import 'src/styles/error/error-pages.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Copyright  Priyank Ladumor',
  keywords: 'Priyank Ladumor',
  themeColor: '#000000',
  manifest: '/manifest.json',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
  icons: [
    { rel: 'icon', url: '/favicon/favicon.png' },
    { rel: 'icon', sizes: '16x16', url: '/favicon/favicon.png' },
    { rel: 'icon', sizes: '32x32', url: '/favicon/favicon.png' },
    // { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
