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
            Practice citizenship test questions from all 4 official sections. Track your progress. Pass with confidence.
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

      {/* App download banner — coming soon */}
      <section style={{ backgroundColor: '#C9A84C' }} className="py-5 px-4 text-center">
        <p className="text-sm font-semibold mb-1" style={{ color: '#1B2A4A' }}>
          📱 Better on the app — study offline, track progress &amp; get haptic feedback
        </p>
        <p className="text-xs mb-3" style={{ color: 'rgba(27,42,74,0.7)' }}>
          iOS &amp; Android apps coming soon
        </p>
        <a
          href="mailto:hello@citizenready.com.au?subject=Notify me when the app launches"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF' }}
        >
          🔔 Notify Me at Launch
        </a>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#2A4D14' }} className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-around gap-4 text-white text-center">
          <div>
            <p className="text-3xl font-bold" style={{ color: '#C9A84C' }}>97</p>
            <p className="text-sm text-white/80">Question Bank</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{ color: '#C9A84C' }}>4</p>
            <p className="text-sm text-white/80">Official Sections</p>
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
                title: 'Full Question Bank',
                desc: '97 practice questions across all 4 official sections of the Australian Citizenship: Our Common Bond resource book.',
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
