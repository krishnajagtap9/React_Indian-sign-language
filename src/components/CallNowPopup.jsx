"use client"

import { useState, useEffect } from "react"
import { X, Phone } from "lucide-react"
import { cn } from "../lib/utils"

export default function CallNowPopup({ phone = "+917440780233", delay = 3000 }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300)
  }

  const handleWhatsAppCall = () => {
    const whatsappLink = `https://wa.me/${phone.replace("+", "")}`
    window.open(whatsappLink, "_blank") // Opens WhatsApp chat in a new tab
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-16 sm:bottom-24 right-4 sm:right-8 z-50 max-w-xs sm:max-w-sm rounded-lg bg-white p-3 sm:p-4 shadow-lg dark:bg-gray-800 transition-all duration-300",
        isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
      )}
    >
      <button
        onClick={handleClose}
        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Close popup"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Need assistance?</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Call us now on WhatsApp</p>
        </div>
      </div>
      <button
        onClick={handleWhatsAppCall}
        className="mt-3 sm:mt-4 block w-full rounded-md bg-green-500 py-2 text-center font-medium text-white transition-colors hover:bg-green-600 text-sm sm:text-base"
      >
        Call on WhatsApp
      </button>
    </div>
  )
}
