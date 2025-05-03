import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#FFF5E9] border-t border-amber-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col">
            <h3 className="text-amber-800 font-bold text-xl mb-6">
              UNFILTERED
            </h3>
            <p className="text-amber-700 mb-6 pr-4">
              Discover unique fashion that expresses your personality and stands
              out from the crowd.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-auto">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 hover:bg-amber-200 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 hover:bg-amber-200 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 hover:bg-amber-200 transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col">
            <h3 className="text-amber-800 font-bold text-lg mb-4">Company</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/careers"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h3 className="text-amber-800 font-bold text-lg mb-4">
              Help Center
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/faq"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/shipping"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Shipping & Returns
              </Link>
              <Link
                href="/size-guide"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Size Guide
              </Link>
              <Link
                href="/support"
                className="text-amber-700 hover:text-amber-900 transition-colors"
              >
                Customer Support
              </Link>
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col">
            <h3 className="text-amber-800 font-bold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-amber-700 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col">
              <Input
                type="email"
                placeholder="Your email address"
                className="mb-2 bg-white border-amber-300 focus:border-amber-500 focus:ring-amber-500"
              />
              <Button className="bg-amber-700 hover:bg-amber-800 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-amber-200 pt-8 pb-6">
          <h4 className="text-amber-800 font-semibold mb-4 text-center">
            Accepted Payment Methods
          </h4>
          <div className="flex justify-center space-x-4 flex-wrap">
            <div className="h-8 w-12 relative">
              <Image
                src="/payments/visa.svg"
                alt="Visa"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-8 w-12 relative">
              <Image
                src="/payments/mastercard.svg"
                alt="Mastercard"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-8 w-12 relative">
              <Image
                src="/payments/paypal.svg"
                alt="PayPal"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-8 w-12 relative">
              <Image
                src="/payments/applepay.svg"
                alt="Apple Pay"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-8 w-12 relative">
              <Image
                src="/payments/googlepay.svg"
                alt="Google Pay"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-amber-200 pt-6 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-700 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} UNFILTERED. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-amber-700">
              <Link
                href="/privacy"
                className="hover:text-amber-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-amber-900 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-amber-900 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
