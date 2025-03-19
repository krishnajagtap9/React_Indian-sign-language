"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Square, RefreshCw, Camera, CameraOff } from "lucide-react"
import {UploadForm} from "../components/UploadForm"

export default function Predict() {
  const [isActive, setIsActive] = useState(false)
  const [recognizedText, setRecognizedText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasPermission, setHasPermission] = useState(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)

  useEffect(() => {
    return () => {
      // Clean up video stream when component unmounts
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  const startCamera = async () => {
    try {
      setIsLoading(true)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: "user",
        },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        setHasPermission(true)
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      setHasPermission(false)
    } finally {
      setIsLoading(false)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
    }
    setIsActive(false)
  }

  const toggleRecognition = () => {
    if (isActive) {
      stopRecognition()
    } else {
      startRecognition()
    }
  }

  const startRecognition = () => {
    if (!hasPermission) {
      startCamera()
      return
    }

    setIsActive(true)

    // Simulate recognition with random words
    // In a real app, this would be connected to your ML model
    const words = [
      "Hello",
      "Thank you",
      "Please",
      "Yes",
      "No",
      "Help",
      "Sorry",
      "Good",
      "Bad",
      "Welcome",
      "Name",
      "Friend",
      "Family",
      "Learn",
      "Understand",
    ]

    const simulateRecognition = () => {
      if (!isActive) return

      const randomWord = words[Math.floor(Math.random() * words.length)]
      setRecognizedText((prev) => (prev ? `${prev} ${randomWord}` : randomWord))

      // Continue simulation while active
      setTimeout(simulateRecognition, 2000)
    }

    // Start the simulation
    simulateRecognition()
  }

  const stopRecognition = () => {
    setIsActive(false)
  }

  const resetRecognition = () => {
    setRecognizedText("")
  }

  return (
    <div className="pt-20 min-h-screen">
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Live Gesture Recognition</h1>
  
 
  <UploadForm/>

        {/* About This Feature Section with Fade Animation */}
        <div className="mt-12 bg-primary/10 dark:bg-primary/20 rounded-xl p-6" data-aos="fade-up" data-aos-offset="200">
          <h2 className="text-xl font-semibold mb-4">About This Feature</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Live Gesture Recognition feature uses advanced machine learning to detect and interpret Indian Sign
            Language gestures in real-time. Our model has been trained on thousands of examples to provide accurate
            translations.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            For best results, ensure good lighting and position your hands clearly in the frame. The system works best
            with deliberate, clear gestures.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}
