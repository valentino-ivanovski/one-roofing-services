"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="./svgs/1.svg?v4" alt="Logo" className="h-11 w-11" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden items-center space-x-4 lg:flex">
            <div className="flex items-center">
              <FaWhatsapp className="mr-2 h-4 w-4 text-green-500" />
              <a
              href="https://wa.me/14168417897?text=Hello! I'm interested in your roofing services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-500 hover:underline"
              >
              (416) 841-7897
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4 text-primary" />
              <a href="mailto:info@roofingservices.ca" className="text-sm hover:underline">
                info@roofingservices.ca
              </a>
            </div>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <img src="/svgs/1.svg?v2" alt="Logo" className="ml-2 h-11 w-11" />
                  </Link>
                </div>

                <nav className="mt-8 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`text-base font-medium transition-colors hover:text-primary ${
                        isActive(link.path) ? "text-primary" : "text-gray-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 space-y-4 border-t pt-6">
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <span>(416) 841-7897</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <a href="mailto:info@roofingservices.ca" className="text-gray-600 hover:underline">
                      info@roofingservices.ca
                    </a>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/85 transition-color duration-200">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* WhatsApp Bubble */}
      <a
        href="https://wa.me/14168417897?text=Hello! I'm interested in your roofing services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200 sm:h-16 sm:w-16"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-8 sm:w-8" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>
    </>
  )
}