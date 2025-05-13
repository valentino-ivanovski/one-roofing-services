import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Learn about our company and our commitment to quality commercial roofing.
        </p>
      </div>

      {/* Company Overview */}
      <div className="mb-16 grid gap-10 md:grid-cols-2">
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image src="./aboutPics/1.webp?" alt="Our roofing team" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Our Company</h2>
          <p className="mb-4 text-gray-600">
            One Roofing Services Inc. has been providing quality roofing services to businesses throughout the region
            for over 15 years. We specialize in commercial roofing solutions that are durable, cost-effective, and
            tailored to each client's specific needs.
          </p>
          <p className="mb-6 text-gray-600">
            Our team of experienced professionals is committed to delivering exceptional service and results on every
            project. We take pride in our attention to detail, quality workmanship, and commitment to customer
            satisfaction.
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

      {/* Our Approach */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Our Approach</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Consultation</h3>
            <p className="text-gray-600">
              We begin with a thorough consultation to understand your specific roofing needs and challenges. This
              allows us to develop a tailored solution that addresses your unique requirements.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Planning</h3>
            <p className="text-gray-600">
              Our team develops a comprehensive plan that outlines the scope of work, timeline, and budget. We ensure
              all details are addressed before beginning any project.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">Execution</h3>
            <p className="text-gray-600">
              Our experienced team executes the project with precision and attention to detail. We maintain clear
              communication throughout the process and ensure minimal disruption to your operations.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16 rounded-lg bg-gray-50 p-8 md:p-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Why Choose Us</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start">
            <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Experience</h3>
              <p className="text-gray-600">
                With over 15 years in the industry, we have the knowledge and expertise to handle any commercial
                roofing project.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Quality Materials</h3>
              <p className="text-gray-600">
                We use only high-quality, durable materials from trusted manufacturers to ensure long-lasting results.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Professional Team</h3>
              <p className="text-gray-600">
                Our team consists of trained, certified professionals who are committed to excellence in every aspect of
                their work.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction and work diligently to exceed expectations on every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Ready to work with us?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg">
          Contact our team today to discuss your commercial roofing project.
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
  )
}
