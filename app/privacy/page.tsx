export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border" style={{ borderColor: '#E5E0D8' }}>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B2A4A' }}>Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>1. Information We Collect</h2>
            <p className="mb-3">
              CitizenReady collects the following types of information when you use our service:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Account information:</strong> your email address and display name when you create an account.</li>
              <li><strong>Test results:</strong> your practice test scores, pass/fail status, answers, and timing data.</li>
              <li><strong>Usage data:</strong> basic analytics about how you use the app (pages visited, session duration).</li>
              <li><strong>Payment information:</strong> processed by Stripe. We do not store your card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To provide and improve the CitizenReady service.</li>
              <li>To display your personal test history and progress in the dashboard.</li>
              <li>To manage your account and subscription status.</li>
              <li>To send you important service-related communications (not marketing without consent).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>3. Data Storage</h2>
            <p>
              Your data is stored securely using Supabase, a trusted cloud database provider with data centres hosted in compliance with applicable data protection regulations. Data is encrypted at rest and in transit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>4. Advertising</h2>
            <p>
              Free-tier users may see advertisements served by Google AdSense. Google may use cookies to show personalised ads. You can opt out of personalised advertising at{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#1B2A4A' }}>
                adssettings.google.com
              </a>. Premium users see no advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>5. Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Supabase (database and authentication infrastructure).</li>
              <li>Stripe (payment processing — only for premium purchases).</li>
              <li>Google Analytics and AdSense (aggregate usage analytics and advertising).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>6. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your account and all associated data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>7. Deleting Your Account</h2>
            <p>
              You can delete your account and all associated data from within the CitizenReady mobile app or by contacting us directly. Upon deletion, all your personal information and test history will be permanently removed from our systems within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>8. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@citizenready.app" className="underline" style={{ color: '#1B2A4A' }}>
                privacy@citizenready.app
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
