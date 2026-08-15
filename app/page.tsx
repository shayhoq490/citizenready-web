import Link from 'next/link';
import AdBanner from '../components/AdBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CitizenReady — Free Australian Citizenship Practice Test 2026',
  description:
    'Free Australian citizenship practice test 2026. 97 questions covering Australian values, history, democratic beliefs and government — based on the official Our Common Bond book. Pass with confidence.',
  alternates: { canonical: 'https://www.citizenready.com.au' },
  openGraph: {
    title: 'CitizenReady — Free Australian Citizenship Practice Test 2026',
    description: '97 practice questions. Real test format: 20 questions, 45-min timer, 75% pass mark. Australian values requires 100%. Free, no sign-up needed.',
    url: 'https://www.citizenready.com.au',
  },
};

const faqItems = [
  {
    q: 'How many questions are on the Australian citizenship test?',
    a: 'The Australian citizenship test has 20 multiple-choice questions and runs for 45 minutes. You must score at least 75% overall (15 out of 20 correct) and answer all Australian values questions correctly to pass.',
  },
  {
    q: 'What is the passing score for the Australian citizenship test?',
    a: 'You need 75% overall (at least 15 out of 20 questions correct) AND 100% on the Australian values section (all 5 values questions must be correct). Failing even one values question means you fail the entire test.',
  },
  {
    q: 'What is the official book for the Australian citizenship test?',
    a: 'The official resource is "Australian Citizenship: Our Common Bond", published by the Department of Home Affairs. All citizenship test questions are based on the content of this book.',
  },
  {
    q: 'What happens if you fail a values question on the citizenship test?',
    a: 'You automatically fail the test if you get any Australian values question wrong, regardless of your overall score. The Australian values section requires 100% correct answers — this is why it is the most important section to study.',
  },
  {
    q: 'What topics are covered in the Australian citizenship test?',
    a: 'The test covers four sections: Australian Values (mandatory — must get 100%), Australia and its People (history, symbols, national days), Democratic Beliefs, Rights and Liberties, and Government and the Law in Australia.',
  },
  {
    q: 'Is the CitizenReady practice test free?',
    a: 'Yes. CitizenReady offers a free Australian citizenship practice test with no sign-up required. You can also create a free account to track your test history and progress over time.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function Home() {
  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen">
      {/* Hero */}
      <section style={{ backgroundColor: '#1B2A4A' }} className="py-20 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
            Ace Your Australian<br />
            <span style={{ color: '#C9A84C' }}>Citizenship Test</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Practice 97 citizenship test questions. Track your progress. Pass with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test"
              className="px-8 py-3 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
            >
              Start Free Practice Test
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 rounded-full font-semibold text-base border-2 transition-opacity hover:opacity-90"
              style={{ borderColor: '#C9A84C', color: '#C9A84C' }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* App download banner */}
      <section style={{ backgroundColor: '#C9A84C' }} className="py-5 px-4 text-center">
        <p className="text-sm font-semibold mb-3" style={{ color: '#1B2A4A' }}>
          📱 Best experienced on the app — study offline, track progress &amp; get haptic feedback
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://apps.apple.com/app/citizenready"
            aria-label="Download on the App Store"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF' }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.citizenready"
            aria-label="Get it on Google Play"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF' }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
            </svg>
            Google Play
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#2A4D14' }} className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-around gap-4 text-white text-center">
          <div>
            <p className="text-3xl font-bold" style={{ color: '#C9A84C' }}>97</p>
            <p className="text-sm text-white/80">Practice Questions</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: '#C9A84C' }}>3</p>
            <p className="text-sm text-white/80">Test Sections</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: '#C9A84C' }}>75%</p>
            <p className="text-sm text-white/80">Pass Mark Required</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B2A4A' }}>
            Everything You Need to Pass
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: '97 Practice Questions',
                desc: 'Comprehensive question bank covering all sections of the official Australian citizenship test resource book.',
              },
              {
                icon: '📊',
                title: 'Pass Tracking',
                desc: 'Sign in to track every practice test, see your improvement over time, and identify weak areas.',
              },
              {
                icon: '⭐',
                title: 'Ad-Free Premium',
                desc: 'Upgrade to Premium for an uninterrupted, ad-free experience for just $2.99/month or $9.99 lifetime.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 shadow-sm border"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E0D8' }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1B2A4A' }}>{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test structure callout */}
      <section className="py-12 px-4" style={{ backgroundColor: '#F0EBE1' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: '#1B2A4A' }}>
            Know What to Expect on Test Day
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Based on the official <strong>Australian Citizenship: Our Common Bond</strong> book published by the Department of Home Affairs.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '❓', label: '20 Questions', sub: 'Multiple choice' },
              { icon: '⏱️', label: '45 Minutes', sub: 'Time limit' },
              { icon: '🎯', label: '75% + 100% Values', sub: 'To pass' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4 bg-white border" style={{ borderColor: '#E5E0D8' }}>
                <div className="text-3xl mb-1">{item.icon}</div>
                <p className="font-bold text-sm" style={{ color: '#1B2A4A' }}>{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ⚠️ <strong>Important:</strong> Failing even one Australian values question means an automatic fail, regardless of your overall score.
          </p>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#1B2A4A' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details
                key={q}
                className="rounded-xl border p-5 group"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E0D8' }}
              >
                <summary className="font-semibold text-sm cursor-pointer list-none flex justify-between items-center gap-3" style={{ color: '#1B2A4A' }}>
                  {q}
                  <span className="text-lg shrink-0 group-open:rotate-45 transition-transform" style={{ color: '#C9A84C' }}>+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1B2A4A' }} className="py-14 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-white/70 mb-6">Join thousands of Australians preparing for their citizenship test.</p>
        <Link
          href="/test"
          className="px-8 py-3 rounded-full font-semibold text-base inline-block transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
        >
          Take a Free Practice Test
        </Link>
      </section>

      {/* AdBanner for guests */}
      <div className="py-4 px-4 max-w-4xl mx-auto">
        <AdBanner slot="1234567890" />
      </div>

      {/* FAQ JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
