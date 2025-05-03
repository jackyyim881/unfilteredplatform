import type React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Eye } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FFF5E9] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl text-amber-800">Create Your Account</h2>
          <p className="text-amber-700 mt-2">Join us and start shopping today!</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center">
              <User className="w-5 h-5 text-amber-800 mr-2" />
              <Label htmlFor="name" className="text-amber-800">
                Name
              </Label>
            </div>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-amber-800 mr-2" />
              <Label htmlFor="email" className="text-amber-800">
                Email
              </Label>
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Lock className="w-5 h-5 text-amber-800 mr-2" />
              <Label htmlFor="password" className="text-amber-800">
                Password
              </Label>
            </div>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Eye className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Lock className="w-5 h-5 text-amber-800 mr-2" />
              <Label htmlFor="confirmPassword" className="text-amber-800">
                Confirm Password
              </Label>
            </div>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full border-gray-200 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" className="border-amber-500 text-amber-500" />
            <Label htmlFor="terms" className="ml-2 text-amber-800 text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-amber-600 hover:underline">
                Terms & Conditions
              </Link>
            </Label>
          </div>

          <Button type="submit" className="w-full bg-[#B9C99E] hover:bg-[#A8B88D] text-amber-800 py-2 rounded-md">
            Register
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-amber-800">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function Lock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
