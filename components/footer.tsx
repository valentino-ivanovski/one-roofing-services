import Link from "next/link"
import { Building, Phone, Mail, MapPin } from "lucide-react"
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t bg-white bg-[url('/galleryPics/26.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/80 z-0"></div>
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-10 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="mb-0 flex items-center">
                <img src="/svgs/1.svg?v2" alt="One Roofing Services Logo" className="h-11 w-11" />
              </div>
              <p className="mb-4 mt-1 text-gray-600">
                Professional commercial roofing services with a focus on quality and customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/oneroofingservices?igsh=MW5manBkajhlaTU1cw%3D%3D&utm_source=qr" className="text-gray-500 hover:text-primary" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/in/juan-p-zuniga-49a17b36a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-500 hover:text-primary" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
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
                  <a
                    href="https://www.google.com/maps/place/8551+Weston+Rd+suite+202,+Vaughan,+ON+L4L+9R4,+Canada/@43.8094732,-79.5538746,17z/data=!3m2!4b1!5s0x882b2f79ad3ea00d:0x28346da1192d4aea!4m6!3m5!1s0x882b2f79ad6aaaab:0xcc711428e453e54d!8m2!3d43.8094732!4d-79.5512997!16s%2Fg%2F11kj_c26qt?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    202-8551 Weston Rd<br />
                    Woodbridge ON L4L 9R4<br />
                    Canada
                  </a>
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
      </div>
    </footer>
  )
}
