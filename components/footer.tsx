import Link from "next/link"
import { Building, Phone, Mail, MapPin } from "lucide-react"
import { FaWhatsapp, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      {/* Main Footer */}
      <div className="container mx-auto px-10 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-0 flex items-center">
              <img src="/svgs/1.svg" alt="One Roofing Services Logo" className="h-8 w-8" />
            </div>
            <p className="mb-4 mt-1 text-gray-600">
              Professional commercial roofing services with a focus on quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://wa.me/14168417897" className="text-gray-500 hover:text-primary" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-gray-800">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Roof Inspection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Roof Restoration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-gray-800">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-600">(416) 841-7897</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@roofingservices.ca" className="text-gray-600 hover:underline">
                  info@roofingservices.ca
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-600">
                  Toronto, ON
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} One Roofing Services Inc. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://github.com/valentino-ivanovski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Valentino Ivanovski <FaGithub className="inline" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
