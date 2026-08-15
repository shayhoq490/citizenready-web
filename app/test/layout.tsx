import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Australian Citizenship Practice Test 2026 — 97 Questions',
  description:
    'Take a free Australian citizenship practice test based on the official Our Common Bond book. 20 questions, 45-minute timer, 75% pass mark. Australian values section requires 100%.',
  keywords: [
    'Australian citizenship practice test',
    'free citizenship test Australia 2026',
    'Our Common Bond practice test',
    'Department of Home Affairs 2026 test practice',
    'Australian values questions 100% pass',
    'mock citizenship test Australia',
  ],
  alternates: { canonical: 'https://www.citizenready.com.au/test' },
  openGraph: {
    title: 'Free Australian Citizenship Practice Test 2026',
    description: '20 questions · 45-minute timer · 75% pass mark · Australian values requires 100%. Start free, no sign-up needed.',
    url: 'https://www.citizenready.com.au/test',
  },
};

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
