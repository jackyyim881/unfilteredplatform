"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const pathname = usePathname();
  const [sellOpen, setSellOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if scrolling up or down
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Only hide when scrolling down and past a certain threshold
      if (isScrollingDown && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Set scroll state for styling
      setIsScrolled(currentScrollPos > 10);

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-[#FFF5E9]/95 shadow-md backdrop-blur-sm"
          : "bg-[#FFF5E9]",
        visible ? "top-0" : "-top-24"
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <nav className="flex items-center space-x-8">
          <Link
            href="/about"
            className={cn(
              "text-amber-800 hover:text-amber-600 font-medium text-lg",
              pathname === "/about" &&
                "underline decoration-2 underline-offset-4"
            )}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-amber-800 hover:text-amber-600 font-medium text-lg",
              pathname === "/blog" &&
                "underline decoration-2 underline-offset-4"
            )}
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className={cn(
              "text-amber-800 hover:text-amber-600 font-medium text-lg",
              pathname === "/faq" && "underline decoration-2 underline-offset-4"
            )}
          >
            FAQ
          </Link>
        </nav>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center">
            <div className="relative w-32 h-16 hidden md:block">
              <Image
                src="/logo.png"
                alt="UNFILTERED Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/shop"
            className={cn(
              "text-amber-800 hover:text-amber-600 font-medium text-lg",
              pathname === "/shop" &&
                "underline decoration-2 underline-offset-4"
            )}
          >
            Shop
          </Link>

          <DropdownMenu open={sellOpen} onOpenChange={setSellOpen}>
            <DropdownMenuTrigger className="flex items-center text-amber-800 hover:text-amber-600 font-medium text-lg">
              Sell <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/sell/how-to-sell">How to Sell</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sell/pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sell/guidelines">Guidelines</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/sell/create">Start Selling Now</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/login" className="text-amber-800 hover:text-amber-600">
            <User className="w-6 h-6" />
          </Link>
          <Link
            href="/favorites"
            className="text-amber-800 hover:text-amber-600"
          >
            <Heart className="w-6 h-6" />
          </Link>
          <Link href="/cart" className="text-amber-800 hover:text-amber-600">
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
