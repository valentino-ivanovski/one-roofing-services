import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import { FaLinkedin ,FaInstagram } from "react-icons/fa"

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center lg:flex-row-reverse">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Established in <span className="font-semibold text-gray-800">2009</span>, One Roofing Services Inc. has
                proudly served the GTA's industrial, commercial, and residential markets for over 16 years. We
                specialize in delivering professional, reliable roofing services tailored to the unique needs of every
                client.
              </p>
              <p className="text-lg">
                Our crews are made up of experienced and certified professionals, committed to high-quality workmanship
                and lasting solutions. One Roofing Services Inc. is a certified contractor, fully insured, and covered
                by WSIB, ensuring peace of mind on every project.
              </p>
            </div>

            {/* CTA and Social */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Follow us:</span>
                <div className="flex gap-3">
                    <Link href="https://www.linkedin.com/in/juan-p-zuniga-49a17b36a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.instagram.com/oneroofingservices?igsh=MW5manBkajhlaTU1cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <FaInstagram className="w-5 h-5" />
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="aboutPics/1.webp?height=600&width=800"
                alt="One Roofing Services team working on a building"
                width={800}
                height={600}
                className="object-cover w-full h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 right-8 bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 rounded-full p-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">16+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
