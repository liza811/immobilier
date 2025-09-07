"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SlideProps {
  image: string
  title: string
  description: string
}

const slides: SlideProps[] = [
  {
    image: "https://i.pinimg.com/736x/ce/b4/42/ceb44263e08f0d18ff69c034a90bd599.jpg",
    title: "Meubles de qualité pour votre intérieur",
    description: "Découvrez notre collection de meubles de qualité pour tous les espaces de votre maison",
  },
  {
    image: "https://i.pinimg.com/736x/cf/3d/9f/cf3d9f473c680cc2235444203a954fd2.jpg",
    title: "Design et confort au meilleur prix",
    description: "Des meubles élégants et confortables qui s'adaptent à votre style de vie",
  },
  {
    image: "https://i.pinimg.com/736x/fc/2a/71/fc2a71e2178697a1f46de9fc3bcfe00a.jpg",
    title: "Fabrication sur mesure",
    description: "Créez le meuble parfait pour votre intérieur avec notre service de fabrication sur mesure",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#065053] hover:bg-[#065053]/90">
                  <Link href="/#catalogue">Découvrir notre catalogue</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  <Link href="/commander-sur-mesure">Commander sur mesure</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Slide précédente"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Slide suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
