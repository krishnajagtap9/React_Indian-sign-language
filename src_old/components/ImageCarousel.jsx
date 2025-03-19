"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"

export default function ImageCarousel({ images, autoPlay = true, interval = 5000, className }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const autoPlayRef = useRef(null)
  const containerRef = useRef(null)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    if (autoPlay && !isPaused) {
      autoPlayRef.current = setInterval(goToNext, interval)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, interval, isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 md:p-4 text-white">
                <p className="text-xs md:text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 md:p-2 text-white transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 md:p-2 text-white transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 space-x-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-1.5 md:h-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-3 md:w-4" : "bg-white/50 w-1.5 md:w-2 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

