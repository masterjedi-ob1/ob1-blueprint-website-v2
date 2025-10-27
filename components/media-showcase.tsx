"use client"

import { useState } from "react"
import { Play, FileText, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

type AssetType = "video" | "case-study" | "testimonial"

interface Asset {
  type: AssetType
  title: string
  description: string
  thumbnail?: string
  videoUrl?: string
  author?: string
  company?: string
  authorImage?: string
  link?: string
}

export default function MediaShowcase() {
  const [filter, setFilter] = useState<"all" | AssetType>("all")

  const assets: Asset[] = [
    {
      type: "video",
      title: "OB.1 Announces Strategic Partnership with Audity AI",
      description:
        "Ohio-based SaaS and Midwest team @ OB.1 AI Solutions deliver end-to-end value to SMBs looking to move the needle",
      thumbnail: "/ob1-audity-partnership.png",
      link: "https://auditynow.com",
    },
    {
      type: "case-study",
      title: "Company Case Study: AI-Driven Efficiency Transformation",
      description:
        "Mid-sized manufacturing company achieves 42% operational efficiency, 35% faster decisions, and 98% reporting accuracy",
      thumbnail: "/company-case-study.png",
    },
    {
      type: "video",
      title: "Lunch and Learn: OB.1 Ignites with Local Kent State University's Entrepreneur Program",
      description: "Learning in the AI Era - Smart Minds for a Smart World",
      thumbnail: "/learning-in-ai-era.png",
    },
    {
      type: "testimonial",
      title: "Founder Testimonial: AI That Gives You Time Back",
      description:
        '"AI gives you back your most precious resource: your time & attention. You get to focus on work that matters. Work that brings meaning. Work that requires your uniqueness."',
      thumbnail: "/testimonial-handshake.jpg",
      author: "Chris McCarthy",
      company: "Founder & AI Solutions Architect",
      authorImage: "/chris-mccarthy-profile.jpg",
    },
    {
      type: "video",
      title: "From Chaos to Clarity: AI Transformation",
      description: "Real executive shares their journey from AI confusion to operational excellence",
      thumbnail: "/executive-presenting-ai-strategy.jpg",
    },
    {
      type: "case-study",
      title: "Manufacturing Firm: 40% Efficiency Gain",
      description: "Automated quality control processes with computer vision AI",
      thumbnail: "/manufacturing-automation-technology.jpg",
    },
  ]

  const filteredAssets = filter === "all" ? assets : assets.filter((a) => a.type === filter)

  return (
    <section className="py-24 bg-slate-50" id="resources">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            See OB.1 <span className="text-orange-500">in Action</span>
          </h2>
          <p className="text-xl text-slate-600">
            Real projects. Real results. Real executives who stopped debating and started building.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "video", "case-study", "testimonial"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-colors
                ${
                  filter === tab
                    ? "bg-orange-500 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100 border-2 border-slate-200"
                }
              `}
            >
              {tab === "all"
                ? "All"
                : tab
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ")}
            </button>
          ))}
        </div>

        {/* Asset Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredAssets.map((asset, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border-2 border-slate-200 hover:border-orange-500 transition-all group cursor-pointer"
              onClick={() => {
                if (asset.link) {
                  window.open(asset.link, "_blank", "noopener,noreferrer")
                }
              }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-slate-300 overflow-hidden">
                {asset.thumbnail && (
                  <img
                    src={asset.thumbnail || "/placeholder.svg"}
                    alt={asset.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {asset.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                )}
                {asset.type === "case-study" && (
                  <div className="absolute top-4 left-4">
                    <FileText className="h-8 w-8 text-orange-500" />
                  </div>
                )}
                {asset.type === "testimonial" && (
                  <div className="absolute top-4 left-4">
                    <Quote className="h-8 w-8 text-blue-500" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {idx === 0 ? (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      OB.1 Announces Strategic Partnership with{" "}
                      <span className="text-purple-600 font-bold">Audity AI</span>
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">{asset.description}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{asset.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{asset.description}</p>
                  </>
                )}

                {asset.author && (
                  <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                    {asset.authorImage ? (
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={asset.authorImage || "/placeholder.svg"}
                          alt={asset.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-slate-300" />
                    )}
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{asset.author}</p>
                      <p className="text-xs text-slate-500">{asset.company}</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredAssets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No assets found. Check back soon for more content!</p>
          </div>
        )}
      </div>
    </section>
  )
}
