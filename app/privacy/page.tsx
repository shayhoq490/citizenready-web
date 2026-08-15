export default function PrivacyPage() {
  const year = new Date().getFullYear();
  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border" style={{ borderColor: '#E5E0D8' }}>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B2A4A' }}>Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: July {year}</p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>1. About This Policy</h2>
            <p>
              CitizenReady (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information in accordance with the <strong>Australian Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs). This Privacy Policy explains what personal information we collect, how we use and disclose it, and how you can exercise your privacy rights.
            </p>
            <p className="mt-2">
              By using CitizenReady (the &ldquo;Service&rdquo;) — including our website and mobile applications — you consent to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>2. Information We Collect</h2>
            <p className="mb-3">We collect the following categories of personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Account information:</strong> your email address and display name when you create an account or sign in.
              </li>
              <li>
                <strong>Test and usage data:</strong> your practice test scores, pass/fail results, answers, timing data, and how you interact with the Service (pages visited, features used, session duration).
              </li>
              <li>
                <strong>Device information:</strong> device type, operating system, browser type, and IP address for security and analytics purposes.
              </li>
              <li>
                <strong>Payment information:</strong> premium subscriptions are processed by Stripe. We receive only a confirmation of payment and your subscription status. We do not store your full card number, CVV, or bank account details.
              </li>
              <li>
                <strong>Communications:</strong> if you contact us by email, we retain that correspondence to respond to you and improve our service.
              </li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> collect sensitive information such as health data, government-issued identifiers, or biometric information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>3. How We Collect Information</h2>
            <p>We collect information:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Directly from you when you register, use the Service, or contact us.</li>
              <li>Automatically through cookies, local storage, and analytics tools when you use the website or app.</li>
              <li>From third-party services (Supabase for authentication, Stripe for payment confirmation, Google AdSense and Analytics for advertising and analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>4. How We Use Your Information</h2>
            <p className="mb-2">We use your personal information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide, operate, and improve the CitizenReady Service.</li>
              <li>Create and manage your account and subscription.</li>
              <li>Display your personal test history and progress in your dashboard.</li>
              <li>Send you important service-related notices (e.g. account verification, subscription changes). We will not send marketing emails without your explicit consent.</li>
              <li>Detect and prevent fraud, abuse, or security incidents.</li>
              <li>Comply with our legal obligations under Australian law.</li>
              <li>Serve relevant advertisements to free-tier users via Google AdSense (see Section 6).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>5. Disclosure of Your Information</h2>
            <p className="mb-2">We do not sell, rent, or trade your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Supabase:</strong> our cloud database and authentication provider. Data is stored in secure, encrypted data centres. Supabase complies with applicable data protection laws.
              </li>
              <li>
                <strong>Stripe:</strong> our payment processor. Used only when you purchase a premium subscription. Stripe is PCI DSS compliant. We do not receive or store full payment card data.
              </li>
              <li>
                <strong>Google LLC:</strong> for analytics (Google Analytics) and advertising (Google AdSense) on the free tier. Google may process data under its own privacy policy.
              </li>
              <li>
                <strong>Legal authorities:</strong> if required by law, court order, or to protect the rights, property, or safety of CitizenReady, our users, or the public.
              </li>
            </ul>
            <p className="mt-3">
              Some of our service providers are located outside Australia. Where we transfer personal information overseas, we take reasonable steps to ensure it receives equivalent protections as required under Australian Privacy Principle 8.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>6. Cookies and Advertising</h2>
            <p className="mb-2">
              We use cookies and similar tracking technologies for authentication, session management, and analytics. Free-tier users may see personalised advertisements served by Google AdSense. Google may use cookies to tailor ads based on your browsing activity.
            </p>
            <p className="mb-2">You can manage your ad preferences or opt out of personalised advertising at{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#1B2A4A' }}>adssettings.google.com</a>.
            </p>
            <p>
              <strong>Premium users</strong> see no advertisements. You can also manage cookies through your browser settings, though disabling cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>7. Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. These include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Encryption of data at rest and in transit (TLS/HTTPS).</li>
              <li>Row-level security policies on our database so you can only access your own data.</li>
              <li>Secure, hashed password storage via Supabase Auth.</li>
              <li>Access controls limiting internal access to personal data.</li>
            </ul>
            <p className="mt-2">
              No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>8. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide the Service. If you delete your account, we will permanently remove your personal information and test history within <strong>30 days</strong>, except where retention is required by law (e.g. financial records related to subscription payments, which are retained for 7 years under Australian tax law).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>9. Your Rights and Choices</h2>
            <p className="mb-2">Under the Australian Privacy Act, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Access</strong> the personal information we hold about you.</li>
              <li><strong>Correct</strong> inaccurate or out-of-date information.</li>
              <li><strong>Delete</strong> your account and associated data (see below).</li>
              <li><strong>Complain</strong> about how we handle your information.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>privacy@citizenready.com.au</a>. We will respond within 30 days.
            </p>
            <p className="mt-2">
              If you believe we have not handled your complaint adequately, you may lodge a complaint with the <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{' '}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#1B2A4A' }}>oaic.gov.au</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>10. Deleting Your Account</h2>
            <p>
              You can delete your account and all associated data at any time from within the CitizenReady mobile app (Profile → Delete Account) or by emailing{' '}
              <a href="mailto:privacy@citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>privacy@citizenready.com.au</a>. Deletion is permanent and cannot be undone.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>11. Children&apos;s Privacy</h2>
            <p>
              CitizenReady is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised &ldquo;Last updated&rdquo; date and, where appropriate, by email notification. Your continued use of the Service after changes are posted constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>13. Contact Us</h2>
            <p>
              For any privacy-related questions, requests, or complaints, please contact us at:
            </p>
            <address className="not-italic mt-2 space-y-1">
              <p><strong>CitizenReady</strong></p>
              <p>Email: <a href="mailto:privacy@citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>privacy@citizenready.com.au</a></p>
              <p>Website: <a href="https://www.citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>www.citizenready.com.au</a></p>
            </address>
          </section>

        </div>
      </div>
    </div>
  );
}
