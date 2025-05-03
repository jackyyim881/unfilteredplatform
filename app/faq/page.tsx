import Banner from "@/components/banner"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ categories and questions
const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    questions: [
      {
        id: "what-is-unfiltered",
        question: "What is UNFILTERED?",
        answer:
          "UNFILTERED is a secondhand fashion platform designed to help you discover your authentic style beyond trends. We connect sellers of pre-loved quality items with buyers who appreciate sustainable fashion choices.",
      },
      {
        id: "how-different",
        question: "How is UNFILTERED different from other secondhand platforms?",
        answer:
          "Unlike other platforms, UNFILTERED focuses on helping users discover their personal style through our proprietary style quiz and curated recommendations. We emphasize quality, durability, and authentic self-expression rather than following trends.",
      },
      {
        id: "shipping",
        question: "How does shipping work?",
        answer:
          "Sellers are responsible for shipping items to buyers within 3 business days of purchase. We recommend using tracked shipping methods. Once the buyer confirms receipt and satisfaction with the item, payment is released to the seller.",
      },
    ],
  },
  {
    id: "buying",
    title: "Buying on UNFILTERED",
    questions: [
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards, PayPal, and Apple Pay. All transactions are processed securely through our payment processor.",
      },
      {
        id: "returns",
        question: "What is your return policy?",
        answer:
          "Since we deal with individual sellers, returns are handled on a case-by-case basis. If an item arrives damaged or significantly different from its description, please contact us within 48 hours of receipt with photos for our team to review.",
      },
      {
        id: "style-quiz",
        question: "How does the style quiz work?",
        answer:
          "Our style quiz uses psychological principles to help identify your authentic style preferences beyond surface-level trends. After completing the quiz, you'll receive personalized recommendations tailored to your unique style personality.",
      },
    ],
  },
  {
    id: "selling",
    title: "Selling on UNFILTERED",
    questions: [
      {
        id: "how-to-sell",
        question: "How do I start selling on UNFILTERED?",
        answer:
          "To start selling, create an account, take clear photos of your items, write detailed descriptions including measurements and condition, set your price, and list your items. Our team reviews all listings to ensure they meet our quality standards before they go live.",
      },
      {
        id: "fees",
        question: "What fees do you charge sellers?",
        answer:
          "We charge a 10% commission on successful sales, plus a small listing fee of HK$5 per item. There are no monthly subscription fees or hidden charges.",
      },
      {
        id: "what-can-sell",
        question: "What items can I sell on UNFILTERED?",
        answer:
          "You can sell quality secondhand clothing, shoes, and accessories in good condition. We do not accept items with significant damage, stains, or odors. All items should be clean and ready to wear.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Privacy",
    questions: [
      {
        id: "create-account",
        question: "How do I create an account?",
        answer:
          "You can create an account by clicking the 'Sign Up' button and providing your email address, creating a password, and filling in your profile information. Verification of your email address is required to complete registration.",
      },
      {
        id: "data-privacy",
        question: "How do you protect my personal data?",
        answer:
          "We take data privacy seriously and comply with all relevant data protection regulations. We use encryption for sensitive information and never share your personal data with third parties without your consent. Please see our Privacy Policy for more details.",
      },
      {
        id: "delete-account",
        question: "How can I delete my account?",
        answer:
          "You can request account deletion in your account settings. Please note that some information may be retained for legal and business purposes, but your personal profile will be removed from our platform.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        <Banner
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about UNFILTERED"
          ctaText="Contact Us"
          ctaLink="/contact"
          imageSrc="/images/faq-banner.jpg"
          height="small"
        />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-bold text-amber-800 mb-6">{category.title}</h2>

                <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm p-4">
                  {category.questions.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="text-amber-800 font-medium">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-amber-700">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="bg-amber-50 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Still have questions?</h3>
              <p className="text-amber-700 mb-4">
                If you couldn't find the answer to your question, please feel free to reach out to our customer support
                team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:support@unfiltered.com" className="text-amber-800 underline">
                  support@unfiltered.com
                </a>
                <span className="hidden sm:inline text-amber-700">|</span>
                <a href="tel:+85212345678" className="text-amber-800 underline">
                  +852 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
