"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

// This would be replaced with your actual gallery data
const galleryItems = [
  // Page 1
  [
    { id: 1, type: "image", src: "/galleryPics/1.webp?height=600&width=800" },
    { id: 2, type: "image", src: "/galleryPics/2.webp?height=600&width=800" },
    { id: 3, type: "video", src: "/galleryPics/3.webp?height=600&width=800", videoSrc: "/galleryPics/3.mp4?height=600&width=800" },
    { id: 4, type: "image", src: "/galleryPics/4.webp?height=600&width=800" },
    { id: 5, type: "image", src: "/galleryPics/5.webp?height=600&width=800" },
    { id: 6, type: "video", src: "/galleryPics/6.webp?height=600&width=800", videoSrc: "/galleryPics/6.mp4?height=600&width=800" },
    { id: 7, type: "image", src: "/galleryPics/7.webp?height=600&width=800" },
    { id: 8, type: "image", src: "/galleryPics/8.webp?height=600&width=800" },
    { id: 9, type: "image", src: "/galleryPics/9.webp?height=600&width=800" },
  ],
  // Page 2
  [
    { id: 10, type: "image", src: "/galleryPics/10.webp?height=600&width=800" },
    { id: 11, type: "video", src: "/galleryPics/11.webp?height=600&width=800", videoSrc: "/galleryPics/11.mp4?height=600&width=800" },
    { id: 12, type: "image", src: "/galleryPics/12.webp?height=600&width=800" },
    { id: 13, type: "image", src: "/galleryPics/13.webp?height=600&width=800" },
    { id: 14, type: "image", src: "/galleryPics/14.webp?height=600&width=800" },
    { id: 15, type: "video", src: "/galleryPics/15.webp?height=600&width=800", videoSrc: "/galleryPics/15.mp4?height=600&width=800" },
    { id: 16, type: "image", src: "/galleryPics/16.webp?height=600&width=800" },
    { id: 17, type: "image", src: "/galleryPics/17.webp?height=600&width=800" },
    { id: 18, type: "image", src: "/galleryPics/18.webp?height=600&width=800" },
  ],
  // Page 3
  [
    { id: 19, type: "image", src: "/galleryPics/19.webp?height=600&width=800" },
    { id: 20, type: "image", src: "/galleryPics/20.webp?height=600&width=800" },
    { id: 21, type: "video", src: "/galleryPics/21.webp?height=600&width=800", videoSrc: "/galleryPics/21.mp4?height=600&width=800" },
    { id: 22, type: "image", src: "/galleryPics/22.webp?height=600&width=800" },
    { id: 23, type: "image", src: "/galleryPics/23.webp?height=600&width=800" },
    { id: 24, type: "video", src: "/galleryPics/24.webp?height=600&width=800", videoSrc: "/galleryPics/24.mp4?height=600&width=800" },
    { id: 25, type: "image", src: "/galleryPics/25.webp?height=600&width=800" },
    { id: 26, type: "image", src: "/galleryPics/26.webp?height=600&width=800" },
    { id: 27, type: "image", src: "/galleryPics/27.webp?height=600&width=800" },
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

  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItem) {
        const flatGallery = galleryItems.flat();
        const currentIndex = flatGallery.findIndex(i => i.id === selectedItem.id);
        if (e.key === 'ArrowLeft') {
          const prevIndex = (currentIndex - 1 + flatGallery.length) % flatGallery.length;
          setSelectedItem(flatGallery[prevIndex]);
        } else if (e.key === 'ArrowRight') {
          const nextIndex = (currentIndex + 1) % flatGallery.length;
          setSelectedItem(flatGallery[nextIndex]);
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchMoveX = e.touches[0].clientX;
    const diff = touchStartXRef.current - touchMoveX;

    if (Math.abs(diff) > 50) {
      const flatGallery = galleryItems.flat();
      const currentIndex = flatGallery.findIndex(i => i.id === selectedItem?.id);
      const newIndex = diff > 0
        ? (currentIndex + 1) % flatGallery.length
        : (currentIndex - 1 + flatGallery.length) % flatGallery.length;
      setSelectedItem(flatGallery[newIndex]);
      touchStartXRef.current = null;
    }
  };


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
            className="group relative h-64 cursor-pointer overflow-hidden rounded-sm bg-white shadow-md transition-all hover:shadow-lg"
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
            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-700"
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
                  : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-700"
              }
              onClick={() => handlePageChange(index)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-700"
            disabled={currentPage === galleryItems.length - 1}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
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
                  <video 
                    src={selectedItem.videoSrc} 
                    controls 
                    className="h-full w-full rounded-lg"
                  />
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
