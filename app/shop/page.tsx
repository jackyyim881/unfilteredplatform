"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type DetectedImages = {
  [category: string]: {
    [subCategory: string]: string[];
  };
};

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

const categories = [
  {
    id: "tops",
    label: "Tops",
    subCategories: Object.keys(productImages.tops || {}),
  },
  {
    id: "bottoms",
    label: "Bottoms",
    subCategories: Object.keys(productImages.bottoms || {}).filter(Boolean),
  },
  {
    id: "outerwear",
    label: "Outerwear",
    subCategories: Object.keys(productImages.outerwear || {}),
  },
  {
    id: "shoes",
    label: "Shoes",
    subCategories: Object.keys(productImages.shoes || {}),
  },
  {
    id: "bags",
    label: "Bags",
    subCategories: Object.keys(productImages.bags || {}).filter(Boolean),
  },
  {
    id: "accessories",
    label: "Accessories",
    subCategories: Object.keys(productImages.accessories || {}).filter(Boolean),
  },
  {
    id: "sets",
    label: "Sets",
    subCategories: Object.keys(productImages.sets || {}),
  },
];

const colors = [
  { id: "black", label: "Black", hex: "#000000" },
  { id: "white", label: "White", hex: "#FFFFFF" },
  { id: "red", label: "Red", hex: "#FF0000" },
  { id: "blue", label: "Blue", hex: "#0000FF" },
  { id: "green", label: "Green", hex: "#00FF00" },
  { id: "yellow", label: "Yellow", hex: "#FFFF00" },
  { id: "pink", label: "Pink", hex: "#FFC0CB" },
  { id: "purple", label: "Purple", hex: "#800080" },
];

const tags = [
  { id: "vintage", label: "#Vintage" },
  { id: "softgirl", label: "#SoftGirl" },
  { id: "casual", label: "#Casual" },
  { id: "formal", label: "#Formal" },
  { id: "summer", label: "#Summer" },
  { id: "winter", label: "#Winter" },
  { id: "spring", label: "#Spring" },
  { id: "autumn", label: "#Autumn" },
  { id: "party", label: "#Party" },
  { id: "office", label: "#Office" },
  { id: "date", label: "#Date" },
  { id: "travel", label: "#Travel" },
];

function generateProductsFromImages() {
  const products: {
    id: number;
    name: string;
    price: number;
    category: string;
    subCategory: string;
    condition: string;
    imageSrc: string;
  }[] = [];
  let id = 1;

  Object.entries(productImages).forEach(([category, subCategoriesObj]) => {
    Object.entries(subCategoriesObj).forEach(([subCategory, images]) => {
      images.forEach((imagePath) => {
        const fileName = imagePath.split("/").pop()?.split(".")[0] || "";
        const formattedName = fileName
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        products.push({
          id: id++,
          name:
            formattedName ||
            `${category.charAt(0).toUpperCase() + category.slice(1)} Item`,
          price: Math.floor(Math.random() * 500) + 100,
          category: category,
          subCategory: subCategory,
          condition: ["New", "Like New", "Good"][Math.floor(Math.random() * 3)],
          imageSrc: imagePath,
        });
      });
    });
  });

  return products;
}

