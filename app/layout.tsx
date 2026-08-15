import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://www.citizenready.com.au';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CitizenReady — Free Australian Citizenship Practice Test 2026',
    template: '%s | CitizenReady',
  },
  description:
    'Free Australian citizenship practice test 2026. 97 questions from the official Our Common Bond book. Covers Australian values, history, government and democratic beliefs. Pass with confidence.',
  keywords: [
    'Australian citizenship practice test',
    'free Australian citizenship test 2026',
    'Australian citizenship test questions and answers',
    'mock citizenship test Australia',
    'Our Common Bond practice test',
    'Department of Home Affairs citizenship practice',
    'Australian values questions',
    'Australian democratic beliefs test',
    'Australian system of government practice',
    '3 levels of government Australia quiz',
    'Australian history test questions',
    'Anzac Day history quiz',
    'rule of law Australian values test',
    'must pass Australian values quiz',
  ],
  authors: [{ name: 'CitizenReady' }],
  creator: 'CitizenReady',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'CitizenReady',
    title: 'CitizenReady — Free Australian Citizenship Practice Test 2026',
    description:
      'Practice 97 questions from the official Our Common Bond book. Track your results and pass the Australian citizenship test with confidence.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CitizenReady — Australian Citizenship Test Practice' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CitizenReady — Free Australian Citizenship Practice Test 2026',
    description: 'Practice 97 questions from the official Our Common Bond book. Free, no sign-up required.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {publisherId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
