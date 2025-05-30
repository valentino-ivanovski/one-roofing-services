"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PencilRulerIcon as Shield, Hammer as Tool, WarehouseIcon as Wrench, Repeat as Building2, Check } from "lucide-react"
import { useEffect, useState } from "react"
import Logo1 from "@/public/logos/1.svg";
import Logo2 from "@/public/logos/2.png";
import Logo3 from "@/public/logos/3.png";
import Logo4 from "@/public/logos/4.svg";

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
        <section className="relative h-[500px] w-full">
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
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 text-white sm:px-16 text-center items-center">
          <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            ONE ROOFING SERVICES
          </h1>
            <p className="mb-6 max-w-xl text-lg">
              Ready to roof whatever you need.
            </p>
            <ul className="mb-6 font-bold text-yellow-300 sm:flex sm:flex-row grid grid-cols-2 gap-x-0 transform translate-x-5 sm:transform sm:translate-x-0 sm:gap-x-6 gap-y-1 text-lg">
              <li className="flex items-center whitespace-nowrap">
                <Check className="inline-block h-5 w-5 mr-2 shrink-0" />
                <span className="hidden sm:inline">Certified contractor</span>
                <span className="inline sm:hidden">Certif. contractor</span>
              </li>
              <li className="flex items-center sm:transform sm:translate-x-0 transform translate-x-6">
                <Check className="inline-block  h-5 w-5 mr-2" />
                WSIB
              </li>
              <li className="flex items-center whitespace-nowrap">
                <Check className="inline-block h-5 w-5 mr-2 " />
                Est. in 2009
              </li>
              <li className="flex items-center whitespace-nowrap">
                <Check className="inline-block h-5 w-5 mr-2" />
                Fully insured
              </li>
            </ul>
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
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-gray-50 py-10 sm:py-5 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-3 sm:flex sm:flex-nowrap sm:gap-14 sm:justify-center sm:items-center justify-center items-center pr-6 pl-4 w-full max-w-4xl">
          <a
            href="https://one-roofing.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70 flex justify-center"
          >
            <Image src={Logo1} alt="Logo 1" width={240} height={120} className="h-14 w-auto object-contain mx-auto sm:h-28" />
          </a>
          <a
            href="https://www.soprema.ca/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70 flex justify-center"
          >
            <Image src={Logo2} alt="Logo 2" width={240} height={120} className="h-14 w-auto object-contain mx-auto sm:h-28" />
          </a>
          <a
            href="https://iibec.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70 flex justify-center"
          >
            <Image src={Logo3} alt="Logo 3" width={320} height={320} className="h-20 w-20 object-contain mx-auto sm:h-44 sm:w-36" />
          </a>
          <a
            href="https://www.wsib.ca/en"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70 flex justify-center sm:translate-y-0"
          >
            <Image src={Logo4} alt="Logo 4" width={240} height={120} className="h-14 w-auto object-contain mx-auto sm:h-28" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="mb-9 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Whether you're installing a new system, restoring an existing one, or maintaining your current roof, we provide expert guidance and high-quality workmanship every <br></br> step of the way.
            </p>
            {/* 
            <ul className="mx-auto font-semibold mt-6 max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-left list-disc list-inside text-gray-700 text-base sm:transform sm:translate-x-10 transform translate-x-6">
              <li>Built-Up Roofing (BUR)</li>
              <li>Modified Bitumen</li>
              <li>Single Ply Systems (TPO, PVC, & EPDM)</li>
              <li>Liquid-Applied Membranes</li>
            </ul>
            */}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <Shield className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Roof Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Thorough assessment of your roof's condition to identify potential issues before they become costly
                  problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Tool className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Maintenance & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular maintenance and timely repairs to extend the life of your roof and prevent water damage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Wrench className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Roof Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive restoration services to bring your existing roof back to optimal condition.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Building2 className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Roof Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete roof replacement with quality materials and expert installation when restoration isn't
                  viable.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-primary hover:bg-primary/85 transition-color duration-200">
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Our approach to commercial roofing is built on these core principles.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">Experience</h3>
              <p className="text-gray-600">
                Years of industry experience providing quality roofing solutions for commercial properties.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">Quality Materials</h3>
              <p className="text-gray-600">We use only high-quality, durable materials that stand the test of time.</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">Reliable Service</h3>
              <p className="text-gray-600">
                Consistent, dependable service with clear communication throughout your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-600">A sample of our recent commercial roofing work.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-sm">
              <Image
                src="./featuredPics/1.webp?height=600&width=800"
                alt="Commercial roof project"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <Image
                src="./featuredPics/2.webp?height=600&width=800"
                alt="Commercial roof project"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-sm">
              <Image
                src="./featuredPics/3.webp?height=600&width=800"
                alt="Commercial roof project"
                width={800}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-primary hover:bg-primary/85 transition-color duration-200">
              <Link href="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about our roofing services.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Michael Johnson</h3>
                  <p className="text-sm text-gray-600">Retail Plaza Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "One Roofing Services Inc. completed our shopping center roof replacement on time and within budget.
                Their team was professional and minimized disruption to our tenants. Five years later, we haven't had a
                single issue."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sarah May</h3>
                  <p className="text-sm text-gray-600">Office Building Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "After a severe storm damaged our office building roof, One Roofing Services Inc. responded quickly with
                emergency repairs. They later completed a full restoration that has protected our building through
                several seasons of harsh weather."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-blue-100">
                  <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Robert Chen</h3>
                  <p className="text-sm text-gray-600">Warehouse Facility Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We needed a specialized roofing solution for our 120,000 sq ft warehouse. One Roofing Services Inc.
                provided expert guidance on material selection and completed the installation efficiently. Their
                maintenance program has kept our roof in excellent condition."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-white">
        {/* Black background */}
        <div className="absolute inset-0 bg-black" />
        {/* Background image with 50% opacity */}
        <Image
          src="/heroPics/1.webp"
          alt="Roofing background"
          fill
          style={{ opacity: 0.3 }}
          className="object-cover opacity-50"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to discuss your roofing project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">Contact us today for a consultation and free estimate.</p>
          <Button
        asChild
        size="lg"
        variant="outline"
        className="border-white bg-transparent text-white hover:bg-white hover:text-primary transition-color duration-300"
          >
        <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