const products = generateProductsFromImages();

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showColorFilter, setShowColorFilter] = useState(false);
  const [showTagFilter, setShowTagFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesSubCategory =
      selectedSubCategories.length === 0 ||
      selectedSubCategories.includes(product.subCategory);

    return matchesSearch && matchesCategory && matchesSubCategory;
  });

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleSubCategory = (subCategoryId: string) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategoryId)
        ? prev.filter((id) => id !== subCategoryId)
        : [...prev, subCategoryId]
    );
  };

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((id) => id !== colorId)
        : [...prev, colorId]
    );
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const addActiveTag = (tag: string) => {
    if (!activeTags.includes(tag)) {
      setActiveTags([...activeTags, tag]);
    }
  };

  const removeActiveTag = (tag: string) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setSelectedColors([]);
    setSelectedTags([]);
    setActiveTags([]);
    setSearchTerm("");
  };

  const applyFilters = () => {
    const newActiveTags = [
      ...selectedCategories.map(
        (id) => categories.find((c) => c.id === id)?.label || id
      ),
      ...selectedSubCategories.map((id) => id),
      ...selectedColors.map(
        (id) => colors.find((c) => c.id === id)?.label || id
      ),
      ...selectedTags.map((id) => tags.find((t) => t.id === id)?.label || id),
    ];

    setActiveTags(newActiveTags);

    setShowCategoryDropdown(false);
    setShowColorFilter(false);
    setShowTagFilter(false);
  };

  useEffect(() => {
    if (activeTab !== "all") {
      addActiveTag(
        activeTab === "vintage"
          ? "#Vintage"
          : `#${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`
      );
    }
  }, [activeTab]);

  return (
    <div className="bg-[#FFF5E9] min-h-screen">
      <div className="container mx-auto px-4 py-20">
        {/* Top categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop?category=${category.id}`}
                className="text-amber-800 hover:text-amber-600 text-lg"
              >
                {category.label}
              </Link>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search Product"
              className="pl-10 border-gray-300 rounded-full focus:border-amber-500 focus:ring-amber-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mb-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-transparent border-b border-amber-200 w-full justify-start h-auto p-0 mb-4">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-transparent data-[state=active]:text-amber-800 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none px-4 py-2"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="new"
                className="data-[state=active]:bg-transparent data-[state=active]:text-amber-800 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none px-4 py-2"
              >
                New
              </TabsTrigger>
              <TabsTrigger
                value="popular"
                className="data-[state=active]:bg-transparent data-[state=active]:text-amber-800 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none px-4 py-2"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger
                value="sale"
                className="data-[state=active]:bg-transparent data-[state=active]:text-amber-800 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none px-4 py-2"
              >
                Sale
              </TabsTrigger>
              <TabsTrigger
                value="vintage"
                className="data-[state=active]:bg-transparent data-[state=active]:text-amber-800 data-[state=active]:border-b-2 data-[state=active]:border-amber-500 rounded-none px-4 py-2"
              >
                Vintage
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Filter buttons and dropdowns */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Category dropdown filter */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-amber-800 border-amber-200 hover:bg-amber-50 rounded-full"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                Category
              </Button>
              {showCategoryDropdown && (
                <div className="absolute z-10 mt-1 w-64 bg-white rounded-md shadow-lg">
                  <div className="p-2 max-h-80 overflow-auto">
                    {categories.map((category) => (
                      <div key={category.id}>
                        <div className="flex items-center p-2 hover:bg-amber-50 rounded">
                          <input
                            type="checkbox"
                            id={`category-${category.id}`}
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => toggleCategory(category.id)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`category-${category.id}`}
                            className="text-amber-800 cursor-pointer font-medium"
                          >
                            {category.label}
                          </label>
                        </div>

                        {category.subCategories.length > 0 &&
                          selectedCategories.includes(category.id) && (
                            <div className="pl-6 border-l border-amber-100 ml-3">
                              {category.subCategories.map((subCat) => (
                                <div
                                  key={subCat}
                                  className="flex items-center p-2 hover:bg-amber-50 rounded"
                                >
                                  <input
                                    type="checkbox"
                                    id={`subcat-${subCat}`}
                                    checked={selectedSubCategories.includes(
                                      subCat
                                    )}
                                    onChange={() => toggleSubCategory(subCat)}
                                    className="mr-2"
                                  />
                                  <label
                                    htmlFor={`subcat-${subCat}`}
                                    className="text-amber-700 cursor-pointer text-sm"
                                  >
                                    {subCat}
                                  </label>
                                </div>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tag filter */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-amber-800 border-amber-200 hover:bg-amber-50 rounded-full"
                onClick={() => setShowTagFilter(!showTagFilter)}
              >
                Tag
              </Button>
              {showTagFilter && (
                <div className="absolute z-10 mt-1 w-64 bg-white rounded-md shadow-lg">
                  <div className="p-2 max-h-60 overflow-auto">
                    <div className="flex flex-wrap gap-2 p-2">
                      {tags.map((tag) => (
                        <Badge
                          key={tag.id}
                          variant={
                            selectedTags.includes(tag.id)
                              ? "default"
                              : "outline"
                          }
                          className={`cursor-pointer ${
                            selectedTags.includes(tag.id)
                              ? "bg-amber-500 hover:bg-amber-600 text-white"
                              : "bg-white text-amber-800 border-amber-200 hover:bg-amber-50"
                          }`}
                          onClick={() => toggleTag(tag.id)}
                        >
                          {tag.label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Color filter */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-amber-800 border-amber-200 hover:bg-amber-50 rounded-full"
                onClick={() => setShowColorFilter(!showColorFilter)}
              >
                Color
              </Button>
              {showColorFilter && (
                <div className="absolute z-10 mt-1 w-64 bg-white rounded-md shadow-lg">
                  <div className="p-3">
                    <div className="grid grid-cols-4 gap-3">
                      {colors.map((color) => (
                        <div
                          key={color.id}
                          className="flex flex-col items-center"
                        >
                          <button
                            onClick={() => toggleColor(color.id)}
                            className={`w-8 h-8 rounded-full ${
                              selectedColors.includes(color.id)
                                ? "ring-2 ring-amber-500"
                                : ""
                            }`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={color.label}
                          />
                          <span className="text-xs text-amber-800 mt-1">
                            {color.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Reset & Apply buttons */}
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-amber-800 border-amber-200 hover:bg-amber-50 rounded-full"
              onClick={resetAllFilters}
            >
              Reset
            </Button>
            <Button
              size="sm"
              className="bg-amber-700 hover:bg-amber-800 text-white rounded-full"
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </div>

          {/* Active filters display */}
          {activeTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 p-3 bg-amber-50 rounded-md">
              <span className="text-amber-800 font-medium">
                Active Filters:
              </span>
              {activeTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-white text-amber-800 border-amber-200 px-3 py-1 rounded-full"
                >
                  {tag}
                  <button onClick={() => removeActiveTag(tag)} className="ml-1">
                    <X size={14} />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <Link href={`/shop/product/${product.id}`}>
                  <div className="aspect-square relative">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
                  <Heart className="w-5 h-5 text-amber-800" />
                </button>
              </div>

              <div className="p-4">
                <Link href={`/shop/product/${product.id}`}>
                  <h3 className="text-lg font-medium text-amber-800 hover:text-amber-600">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-amber-800 font-bold mt-1">
                  HK${product.price}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-amber-600">
                    {categories.find((c) => c.id === product.category)?.label ||
                      product.category}
                    {product.subCategory && ` > ${product.subCategory}`}
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.condition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-800 text-lg">
              No products found matching your criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4 text-amber-800 border-amber-300 hover:bg-amber-50"
              onClick={resetAllFilters}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
