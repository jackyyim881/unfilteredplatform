"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Import or define your DetectedImages type
type DetectedImages = {
  [category: string]: {
    [subCategory: string]: string[];
  };
};

// Your product images structure
const productImages: DetectedImages = {
  accessories: { "": ["/Accessories/artyom-medin-pkf0LLsa3bI-unsplash.jpg"] },
  bags: { "": ["/Bags/arno-senoner-HFE2RyC76tw-unsplash.jpg"] },
  bottoms: {
    "": [
      "/Bottoms/engin-akyurt-5raPrOhbKQo-unsplash.jpg",
      "/Bottoms/engin-akyurt-ahs1R32GG9Y-unsplash.jpg",
    ],
  },
  outerwear: {
    coat: ["/Outerwear/Coat/farshid-moghadam-W-mkmu2arD4-unsplash.jpg"],
    "cropped jackets": [
      "/Outerwear/cropped_jackets/adele-shafiee-rscULCv1DE8-unsplash.jpg",
    ],
  },
  sets: {
    "blazer sets": ["/Sets/blazer_sets/daria-pimkina-SnfgiYqQKhI-unsplash.jpg"],
    "co-ord outfits": [
      "/Sets/co-ord_outfits/nathan-van-de-graaf-Mr3VpJNkNbo-unsplash.jpg",
    ],
    "loungewear sets": ["/Sets/loungewear_sets/loungewear.jpg"],
  },
  shoes: {
    boots: ["/Shoes/boots/boots-1.jpg"],
    heels: ["/Shoes/heels/heels-1.jpg"],
    loafers: ["/Shoes/loafers/loafers-1.jpg"],
    mules: ["/Shoes/mules/mules-1.jpg"],
    sandals: ["/Shoes/sandals/sandals-1.jpg"],
    sneakers: ["/Shoes/sneakers/sneakers-1.jpg"],
  },
  tops: {
    blouses: ["/top/blouses/blouse-1.jpg"],
    camisoles: ["/top/camisoles/camisoles-1.jpg"],
    hoodies: ["/top/hoodies/hoodie-1.jpg"],
    knitwear: ["/top/knitwear/knitwear-1.jpg"],
  },
};

// Product interface
interface Product {
  id: string;
  name: string;
  originalPrice: number;
  price: number;
  category: string;
  subCategory: string;
  condition: string;
  size: string;
  tradingMethod: string;
  description: string;
  images: string[];
  postedDate: Date;
}

// Generate all products from the image structure
function getAllProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  Object.entries(productImages).forEach(([category, subCategories]) => {
    Object.entries(subCategories).forEach(([subCategory, images]) => {
      images.forEach((imagePath) => {
        // Extract name from image path
        const fileName = imagePath.split("/").pop()?.split(".")[0] || "";
        const formattedName = fileName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        // Generate random price
        const price = Math.floor(Math.random() * 500) + 100;

        // Generate random size
        const sizes = ["XS", "S", "M", "L", "XL"];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

        // Generate random condition
        const conditions = ["New", "Like New", "Good", "Fair"];
        const randomCondition =
          conditions[Math.floor(Math.random() * conditions.length)];

        // Generate random posted date (within last 30 days)
        const postedDate = new Date();
        postedDate.setDate(
          postedDate.getDate() - Math.floor(Math.random() * 30)
        );

        products.push({
          id: id.toString(),
          name:
            formattedName ||
            `${category.charAt(0).toUpperCase() + category.slice(1)} Item`,
          originalPrice: Math.round(price * 1.2), // 20% higher original price
          price: price,
          category: category.charAt(0).toUpperCase() + category.slice(1),
          subCategory: subCategory || "",
          condition: randomCondition,
          size: randomSize,
          tradingMethod: "Meet in person or delivery",
          description: `This is a beautiful ${
            formattedName || category
          } item. Perfect for any occasion and matches with many outfits.`,
          images: [imagePath], // Only one image per product
          postedDate: postedDate,
        });

        id++;
      });
    });
  });

  return products;
}

// Get a product by ID
function getProductById(id: string): Product | undefined {
  const products = getAllProducts();
  return products.find((p) => p.id === id);
}

