"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

// This would be replaced with your actual gallery data
const galleryItems = [
  // Page 1
  [
    { id: 1, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 2, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 3, type: "video", src: "/placeholder.svg?height=600&width=800", videoSrc: "#" },
    { id: 4, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 5, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 6, type: "video", src: "/placeholder.svg?height=600&width=800", videoSrc: "#" },
    { id: 7, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 8, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 9, type: "image", src: "/placeholder.svg?height=600&width=800" },
  ],
  // Page 2
  [
    { id: 10, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 11, type: "video", src: "/placeholder.svg?height=600&width=800", videoSrc: "#" },
    { id: 12, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 13, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 14, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 15, type: "video", src: "/placeholder.svg?height=600&width=800", videoSrc: "#" },
    { id: 16, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 17, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 18, type: "image", src: "/placeholder.svg?height=600&width=800" },
  ],
  // Page 3
  [
    { id: 19, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 20, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 21, type: "video", src: "/placeholder.svg?height=600&width=800", videoSrc: "#" },
    { id: 22, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 23, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 24, type: "video", src: "/placeholder.svg?height=600&width=800", videoSrc: "#" },
    { id: 25, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 26, type: "image", src: "/placeholder.svg?height=600&width=800" },
    { id: 27, type: "image", src: "/placeholder.svg?height=600&width=800" },
  ],
]

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedItem, setSelectedItem] = useState<null | {
    id: number
    type: string
    src: string
    videoSrc?: string
  }>(null)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const openLightbox = (item: { id: number; type: string; src: string; videoSrc?: string }) => {
    setSelectedItem(item)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Our Work</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Browse our portfolio of commercial roofing projects showcasing our quality workmanship.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems[currentPage].map((item) => (
          <div
            key={item.id}
            className="group relative h-64 cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
            onClick={() => openLightbox(item)}
          >
            <Image
              src={item.src || "/placeholder.svg"}
              alt="Roofing project"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-white">
                  <Play className="h-8 w-8" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          {galleryItems.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              className={
                currentPage === index
                  ? "border-primary bg-primary text-white hover:bg-primary/90"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
            disabled={currentPage === galleryItems.length - 1}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeLightbox}>
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src || "/placeholder.svg"}
                alt="Roofing project"
                width={1200}
                height={800}
                className="max-h-[90vh] rounded-lg object-contain"
              />
            ) : (
              <div className="relative aspect-video h-auto w-full max-w-4xl">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-black">
                  <p className="text-white">Video would play here</p>
                  {/* In a real implementation, you would use the video element */}
                  {/* <video 
                    src={selectedItem.videoSrc} 
                    controls 
                    className="h-full w-full rounded-lg"
                  /> */}
                </div>
              </div>
            )}
            <button
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-md"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
