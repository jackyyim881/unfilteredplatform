import Banner from "@/components/banner"

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        <Banner
          title="Terms of Service"
          subtitle="Last updated: May 1, 2023"
          ctaText="Contact Us"
          ctaLink="/contact"
          imageSrc="/images/terms-banner.jpg"
          height="small"
        />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">1. Introduction</h2>
              <p className="text-amber-700 mb-4">
                Welcome to UNFILTERED. These Terms of Service ("Terms") govern your use of the UNFILTERED website,
                mobile application, and services (collectively, the "Platform"). By accessing or using our Platform, you
                agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Platform.
              </p>
              <p className="text-amber-700">
                UNFILTERED is a platform that connects buyers and sellers of secondhand fashion items. We do not own or
                sell the items listed on our Platform, but rather provide a service that allows users to buy and sell
                items directly with each other.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">2. Account Registration</h2>
              <p className="text-amber-700 mb-4">
                To use certain features of our Platform, you must register for an account. When you register, you agree
                to provide accurate, current, and complete information about yourself. You are responsible for
                maintaining the confidentiality of your account credentials and for all activities that occur under your
                account.
              </p>
              <p className="text-amber-700">
                You must be at least 18 years old to create an account. By creating an account, you represent and
                warrant that you are at least 18 years old and that your use of the Platform does not violate any
                applicable laws or regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">3. Buying and Selling</h2>
              <h3 className="text-xl font-medium text-amber-800 mb-2">For Sellers:</h3>
              <ul className="list-disc pl-6 mb-4 text-amber-700 space-y-2">
                <li>You must have the legal right to sell the items you list on our Platform.</li>
                <li>All items must be accurately described, including any flaws or defects.</li>
                <li>You are responsible for setting the price of your items.</li>
                <li>You must ship items within 3 business days of receiving an order.</li>
                <li>UNFILTERED charges a commission fee on each successful sale.</li>
              </ul>

              <h3 className="text-xl font-medium text-amber-800 mb-2">For Buyers:</h3>
              <ul className="list-disc pl-6 mb-4 text-amber-700 space-y-2">
                <li>You agree to pay the full amount for items you purchase.</li>
                <li>You understand that all items are secondhand and may show signs of wear.</li>
                <li>You must confirm receipt of items in a timely manner.</li>
                <li>Returns are subject to the seller's return policy and our dispute resolution process.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">4. Prohibited Items</h2>
              <p className="text-amber-700 mb-4">
                The following items are prohibited from being listed or sold on our Platform:
              </p>
              <ul className="list-disc pl-6 mb-4 text-amber-700 space-y-2">
                <li>Counterfeit or replica items</li>
                <li>Stolen merchandise</li>
                <li>Items that infringe on intellectual property rights</li>
                <li>Damaged items that are unwearable</li>
                <li>Items with offensive or inappropriate content</li>
                <li>Any items prohibited by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">5. Fees and Payments</h2>
              <p className="text-amber-700 mb-4">
                UNFILTERED charges a commission fee on each successful sale. The current fee structure is available on
                our website. We reserve the right to change our fee structure at any time with notice to users.
              </p>
              <p className="text-amber-700">
                All payments are processed through our secure payment system. Sellers receive payment once the buyer
                confirms receipt and satisfaction with the item, or after a specified period if no issues are reported.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">6. Dispute Resolution</h2>
              <p className="text-amber-700">
                In the event of a dispute between buyers and sellers, UNFILTERED will make reasonable efforts to mediate
                and resolve the issue. We reserve the right to make final decisions regarding disputes, including
                issuing refunds or releasing payments to sellers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-amber-700">
                UNFILTERED is not responsible for the quality, safety, or legality of items sold on our Platform. We are
                not liable for any damages or losses resulting from transactions between users. Our liability is limited
                to the fees paid by users for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">8. Changes to Terms</h2>
              <p className="text-amber-700 mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
                posting the updated Terms on our Platform. Your continued use of the Platform after such changes
                constitutes your acceptance of the new Terms.
              </p>
              <p className="text-amber-700">
                If you have any questions about these Terms, please contact us at legal@unfiltered.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
