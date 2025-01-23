"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TermsOfServicePageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-800">
              Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2 className="text-xl font-semibold text-green-700 mt-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the VeggiTrace platform, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              2. Description of Service
            </h2>
            <p>
              VeggiTrace provides a blockchain-based platform for tracking and
              verifying the supply chain of agricultural products. Our services
              include, but are not limited to, QR code scanning, product
              information lookup, and real-time market pricing.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              3. User Responsibilities
            </h2>
            <p>
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their
              account. Users agree to notify VeggiTrace immediately of any
              unauthorized use of their account.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              4. Data Privacy and Security
            </h2>
            <p>
              VeggiTrace is committed to protecting user privacy and securing
              data. We collect and use personal information as described in our
              Privacy Policy. By using our services, you consent to our data
              practices as described in the Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              5. Intellectual Property
            </h2>
            <p>
              All content and materials available on VeggiTrace, including but
              not limited to text, graphics, website name, code, images, and
              logos are the intellectual property of VeggiTrace and are
              protected by applicable copyright and trademark law.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              6. Limitation of Liability
            </h2>
            <p>
              VeggiTrace shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              7. Modifications to Terms
            </h2>
            <p>
              VeggiTrace reserves the right to modify or replace these Terms of
              Service at any time. It is your responsibility to check these
              Terms periodically for changes.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              8. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of [Your Jurisdiction], without regard to its conflict of law
              provisions.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-4">
              9. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at
              legal@veggitrace.com.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
