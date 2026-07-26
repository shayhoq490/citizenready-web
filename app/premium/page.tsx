import Link from 'next/link';

const features = [
  'No ads — completely ad-free experience',
  'Unlimited practice tests',
  'Full test history & progress tracking',
  'Detailed score breakdowns by section',
  'Priority support',
];

export default function PremiumPage() {
  const monthlyUrl = process.env.NEXT_PUBLIC_STRIPE_MONTHLY_URL ?? '/signup';
  const lifetimeUrl = process.env.NEXT_PUBLIC_STRIPE_LIFETIME_URL ?? '/signup';

  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3" style={{ color: '#1B2A4A' }}>Upgrade to Premium</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Remove ads, unlock unlimited tests and get the full CitizenReady experience.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {/* Monthly */}
          <div className="bg-white rounded-2xl p-8 border shadow-sm" style={{ borderColor: '#E5E0D8' }}>
            <h2 className="text-xl font-bold mb-1" style={{ color: '#1B2A4A' }}>Monthly</h2>
            <p className="text-4xl font-bold mt-2 mb-1" style={{ color: '#1B2A4A' }}>
              $2.99 <span className="text-base font-normal text-gray-500">/month</span>
            </p>
            <p className="text-xs text-gray-500 mb-6">Billed monthly. Cancel anytime.</p>
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span style={{ color: '#2A4D14' }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href={monthlyUrl}
              className="block w-full py-3 rounded-full text-center font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1B2A4A', color: '#C9A84C' }}
            >
              Get Monthly Premium
            </a>
            <p className="text-xs text-gray-400 text-center mt-3">Auto-renews monthly. Cancel anytime in your account settings.</p>
          </div>

          {/* Lifetime */}
          <div className="bg-white rounded-2xl p-8 border-2 shadow-md relative" style={{ borderColor: '#C9A84C' }}>
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
            >
              Best Value
            </div>
            <h2 className="text-xl font-bold mb-1" style={{ color: '#1B2A4A' }}>Lifetime</h2>
            <p className="text-4xl font-bold mt-2 mb-1" style={{ color: '#1B2A4A' }}>
              $9.99 <span className="text-base font-normal text-gray-500">one-time</span>
            </p>
            <p className="text-xs text-gray-500 mb-6">Pay once. Access forever.</p>
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span style={{ color: '#2A4D14' }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href={lifetimeUrl}
              className="block w-full py-3 rounded-full text-center font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9A84C', color: '#1B2A4A' }}
            >
              Get Lifetime Access
            </a>
            <p className="text-xs text-gray-400 text-center mt-3">One-time payment. No recurring charges.</p>
          </div>
        </div>

        {/* Restore purchases */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Already purchased?</p>
          <Link
            href="/dashboard"
            className="text-sm font-medium underline"
            style={{ color: '#1B2A4A' }}
          >
            Restore Purchases
          </Link>
        </div>
      </div>
    </div>
  );
}
