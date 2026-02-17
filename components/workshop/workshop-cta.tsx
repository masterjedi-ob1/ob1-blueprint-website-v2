"use client"

import { FileCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkshopCTA() {
  return (
    <section className="py-20 md:py-24 bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Warm divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-stone-700" />
            <div className="w-2 h-2 bg-orange-500 rotate-45" />
            <div className="h-px w-12 bg-stone-700" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Ready to put this thinking to{" "}
            <span className="text-orange-400">work?</span>
          </h2>
          <p className="text-base text-stone-400 mb-10 leading-relaxed max-w-lg mx-auto">
            Start with a diagnostic assessment to see where you stand,
            then let us help you build from there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6"
              onClick={() =>
                window.open(
                  "https://app.auditynow.com/survey/16b293db06d1",
                  "_blank"
                )
              }
            >
              <FileCheck className="h-4 w-4 mr-2" />
              Get Your AI Readiness Score
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-stone-700 text-stone-400 hover:bg-stone-900 hover:text-white hover:border-stone-600 px-8 py-6 bg-transparent"
              onClick={() =>
                window.open(
                  "https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form",
                  "_blank"
                )
              }
            >
              Talk to Us
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <p className="mt-10 text-sm text-stone-600">
            admin@ob1ai.co &nbsp;&middot;&nbsp; (234) 602-0500
          </p>
        </div>
      </div>
    </section>
  )
}
