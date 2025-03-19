"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import ImageCarousel from "../components/ImageCarousel"
import AnimatedIcon from "../components/AnimatedIcon"
import { Laptop, LaptopIcon as LaptopCode, Video, VideoOff, MessageSquare, MessageSquareText } from "lucide-react"
import AOS from "aos";
import "../../src/../node_modules/aos/dist/aos.css"
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  
  
  const carouselImages = [
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Sign language translation in action",
      caption: "Real-time sign language translation",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Text to sign language conversion",
      caption: "Convert text to sign language gestures",
    },
    {
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Educational tool for learning sign language",
      caption: "Learn Indian Sign Language with our tutorials",
    },
  ]

  const features = [
    {
      title: "Live Gesture Recognition",
      description: "Real-time camera-based hand gesture recognition that converts gestures into text.",
      defaultIcon: <Video className="h-6 w-6 text-primary" />,
      hoverIcon: <VideoOff className="h-6 w-6 text-primary" />,
    },
    {
      title: "Text to Sign Translation",
      description: "Type any sentence and see its sign language translation with gesture images.",
      defaultIcon: <MessageSquare className="h-6 w-6 text-primary" />,
      hoverIcon: <MessageSquareText className="h-6 w-6 text-primary" />,
    },
    {
      title: "Interactive Tutorials",
      description: "Step-by-step video tutorials explaining how to use the platform and learn sign language.",
      defaultIcon: <Laptop className="h-6 w-6 text-primary" />,
      hoverIcon: <LaptopCode className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://tse4.mm.bing.net/th?id=OIP.-IUZz3zCcl1K6f9SywtnugHaEK&pid=Api&P=0&h=180?height=1080&width=1920')] bg-cover bg-center opacity-10" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
                <span className="block text-primary">
                  <Typewriter words={["Vanni Sahayak"]} loop={false} cursor cursorStyle="|" typeSpeed={200} />
                </span>
                <span className="block">
                 
                 Bridging Communication with Indian Sign Language
                    
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl text-pretty" data-aos="fade-up">
                
                    "Breaking barriers in communication with advanced AI-powered sign language recognition and translation technology.",
                
              </p>
              <div className="flex flex-wrap gap-4">
              <Link
        to="/predict"
        className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-primary transition-all hover:bg-gray-400 group"
        data-aos="fade-up">
        Try Now
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
                <Link
                  to="/tutorial"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-2.5 transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
                  data-aos="fade-up" >
                  Learn More
                </Link>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <ImageCarousel images={carouselImages} className="rounded-xl overflow-hidden shadow-xl" />
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="#features"
              className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
            >
              <span className="mb-2 text-sm">Discover More</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up">Powerful Features</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up"  data-aos-delay="250">
              Explore the innovative tools that make Vanni Sahayak the leading platform for Indian Sign Language
              translation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up"  data-aos-delay="250"> 
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}
              >
                <div className="mb-4">
                  <AnimatedIcon defaultIcon={feature.defaultIcon} hoverIcon={feature.hoverIcon} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/predict"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground transition-all hover:bg-primary/90 group"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      
     {/* Quick Start Guide */}
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" data-aos="fade-up">
        Quick Start Guide
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="250">
        Get started with Vanni Sahayak in just a few simple steps.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          step: "1",
          title: "Choose a Mode",
          description: "Select between live gesture recognition or text-to-sign translation.",
        },
        {
          step: "2",
          title: "Grant Permissions",
          description: "Allow camera access for live gesture recognition if needed.",
        },
        {
          step: "3",
          title: "Start Translating",
          description: "Begin using hand gestures or typing text for translation.",
        },
        {
          step: "4",
          title: "Save & Share",
          description: "Save your translations or share them with others.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-white dark:bg-gray-800/80 rounded-xl p-6 shadow-md"
          data-aos="zoom-in"
          data-aos-delay={200 * (index + 1)} // Progressive delay for each card
        >
          <div className="absolute -top-4 -left-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
            {item.step}
          </div>
          <div className="pt-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* CTA Section */}
<section className="relative py-16 md:py-24 text-white" data-aos="fade" data-aos-offset="200">
  {/* Blurred Background Image */}
  <div className="absolute inset-0 bg-[url('https://tse4.mm.bing.net/th?id=OIP.cxzLJfKcQcfJDQNqhL0GewHaFV&pid=Api&P=0&h=180')] bg-cover bg-center blur-sm"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
      Ready to Bridge the Communication Gap?
    </h2>
    <p className="max-w-2xl mx-auto mb-8 text-white/90">
      Start using Vanni Sahayak today and experience the power of AI-driven sign language translation.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        to="/predict"
        className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-primary transition-all hover:bg-gray-100 group"
      >
        Try Now
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
      <Link
        to="/tutorial"
        className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-white transition-all hover:bg-white/10"
      >
        Learn More
      </Link>
    </div>
  </div>
</section>

    </div>
  )
}

