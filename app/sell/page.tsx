import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SellPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">Pass Your Style Forward</h1>
                <p className="text-lg text-amber-700 mb-8">
                  Give your pre-loved fashion items a second life while making some extra cash. Our simple selling
                  process makes it easy to list your items.
                </p>
                <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-md text-lg">
                  <Link href="/sell/create">Start Selling Now</Link>
                </Button>
              </div>
              <div className="relative aspect-square">
                <Image src="/images/sell-illustration.png" alt="Sell your items" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-amber-800 mb-12 text-center">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800">1</span>
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-3">Create Your Listing</h3>
                <p className="text-amber-700">
                  Take clear photos of your item and fill in the details. The more information you provide, the faster
                  your item will sell.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800">2</span>
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-3">Connect with Buyers</h3>
                <p className="text-amber-700">
                  Once your listing is live, interested buyers can contact you through our secure messaging system.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800">3</span>
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-3">Complete the Sale</h3>
                <p className="text-amber-700">
                  Arrange delivery or meetup with the buyer. Once the transaction is complete, you'll receive your
                  payment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-amber-800 mb-12 text-center">Why Sell with UNFILTERED</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Low Commission Fees</h3>
                  <p className="text-amber-700">
                    We only take a 10% commission on each sale, lower than most secondhand platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Targeted Audience</h3>
                  <p className="text-amber-700">
                    Reach fashion-conscious buyers who appreciate unique, pre-loved items.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Secure Transactions</h3>
                  <p className="text-amber-700">
                    Our platform ensures safe and secure transactions between buyers and sellers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-amber-800 mb-2">Sustainable Fashion</h3>
                  <p className="text-amber-700">
                    Be part of the solution by extending the lifecycle of clothing and reducing waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl text-amber-800 mb-6">Ready to Sell?</h2>
              <p className="text-lg text-amber-700 mb-8">
                Join thousands of sellers who have successfully sold their pre-loved fashion items on UNFILTERED.
              </p>
              <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-md text-lg">
                <Link href="/sell/create">Create Your Listing</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
