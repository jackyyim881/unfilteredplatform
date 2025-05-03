"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Import the same blog posts data
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
    content: `
      <p>Creating a sustainable wardrobe is an important step toward reducing your environmental footprint while still expressing your personal style. Here are some practical tips to help you build a wardrobe that's both eco-friendly and stylish.</p>
      
      <h2>1. Invest in Quality, Not Quantity</h2>
      <p>The foundation of a sustainable wardrobe is buying fewer, but higher-quality pieces that will last longer. Look for well-constructed garments made from durable materials. While these items might cost more initially, the cost-per-wear is often lower in the long run.</p>
      
      <h2>2. Choose Sustainable Materials</h2>
      <p>Opt for clothes made from organic, recycled, or low-impact materials like organic cotton, hemp, linen, Tencel, or recycled polyester. These materials require fewer resources to produce and often have a smaller environmental footprint.</p>
      
      <h2>3. Support Ethical Brands</h2>
      <p>Research and support brands that prioritize fair labor practices, transparency, and environmental sustainability. Many brands now share information about their supply chains and production processes.</p>
      
      <h2>4. Embrace Secondhand Shopping</h2>
      <p>Thrift stores, vintage shops, and online resale platforms are treasure troves of unique pieces. Buying secondhand extends the lifecycle of clothes and prevents them from ending up in landfills.</p>
      
      <h2>5. Care for Your Clothes Properly</h2>
      <p>Extend the lifespan of your garments by following care instructions, washing in cold water, air-drying when possible, and repairing items when they show signs of wear.</p>
      
      <p>Remember, building a sustainable wardrobe is a journey, not an overnight transformation. Start with small changes and gradually build a collection that reflects your values and style.</p>
    `,
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
    content: `
      <p>Your fashion choices are deeply connected to your psychology and can reveal aspects of your personality. Understanding this connection can help you develop a style that authentically represents who you are.</p>
      
      <h2>The Connection Between Personality and Fashion</h2>
      <p>Research has shown that our clothing choices often reflect our personality traits. For example, people who prefer bright colors might be more extroverted, while those who gravitate toward minimalist styles might value simplicity and functionality.</p>
      
      <h2>How Mood Affects Style</h2>
      <p>Have you noticed that you reach for different clothes depending on your mood? This phenomenon, called "enclothed cognition," suggests that the clothes we wear can affect our psychological processes and performance.</p>
      
      <h2>Finding Your Authentic Style</h2>
      <p>Developing an authentic personal style means aligning your fashion choices with your true self. This process involves self-reflection, experimentation, and confidence in expressing your identity through your wardrobe.</p>
      
      <h2>Breaking Fashion Rules</h2>
      <p>Many people feel constrained by fashion "rules." Understanding that these rules are arbitrary can be liberating and allow you to make choices based on what feels right for you rather than external expectations.</p>
      
      <p>By embracing the psychological aspects of fashion, you can develop a personal style that not only makes you look good but also feels authentically you.</p>
    `,
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
    content: `
      <p>Secondhand shopping can be a thrilling treasure hunt that's good for both your wallet and the planet. Here are some tips to help you find quality pre-loved pieces.</p>
      
      <h2>Know Where to Look</h2>
      <p>Different secondhand stores specialize in different types of clothing. Familiarize yourself with local thrift stores, consignment shops, vintage boutiques, and online platforms to know where to look for specific items.</p>
      
      <h2>Check for Quality</h2>
      <p>Always inspect items thoroughly for stains, tears, missing buttons, or broken zippers. Pay special attention to high-stress areas like underarms, collars, and hems. Hold garments up to the light to spot thin areas or holes.</p>
      
      <h2>Look Beyond Size Labels</h2>
      <p>Sizing has changed over time, and different brands have different sizing standards. Bring a soft measuring tape and know your measurements to find pieces that will fit, regardless of the size on the label.</p>
      
      <h2>Visit Often</h2>
      <p>Inventory at secondhand stores changes constantly. Regular visits increase your chances of finding great pieces. Many stores also have special discount days or put out new merchandise on specific days of the week.</p>
      
      <h2>Be Open-Minded</h2>
      <p>Some of the best secondhand finds are items you wouldn't have considered otherwise. Be willing to try different styles, colors, and silhouettes—you might discover a new favorite look!</p>
      
      <p>With patience and these strategies, you can build an impressive wardrobe of unique, affordable, and sustainable secondhand finds.</p>
    `,
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
    content: `
      <p>Sustainable fashion might seem like a recent trend, but its roots go back further than you might expect. This article explores how eco-friendly fashion has evolved over the decades.</p>
      
      <h2>Early Roots: Pre-Industrial Era</h2>
      <p>Before the industrial revolution, clothing was inherently more sustainable. Garments were handmade from natural materials, designed to last, and often passed down through generations. Repairing and repurposing clothing was standard practice.</p>
      
      <h2>The Rise of Fast Fashion</h2>
      <p>The late 20th century saw the emergence of "fast fashion"—inexpensive clothing produced rapidly in response to the latest trends. This model prioritized speed and low costs over environmental considerations and labor conditions.</p>
      
      <h2>The Environmental Awakening</h2>
      <p>In the 1990s, growing awareness of environmental issues began to influence the fashion industry. Pioneering designers like Katharine Hamnett and brands like Patagonia started incorporating eco-friendly practices into their business models.</p>
      
      <h2>Sustainable Fashion Goes Mainstream</h2>
      <p>The 2010s marked a turning point as sustainable fashion gained wider acceptance. Major brands began implementing sustainability initiatives, and new technologies enabled more eco-friendly production methods.</p>
      
      <h2>The Future of Sustainable Fashion</h2>
      <p>Today, sustainable fashion continues to evolve with innovations in recycled materials, circular business models, and transparency tools. Consumer demand for ethical and eco-friendly options is pushing the entire industry toward more sustainable practices.</p>
      
      <p>Understanding the history of sustainable fashion helps us appreciate how far we've come and the challenges that still lie ahead in creating a truly sustainable fashion ecosystem.</p>
    `,
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
    content: `
      <p>Proper garment care is one of the most effective ways to build a more sustainable wardrobe. By extending the life of your clothes, you reduce waste and get more value from your purchases.</p>
      
      <h2>Washing Wisely</h2>
      <p>Overwashing can wear out fabrics quickly. Only wash clothes when they're actually dirty, not just after a single wear. Use cold water when possible, which saves energy and is gentler on fabrics. Turn garments inside out to protect the outer surface.</p>
      
      <h2>Drying Techniques</h2>
      <p>Air-drying is gentler on clothes than machine drying. If you must use a dryer, use a low heat setting and remove clothes while slightly damp to prevent over-drying. Hang knits flat to dry to prevent stretching.</p>
      
      <h2>Storage Solutions</h2>
      <p>Store clothes properly between wears. Use padded hangers for delicate items, fold heavy knits to prevent stretching, and keep seasonal items in breathable garment bags. Always make sure clothes are clean before storing for extended periods.</p>
      
      <h2>Prompt Repairs</h2>
      <p>Address small issues before they become big problems. Learn basic mending techniques or find a good tailor for more complex repairs. Keep a small sewing kit handy for quick fixes like loose buttons or small tears.</p>
      
      <h2>Shoe Care</h2>
      <p>Clean shoes regularly and use protective sprays appropriate for the material. Store with shoe trees to maintain shape, and rotate pairs to allow them time to air out between wears.</p>
      
      <p>By adopting these simple care practices, you can enjoy your favorite garments for years longer and reduce your fashion footprint.</p>
    `,
  },
];

