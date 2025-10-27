"use client"

import { ArrowRight, FileCheck, Shield, MessageSquare, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const trustBadges = [
    {
      icon: Shield,
      text: "Enterprise Security via ",
      linkText: "Creddy",
      link: "https://www.creddy.me",
    },
    {
      icon: MessageSquare,
      text: "4 Conversations",
      linkText: null,
      link: null,
    },
    {
      icon: Award,
      text: "99% Satisfaction, 90 Day ROI MBG",
      linkText: null,
      link: null,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-orange-500">Blueprint?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Stop debating. Start building. Your competitors aren't waiting—and neither should you.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-8 shadow-2xl"
              onClick={() => window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")}
            >
              <FileCheck className="mr-3 h-6 w-6" />
              Get My AI Readiness Score
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white text-xl px-12 py-8 bg-transparent"
              onClick={() => window.open("https://cal.com/ob1ai/ai-audit-and-analysis", "_blank")}
            >
              Book a Blueprint Session
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-300">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <badge.icon className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">
                  {badge.text}
                  {badge.linkText && badge.link && (
                    <a
                      href={badge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline ml-1"
                    >
                      {badge.linkText}
                    </a>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Final Reassurance */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              <span className="text-green-400 font-semibold">Free Assessment.</span> No credit card required. No spam.
              Just your personalized AI roadmap in 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
