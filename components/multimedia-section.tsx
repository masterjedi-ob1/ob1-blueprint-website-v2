"use client"

import { Play, Podcast, Presentation, Video, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const multimediaContent = [
  {
    type: "workshop",
    title: "Live Workshop: AI Readiness Assessment Walkthrough",
    description:
      "60-minute guided session demonstrating how to evaluate your organization's AI maturity across 5 operational dimensions.",
    duration: "62 min",
    format: "Video Recording",
    thumbnail: "/ai-blueprint-workshop-presentation.jpg",
    link: "#",
    date: "Dec 2024",
  },
  {
    type: "demo",
    title: "Platform Demo: Audity AI Assessment Tool",
    description:
      "Complete walkthrough of our AI diagnostics platform showing how we analyze 47+ operational metrics to generate custom implementation roadmaps.",
    duration: "18 min",
    format: "Screen Recording",
    thumbnail: "/business-analytics-dashboard.png",
    link: "https://app.auditynow.com/survey/16b293db06d1",
    date: "Nov 2024",
  },
  {
    type: "presentation",
    title: "Executive Briefing: The Cost of AI Implementation Delay",
    description:
      "Research-backed presentation on competitive disadvantage, opportunity cost, and market positioning for AI-hesitant organizations.",
    duration: "32 min",
    format: "Slide Deck + Video",
    thumbnail: "/executive-presenting-ai-strategy.jpg",
    link: "#",
    date: "Nov 2024",
  },
]

const podcasts = [
  {
    title: "Building AI-First Operations Without the Technical Debt",
    guest: "Chris McCarthy, Founder",
    platform: "Spotify",
    duration: "45 min",
    link: "#",
  },
  {
    title: "From Vendor Chaos to Strategic AI: The OB.1 Approach",
    guest: "Chris McCarthy, Founder",
    platform: "Apple Podcasts",
    duration: "38 min",
    link: "#",
  },
]

export default function MultimediaSection() {
  return (
    <section id="multimedia" className="py-16 bg-gradient-to-b from-white to-[#F5E6D3] relative">
      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2c5282 1px, transparent 1px),
            linear-gradient(to bottom, #2c5282 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl font-bold text-blue-950 mb-3">
            Interactive <span className="text-orange-600">Resources</span>
          </h2>
          <p className="text-slate-700 text-lg">Workshops, demonstrations, and executive briefings</p>
        </div>

        {/* Video Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {multimediaContent.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white border-2 border-blue-900/20 hover:border-orange-600 transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-blue-900/10 overflow-hidden">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center group-hover:bg-orange-700 transition-colors shadow-lg">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-blue-950/80 text-white text-xs px-2 py-1 font-mono">
                  {item.duration}
                </div>

                {/* Type badge */}
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-2 py-1 font-bold uppercase">
                  {item.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-950 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Video className="h-3 w-3" />
                    {item.format}
                  </span>
                  <span>{item.date}</span>
                </div>

                <Button
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Watch Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Podcast Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <Podcast className="h-7 w-7 text-orange-600" />
            Podcast Appearances
          </h3>

          <div className="space-y-4">
            {podcasts.map((podcast, idx) => (
              <Card
                key={idx}
                className="bg-white border-2 border-blue-900/20 hover:border-orange-600 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-grow">
                    <div className="w-12 h-12 bg-orange-100 border-2 border-orange-600 flex items-center justify-center flex-shrink-0">
                      <Podcast className="h-6 w-6 text-orange-600" />
                    </div>

                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-blue-950 mb-1 group-hover:text-orange-600 transition-colors">
                        {podcast.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span>{podcast.guest}</span>
                        <span>•</span>
                        <span>{podcast.platform}</span>
                        <span>•</span>
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-blue-950 text-white p-8 border-4 border-blue-900 relative">
            {/* Blueprint corner marks */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-orange-600" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-orange-600" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-orange-600" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-orange-600" />

            <h3 className="text-2xl font-bold mb-3">Ready to Build Your Implementation Blueprint?</h3>
            <p className="text-blue-100 mb-6">
              Start with a diagnostic assessment to understand your AI readiness score and receive a custom
              implementation roadmap.
            </p>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-800 text-lg px-8 py-6"
              onClick={() => window.open("https://app.auditynow.com/survey/16b293db06d1", "_blank")}
            >
              <Presentation className="h-5 w-5 mr-2" />
              Get Your AI Readiness Score
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
