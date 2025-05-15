"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll be in touch soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Get in touch with our team to discuss your commercial roofing needs.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>If you'd like to reach us manually</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">(416) 841-7897</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@roofingservices.ca" className="text-gray-600 hover:underline">
                    info@roofingservices.ca
                    </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
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
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 7:00 AM - 5:00 PM
                    <br />
                    Emergency Services Available 24/7
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form method="POST" action="https://formsubmit.co/info@roofingservices.ca" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name Surname"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      Also reach us on <span className="text-green-500">WhatsApp</span> <FaWhatsapp className="text-green-500" />
                    </p>
                    </div>
                  </div>
                  <div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
