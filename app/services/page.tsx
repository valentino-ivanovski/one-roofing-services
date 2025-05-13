import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PencilRulerIcon as Shield, Hammer as Tool, WarehouseIcon as Wrench, Repeat as Building2, CheckCircle } from "lucide-react"

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          We provide comprehensive commercial roofing solutions tailored to your specific needs.
        </p>
      </div>

      {/* Service Overview */}
      <div className="mb-16 grid gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Comprehensive Commercial Roofing Solutions</h2>
          <p className="mb-6 text-gray-600">
            Our team specializes in all aspects of commercial roofing, from routine maintenance to complete
            replacements. We work with various roofing systems and materials to provide the best solution for your
            specific building and budget.
          </p>
          <ul className="mb-6 space-y-2">
            {[
              "Flat and low-slope roofing systems",
              "Metal roofing for commercial buildings",
              "TPO, EPDM, and PVC membrane systems",
              "Built-up roofing (BUR) systems",
              "Modified bitumen roofing",
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
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Commercial roofing services"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Detailed Services */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Our Core Services</h2>

        <div className="space-y-16">
          {/* Roof Inspection */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Roof Inspection</CardTitle>
                  <CardDescription>Comprehensive assessment of your roof's condition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our thorough inspection process identifies potential issues before they become major problems. We
                    examine all components of your roofing system to ensure everything is functioning properly.
                  </p>
                  <h4 className="font-semibold">Our inspection includes:</h4>
                  <ul className="space-y-2">
                    {[
                      "Detailed examination of roofing materials",
                      "Inspection of flashing, seams, and penetrations",
                      "Drainage system evaluation",
                      "Interior inspection for signs of leaks or damage",
                      "Complete evaluation and recommendations",
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
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto md:order-2">
              <Image src="/placeholder.svg?height=600&width=800" alt="Roof inspection" fill className="object-cover" />
            </div>
          </div>

          {/* Maintenance & Repair */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Roof maintenance and repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Card>
                <CardHeader>
                  <Tool className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Maintenance & Repair</CardTitle>
                  <CardDescription>Keeping your roof in optimal condition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Regular maintenance extends the life of your roof and prevents costly damage. Our repair services
                    address issues promptly to maintain the integrity of your roofing system.
                  </p>
                  <h4 className="font-semibold">Our maintenance and repair services include:</h4>
                  <ul className="space-y-2">
                    {[
                      "Scheduled maintenance programs",
                      "Leak detection and repair",
                      "Flashing repair and replacement",
                      "Membrane patching and seam repair",
                      "Drainage system cleaning and repair",
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
          </div>

          {/* Roof Restoration */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Card>
                <CardHeader>
                  <Wrench className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Roof Restoration</CardTitle>
                  <CardDescription>Extending the life of your existing roof</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Roof restoration can significantly extend the life of your existing roof at a fraction of the cost
                    of replacement. Our restoration services address deterioration and improve performance.
                  </p>
                  <h4 className="font-semibold">Our restoration services include:</h4>
                  <ul className="space-y-2">
                    {[
                      "Roof cleaning and preparation",
                      "Membrane reinforcement",
                      "Coating application for UV protection",
                      "Reflective coating for energy efficiency",
                      "Comprehensive sealing of seams and penetrations",
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
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto md:order-2">
              <Image src="/placeholder.svg?height=600&width=800" alt="Roof restoration" fill className="object-cover" />
            </div>
          </div>

          {/* Roof Replacement */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:h-auto">
              <Image src="/placeholder.svg?height=600&width=800" alt="Roof replacement" fill className="object-cover" />
            </div>
            <div>
              <Card>
                <CardHeader>
                  <Building2 className="mb-2 h-10 w-10 text-primary" />
                  <CardTitle>Roof Replacement</CardTitle>
                  <CardDescription>Complete roofing system installation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    When repair or restoration isn't viable, we provide complete roof replacement services with quality
                    materials and expert installation to ensure long-term performance.
                  </p>
                  <h4 className="font-semibold">Our replacement services include:</h4>
                  <ul className="space-y-2">
                    {[
                      "Removal and disposal of existing roofing",
                      "Deck inspection and repair if needed",
                      "Installation of high-quality roofing systems",
                      "Proper flashing and detail work",
                      "Complete cleanup and project management",
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
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Ready to discuss your roofing needs?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg">
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
  )
}
