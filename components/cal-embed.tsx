"use client"

import { useEffect } from "react"

export default function CalEmbed() {
  useEffect(() => {
    // Cal.com embed script
    const script = document.createElement("script")
    script.src = "https://app.cal.com/embed/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full" style={{ height: "700px" }}>
      <div
        data-cal-link="ob1ai/ai-audit-and-analysis"
        data-cal-config='{"layout":"month_view","theme":"light"}'
        className="w-full h-full"
      />
    </div>
  )
}
