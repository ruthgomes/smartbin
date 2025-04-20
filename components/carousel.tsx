"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fase inicial do projeto SmartBin",
    caption: "Fase inicial do projeto - Planejamento e design",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Desenvolvimento dos protótipos",
    caption: "Desenvolvimento dos protótipos das lixeiras inteligentes",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Testes em campo",
    caption: "Testes em campo com os primeiros usuários",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Implementação em larga escala",
    caption: "Implementação em larga escala em áreas urbanas",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Projeto finalizado",
    caption: "Projeto finalizado e em operação",
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-xl">
        <div className="relative aspect-[16/9]">
          <Image
            src={carouselImages[currentIndex].src || "/placeholder.svg"}
            alt={carouselImages[currentIndex].alt}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <p className="text-center font-medium">{carouselImages[currentIndex].caption}</p>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-blue-500 text-blue-500"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-blue-500 text-blue-500"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
