"use client"

import { ArrowRight, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              Get Started
            </span>
            <div className="h-px w-12 bg-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Ready to survey the terrain?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start with a conversation. No pitch, no pressure — just clarity on
            where you stand and what{"'"}s possible.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
              onClick={() =>
                window.open(
                  "https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form",
                  "_blank"
                )
              }
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-500 text-lg px-8 py-6 bg-transparent"
              onClick={() =>
                window.open(
                  "https://app.auditynow.com/survey/16b293db06d1",
                  "_blank"
                )
              }
            >
              <FileCheck className="mr-2 h-5 w-5" />
              Get Your AI Readiness Score
            </Button>
          </div>

          {/* Contact info */}
          <p className="text-sm text-slate-500 font-mono">
            master_jedi@ob1ai.co &nbsp;|&nbsp; 234.602.0500
          </p>
        </div>
      </div>
    </section>
  )
}
