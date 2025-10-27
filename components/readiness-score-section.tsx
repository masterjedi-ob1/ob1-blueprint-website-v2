"use client"

import { Clock, Gauge, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ReadinessScoreSection() {
  const benefits = [
    {
      icon: Clock,
      title: "5-Minute Assessment",
      description: "No marathon surveys. Just 12 focused questions about your current state.",
    },
    {
      icon: Gauge,
      title: "Instant Results",
      description: "Your personalized readiness score delivered immediately. No waiting.",
    },
    {
      icon: Shield,
      title: "No Spam, Ever",
      description: "We hate spam too. Just your score + one follow-up email. That's it.",
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Know Where You Stand: <span className="text-orange-500">Free AI Readiness Score</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Before you build a blueprint, you need to know your starting point. Our AI Readiness Score identifies your
            biggest opportunities in under 5 minutes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-8 border-2 border-slate-200 hover:border-orange-500 transition-colors">
              <benefit.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {["Assess", "Score", "Blueprint"].map((step, idx) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                    ${idx === 0 ? "bg-orange-500" : "bg-blue-500"}
                  `}
                  >
                    {idx + 1}
                  </div>
                  <span className="mt-2 text-sm font-semibold text-slate-700">{step}</span>
                </div>
                {idx < 2 && <div className="w-32 h-1 bg-slate-300 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Card className="max-w-3xl mx-auto p-8 bg-white border-l-4 border-orange-500 mb-8">
          <p className="text-lg text-slate-700 italic mb-4">
            "AI gives you back your most precious resource: your time & attention. You get to focus on work that
            matters. Work that brings meaning. Work that requires your uniqueness."
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/chris-mccarthy-profile.jpg"
              alt="Chris McCarthy"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-900">Chris McCarthy</p>
              <p className="text-sm text-slate-600">Founder & AI Solutions Architect</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-8"
            onClick={() => window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")}
          >
            Start Your Assessment
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="mt-4 text-sm text-slate-500">
            Results delivered instantly. No credit card. No follow-up calls unless you want one.
          </p>
        </div>
      </div>
    </section>
  )
}
