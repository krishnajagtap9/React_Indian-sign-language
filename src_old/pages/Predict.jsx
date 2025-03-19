"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Square, RefreshCw, Camera, CameraOff } from "lucide-react"

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
  
        <div className="grid md:grid-cols-2 gap-8">
          {/* Camera Section with Slide Animation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden" data-aos="slide-up">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
              {hasPermission === false && (
                <div className="text-center p-6">
                  <CameraOff className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Camera access denied. Please allow camera access to use this feature.
                  </p>
                  <button
                    onClick={startCamera}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Try Again
                  </button>
                </div>
              )}
  
              {hasPermission === null && !isLoading && (
                <div className="text-center p-6">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Camera access is required for gesture recognition.
                  </p>
                  <button
                    onClick={startCamera}
                    className="px-4 py-2 bg-primary text-secondary rounded-md hover:bg-primary/90"
                  >
                    Enable Camera
                  </button>
                </div>
              )}
  
              {isLoading && (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300">Accessing camera...</p>
                </div>
              )}
  
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`absolute inset-0 w-full h-full object-cover ${hasPermission ? "block" : "hidden"}`}
                onLoadedMetadata={() => setIsLoading(false)}
              />
  
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            </div>
  
            <div className="p-4 flex justify-center space-x-4">
              <button
                onClick={toggleRecognition}
                disabled={hasPermission === false}
                className={`flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-secondary ${
                  isActive ? "bg-red-500 hover:bg-red-600 text-secondary" : "bg-primary hover:bg-primary/90 text-secondary"
                } disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
              >
                {isActive ? (
                  <>
                    <Square className="h-4 w-4" /> Stop
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" /> Start
                  </>
                )}
              </button>
  
              <button
                onClick={resetRecognition}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <RefreshCw className="h-4 w-4" /> Reset
              </button>
            </div>
          </div>
  
          {/* Recognized Text Section with Slide Animation */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full" data-aos="slide-up">
              <h2 className="text-xl font-semibold mb-4">Recognized Text</h2>
  
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 min-h-[200px] max-h-[400px] overflow-y-auto">
                {recognizedText ? (
                  <p className="text-lg">{recognizedText}</p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 italic">
                    {isActive ? "Waiting for gestures..." : "Start recognition to see results here"}
                  </p>
                )}
              </div>
  
              <div className="mt-6">
                <h3 className="font-medium mb-2">Instructions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Position your hand clearly in the camera view</li>
                  <li>Make clear, deliberate gestures</li>
                  <li>Ensure good lighting for better recognition</li>
                  <li>Keep a neutral background if possible</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
  
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

