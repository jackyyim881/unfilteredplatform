import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt?: string;
  overlay?: boolean;
  height?: "small" | "medium" | "large";
}

export default function Banner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt = "Banner image",
  overlay = true,
  height = "medium",
}: BannerProps) {
  const heightClass = {
    small: "h-[300px]",
    medium: "h-[400px]",
    large: "h-[500px]",
  };

  return (
    <div className={`relative w-full ${heightClass[height]} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {overlay && <div className="absolute inset-0 bg-black/30" />}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col bg-red-700 items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-white mb-8 max-w-2xl">{subtitle}</p>
        )}
        <Button
          asChild
          className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-md text-lg"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
}
