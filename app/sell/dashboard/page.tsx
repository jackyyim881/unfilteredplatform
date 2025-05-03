"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, MessageSquare } from "lucide-react"

export default function SellerDashboardPage() {
  const [activeTab, setActiveTab] = useState("active")

  // Mock data for listings
  const activeListings = [
    {
      id: "1",
      title: "Vintage Levi's 501 Jeans",
      price: "250",
      image: "/placeholder.svg?height=200&width=200",
      views: 24,
      likes: 5,
      date: "2023-05-01",
    },
    {
      id: "2",
      title: "Zara Floral Summer Dress",
      price: "180",
      image: "/placeholder.svg?height=200&width=200",
      views: 18,
      likes: 3,
      date: "2023-05-03",
    },
  ]

  const soldListings = [
    {
      id: "3",
      title: "Nike Air Max Sneakers",
      price: "350",
      image: "/placeholder.svg?height=200&width=200",
      soldDate: "2023-04-15",
      buyer: "user123",
    },
  ]

  const draftListings = [
    {
      id: "4",
      title: "Unbranded Wool Sweater",
      lastEdited: "2023-05-02",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Mock data for messages
  const messages = [
    {
      id: "1",
      from: "buyer456",
      subject: "Vintage Levi's 501 Jeans",
      preview: "Hi, is this still available? Would you...",
      date: "2023-05-04",
      unread: true,
    },
    {
      id: "2",
      from: "fashionlover22",
      subject: "Zara Floral Summer Dress",
      preview: "Hello! I'm interested in your dress. Can you...",
      date: "2023-05-03",
      unread: false,
    },
  ]

  // Mock data for sales summary
  const salesSummary = {
    totalSales: 1,
    totalEarnings: "315.00",
    pendingPayouts: "0.00",
    averageRating: 4.8,
  }

  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      {/* Add padding to account for fixed navbar */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-amber-800">Seller Dashboard</h1>
                <p className="text-amber-700">Manage your listings and track your sales</p>
              </div>
              <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white">
                <Link href="/sell/create">Create New Listing</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-amber-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-amber-800 mb-1">Active Listings</h3>
                  <p className="text-2xl font-bold text-amber-700">{activeListings.length}</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-amber-800 mb-1">Total Sales</h3>
                  <p className="text-2xl font-bold text-amber-700">{salesSummary.totalSales}</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-amber-800 mb-1">Total Earnings</h3>
                  <p className="text-2xl font-bold text-amber-700">HK${salesSummary.totalEarnings}</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-amber-200">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-amber-800 mb-1">Seller Rating</h3>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-amber-700 mr-2">{salesSummary.averageRating}</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-amber-500">
                          {star <= Math.floor(salesSummary.averageRating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-amber-800 mb-6">Your Listings</h2>

              <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="active">Active ({activeListings.length})</TabsTrigger>
                  <TabsTrigger value="sold">Sold ({soldListings.length})</TabsTrigger>
                  <TabsTrigger value="drafts">Drafts ({draftListings.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-6">
                  {activeListings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeListings.map((listing) => (
                        <div key={listing.id} className="border border-amber-200 rounded-lg p-4 flex gap-4">
                          <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-amber-800">{listing.title}</h3>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
                            </div>
                            <p className="text-amber-700 font-medium">HK${listing.price}</p>
                            <div className="flex text-sm text-amber-600 mt-1">
                              <span className="mr-3">{listing.views} views</span>
                              <span>{listing.likes} likes</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="h-8 border-amber-300 text-amber-800"
                              >
                                <Link href={`/sell/edit/${listing.id}`}>
                                  <Pencil className="w-3 h-3 mr-1" />
                                  Edit
                                </Link>
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 border-red-300 text-red-800">
                                <Trash2 className="w-3 h-3 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-amber-700 mb-4">You don't have any active listings yet.</p>
                      <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white">
                        <Link href="/sell/create">Create Your First Listing</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="sold" className="space-y-6">
                  {soldListings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {soldListings.map((listing) => (
                        <div key={listing.id} className="border border-amber-200 rounded-lg p-4 flex gap-4">
                          <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-amber-800">{listing.title}</h3>
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Sold</Badge>
                            </div>
                            <p className="text-amber-700 font-medium">HK${listing.price}</p>
                            <div className="flex text-sm text-amber-600 mt-1">
                              <span className="mr-3">Sold on {listing.soldDate}</span>
                              <span>to {listing.buyer}</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="h-8 border-amber-300 text-amber-800"
                              >
                                <Link href={`/messages/${listing.buyer}`}>
                                  <MessageSquare className="w-3 h-3 mr-1" />
                                  Contact Buyer
                                </Link>
                              </Button>
                              <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="h-8 border-amber-300 text-amber-800"
                              >
                                <Link href={`/sell/relist/${listing.id}`}>Relist Similar</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-amber-700">You haven't sold any items yet.</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="drafts" className="space-y-6">
                  {draftListings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {draftListings.map((listing) => (
                        <div key={listing.id} className="border border-amber-200 rounded-lg p-4 flex gap-4">
                          <div className="w-24 h-24 relative flex-shrink-0">
                            <Image
                              src={listing.image || "/placeholder.svg"}
                              alt={listing.title}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium text-amber-800">{listing.title}</h3>
                              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Draft</Badge>
                            </div>
                            <div className="text-sm text-amber-600 mt-1">
                              <span>Last edited on {listing.lastEdited}</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                              <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="h-8 border-amber-300 text-amber-800"
                              >
                                <Link href={`/sell/edit/${listing.id}`}>
                                  <Pencil className="w-3 h-3 mr-1" />
                                  Continue Editing
                                </Link>
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 border-red-300 text-red-800">
                                <Trash2 className="w-3 h-3 mr-1" />
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-amber-700">You don't have any draft listings.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-amber-800 mb-6">Messages</h2>

              {messages.length > 0 ? (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="border border-amber-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <h3 className="font-medium text-amber-800">
                            {message.from}
                            {message.unread && <Badge className="ml-2 bg-amber-100 text-amber-800">New</Badge>}
                          </h3>
                        </div>
                        <span className="text-sm text-amber-600">{message.date}</span>
                      </div>
                      <p className="text-amber-700 font-medium mt-1">Re: {message.subject}</p>
                      <p className="text-amber-600 mt-1">{message.preview}</p>
                      <div className="mt-2">
                        <Button asChild size="sm" className="h-8 bg-amber-700 hover:bg-amber-800 text-white">
                          <Link href={`/messages/${message.id}`}>View Conversation</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-amber-700">You don't have any messages yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
