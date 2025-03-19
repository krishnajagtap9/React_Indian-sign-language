// "use client"

// import { useState, useRef, useEffect } from "react"
// import { X, Play, Pause, Volume2, Volume1, VolumeX, Maximize, SkipBack, SkipForward } from "lucide-react"
// import { cn } from "../lib/utils"

// export default function VideoModal({ isOpen, onClose, videoSrc, title }) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [isMuted, setIsMuted] = useState(false)
//   const [isFullscreen, setIsFullscreen] = useState(false)
//   const [isClosing, setIsClosing] = useState(false)
//   const videoRef = useRef(null)
//   const modalRef = useRef(null)

//   useEffect(() => {
//     if (!isOpen) {
//       setIsPlaying(false)
//       setCurrentTime(0)
//       return
//     }

//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         handleClose()
//       } else if (e.key === " ") {
//         togglePlay()
//         e.preventDefault()
//       }
//     }

//     document.addEventListener("keydown", handleKeyDown)
//     return () => document.removeEventListener("keydown", handleKeyDown)
//   }, [isOpen])

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.play()
//       } else {
//         videoRef.current.pause()
//       }
//     }
//   }, [isPlaying])

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.volume = volume
//       videoRef.current.muted = isMuted
//     }
//   }, [volume, isMuted])

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying)
//   }

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime)
//     }
//   }

//   const handleLoadedMetadata = () => {
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration)
//     }
//   }

//   const handleSeek = (e) => {
//     const newTime = Number.parseFloat(e.target.value)
//     setCurrentTime(newTime)
//     if (videoRef.current) {
//       videoRef.current.currentTime = newTime
//     }
//   }

//   const handleVolumeChange = (e) => {
//     const newVolume = Number.parseFloat(e.target.value)
//     setVolume(newVolume)
//     setIsMuted(newVolume === 0)
//   }

//   const toggleMute = () => {
//     setIsMuted(!isMuted)
//     if (isMuted && volume === 0) {
//       setVolume(0.5)
//     }
//   }

//   const toggleFullscreen = () => {
//     if (!modalRef.current) return

//     if (!document.fullscreenElement) {
//       modalRef.current
//         .requestFullscreen()
//         .then(() => {
//           setIsFullscreen(true)
//         })
//         .catch((err) => {
//           console.error(`Error attempting to enable fullscreen: ${err.message}`)
//         })
//     } else {
//       document
//         .exitFullscreen()
//         .then(() => {
//           setIsFullscreen(false)
//         })
//         .catch((err) => {
//           console.error(`Error attempting to exit fullscreen: ${err.message}`)
//         })
//     }
//   }

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60)
//     const seconds = Math.floor(time % 60)
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
//   }

//   const skipForward = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration)
//     }
//   }

//   const skipBackward = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0)
//     }
//   }

//   const handleClose = () => {
//     setIsClosing(true)
//     setTimeout(() => {
//       onClose()
//       setIsClosing(false)
//     }, 300)
//   }

//   if (!isOpen) return null

//   return (
//     <div
//       className={cn(
//         "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4 transition-opacity duration-300",
//         isClosing ? "opacity-0" : "opacity-100",
//       )}
//       onClick={handleClose}
//     >
//       <div
//         ref={modalRef}
//         className={cn(
//           "relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-black transition-transform duration-300",
//           isClosing ? "scale-95" : "scale-100",
//         )}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={handleClose}
//           className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
//           aria-label="Close modal"
//         >
//           <X className="h-4 w-4 sm:h-5 sm:w-5" />
//         </button>

//         <video
//           ref={videoRef}
//           src={videoSrc}
//           className="h-full w-full"
//           onTimeUpdate={handleTimeUpdate}
//           onLoadedMetadata={handleLoadedMetadata}
//           onEnded={() => setIsPlaying(false)}
//         />

//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-4">
//           <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-medium text-white">{title}</h3>

//           <div className="mb-1 sm:mb-2 flex items-center">
//             <span className="mr-2 text-xs sm:text-sm text-white">{formatTime(currentTime)}</span>
//             <input
//               type="range"
//               min="0"
//               max={duration || 100}
//               value={currentTime}
//               onChange={handleSeek}
//               className="h-1 flex-grow appearance-none rounded-full bg-gray-600"
//               style={{
//                 backgroundSize: `${(currentTime / (duration || 1)) * 100}% 100%`,
//                 backgroundImage: "linear-gradient(to right, white, white)",
//               }}
//             />
//             <span className="ml-2 text-xs sm:text-sm text-white">{formatTime(duration)}</span>
//           </div>

//           <div className="flex flex-wrap items-center justify-between gap-2">
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <button
//                 onClick={skipBackward}
//                 className="text-white hover:text-gray-300"
//                 aria-label="Skip backward 10 seconds"
//               >
//                 <SkipBack className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>

//               <button
//                 onClick={togglePlay}
//                 className="rounded-full bg-white p-1.5 sm:p-2 text-black hover:bg-gray-200"
//                 aria-label={isPlaying ? "Pause" : "Play"}
//               >
//                 {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5" />}
//               </button>

//               <button
//                 onClick={skipForward}
//                 className="text-white hover:text-gray-300"
//                 aria-label="Skip forward 10 seconds"
//               >
//                 <SkipForward className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>
//             </div>

//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <div className="flex items-center space-x-1 sm:space-x-2">
//                 <button
//                   onClick={toggleMute}
//                   className="text-white hover:text-gray-300"
//                   aria-label={isMuted ? "Unmute" : "Mute"}
//                 >
//                   {isMuted ? (
//                     <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
//                   ) : volume > 0.5 ? (
//                     <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
//                   ) : (
//                     <Volume1 className="h-4 w-4 sm:h-5 sm:w-5" />
//                   )}
//                 </button>

//                 <input
//                   type="range"
//                   min="0"
//                   max="1"
//                   step="0.01"
//                   value={isMuted ? 0 : volume}
//                   onChange={handleVolumeChange}
//                   className="h-1 w-12 sm:w-16 appearance-none rounded-full bg-gray-600"
//                   style={{
//                     backgroundSize: `${(isMuted ? 0 : volume) * 100}% 100%`,
//                     backgroundImage: "linear-gradient(to right, white, white)",
//                   }}
//                 />
//               </div>

//               <button
//                 onClick={toggleFullscreen}
//                 className="text-white hover:text-gray-300"
//                 aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
//               >
//                 <Maximize className="h-4 w-4 sm:h-5 sm:w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { X, RotateCw, Volume2, Maximize, SkipBack, SkipForward } from "lucide-react"

export default function VideoModal({ isOpen, onClose, videoSrc, title }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-red-500">
            <X size={24} />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black rounded-lg">
          <iframe
            width="100%"
            height="100%"
            src={videoSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

       
      </div>
    </div>
  )
}
