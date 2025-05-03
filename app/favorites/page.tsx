import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock favorite items
const favoriteItems = [
  {
    id: 1,
    name: "White Shoes",
    price: 200,
    category: "Shoes",
    condition: "New",
  },
  {
    id: 2,
    name: "Vintage Dress",
    price: 350,
    category: "Dress",
    condition: "Like New",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 280,
    category: "Jacket",
    condition: "Good",
  },
  { id: 4, name: "Leather Bag", price: 420, category: "Bag", condition: "New" },
];

export default function FavoritesPage() {
  return (
    <div className="bg-[#FFF5E9] min-h-screen mt-10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl text-amber-800 mb-6 text-center">
            My Favorites
          </h1>

          {favoriteItems.length > 0 ? (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 divide-y">
                {favoriteItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center">
                    <div className="w-20 h-20 relative rounded-md overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <Link href={`/shop/product/${item.id}`}>
                        <h3 className="text-lg font-medium text-amber-800 hover:text-amber-600">
                          {item.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-sm text-amber-600 mt-1">
                        <span className="mr-2">{item.category}</span>
                        <span className="text-gray-500">{item.condition}</span>
                      </div>
                      <p className="text-amber-800 font-bold mt-1">
                        HK${item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="bg-amber-700 hover:bg-amber-800 text-white"
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-12 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-16 h-16 text-amber-300" />
              </div>
              <h2 className="text-2xl text-amber-800 mb-2">
                Your favorites list is empty
              </h2>
              <p className="text-amber-700 mb-6">
                Browse our collection and add items you love to your favorites
                list.
              </p>
              <Button
                asChild
                className="bg-amber-700 hover:bg-amber-800 text-white"
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
