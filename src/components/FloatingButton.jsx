"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "../lib/utils"
import {Link} from "react-router-dom"

export default function FloatingButton() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when scrolling down, show when scrolling up
      if (window.scrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <Link
      to="/predict"
      className={cn(
        "fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-40 bg-primary text-primary-foreground rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
      )}
    >
      <span className="text-sm sm:text-base">Try Now</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  )
}

