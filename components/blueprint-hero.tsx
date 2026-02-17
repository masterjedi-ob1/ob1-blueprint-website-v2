"use client"

import { FileText, Layers, Ruler } from "lucide-react"

export default function BlueprintHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2c5282 1px, transparent 1px),
            linear-gradient(to bottom, #2c5282 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Technical lines decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Technical drawing style header */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-blue-900" />
            <Ruler className="h-8 w-8 text-blue-900" />
            <div className="h-px w-24 bg-blue-900" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-950">
            The <span className="text-orange-600">Foundation</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-900 mb-4 font-medium">
            Technical Blueprints for AI Implementation
          </p>

          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            Precision-engineered resources, architectural frameworks, and strategic intelligence for executives building
            AI-powered operational excellence.
          </p>

          {/* Category indicators with blueprint style */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border-2 border-blue-900 p-6 relative">
              <div className="absolute top-2 right-2 text-xs text-blue-900 font-mono">REV. A</div>
              <FileText className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-bold text-blue-950 mb-2">Blog & Insights</h3>
              <p className="text-sm text-slate-700">Strategic thinking and operational analysis</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border-2 border-blue-900 p-6 relative">
              <div className="absolute top-2 right-2 text-xs text-blue-900 font-mono">REV. A</div>
              <Layers className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-bold text-blue-950 mb-2">Whitepapers</h3>
              <p className="text-sm text-slate-700">Technical documentation and research</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border-2 border-blue-900 p-6 relative">
              <div className="absolute top-2 right-2 text-xs text-blue-900 font-mono">REV. A</div>
              <Ruler className="h-8 w-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-bold text-blue-950 mb-2">Multimedia</h3>
              <p className="text-sm text-slate-700">Workshops, demos, and presentations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
