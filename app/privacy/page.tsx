import Banner from "@/components/banner"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        <Banner
          title="Privacy Policy"
          subtitle="Last updated: May 1, 2023"
          ctaText="Contact Us"
          ctaLink="/contact"
          imageSrc="/images/privacy-banner.jpg"
          height="small"
        />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Introduction</h2>
              <p className="text-amber-700 mb-4">
                At UNFILTERED, we respect your privacy and are committed to protecting your personal data. This privacy
                policy will inform you about how we look after your personal data when you visit our website and tell
                you about your privacy rights and how the law protects you.
              </p>
              <p className="text-amber-700">
                This privacy policy aims to give you information on how UNFILTERED collects and processes your personal
                data through your use of this website, including any data you may provide through this website when you
                sign up for an account, purchase a including any data you may provide through this website when you sign
                up for an account, purchase a product, or interact with our platform in any way.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Information We Collect</h2>
              <p className="text-amber-700 mb-4">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-amber-700 space-y-2">
                <li>Personal identifiers such as name, email address, postal address, phone number</li>
                <li>Account information such as username and password</li>
                <li>Transaction information including purchase history and payment details</li>
                <li>Profile information such as your style preferences, sizes, and shopping habits</li>
                <li>Technical data including IP address, browser type, device information</li>
                <li>Usage data about how you interact with our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">How We Use Your Information</h2>
              <p className="text-amber-700 mb-4">
                We use the information we collect about you for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-amber-700 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To process transactions and manage your account</li>
                <li>To personalize your experience and deliver content relevant to your style preferences</li>
                <li>To improve our website and customer service</li>
                <li>To communicate with you about updates, promotions, and news</li>
                <li>To protect against fraudulent or unauthorized transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Data Security</h2>
              <p className="text-amber-700 mb-4">
                We have implemented appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way. We limit access to your personal data to those
                employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              <p className="text-amber-700">
                While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee
                its absolute security. Any transmission of personal information is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Your Rights</h2>
              <p className="text-amber-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-amber-700 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of your personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Contact Us</h2>
              <p className="text-amber-700 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-amber-800">UNFILTERED</p>
                <p className="text-amber-800">Email: privacy@unfiltered.com</p>
                <p className="text-amber-800">Address: 123 Fashion Street, Central, Hong Kong</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
