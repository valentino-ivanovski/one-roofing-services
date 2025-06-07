import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Roofing Services Inc.",
  description:
    "Professional roofing services including inspection, maintenance, restoration, and replacement.",
  openGraph: {
    title: "One Roofing Services Inc.",
    description:
      "Expert roofing solutions for inspection, maintenance, restoration, and replacement. Trust One Roofing Services Inc. for quality and reliability.",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/RM0M0Wi.jpeg",
        alt: "One Roofing Services Inc. - Roofing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Roofing Services Inc.",
    description:
      "Top-tier roofing services: inspections, maintenance, restoration, and replacements. Contact us today!",
    images: ["https://i.imgur.com/RM0M0Wi.jpeg"],
  },
  keywords: [
    "roofing",
    "roof inspection",
    "roof maintenance",
    "roof restoration",
    "roof replacement",
  ],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/svgs/icon.ico?v2",
    apple: [
      {
        url: "/svgs/icon.png?v2",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}