// Get similar products (same category or subcategory)
function getSimilarProducts(productId: string, count: number = 4): Product[] {
  const products = getAllProducts();
  const currentProduct = products.find((p) => p.id === productId);

  if (!currentProduct) return [];

  return products
    .filter(
      (p) =>
        p.id !== productId &&
        (p.category.toLowerCase() === currentProduct.category.toLowerCase() ||
          p.subCategory.toLowerCase() ===
            currentProduct.subCategory.toLowerCase())
    )
    .slice(0, count);
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product and similar products
  useEffect(() => {
    // Get product by ID
    const foundProduct = getProductById(params.id);

    if (foundProduct) {
      setProduct(foundProduct);
      // Get similar products
      setSimilarProducts(getSimilarProducts(params.id));
    }

    setIsLoading(false);
  }, [params.id]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-[#FFF5E9] min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-4 bg-amber-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="aspect-square bg-amber-100 rounded-lg mb-4"></div>
                <div className="flex gap-4">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 bg-amber-100 rounded-md"
                    ></div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-8 bg-amber-100 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-amber-100 rounded w-1/4 mb-6"></div>
                <div className="h-1 bg-amber-100 rounded w-full my-6"></div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="h-4 bg-amber-100 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show error if product not found
  if (!product) {
    return (
      <div className="bg-[#FFF5E9] min-h-screen py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-amber-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-amber-700 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/shop">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              Return to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Format date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(product.postedDate);

  // Calculate days ago
  const daysAgo = Math.floor(
    (new Date().getTime() - product.postedDate.getTime()) / (1000 * 3600 * 24)
  );
  const timeAgo =
    daysAgo === 0
      ? "Today"
      : daysAgo === 1
      ? "Yesterday"
      : `${daysAgo} days ago`;

  return (
    <div className="bg-[#FFF5E9] min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-amber-800 font-serif flex items-center">
          <Link href="/shop" className="hover:underline flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Shop
          </Link>
          <span className="mx-2">•</span>
          <Link
            href={`/shop?category=${product.category.toLowerCase()}`}
            className="hover:underline"
          >
            {product.category}
          </Link>
          {product.subCategory && (
            <>
              <span className="mx-2">•</span>
              <Link
                href={`/shop?subcategory=${product.subCategory.toLowerCase()}`}
                className="hover:underline"
              >
                {product.subCategory}
              </Link>
            </>
          )}
        </div>

        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product images - with optimized image component */}
          <div>
            <div className="aspect-square relative rounded-lg overflow-hidden mb-4 bg-white">
              <Image
                src={product.images[activeImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                priority={true}
                className="object-cover"
              />
            </div>

            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 relative rounded-md overflow-hidden border-2 ${
                    activeImage === index
                      ? "border-amber-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                className="flex items-center gap-2 text-amber-800"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`w-6 h-6 ${isFavorite ? "fill-amber-800" : ""}`}
                />
                <span>Favorite</span>
              </button>

              <button className="flex items-center gap-2 text-amber-800">
                <Share2 className="w-6 h-6" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                {product.condition}
              </Badge>
              {product.subCategory && (
                <Badge
                  variant="outline"
                  className="border-amber-300 text-amber-800"
                >
                  {product.subCategory}
                </Badge>
              )}
            </div>

            <h1 className="text-2xl font-bold text-amber-800 mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-gray-500 line-through">
                HK${product.originalPrice}
              </span>
              <span className="text-xl font-bold text-amber-800">
                HK${product.price}
              </span>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded ml-2">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % OFF
              </span>
            </div>

            <Separator className="my-6" />

            <h2 className="text-lg font-medium text-amber-800 mb-4">
              Product Information
            </h2>

            <div className="grid grid-cols-2 gap-y-4 mb-8">
              <div>
                <span className="text-amber-800 font-medium">Condition</span>
              </div>
              <div>
                <span className="text-amber-800">{product.condition}</span>
              </div>

              <div>
                <span className="text-amber-800 font-medium">Size</span>
              </div>
              <div>
                <span className="text-amber-800">{product.size}</span>
              </div>

              <div>
                <span className="text-amber-800 font-medium">Categories</span>
              </div>
              <div>
                <span className="text-amber-800">{product.category}</span>
                {product.subCategory && (
                  <span className="text-amber-800">
                    {" "}
                    &gt; {product.subCategory}
                  </span>
                )}
              </div>

              <div>
                <span className="text-amber-800 font-medium">Posting time</span>
              </div>
              <div>
                <span className="text-amber-800">{timeAgo}</span>
                <span className="text-amber-600 text-xs ml-2">
                  ({formattedDate})
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-amber-800 mb-2">
                Item details
              </h2>
              <p className="text-amber-800">{product.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-medium text-amber-800 mb-2">
                Trading Methods
              </h2>
              <p className="text-amber-800">{product.tradingMethod}</p>
            </div>

            <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg">
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Similar products */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-amber-800 mb-6">
            Similar Products
          </h2>

          {similarProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href={`/shop/product/${product.id}`}>
                    <div className="aspect-square relative">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link
                      href={`/shop/product/${product.id}`}
                      className="hover:underline"
                    >
                      <h3 className="font-medium text-amber-800 mb-1">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 line-through">
                        HK${product.originalPrice}
                      </span>
                      <span className="font-bold text-amber-800">
                        HK${product.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-amber-600">
                        {product.condition}
                      </span>
                      <span className="text-sm text-amber-600">
                        {product.size}
                      </span>
                      <span className="text-sm text-amber-600">
                        {product.category}
                      </span>
                      {product.subCategory && (
                        <span className="text-sm text-amber-600">
                          {product.subCategory}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-amber-800">No similar products found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
