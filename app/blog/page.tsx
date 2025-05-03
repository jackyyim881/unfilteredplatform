import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Banner from "@/components/banner";

// Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: "How to Build a Sustainable Wardrobe",
    excerpt:
      "Discover practical tips for creating a wardrobe that's both stylish and environmentally friendly.",
    date: "May 15, 2023",
    category: "Sustainable Fashion",
    image: "/Blog/blog1.png",
    author: "Emma Chen",
  },
  {
    id: 2,
    title: "The Psychology Behind Personal Style",
    excerpt:
      "Understanding how your personality influences your fashion choices and how to embrace your authentic style.",
    date: "April 28, 2023",
    category: "Style Psychology",
    image: "/Blog/blog2.png",
    author: "Michael Wong",
  },
  {
    id: 3,
    title: "Secondhand Shopping: Tips and Tricks",
    excerpt:
      "Learn how to find hidden gems and quality pieces when shopping for pre-loved fashion items.",
    date: "April 10, 2023",
    category: "Shopping Guide",
    image: "/Blog/blog3.png",
    author: "Sarah Johnson",
  },
  {
    id: 4,
    title: "The History of Sustainable Fashion",
    excerpt:
      "Exploring the evolution of eco-friendly fashion from niche movement to mainstream practice.",
    date: "March 22, 2023",
    category: "Fashion History",
    image: "/Blog/blog4.png",
    author: "David Lee",
  },
  {
    id: 5,
    title: "Caring for Your Clothes: Extend Their Lifespan",
    excerpt:
      "Simple techniques to maintain your garments and keep them looking great for years to come.",
    date: "March 5, 2023",
    category: "Clothing Care",
    image: "/Blog/blog5.png",
    author: "Lisa Zhang",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        <Banner
          title="UNFILTERED Blog"
          subtitle="Insights, tips, and stories about sustainable fashion and personal style"
          ctaText="Subscribe"
          ctaLink="/blog/subscribe"
          imageSrc="/images/blog-banner.jpg"
        />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-800 mb-8">
              Latest Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={
                          post.image || "/placeholder.svg?height=300&width=400"
                        }
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-amber-600 mb-2">
                      <span>{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold text-amber-800 mb-2 hover:text-amber-600">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-amber-700 mb-4">{post.excerpt}</p>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-amber-100 mr-3"></div>
                      <span className="text-sm text-amber-800">
                        {post.author}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
