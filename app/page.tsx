import Link from 'next/link';
import AdBanner from '../components/AdBanner';

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
            Practice all 77 official questions. Track your progress. Pass with confidence.
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

      {/* Stats bar */}
      <section style={{ backgroundColor: '#2A4D14' }} className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-around gap-4 text-white text-center">
          <div>
            <p className="text-3xl font-bold" style={{ color: '#C9A84C' }}>77</p>
            <p className="text-sm text-white/80">Official Questions</p>
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
                title: '77 Official Questions',
                desc: 'All questions from the official Australian citizenship test resource book, kept up to date.',
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
    </div>
  );
}
