import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nguyễn Huy Hoàng - Problem-to-Solution Builder',
  description: 'Developer @ Bravebits/PageFly. Value-first, Problem-first approach to building technology solutions.',
  keywords: ['developer', 'software engineer', 'problem solver', 'bravebits', 'pagefly'],
  authors: [{ name: 'Nguyễn Huy Hoàng' }],
  creator: 'Nguyễn Huy Hoàng',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Nguyễn Huy Hoàng - Problem-to-Solution Builder',
    description: 'Developer @ Bravebits/PageFly. Value-first, Problem-first approach to building technology solutions.',
    siteName: 'Nguyễn Huy Hoàng Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyễn Huy Hoàng - Problem-to-Solution Builder',
    description: 'Developer @ Bravebits/PageFly. Value-first, Problem-first approach to building technology solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
