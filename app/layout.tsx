import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "One Roofing Services Inc.",
  description:
    "Professional commercial roofing services including inspection, maintenance, restoration, and replacement.",
  openGraph: {
    title: "One Roofing Services Inc.",
    description:
      "Expert commercial roofing solutions for inspection, maintenance, restoration, and replacement. Trust One Roofing Services Inc. for quality and reliability.",
    type: "website",
    images: [
      {
        url: "/heroPics/4.webp",
        width: 1200,
        height: 630,
        alt: "One Roofing Services Inc. - Commercial Roofing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Roofing Services Inc.",
    description:
      "Top-tier commercial roofing services: inspections, maintenance, restoration, and replacements. Contact us today!",
    images: ["./heroPics/1.webp"],
  },
  keywords: ["commercial roofing", "roof inspection", "roof maintenance", "roof restoration", "roof replacement"],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}