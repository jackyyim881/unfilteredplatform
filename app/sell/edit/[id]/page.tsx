"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function EditListingPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    brand: "",
    size: "",
    condition: "",
    description: "",
    price: "",
    originalPrice: "",
    shippingMethod: "",
    shippingFee: "",
  });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Simulate fetching listing data
  useEffect(() => {
    const fetchListing = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data for the listing
        const mockListing = {
          id,
          title: "Vintage Levi's 501 Jeans",
          category: "bottoms",
          subcategory: "jeans",
          brand: "Levi's",
          size: "M",
          condition: "Good",
          description:
            "Classic vintage Levi's 501 jeans in good condition. Some natural fading which adds to the vintage look. Waist 32, length 30.",
          price: "250",
          originalPrice: "500",
          shippingMethod: "SF Express",
          shippingFee: "30",
          images: [
            "/placeholder.svg?height=300&width=300",
            "/placeholder.svg?height=300&width=300",
          ],
        };

        setFormData({
          title: mockListing.title,
          category: mockListing.category,
          subcategory: mockListing.subcategory,
          brand: mockListing.brand,
          size: mockListing.size,
          condition: mockListing.condition,
          description: mockListing.description,
          price: mockListing.price,
          originalPrice: mockListing.originalPrice,
          shippingMethod: mockListing.shippingMethod,
          shippingFee: mockListing.shippingFee,
        });

        setUploadedImages(mockListing.images);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching listing:", error);
        setIsLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  // Handle form input changes
  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    // Clear error for this field if it exists
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = [...uploadedImages];

      Array.from(e.target.files).forEach((file) => {
        if (newImages.length < 8) {
          const imageUrl = URL.createObjectURL(file);
          newImages.push(imageUrl);
        }
      });

      setUploadedImages(newImages);
    }
  };

  // Remove uploaded image
  const removeImage = (index: number) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  // Handle form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setIsSuccess(true);

      // Redirect after a delay
      setTimeout(() => {
        router.push("/sell/dashboard");
      }, 2000);
    } catch (error) {
      setErrors({
        submit: "There was an error updating your listing. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#FFF5E9] min-h-screen flex items-center justify-center">
        <p className="text-amber-800">Loading listing details...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFF5E9] min-h-screen pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-amber-800 mb-6">
            Edit Listing
          </h1>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-amber-800 mb-2">
                Listing Updated Successfully!
              </h3>
              <p className="text-amber-700 mb-6">
                Redirecting to your dashboard...
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <Input
                  label="Title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  error={errors.title}
                />
                <Input
                  label="Category"
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  error={errors.category}
                />
                <Textarea
                  label="Description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  error={errors.description}
                />
                <Input
                  label="Price"
                  value={formData.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  error={errors.price}
                />
              </div>

              <Separator className="my-6" />

              <div className="mb-6">
                <h2 className="text-lg font-medium text-amber-800 mb-4">
                  Uploaded Images
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`Uploaded image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <button
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                        onClick={() => removeImage(index)}
                      >
                        <X className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-4"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white"
              >
                {isSubmitting ? "Updating..." : "Update Listing"}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
