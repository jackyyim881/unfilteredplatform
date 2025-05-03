import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

// Mock cart items
const cartItems = [
  {
    id: 1,
    name: "White Shoes",
    price: 200,
    quantity: 1,
    category: "Shoes",
    condition: "New",
  },
  {
    id: 2,
    name: "Vintage Dress",
    price: 350,
    quantity: 1,
    category: "Dress",
    condition: "Like New",
  },
];

export default function CartPage() {
  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#FFF5E9] mt-10 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl text-amber-800 mb-6 text-center">
            Shopping Cart
          </h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 divide-y">
                    {cartItems.map((item) => (
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
                            <span className="text-gray-500">
                              {item.condition}
                            </span>
                          </div>
                          <p className="text-amber-800 font-bold mt-1">
                            HK${item.price}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center border rounded-md">
                            <button className="px-2 py-1 text-amber-800">
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-2 py-1 text-amber-800">
                              {item.quantity}
                            </span>
                            <button className="px-2 py-1 text-amber-800">
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
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
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl text-amber-800 mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-amber-800">
                      <span>Subtotal</span>
                      <span>HK${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-amber-800">
                      <span>Shipping</span>
                      <span>HK${shipping}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between text-amber-800 font-bold">
                      <span>Total</span>
                      <span>HK${total}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="coupon"
                      className="block text-amber-800 mb-2"
                    >
                      Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="coupon"
                        placeholder="Enter coupon"
                        className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      />
                      <Button
                        variant="outline"
                        className="text-amber-800 border-amber-300"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6">
                    Proceed to Checkout
                  </Button>

                  <div className="mt-4 text-center">
                    <Link
                      href="/shop"
                      className="text-amber-600 hover:underline text-sm"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-12 text-center">
              <div className="flex justify-center mb-4">
                <ShoppingCart className="w-16 h-16 text-amber-300" />
              </div>
              <h2 className="text-2xl text-amber-800 mb-2">
                Your cart is empty
              </h2>
              <p className="text-amber-700 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button
                asChild
                className="bg-amber-700 hover:bg-amber-800 text-white"
              >
                <Link href="/shop">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
