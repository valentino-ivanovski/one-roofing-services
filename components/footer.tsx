import Link from "next/link"
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center">
              <Building className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-bold">One Roofing Services Inc.</span>
            </div>
            <p className="mb-4 text-gray-600">
              Professional commercial roofing services with a focus on quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-blue-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
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
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Roof Inspection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Roof Restoration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Roof Replacement
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
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
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-600">info@oneroofingservices.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-primary" />
                <span className="text-gray-600">
                  123 Business Street
                  <br />
                  Suite 100
                  <br />
                  Anytown, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} One Roofing Services Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
