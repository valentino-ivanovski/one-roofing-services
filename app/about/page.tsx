import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import { FaLinkedin ,FaInstagram } from "react-icons/fa"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10 bg-white ring-1 ring-gray-300 w-full mx-auto rounded-lg px-6 pb-10 pt-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Efficient & watertight</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          As an independent roofing contractor, we specialize in supporting building owners and property managers with reliable solutions for commercial, industrial, and residential roofing systems.
        </p>
        <div className="flex space-x-4 mt-6 justify-center">
            <Link href="https://www.instagram.com/oneroofingservices?igsh=MW5manBkajhlaTU1cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-primary hover:opacity-80 transition" size={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/juan-p-zuniga-49a17b36a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-primary hover:opacity-80 transition" size={40} />
            </Link>
            <Link href="https://bcert.me/bc/html/show-badge.html?b=erkevyth" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/3.png" alt="Certification Badge" width={40} height={40} className="hover:opacity-80 cursor-pointer transform -translate-y-1" />
            </Link>
        </div>
      </div>

      {/* Company Overview */}
      <div className="w-full flex ring-1 ring-gray-100 items-center justify-center flex-col mx-auto rounded-lg mb-10 bg-gray-50">
        <div className="flex flex-col justify-center items-center text-center px-6 pb-10 pt-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mb-4 text-gray-600">
            Established in 2009, One Roofing Services Inc. has proudly served the GTA's industrial,
            commercial, and residential markets for over 16 years. We specialize in delivering
            professional, reliable roofing services tailored to the unique needs of every client. Our crews
            are made up of experienced and certified, committed to high-quality workmanship and
            lasting solutions.
            One Roofing Services Inc. is a certified contractor, fully insured, and covered by WSIB,
            ensuring peace of mind on every project.
          </p>
          <p className="mb-6 text-gray-600">
            One Roofing Services Inc. is a certified contractor, fully insured, and covered by WSIB,
            ensuring peace of mind on every project.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              <span>Experienced Team</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>Quality Materials</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              <span>Timely Completion</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-primary p-8 text-center rounded-lg overflow-hidden">
        <Image
          src="/heroPics/1.webp"
          alt="Roofing background"
          fill
          style={{ opacity: 0.3 }}
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:p-12">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to discuss your roofing needs?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white">
            Contact us today for a consultation and free estimate on your commercial roofing project.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
    
  )
}
