export default function TermsPage() {
  const year = new Date().getFullYear();
  return (
    <div style={{ backgroundColor: '#F7F3EC' }} className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border" style={{ borderColor: '#E5E0D8' }}>
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B2A4A' }}>Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: July {year}</p>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>1. Acceptance of Terms</h2>
            <p className="mb-2">
              By accessing or using CitizenReady (&ldquo;the Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), including our website at citizenready.com.au and any associated mobile applications, you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;) and our <a href="/privacy" className="underline" style={{ color: '#1B2A4A' }}>Privacy Policy</a>.
            </p>
            <p>
              If you do not agree to these Terms, you must not access or use the Service. These Terms apply to all visitors, registered users, and premium subscribers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>2. Description of Service</h2>
            <p>
              CitizenReady is an independent, unofficial practice resource designed to help individuals prepare for the Australian Citizenship Test. The Service provides practice questions based on the publicly available <em>Australian Citizenship: Our Common Bond</em> resource book published by the Department of Home Affairs.
            </p>
            <p className="mt-2">
              CitizenReady is <strong>not affiliated with, endorsed by, or connected to</strong> the Australian Government, the Department of Home Affairs, or any official government body.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>3. No Guarantee of Passing</h2>
            <p>
              CitizenReady is a study aid only. We make no representation, warranty, or guarantee that use of the Service will result in passing the official Australian Citizenship Test. The official test is administered solely by the Department of Home Affairs and is subject to its own rules, formats, and assessment criteria, which may change without notice.
            </p>
            <p className="mt-2">
              You should always refer to the <strong>official Department of Home Affairs website</strong> for authoritative information about the citizenship test.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>4. Eligibility and Accounts</h2>
            <p className="mb-2">
              You must be at least 13 years of age to use the Service. By using CitizenReady, you represent that you meet this requirement.
            </p>
            <p className="mb-2">
              When you create an account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide accurate, current, and complete information.</li>
              <li>Maintain the confidentiality of your password and account credentials.</li>
              <li>Accept responsibility for all activities that occur under your account.</li>
              <li>Notify us immediately at <a href="mailto:support@citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>support@citizenready.com.au</a> if you suspect unauthorised access.</li>
            </ul>
            <p className="mt-2">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>5. Acceptable Use</h2>
            <p className="mb-2">You agree to use the Service only for lawful, personal, and non-commercial purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Attempt to gain unauthorised access to any part of the Service or its systems.</li>
              <li>Use automated tools (bots, scrapers, crawlers) to extract content from the Service.</li>
              <li>Reproduce, redistribute, or resell questions or content from the Service without our written permission.</li>
              <li>Use the Service to impersonate any person or entity.</li>
              <li>Upload or transmit viruses, malware, or any other harmful code.</li>
              <li>Engage in any conduct that disrupts or interferes with the Service or its servers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>6. Premium Subscription</h2>
            <p className="mb-2">CitizenReady offers two premium plans that remove advertisements and unlock additional features:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
              <li>
                <strong>Monthly Plan ($2.99/month):</strong> Billed monthly. Automatically renews each month unless cancelled at least 24 hours before the renewal date.
              </li>
              <li>
                <strong>Lifetime Plan ($9.99 one-time payment):</strong> A single payment granting permanent access to premium features for as long as the Service remains available in its current form.
              </li>
            </ul>
            <p className="mb-2">
              <strong>Cancellation:</strong> Monthly subscriptions can be cancelled at any time via your account settings or through your app store subscription management (Apple App Store or Google Play). Upon cancellation, premium access continues until the end of the current billing period. No partial refunds are issued for unused time in a billing period.
            </p>
            <p className="mb-2">
              <strong>Refunds:</strong> We offer refunds at our discretion. To request a refund, contact us at <a href="mailto:support@citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>support@citizenready.com.au</a> within <strong>14 days</strong> of your purchase. For purchases made through the Apple App Store or Google Play, refund requests must be directed to the relevant platform.
            </p>
            <p>
              <strong>Price changes:</strong> We reserve the right to change subscription prices with at least 30 days&apos; notice. Continued use after a price change takes effect constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>7. Free Tier and Advertising</h2>
            <p>
              Free-tier users may be shown advertisements served by Google AdSense. By using the free tier, you consent to the display of advertisements. We are not responsible for the content of third-party advertisements. To use the Service without advertisements, you may upgrade to a premium plan.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>8. Intellectual Property</h2>
            <p className="mb-2">
              All original content on CitizenReady — including but not limited to the website design, code, branding, question explanations, and user interface — is the intellectual property of CitizenReady and is protected by Australian and international copyright law.
            </p>
            <p>
              Practice questions are derived from publicly available Australian Government materials (<em>Australian Citizenship: Our Common Bond</em>), which are Crown copyright. Our original explanations, formatting, and scoring logic remain our property. You may not reproduce, distribute, or create derivative works from any CitizenReady content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>9. Third-Party Services</h2>
            <p>
              The Service uses third-party providers including Supabase (database and authentication), Stripe (payment processing), and Google (analytics and advertising). Your use of these providers is subject to their respective terms and privacy policies. We are not responsible for the practices of any third-party service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>10. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>11. Limitation of Liability</h2>
            <p className="mb-2">
              To the maximum extent permitted by Australian consumer law, CitizenReady and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Failure to pass the official Australian Citizenship Test.</li>
              <li>Loss of data or unauthorised access to your account.</li>
              <li>Errors or inaccuracies in practice questions or content.</li>
              <li>Service downtime or interruption.</li>
            </ul>
            <p className="mt-2">
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee or right that cannot be excluded under the <strong>Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth))</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless CitizenReady and its operators from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or in any way connected with your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>13. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if you violate these Terms or engage in conduct that we determine to be harmful to the Service or other users. Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination (including Sections 8, 10, 11, 12, and 14) will remain in effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>14. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of <strong>Australia</strong>. Any dispute arising out of or relating to these Terms or the Service shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts of Australia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>15. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide at least <strong>14 days&apos; notice</strong> of material changes via email (for registered users) or a prominent notice on the website. Your continued use of the Service after the effective date of changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1B2A4A' }}>17. Contact Us</h2>
            <p>For questions, complaints, or support regarding these Terms, please contact us:</p>
            <address className="not-italic mt-2 space-y-1">
              <p><strong>CitizenReady</strong></p>
              <p>Email: <a href="mailto:support@citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>support@citizenready.com.au</a></p>
              <p>Website: <a href="https://www.citizenready.com.au" className="underline" style={{ color: '#1B2A4A' }}>www.citizenready.com.au</a></p>
            </address>
          </section>

        </div>
      </div>
    </div>
  );
}
