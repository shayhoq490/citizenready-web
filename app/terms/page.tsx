export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border" style={{ borderColor: '#E5E0D8' }}>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B2A4A' }}>Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using CitizenReady (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>2. Use of Service</h2>
            <p className="mb-2">
              CitizenReady is a practice tool designed to help you prepare for the Australian Citizenship Test. You agree to use the Service only for lawful purposes and in accordance with these terms.
            </p>
            <p>
              You must not misuse the Service, attempt to gain unauthorised access, or use it in a way that could damage or impair its operation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>3. No Guarantee of Passing</h2>
            <p>
              CitizenReady is an unofficial practice resource. We make no guarantee that using this Service will result in passing the official Australian Citizenship Test. The official test is administered by the Department of Home Affairs and is subject to its own rules and assessment criteria.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>4. Premium Subscription</h2>
            <p className="mb-2">CitizenReady offers two premium plans:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
              <li><strong>Monthly ($2.99/month):</strong> Billed monthly. Auto-renews unless cancelled at least 24 hours before the renewal date.</li>
              <li><strong>Lifetime ($9.99 one-time):</strong> A single payment granting permanent access to premium features as long as the Service is available.</li>
            </ul>
            <p className="mb-2">
              <strong>Cancellation:</strong> Monthly subscriptions can be cancelled at any time through your account settings or app store subscription management. Access continues until the end of the current billing period.
            </p>
            <p>
              <strong>Refunds:</strong> Refund requests are handled on a case-by-case basis. Please contact us within 14 days of purchase if you are not satisfied.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>5. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorised use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>6. Intellectual Property</h2>
            <p>
              All content, design, code, and materials on CitizenReady are the property of CitizenReady or its licensors. The practice questions are based on publicly available Australian Government citizenship test materials.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by Australian law, CitizenReady shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>8. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Australia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or in-app notification. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>10. Contact</h2>
            <p>
              For any questions about these Terms, please contact us at{' '}
              <a href="mailto:support@citizenready.app" className="underline" style={{ color: '#1B2A4A' }}>
                support@citizenready.app
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
