"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PencilRulerIcon as Shield, Hammer as Tool, WarehouseIcon as Wrench, Repeat as Building2, Check } from "lucide-react"
import { useEffect, useState } from "react"
import Logo3 from "@/public/logos/3.png";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.from({ length: 9 }, (_, i) => `./heroPics/${i + 1}.webp`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (3000ms)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
        <section className="relative h-screen w-full">
        {/* Background images with transition effect */}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Commercial roofing"
            fill
            priority
            className={`object-cover brightness-[0.85] transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative  z-10 mx-auto flex h-full flex-col justify-center px-4 text-white sm:px-16 text-center items-center">
          <h1 className="mb-4 max-w-3xl text-3xl sm:text-4xl font-bold leading-tight md:text-5xl">
            Efficient & watertight
          </h1>
            <p className="mb-6 max-w-2xl text-md sm:text-lg">
              As an independent roofing contractor, we specialize in supporting building owners and
              property managers with reliable solutions for commercial, industrial, and residential
              roofing systems.
            </p>
          <div className="flex flex-wrap gap-5">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-black px-5 rounded-sm hover:bg-white/90 hover:text-black"
            >
              <Link href="/gallery">View Our Work</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary rounded-sm hover:bg-primary/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
            <div className="flex space-x-4 mt-6 justify-center">
            <Link href="https://www.instagram.com/oneroofingservices?igsh=MW5manBkajhlaTU1cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white   transition" size={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/juan-p-zuniga-49a17b36a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white   transition" size={40} />
            </Link>
            <Link href="https://bcert.me/bc/html/show-badge.html?b=erkevyth" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/3.png" alt="Certification Badge" width={40} height={40} className="  cursor-pointer transform -translate-y-1" />
            </Link>
        </div>
        </div>
            </section>
    </div>
  )
}
