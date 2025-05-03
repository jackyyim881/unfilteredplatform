"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const slides = [
    {
      bg: "from-[#F9E8D9] to-[#FFF5E9]",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-12 py-8 md:py-16 px-4">
          <div className="flex-1 flex flex-col items-start">
            <span className="text-amber-600 font-medium mb-2 tracking-wide">
              STYLE GUIDE
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 leading-tight">
              What's your fashion <span className="italic">personality</span>?
            </h1>
            <p className="text-amber-700 mb-8 text-lg">
              Unlock your unique style code and discover outfits that speak to
              you
            </p>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-full">
              Start Quiz
            </Button>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-amber-100 opacity-60"></div>
            <Image
              src="/home/dress-guide.png"
              alt="Fashion Personality Quiz"
              className="object-contain z-10 drop-shadow-lg"
              width={500}
              height={400}
            />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#D9E9D8] opacity-70"></div>
          </div>
        </div>
      ),
    },
    {
      bg: "from-[#D9E9D8] to-[#EAF5E9]",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-12 py-8 md:py-16 px-4">
          <div className="flex-1 flex flex-col items-start">
            <span className="text-amber-600 font-medium mb-2 tracking-wide">
              SUSTAINABLE FASHION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 leading-tight">
              Pass your style <span className="italic">forward</span>
            </h2>
            <p className="text-amber-700 mb-8 text-lg">
              Give your pre-loved clothes a second life and contribute to a more
              sustainable future
            </p>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-full">
              Sell Now
            </Button>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#F9E8D9] opacity-70"></div>
            <Image
              src="/home/sell_banner.png"
              alt="Sustainable Fashion"
              className="object-contain z-10 drop-shadow-lg"
              width={500}
              height={400}
            />
          </div>
        </div>
      ),
    },
    {
      bg: "from-[#D3E5EB] to-[#EAF5F9]",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-12 py-8 md:py-16 px-4">
          <div className="flex-1 flex flex-col items-start">
            <span className="text-amber-600 font-medium mb-2 tracking-wide">
              CURATED COLLECTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 leading-tight">
              Discover <span className="italic">unique</span> style
            </h2>
            <p className="text-amber-700 mb-8 text-lg">
              Find one-of-a-kind pieces that express your personality and stand
              out from the crowd
            </p>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-full">
              Shop Now
            </Button>
          </div>
          <div className="flex-1 flex justify-center relative">
            <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#F9E8D9] opacity-60"></div>
            <Image
              src="/home/shop_banner.png"
              alt="Curated Collections"
              className="object-contain z-10 drop-shadow-lg"
              width={500}
              height={400}
            />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#D9E9D8] opacity-70"></div>
          </div>
        </div>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, slides.length]);

  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Hero carousel section */}
      <section className="w-full overflow-hidden relative">
        <div className="max-w-7xl mt-[100px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`w-full rounded-b-3xl md:rounded-b-[4rem] shadow-lg bg-gradient-to-br ${slides[current].bg}`}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              {slides[current].content}
              {/* Navigation dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all ${
                      current === idx
                        ? "bg-amber-800 w-8"
                        : "bg-amber-200 hover:bg-amber-300"
                    }`}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <main className="container mx-auto px-4 py-20">
        {/* Feature grid section */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
              <span className="border-b-4 border-amber-300 pb-2">
                Featured Collections
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left large box */}
              <div className="bg-gradient-to-br from-[#F9E8D9] to-[#FFF5E9] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all group">
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-amber-800 mb-3">
                    Style Quiz
                  </h3>
                  <p className="text-amber-700 mb-6">
                    Discover which fashion personality best represents your
                    unique style.
                  </p>
                  <div className="flex-grow flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src="/home/background_1.png"
                      alt="Dress Guide"
                      className="object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                      width={700}
                      height={400}
                    />
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white"
                  >
                    <a
                      href="https://ooopenlab.cc/quiz/unfiltered"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take the Quiz
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right stacked boxes */}
              <div className="flex flex-col gap-8">
                <div className="bg-gradient-to-br from-[#D9E9D8] to-[#EAF5E9] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all group">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-amber-800 mb-3">
                      Sell Preloved
                    </h3>
                    <p className="text-amber-700 mb-4">
                      Give your clothes a second life and earn while doing good.
                    </p>
                    <div className="flex-grow flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src="/home/sell_banner.png"
                        alt="Sell Clothes"
                        className="object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                        width={700}
                        height={300}
                      />
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="mt-5 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white"
                    >
                      <Link href="/sell">Sell Now</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D3E5EB] to-[#EAF5F9] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all group">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-amber-800 mb-3">
                      Shop Unique
                    </h3>
                    <p className="text-amber-700 mb-4">
                      Find one-of-a-kind pieces that match your personality.
                    </p>
                    <div className="flex-grow flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src="/home/shop_banner.png"
                        alt="Shop Clothes"
                        className="object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                        width={700}
                        height={300}
                      />
                    </div>
                    <Button
                      variant="outline"
                      asChild
                      className="mt-5 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white"
                    >
                      <Link href="/shop">Shop Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dressing guide section */}
        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-[url('/home/wave-pattern.svg')] opacity-5 z-0"></div>
          <div className="bg-gradient-to-br from-[#D3E5EB] to-[#EAF5F9] py-16 rounded-3xl shadow-lg relative z-10">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-amber-900 mb-2 text-center">
                Dressing Guide
              </h2>
              <p className="text-amber-700 text-center max-w-2xl mx-auto mb-12">
                Expert tips for looking your best, no matter your style or body
                type
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="rounded-full bg-[#F9E8D9] w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9A3412"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.38 3.46L16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">
                    Dressing Tips
                  </h3>
                  <p className="text-amber-700 text-center">
                    Tips for dressing with a "wide top and narrow bottom" or
                    "narrow top and wide bottom" to balance your silhouette.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="rounded-full bg-[#F9E8D9] w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9A3412"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2v20M12 12h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">
                    Color Coordination
                  </h3>
                  <p className="text-amber-700 text-center">
                    Achieve perfect harmony by limiting your outfit to three
                    complementary colors for a balanced, cohesive look.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="rounded-full bg-[#F9E8D9] w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9A3412"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM10 9V7M14 9V7M8 13h8"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">
                    Pattern Play
                  </h3>
                  <p className="text-amber-700 text-center">
                    Express your unique style with plaid, prints, and patterns
                    to create retro, personalized looks that showcase your
                    personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Expert Recommendations section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
              <span className="border-b-4 border-amber-300 pb-2">
                Expert Recommendations
              </span>
            </h2>
            <p className="text-amber-700 text-center max-w-2xl mx-auto mb-12">
              Curated selections from our fashion specialists
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Eric's Recommendation */}
              <div className="bg-gradient-to-br from-[#F9E8D9] to-[#FFF5E9] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-bold text-xl">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900">Eric</h3>
                    <p className="text-sm text-amber-600">
                      Sustainable fashion specialist
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-amber-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className="text-amber-300"
                      />
                    </svg>
                    <span className="ml-2 text-amber-800 font-medium">
                      4.5/5
                    </span>
                  </div>
                </div>
                <p className="text-amber-700 italic">
                  "The perfect balance of comfort and style, this piece is a
                  must-have for any wardrobe."
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-amber-800 font-medium">Eric's Pick</p>
                </div>
              </div>

              {/* Alex's Recommendation */}
              <div className="bg-gradient-to-br from-[#D9E9D8] to-[#EAF5E9] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-bold text-xl">A</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900">Alex</h3>
                    <p className="text-sm text-amber-600">Personal stylist</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-amber-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className="text-amber-300"
                      />
                    </svg>
                    <span className="ml-2 text-amber-800 font-medium">
                      4.5/5
                    </span>
                  </div>
                </div>
                <p className="text-amber-700 italic">
                  "Versatile and timeless, this design works for both casual and
                  semi-formal occasions."
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-amber-800 font-medium">Alex's Choice</p>
                </div>
              </div>

              {/* Emma's Recommendation */}
              <div className="bg-gradient-to-br from-[#D3E5EB] to-[#EAF5F9] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-800 font-bold text-xl">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900">Emma</h3>
                    <p className="text-sm text-amber-600">Fashion blogger</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-amber-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className="text-amber-300"
                      />
                    </svg>
                    <span className="ml-2 text-amber-800 font-medium">
                      4.5/5
                    </span>
                  </div>
                </div>
                <p className="text-amber-700 italic">
                  "I love how this piece can be layered in so many different
                  ways for any season."
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-amber-800 font-medium">Emma's Favorite</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full">
                See More Recommendations
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
