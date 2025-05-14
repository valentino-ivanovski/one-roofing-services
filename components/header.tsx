"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Building, Menu, Phone, Mail, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="./svgs/1.svg" alt="Logo" className="h-10 w-10" />
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
            <Phone className="mr-2 h-4 w-4 text-primary" />
            <span className="text-sm">(416) 841-7897</span>
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
                    <img src="/svgs/1.svg" alt="Logo" className="ml-2 h-8 w-8" />
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
                  <span>info@roofingservices.ca</span>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/85 transition-color duration-300">
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
  )
}
