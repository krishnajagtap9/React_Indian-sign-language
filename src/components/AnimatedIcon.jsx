"use client"

import { useState } from "react"
import { cn } from "../lib/utils"

export default function AnimatedIcon({ defaultIcon, hoverIcon, className }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden transition-all duration-300", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out",
          isHovered ? "-translate-y-full" : "translate-y-0",
        )}
      >
        {defaultIcon}
      </div>
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out",
          isHovered ? "translate-y-0" : "translate-y-full",
        )}
      >
        {hoverIcon}
      </div>
    </div>
  )
}

