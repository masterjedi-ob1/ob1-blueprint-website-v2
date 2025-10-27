"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"

export default function AudityEmbed() {
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    // Timeout fallback if Audity doesn't load
    const timeout = setTimeout(() => {
      const iframe = document.getElementById("audity-survey") as HTMLIFrameElement
      if (!iframe || !iframe.contentWindow) {
        setLoadError(true)
      }
    }, 5000)

    return () => clearTimeout(timeout)
  }, [])

  if (loadError) {
    return (
      <div className="p-8 border-2 border-red-500 rounded-lg bg-red-50">
        <div className="flex items-start gap-4">
          <AlertCircle className="h-8 w-8 text-red-500 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-red-900 mb-2">Survey Temporarily Unavailable</h3>
            <p className="text-red-700 mb-4">
              Our assessment tool is taking longer than expected to load. Skip the wait—book a call directly and we'll
              walk you through the readiness evaluation live.
            </p>
            <button
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
              onClick={() => window.open("https://cal.com/ob1ai/ai-audit-and-analysis", "_blank")}
            >
              Book Discovery Call Instead
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full" style={{ height: "800px" }}>
      <iframe
        id="audity-survey"
        src="https://app.auditynow.com/survey/16b293db06d1"
        className="w-full h-full border-0 rounded-lg shadow-lg"
        title="AI Readiness Score Assessment"
        allow="fullscreen"
      />
    </div>
  )
}
