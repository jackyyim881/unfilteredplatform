import type React from "react"
import type { Metadata } from "next"
import { Caveat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const caveat = Caveat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UNFILTERED | Real.Raw.You",
  description: "Discover your authentic style with our secondhand fashion platform and style personality quiz.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.className} bg-[#FFF5E9] min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
