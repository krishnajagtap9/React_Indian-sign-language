"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { cn } from "../lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, setTheme } = useTheme()
  const [dropdownOpen, setDropdownOpen] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
    // Close any open dropdowns
    setDropdownOpen(null)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name)
  }

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "#",
      dropdown: true,
      items: [
        { name: "Predict", path: "/predict" },
        { name: "Text-to-Sign", path: "/text-to-sign" },
      ],
    },
    {
      name: "Tutorial",
      path: "/tutorial",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-3 md:py-4 px-4 md:px-6",
        scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold transition-transform hover:scale-105 flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-2">
            <span className="font-bold">VS</span>
          </div>
          <span className="flex items-center gap-1">
            <span className="text-primary">Vanni Sahayak</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-800",
                    dropdownOpen === link.name
                      ? "text-primary bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {link.name}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", dropdownOpen === link.name ? "rotate-180" : "")}
                  />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800",
                    location.pathname === link.path
                      ? "text-primary bg-gray-100 dark:bg-gray-800"
                      : "text-gray-700 dark:text-gray-300",
                  )}
                >
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div
                  className={cn(
                    "absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left",
                    dropdownOpen === link.name
                      ? "transform scale-100 opacity-100"
                      : "transform scale-95 opacity-0 pointer-events-none",
                  )}
                >
                  <div className="py-1">
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                          location.pathname === item.path
                            ? "text-primary font-medium"
                            : "text-gray-700 dark:text-gray-300",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700 transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out transform lg:hidden pt-20",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col p-6 space-y-2 overflow-y-auto max-h-screen pb-24">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={cn(
                      "flex justify-between items-center w-full px-4 py-3 rounded-md text-left font-medium transition-colors",
                      dropdownOpen === link.name
                        ? "bg-gray-100 dark:bg-gray-800 text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn("h-5 w-5 transition-transform", dropdownOpen === link.name ? "rotate-180" : "")}
                    />
                  </button>

                  <div
                    className={cn(
                      "pl-4 space-y-1 transition-all duration-200",
                      dropdownOpen === link.name ? "block" : "hidden",
                    )}
                  >
                    {link.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "block px-4 py-2 rounded-md text-sm transition-colors",
                          location.pathname === item.path
                            ? "bg-gray-100 dark:bg-gray-800 text-primary font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "block px-4 py-3 rounded-md font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-gray-100 dark:bg-gray-800 text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

