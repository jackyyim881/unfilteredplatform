"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { X, Check, Camera, Upload } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function SellYourStyle() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    category: "",
    size: "",
    color: "",
    texture: "",
    condition: "",
    price: "",
    meetInPerson: false,
    deliverByPost: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Handle form input changes
  const handleChange = (field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      [field]: value,
    })

    // Clear error for this field if it exists
    if (errors[field]) {
      const newErrors = { ...errors }
      delete newErrors[field]
      setErrors(newErrors)
    }
  }

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = [...uploadedImages]

      Array.from(e.target.files).forEach((file) => {
        if (newImages.length < 5) {
          const imageUrl = URL.createObjectURL(file)
          newImages.push(imageUrl)
        }
      })

      setUploadedImages(newImages)
    }
  }

  // Remove uploaded image
  const removeImage = (index: number) => {
    const newImages = [...uploadedImages]
    newImages.splice(index, 1)
    setUploadedImages(newImages)
  }

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: Record<string, string> = {}
    if (!formData.productName) newErrors.productName = "Product name is required"
    if (!formData.description) newErrors.description = "Description is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.size) newErrors.size = "Size is required"
    if (!formData.color) newErrors.color = "Color is required"
    if (!formData.condition) newErrors.condition = "Condition is required"
    if (!formData.price) newErrors.price = "Price is required"
    if (!formData.meetInPerson && !formData.deliverByPost) {
      newErrors.delivery = "Please select at least one delivery method"
    }
    if (uploadedImages.length === 0) {
      newErrors.images = "Please upload at least one image"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      setIsSuccess(true)

      // Redirect after a delay
      setTimeout(() => {
        router.push("/sell/dashboard")
      }, 2000)
    } catch (error) {
      setErrors({
        submit: "There was an error submitting your listing. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle save as draft
  const handleSaveAsDraft = () => {
    // Implement save as draft functionality
    alert("Saved as draft")
  }

  return (
    <div className="bg-[#F8F3EC] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#F8F3EC] border-0 shadow-none">
            <h1 className="text-2xl font-bold text-center text-amber-900 mb-8">Sell Your Style</h1>

            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-amber-800 mb-2">Listing Created Successfully!</h3>
                <p className="text-amber-700 mb-6">Your item has been listed and is now visible to potential buyers.</p>
                <Button
                  className="bg-amber-700 hover:bg-amber-800 text-white"
                  onClick={() => router.push("/sell/dashboard")}
                >
                  Go to Your Dashboard
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Upload Photos */}
                <div className="space-y-2">
                  <Label htmlFor="photos" className="text-amber-900 font-medium">
                    Upload Photos (max 5)
                  </Label>
                  <div className="border border-dashed border-amber-300 rounded-md p-4 bg-white">
                    {uploadedImages.length > 0 ? (
                      <div className="grid grid-cols-5 gap-2">
                        {uploadedImages.map((image, index) => (
                          <div key={index} className="relative aspect-square">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Uploaded image ${index + 1}`}
                              fill
                              className="object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        {uploadedImages.length < 5 && (
                          <button
                            type="button"
                            onClick={triggerFileInput}
                            className="aspect-square border border-dashed border-amber-300 rounded flex items-center justify-center bg-amber-50 hover:bg-amber-100"
                          >
                            <Camera className="w-6 h-6 text-amber-500" />
                          </button>
                        )}
                      </div>
                    ) : (
                      <div
                        className="flex flex-col items-center justify-center py-6 cursor-pointer"
                        onClick={triggerFileInput}
                      >
                        <Upload className="w-10 h-10 text-amber-400 mb-2" />
                        <p className="text-sm text-amber-700">選擇檔案 未選擇任何檔案</p>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="photos"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    {errors.images && <p className="text-red-500 text-sm mt-1">{errors.images}</p>}
                  </div>
                </div>

                {/* Product Name */}
                <div className="space-y-2">
                  <Label htmlFor="productName" className="text-amber-900 font-medium">
                    Product Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="productName"
                    placeholder="e.g. White Linen Shirt"
                    className="border-amber-200 focus:border-amber-500 bg-white"
                    value={formData.productName}
                    onChange={(e) => handleChange("productName", e.target.value)}
                  />
                  {errors.productName && <p className="text-red-500 text-sm">{errors.productName}</p>}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-amber-900 font-medium">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your item..."
                    className="min-h-[120px] border-amber-200 focus:border-amber-500 bg-white"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                  {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                </div>

                {/* Category, Size, Color, Texture */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-amber-900 font-medium">
                      Category <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="category"
                      placeholder="Top"
                      className="border-amber-200 focus:border-amber-500 bg-white"
                      value={formData.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-amber-900 font-medium">
                      Size <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="size"
                      placeholder="XS"
                      className="border-amber-200 focus:border-amber-500 bg-white"
                      value={formData.size}
                      onChange={(e) => handleChange("size", e.target.value)}
                    />
                    {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color" className="text-amber-900 font-medium">
                      Color <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="color"
                      placeholder="White"
                      className="border-amber-200 focus:border-amber-500 bg-white"
                      value={formData.color}
                      onChange={(e) => handleChange("color", e.target.value)}
                    />
                    {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="texture" className="text-amber-900 font-medium">
                      Texture
                    </Label>
                    <Input
                      id="texture"
                      placeholder="Soft"
                      className="border-amber-200 focus:border-amber-500 bg-white"
                      value={formData.texture}
                      onChange={(e) => handleChange("texture", e.target.value)}
                    />
                  </div>
                </div>

                {/* Condition */}
                <div className="space-y-2">
                  <Label className="text-amber-900 font-medium">
                    Condition <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => handleChange("condition", "new")}
                      className={`w-8 h-8 rounded-full ${formData.condition === "new" ? "ring-2 ring-amber-500" : ""}`}
                      style={{ backgroundColor: "#4CAF50" }}
                    />
                    <button
                      type="button"
                      onClick={() => handleChange("condition", "like-new")}
                      className={`w-8 h-8 rounded-full ${
                        formData.condition === "like-new" ? "ring-2 ring-amber-500" : ""
                      }`}
                      style={{ backgroundColor: "#FFEB3B" }}
                    />
                    <button
                      type="button"
                      onClick={() => handleChange("condition", "good")}
                      className={`w-8 h-8 rounded-full ${formData.condition === "good" ? "ring-2 ring-amber-500" : ""}`}
                      style={{ backgroundColor: "#FFA726" }}
                    />
                    <button
                      type="button"
                      onClick={() => handleChange("condition", "fair")}
                      className={`w-8 h-8 rounded-full ${formData.condition === "fair" ? "ring-2 ring-amber-500" : ""}`}
                      style={{ backgroundColor: "#EF5350" }}
                    />
                  </div>
                  {errors.condition && <p className="text-red-500 text-sm">{errors.condition}</p>}
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-amber-900 font-medium">
                    Price (HK$) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="e.g. 150"
                    className="border-amber-200 focus:border-amber-500 bg-white"
                    value={formData.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                  />
                  {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                </div>

                {/* Delivery Method */}
                <div className="space-y-2">
                  <Label className="text-amber-900 font-medium">
                    Delivery Method <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="meetInPerson"
                        checked={formData.meetInPerson}
                        onCheckedChange={(checked) => handleChange("meetInPerson", Boolean(checked))}
                      />
                      <Label htmlFor="meetInPerson" className="text-amber-800">
                        Meet in person
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="deliverByPost"
                        checked={formData.deliverByPost}
                        onCheckedChange={(checked) => handleChange("deliverByPost", Boolean(checked))}
                      />
                      <Label htmlFor="deliverByPost" className="text-amber-800">
                        Deliver by post
                      </Label>
                    </div>
                  </div>
                  {errors.delivery && <p className="text-red-500 text-sm">{errors.delivery}</p>}
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-center space-x-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-[#B9A89B] hover:bg-[#A89889] text-white border-0 px-8"
                    onClick={handleSaveAsDraft}
                  >
                    Save
                  </Button>
                  <Button
                    type="submit"
                    className="bg-[#B9A89B] hover:bg-[#A89889] text-white px-8"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
