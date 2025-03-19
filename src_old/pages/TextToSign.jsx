"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Download, RefreshCw, Settings } from "lucide-react"

export default function TextToSign() {
  const [text, setText] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [currentWordIndex, setCurrentWordIndex] = useState(-1)
  const [signImages, setSignImages] = useState([])
  const playbackRef = useRef(null)
  const containerRef = useRef(null)

  // Mock sign language images for demonstration
  const mockSignImages = [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ]

  useEffect(() => {
    return () => {
      if (playbackRef.current) {
        clearTimeout(playbackRef.current)
      }
    }
  }, [])

  const handleTextChange = (e) => {
    setText(e.target.value)
    setCurrentWordIndex(-1)
    setIsPlaying(false)

    if (playbackRef.current) {
      clearTimeout(playbackRef.current)
    }

    // Generate sign images based on text
    if (e.target.value.trim()) {
      const words = e.target.value.trim().split(/\s+/)
      // In a real app, you would fetch actual sign images for each word
      // Here we're just using mock images
      const images = words.map((_, index) => mockSignImages[index % mockSignImages.length])
      setSignImages(images)
    } else {
      setSignImages([])
    }
  }

  const togglePlayback = () => {
    if (isPlaying) {
      stopPlayback()
    } else {
      startPlayback()
    }
  }

  const startPlayback = () => {
    if (!text.trim() || !signImages.length) return

    setIsPlaying(true)

    const words = text.trim().split(/\s+/)
    const startIndex = currentWordIndex < 0 ? 0 : currentWordIndex

    const playNextWord = (index) => {
      if (index >= words.length || !isPlaying) {
        setIsPlaying(false)
        setCurrentWordIndex(-1)
        return
      }

      setCurrentWordIndex(index)

      // Schedule next word based on playback speed
      playbackRef.current = setTimeout(() => {
        playNextWord(index + 1)
      }, 1000 / playbackSpeed)
    }

    playNextWord(startIndex)
  }

  const stopPlayback = () => {
    setIsPlaying(false)

    if (playbackRef.current) {
      clearTimeout(playbackRef.current)
    }
  }

  const resetPlayback = () => {
    stopPlayback()
    setCurrentWordIndex(-1)
  }

  const handleSpeedChange = (e) => {
    const newSpeed = Number.parseFloat(e.target.value)
    setPlaybackSpeed(newSpeed)

    // If currently playing, restart with new speed
    if (isPlaying) {
      stopPlayback()
      setTimeout(() => startPlayback(), 0)
    }
  }

  const downloadSignSequence = () => {
    // In a real app, this would generate and download a GIF or image sequence
    // For this demo, we'll just show an alert
    alert("Download functionality would save the sign sequence as a GIF or image sequence.")
  }

  return (
    <div className="pt-20 min-h-screen" >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto" data-aos="slide-up">
          <h1 className="text-3xl font-bold mb-8 text-center">Text to Sign Language</h1>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Enter Text</h2>
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Type any sentence to see its sign language translation..."
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[120px] focus:ring-2 focus:ring-primary focus:border-transparent"
            />

            <div className="mt-4 flex flex-wrap gap-4">
              <button
                onClick={togglePlayback}
                disabled={!text.trim() || !signImages.length}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-secondary rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" /> Play Animation
                  </>
                )}
              </button>

              <button
                onClick={resetPlayback}
                disabled={currentWordIndex < 0}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <RefreshCw className="h-4 w-4" /> Reset
              </button>

              <button
                onClick={downloadSignSequence}
                disabled={!signImages.length}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Download className="h-4 w-4" /> Download
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <Settings className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">Speed:</span>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={playbackSpeed}
                  onChange={handleSpeedChange}
                  className="w-24"
                />
                <span className="text-sm font-medium">{playbackSpeed}x</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6" data-aos="slide-up" data-aos-delay="500" data-aos-offset="100">
            <h2 className="text-xl font-semibold mb-6">Sign Language Translation</h2>

            {signImages.length > 0 ? (
              <div>
                <div className="relative mb-6">
                  <div
                    ref={containerRef}
                    className="flex justify-center items-center bg-gray-50 dark:bg-gray-900 rounded-lg p-4 h-[300px]"
                  >
                    {currentWordIndex >= 0 ? (
                      <div className="text-center">
                        <img
                          src={signImages[currentWordIndex] || "/placeholder.svg"}
                          alt={`Sign for word ${currentWordIndex + 1}`}
                          className="max-h-[250px] mx-auto"
                        />
                        <p className="mt-2 text-lg font-medium">{text.trim().split(/\s+/)[currentWordIndex]}</p>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <img
                          src="/placeholder.svg?height=200&width=200"
                          alt="Sign language placeholder"
                          className="max-h-[200px] mx-auto opacity-50"
                        />
                        <p className="mt-4">Press Play to start the animation</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-4" >
                  {text
                    .trim()
                    .split(/\s+/)
                    .map((word, index) => (
                      <div
                        key={index}
                        className={`p-2 text-center cursor-pointer rounded-md transition-colors ${
                          currentWordIndex === index
                            ? "bg-primary/20 border border-primary"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => {
                          setCurrentWordIndex(index)
                          stopPlayback()
                        }}
                      >
                        <p className="text-sm font-medium truncate">{word}</p>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <p>Enter text above to see the sign language translation</p>
              </div>
            )}
          </div>

          <div className="mt-12 bg-primary/10 dark:bg-primary/20 rounded-xl p-6" data-aos="fade" data-aos-offset="200" data-aos-delay="100">
            <h2 className="text-xl font-semibold mb-4">About This Feature</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Text-to-Sign feature converts written text into Indian Sign Language gestures. This tool is useful for
              learning sign language or preparing visual aids for communication.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              You can adjust the playback speed, download the sign sequence, and click on individual words to see their
              corresponding signs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

