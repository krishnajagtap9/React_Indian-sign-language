



"use client"

import { useState } from "react"
import { Play, ChevronDown, ChevronUp, Search } from "lucide-react"
import VideoModal from "../components/VideoModal"
import image1 from "../images/tumnailExpert.png"
import image2 from "../images/model_training.png"
import image3 from "../images/intro.png"
import tips from "../images/tips.png"
import conversion from "../images/text-to-sign.png"
import demo from "../images/demonstration.png"
import {Link} from "react-router-dom"


export default function Tutorial() {
  const [activeCategory, setActiveCategory] = useState("getting-started")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaqs, setExpandedFaqs] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({ src: "", title: "" })
  // Tutorial categories and content
  const tutorials = {
    "getting-started": [
      {
        id: "intro",
        title: "Introduction to Vanni Sahayak",
        description: "Learn about the platform and its features",
        duration: "2:20",
        thumbnail: image3,
        videoSrc: "https://www.youtube.com/embed/GtCh8cw5P4Y?si=3f4bghU3Zj6wJLAO",
      },
      {
        id: "setup",
        title: "How our model works",
        description: "Work on the Deep learning ",
        duration: "0:17",
        thumbnail: image2,
        videoSrc: "https://www.youtube.com/embed/mee1sArYZ-o?si=D1XWapinCGnGkt7s",
      },],
    //   {
    //     id: "navigation",
    //     title: "Navigating the Interface",
    //     description: "A tour of the Vanni Sahayak interface",
    //     duration: "4:10",
    //     thumbnail: "/placeholder.svg?height=200&width=350",
    //     videoSrc: "https://example.com/video3.mp4",
    //   },
    // ],
    "live-recognition": [
      {
        id: "camera-setup",
        title: "Setting Up Your Camera",
        description: "How to position your camera for optimal recognition",
        duration: "2:30",
        thumbnail: image1,
        videoSrc: "https://www.youtube.com/embed/AyqZWVlu6bs",
      },
      {
        id: "gesture-tips",
        title: "Gesture Recognition Tips",
        description: "Best practices for clear gesture recognition",
        duration: "8:42",
        thumbnail: tips,
        videoSrc: "https://www.youtube.com/embed/3yYjYvdcCw8?si=1_aD7SaCTSS9ZOzA",
      },
    ],
    "text-to-sign": [
      {
        id: "text-input",
        title: "Using Text to Sign Translation",
        description: "How to convert text to sign language gestures",
        duration: "6:54",
        thumbnail: conversion,
        videoSrc: "https://www.youtube.com/embed/9yu6dV4iQqs?si=3WGoPajtLhexIbF2",
      },
      {
        id: "Demonstaration",
        title: "Saving and Sharing Translations",
        description: "How to save and share your sign language translations",
        duration: "3:20",
        thumbnail: demo,
        videoSrc: "https://www.youtube.com/embed/oHkjzTplEWY?si=nlcS5r-woWW15vBa",
      },
    ],
    // advanced: [
    //   {
    //     id: "custom-gestures",
    //     title: "Creating Custom Gestures",
    //     description: "How to add custom gestures to the system",
    //     duration: "7:30",
    //     thumbnail: "/placeholder.svg?height=200&width=350",
    //     videoSrc: "https://example.com/video8.mp4",
    //   },
    //   {
    //     id: "integration",
    //     title: "Integration with Other Tools",
    //     description: "How to integrate Vanni Sahayak with other applications",
    //     duration: "5:50",
    //     thumbnail: "/placeholder.svg?height=200&width=350",
    //     videoSrc: "https://example.com/video9.mp4",
    //   },
    // ],
  }

  const faqs = [
    {
      id: "faq1",
      question: "What is Indian Sign Language (ISL)?",
      answer: "Indian Sign Language (ISL) is a visual-gestural language used by the deaf community in India. It has its own grammar, syntax, and vocabulary distinct from spoken languages.",
    },
    {
      id: "faq2",
      question: "How accurate is the gesture recognition?",
      answer: "Our gesture recognition system achieves approximately 90-95% accuracy under optimal conditions. We continuously improve our models through machine learning and user feedback.",
    },
    {
      id: "faq3",
      question: "Can I use Vanni Sahayak offline?",
      answer: "Currently, Vanni Sahayak requires an internet connection for full functionality. We're developing a lightweight offline mode for basic features in future updates.",
    },
    {
      id: "faq4",
      question: "How do I improve recognition accuracy?",
      answer: "Ensure good lighting, use a plain background, position your camera at an appropriate distance, and make clear, deliberate gestures.",
    },
    {
      id: "faq5",
      question: "Is my data private and secure?",
      answer: "Yes, we take data privacy seriously. All saved data is encrypted and stored securely according to industry standards.",
    },
  ]

  const allTutorials = Object.values(tutorials).flat()

  const filteredTutorials = searchQuery
    ? allTutorials.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tutorials[activeCategory]

  const toggleFaq = (id) => {
    setExpandedFaqs((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const openVideoModal = (videoSrc, title) => {
    setCurrentVideo({ src: videoSrc, title })
    setModalOpen(true)
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Tutorials & Help</h1>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Tabs */}
          {!searchQuery && (
            <div className="mb-8 flex flex-wrap gap-2">
              {Object.keys(tutorials).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white hover:bg-transparent border-2 border-primary  hover:text-primary"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </button>
              ))}
            </div>
          )}

          {/* Tutorial Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredTutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                onClick={() => openVideoModal(tutorial.videoSrc, tutorial.title)}
              >
                <div className="relative">
                  <img
                    src={tutorial.thumbnail }
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{tutorial.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{tutorial.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQs Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className=" flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {expandedFaqs.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {expandedFaqs.includes(faq.id) && (
                    <div className="p-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Still Need Help Section */}
          <div className="bg-primary/10 dark:bg-primary/20 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link
              to="/contact"
              className="nline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground transition-all hover:bg-primary/90 group"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc={currentVideo.src}
        title={currentVideo.title}
      />
    </div>
  )
}
