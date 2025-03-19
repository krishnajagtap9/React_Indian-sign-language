import { Tag } from "lucide-react"

export function ResultDisplay({ result }) {
  // Count occurrences of each class
  const classCounts = {}
  result.detectedClasses.forEach((className) => {
    classCounts[className] = (classCounts[className] || 0) + 1
  })

  return (
    <div className="space-y-6 mt-8">
      <h2 className="text-xl font-semibold">Detection Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg p-4 overflow-hidden shadow-sm">
          <h3 className="text-lg font-medium mb-3">Processed Image</h3>
          <div className="relative rounded-md overflow-hidden">
            <img
              src={result.imageData || "/placeholder.svg"}
              alt="Processed image with detections"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <Tag className="mr-2 h-5 w-5" />
            Detected Objects
          </h3>

          {Object.keys(classCounts).length > 0 ? (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {Object.entries(classCounts).map(([className, count]) => (
                  <span
                    key={className}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-800"
                  >
                    {className}: {count}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">Total objects detected: {result.detectedClasses.length}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No objects detected</p>
          )}
        </div>
      </div>
    </div>
  )
}