// Function to get a blog post by ID
function getBlogPostById(id: string): any {
  return blogPosts.find((post) => post.id === Number(id)) || null;
}

// Function to get related blog posts (excluding the current one)
function getRelatedPosts(
  currentId: string,
  category: string,
  limit: number = 3
): any[] {
  return blogPosts
    .filter(
      (post) => post.id !== Number(currentId) && post.category === category
    )
    .slice(0, limit);
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the blog post by ID
    const foundPost = getBlogPostById(params.id);

    if (foundPost) {
      setPost(foundPost);
      // Get related posts from the same category
      setRelatedPosts(getRelatedPosts(params.id, foundPost.category));
    }

    setIsLoading(false);
  }, [params.id]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-[#FFF5E9] min-h-screen pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-amber-100 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-amber-100 rounded w-1/2 mb-8"></div>
              <div className="aspect-[16/9] bg-amber-100 rounded-lg mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-amber-100 rounded w-full"></div>
                <div className="h-4 bg-amber-100 rounded w-full"></div>
                <div className="h-4 bg-amber-100 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show 404 if post not found
  if (!post) {
    return (
      <div className="bg-[#FFF5E9] min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-amber-800 mb-4">
            Article Not Found
          </h1>
          <p className="text-amber-700 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF5E9] min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to articles
          </Link>

          {/* Article header */}
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
            {post.title}
          </h1>

          {/* Meta information */}
          <div className="flex flex-wrap items-center text-sm text-amber-600 mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>{post.category}</span>
            </div>
          </div>

          {/* Featured image */}
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Article content */}
          <div className="prose prose-amber max-w-none text-gray-800 leading-7 bg-white rounded-lg shadow-md p-6">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <Separator className="my-12" />

          {/* Author bio */}
          <div className="flex items-start space-x-4 bg-amber-50 p-6 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-amber-200 flex-shrink-0"></div>
            <div>
              <h3 className="text-lg font-medium text-amber-800">
                {post.author}
              </h3>
              <p className="text-amber-700">
                Fashion enthusiast and sustainability advocate with a passion
                for helping others develop their personal style while making
                environmentally conscious choices.
              </p>
            </div>
          </div>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-amber-800 hover:text-amber-600">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-amber-600 mt-1">
                          {relatedPost.date}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
