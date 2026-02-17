"use client"

import {
  Play,
  Podcast,
  Video,
  ExternalLink,
  Clock,
} from "lucide-react"
import Image from "next/image"

const multimediaContent = [
  {
    type: "Workshop",
    title: "Live Workshop: AI Readiness Assessment Walkthrough",
    description:
      "60-minute guided session demonstrating how to evaluate your organization's AI maturity across 5 operational dimensions.",
    duration: "62 min",
    format: "Video Recording",
    thumbnail: "/ai-blueprint-workshop-presentation.jpg",
    href: "#",
    external: false,
    date: "Dec 2024",
  },
  {
    type: "Demo",
    title: "Platform Demo: Audity AI Assessment Tool",
    description:
      "Complete walkthrough of our AI diagnostics platform showing how we analyze 47+ operational metrics to generate custom implementation roadmaps.",
    duration: "18 min",
    format: "Screen Recording",
    thumbnail: "/business-analytics-dashboard.png",
    href: "https://app.auditynow.com/survey/16b293db06d1",
    external: true,
    date: "Nov 2024",
  },
  {
    type: "Briefing",
    title: "Executive Briefing: The Cost of AI Implementation Delay",
    description:
      "Research-backed presentation on competitive disadvantage, opportunity cost, and market positioning for AI-hesitant organizations.",
    duration: "32 min",
    format: "Slide Deck + Video",
    thumbnail: "/executive-presenting-ai-strategy.jpg",
    href: "#",
    external: false,
    date: "Nov 2024",
  },
]

const podcasts = [
  {
    title: "Building AI-First Operations Without the Technical Debt",
    guest: "Chris McCarthy, Founder",
    platform: "Spotify",
    duration: "45 min",
    href: "#",
    external: true,
  },
  {
    title: "From Vendor Chaos to Strategic AI: The OB.1 Approach",
    guest: "Chris McCarthy, Founder",
    platform: "Apple Podcasts",
    duration: "38 min",
    href: "#",
    external: true,
  },
]

const comingSoonMedia = [
  {
    title: "Workshop Series: Building Your First AI Use-Case Map",
    format: "Live + Recorded",
    expected: "Q2 2025",
  },
  {
    title: "Case Study Walkthroughs: 3 Midwest Manufacturers",
    format: "Video Series",
    expected: "Q1 2025",
  },
]

export default function WorkshopMultimedia() {
  return (
    <section id="multimedia" className="py-20 md:py-28 bg-[#F5E6D3]">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-orange-500" />
            <span className="text-[11px] font-mono text-orange-700 uppercase tracking-[0.15em]">
              Multimedia
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-balance">
            Watch. Listen. Learn.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Workshops, demonstrations, and executive briefings — the closest
            thing to being in the room.
          </p>
        </div>

        {/* Video cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {multimediaContent.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group block bg-white border border-stone-200 hover:border-orange-400 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-stone-100 overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-orange-500/90 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all shadow-lg">
                    <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 font-mono">
                  {item.duration}
                </div>

                {/* Type badge */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] px-2.5 py-1 font-bold uppercase tracking-wider">
                  {item.type}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                  {item.title}
                  {item.external && (
                    <ExternalLink className="inline-block h-3 w-3 ml-1.5 text-stone-300 align-baseline" />
                  )}
                </h3>

                <p className="text-sm text-stone-500 mb-4 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-4 border-t border-stone-100">
                  <span className="flex items-center gap-1.5">
                    <Video className="h-3 w-3" />
                    {item.format}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Podcast section */}
        <div className="max-w-3xl mb-16">
          <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3">
            <Podcast className="h-5 w-5 text-orange-500" />
            Podcast Appearances
          </h3>

          <div className="space-y-3">
            {podcasts.map((podcast, idx) => (
              <a
                key={idx}
                href={podcast.href}
                target={podcast.external ? "_blank" : undefined}
                rel={podcast.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 bg-white border border-stone-200 hover:border-orange-400 p-4 md:p-5 transition-all duration-300 hover:shadow-md rounded-sm"
              >
                <div className="flex items-center gap-4 flex-grow min-w-0">
                  <div className="w-10 h-10 bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                    <Podcast className="h-4 w-4 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-stone-900 group-hover:text-orange-600 transition-colors text-sm leading-snug">
                      {podcast.title}
                      {podcast.external && (
                        <ExternalLink className="inline-block h-3 w-3 ml-1.5 text-stone-300 align-baseline" />
                      )}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-stone-400 mt-1">
                      <span>{podcast.guest}</span>
                      <span className="text-stone-300 hidden sm:inline">|</span>
                      <span>{podcast.platform}</span>
                      <span className="text-stone-300 hidden sm:inline">|</span>
                      <span>{podcast.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                    <Play className="h-3.5 w-3.5 text-orange-500 group-hover:text-white transition-colors ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Coming Soon — deliberate "In Production" treatment */}
        <div className="max-w-3xl">
          <h3 className="text-base font-bold text-stone-900 mb-6 flex items-center gap-3">
            <Clock className="h-4 w-4 text-orange-500" />
            In Production
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {comingSoonMedia.map((item, idx) => (
              <div
                key={idx}
                className="relative border-2 border-dashed border-stone-300 bg-white/50 p-5 overflow-hidden"
              >
                {/* Corner ribbon */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-2 -right-4 w-20 rotate-45 bg-orange-100 text-center">
                    <span className="text-[8px] font-mono text-orange-600 uppercase tracking-wider">Soon</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-semibold text-stone-600 text-sm leading-snug pr-8">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                    ETA {item.expected}
                  </span>
                </div>
                <p className="text-xs text-stone-400">{item.format}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
