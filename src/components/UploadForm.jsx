"use client"

import { useState } from "react"
import { Upload, ImageIcon, Loader2 } from "lucide-react"
import { ResultDisplay } from "./ResultDisplay"

export function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    setError(null)
    setResult(null)

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedFile) {
      setError("Please select an image to upload")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", selectedFile)

      const response = await fetch("https://krish09bha-vaani-sahayak.hf.space/upload_frame/", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()

      // Convert hex string back to binary data and create a blob URL
      const imageBytes = new Uint8Array(data.image.match(/.{1,2}/g).map((byte) => Number.parseInt(byte, 16)))
      const blob = new Blob([imageBytes], { type: "image/jpeg" })
      const imageUrl = URL.createObjectURL(blob)

      setResult({
        detectedClasses: data.detected_classes,
        imageData: imageUrl,
      })
    } catch (err) {
      console.error("Error uploading image:", err)
      setError("Failed to process image. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input type="file" id="file-upload" className="hidden" accept="image/*" onChange={handleFileChange} />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center gap-2">
            <Upload className="h-10 w-10 text-gray-400" />
            <span className="text-sm text-gray-500">
              {selectedFile ? selectedFile.name : "Click to upload an image"}
            </span>
          </label>

          {preview && (
            <div className="mt-4">
              <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-64 mx-auto rounded-md" />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md py-2 px-4 transition-colors hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              Processing...
            </>
          ) : (
            <>
              <ImageIcon className="h-4 w-4" />
              Detect Objects
            </>
          )}
        </button>
      </form>

      {error && <div className="p-4 bg-red-50 text-red-600 rounded-md">{error}</div>}

      {result && <ResultDisplay result={result} />}
    </div>
  )
}

