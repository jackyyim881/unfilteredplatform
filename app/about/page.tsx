import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/test-04.jpg-51ePzTVBNBAsSIogYk0cEQIxnLfZLC.jpeg"
          alt="About page background with clothing items"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-rose-400 mb-6">UNFILTERED</h1>
              <p className="text-2xl text-amber-800 italic mb-8">Real.Raw.You</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Our Story</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-amber-800 mb-6">
                    UNFILTERED was born from a reflection on contemporary fashion culture. In a world saturated with
                    fast fashion and homogeneous styling, we saw too many people trapped on the treadmill of trends,
                    forgetting the original purpose of fashion: to express your authentic self.
                  </p>
                  <p className="text-amber-800">
                    We created this platform with a simple intention: to help everyone find their most genuine, raw, and
                    true-to-essence style of expression.
                  </p>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion_story-h5uhQsL7HrWglyINcEegIZoKad5rwE.png"
                    alt="Colorful clothing rack with sustainable fashion options"
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Beliefs Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Our Beliefs</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happily_wear_fashi_image_.jpg-XhokqZpx1HUlsz1dygzdMoXb0ZQyhn.jpeg"
                    alt="Person expressing joy in sustainable fashion choices"
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <p className="text-amber-800 italic mb-6 text-lg">
                    At UNFILTERED, we believe: There is no "right" style, only the most genuine you.
                  </p>
                  <p className="text-amber-800 mb-6">
                    One piece that accompanies you for years outweighs ten seasonal trend items. The most enduring style
                    comes from understanding yourself, not following trends.
                  </p>
                  <p className="text-amber-800">
                    Choosing secondhand is not just a style decision; it&apos;s a commitment to our planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why UNFILTERED Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Why UNFILTERED?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-amber-800 mb-6">
                    UNFILTERED isn&apos;t just a secondhand fashion platform; it&apos;s a journey of style awakening.
                    Our proprietary psychological assessment helps you see beyond surface preferences to uncover your
                    true style inclinations.
                  </p>
                  <p className="text-amber-800 mb-6">
                    We highlight materials, craftsmanship, and durability, making quality the core of your choices.
                    Here, every style expression is respected, with no distinction between mainstream and alternative.
                  </p>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman_happily_hold_image_-09.jpg-KGBInpWoNtxhbflkbIfQSU67U5xJPR.jpeg"
                    alt="Person with authentic style and sustainable accessories"
                    width={500}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-md text-lg">
                  <Link href="/test">Take the Style Quiz</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
