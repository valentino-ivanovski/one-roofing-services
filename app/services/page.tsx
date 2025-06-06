import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PencilRulerIcon as Shield, Hammer as Tool, WarehouseIcon as Wrench, Repeat as Building2, CheckCircle } from "lucide-react"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Services</h1>
        <p className="mb-6 text-gray-600 max-w-xl mx-auto">
            Whether you're installing a new system, restoring an existing one, or maintaining your current roof,
            we provide expert guidance and high-quality workmanship every step of the way.
          </p>
          <div className="flex flex-col justify-center text-left items-center px-1">
          <ul className="mb-6 grid grid-cols-1 transform sm:translate-x-16 translate-x-6 sm:grid-cols-2 gap-y-2 text-left">
            {[
              "Built-Up Roofing (BUR)",
              "Modified Bitumen",
              "Liquid-Applied Membranes",
              "Single Ply Systems (TPO, PVC, and EPDM)",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="w-fit bg-primary hover:bg-primary/90">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Our Core Services</h2>

        <div className="space-y-16">
          {/* Roof Inspection */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
            <div className="order-1 md:order-1">
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Roof Inspection</CardTitle>
                  <CardDescription>Comprehensive assessment of your roof's condition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    A thorough roof inspection is the first sttep in understanding the current condition of your roofing system. Our experienced professionals perform detailed evaluations to uncover existing issues and identify areas at risk for future problems. Early detection allows for timely repairs, helping you avoid costly damage and extend the life of your roof.
                  </p>
                  <h4 className="font-semibold">Our inspection includes:</h4>
                  <ul className="space-y-2">
                    {[
                      "Visual assessment of the roof surface and components",
                      "Core sampling to evaluate underlying materials",
                      "Roof condition mapping for clear documentation",
                      "Detailed analysis of findings",
                      "Recommended solutions tailored to your roof’s needs",
                      "Photo documentation for reference and reporting",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto order-2 md:order-2">
              <Image src="/servicesPics/1.webp?v2&height=600&width=800" alt="Roof inspection" fill className="object-cover" />
            </div>
          </div>

          {/* Maintenance & Repair */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
            <div className="order-1 md:order-2">
              <Card className="p-0">
                <CardHeader>
                  <Tool className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Repair & Maintenance</CardTitle>
                  <CardDescription>Keeping your roof in optimal condition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Even minor roofing issues can lead to major, costly damage if not addressed in time. Regular
                    maintenance, routine inspections, and proactive care help catch problems early, before they
                    become emergencies.
                    Our repair and maintenance services are designed to keep your roof performing at its best, year-round.
                  </p>
                  <h4 className="font-semibold">Our maintenance and repair services include:</h4>
                  <ul className="space-y-2">
                    {[
                      "24/7 emergency response.",
                      "Leak detection and repair solutions.",
                      "Roof repair and maintenance.",
                      "Upgrades and modifications, including adding or removing roof accessories.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto order-2 md:order-1">
              <Image
                src="/servicesPics/2.webp?v2&height=600&width=800"
                alt="Roof maintenance and repair"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Roof Restoration */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
            <div className="order-1 md:order-1">
              <Card>
                <CardHeader>
                  <Wrench className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Restoration</CardTitle>
                  <CardDescription>Extending the life of your existing roof</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Discover if restoration is the right option for your roof, it could save you both time and money.
                    A full roof replacement is not always necessary; many aging or deteriorating roofs can be restored if
                    specific conditions are met. Restoration is often a more cost-effective solution and can extend the
                    life of your existing roof while reducing environmental impact. Let us evaluate whether your roof is a
                    candidate for restoration based on the following key factors:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Roof composition",
                      "Current membrane condition",
                      "Insulation performance and integrity",
                      "Structural deck condition",
                      "Parapet walls and adjoining wall details",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto order-2 md:order-2">
              <Image src="/servicesPics/3.webp?height=600&width=800" alt="Roof restoration" fill className="object-cover" />
            </div>
          </div>

          {/* Roof Replacement */}
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
            <div className="order-1 md:order-2">
              <Card>
                <CardHeader>
                  <Building2 className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Replacement</CardTitle>
                  <CardDescription>Complete roofing system installation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    When it's time for a new roof, selecting the right system for your building can feel overwhelming, but
                    we’re here to help. Our team works closely with you to ensure the replacement process is smooth,
                    efficient, and aligned with your goals. From choosing the appropriate materials to final installation,
                    we’re with you every step of the way.
                  </p>
                  <h4 className="font-semibold">Key considerations include:</h4>
                  <ul className="space-y-2">
                    {[
                      "Evaluating your budget and long-term goals",
                      "Understanding your building’s specific roofing requirements",
                      "Coordinated project management from start to finish",
                      "Clear warranty options for peace of mind",
                      "Ongoing maintenance planning to protect your investment",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto order-2 md:order-1">
              <Image src="/servicesPics/4.webp?v2" alt="Roof replacement" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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