"use client"

import Image from "next/image"

const team = [
  {
    name: "Chris McCarthy",
    title: "Founder & Solutions Architect",
    photo: "/chris-mccarthy-profile.jpg",
    initials: null,
    bio: "Operations veteran turned AI strategist. Designs the blueprints that bridge business reality and technology ambition.",
  },
  {
    name: "Chloe Shepard",
    title: "Front-End / UX Architect",
    photo: null,
    initials: "CS",
    bio: "Translates complex systems into intuitive interfaces. Ensures every deliverable looks as sharp as it performs.",
  },
  {
    name: "Jeremy Krystosik",
    title: "Strategic Partner, Audity AI",
    photo: null,
    initials: "JK",
    bio: "Co-architect of the AI Readiness Assessment platform. Brings enterprise diagnostic methodology to OB.1 engagements.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                The Team
              </span>
              <div className="h-px w-12 bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-balance">
              Small Team.{" "}
              <span className="text-orange-500">Big Architecture.</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              We keep the team tight so every engagement gets senior-level
              attention from start to finish.
            </p>
          </div>

          {/* Team cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-stone-200 rounded-lg p-8 text-center hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {/* Photo or styled placeholder */}
                <div className="flex justify-center mb-6">
                  {member.photo ? (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-stone-200">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center border-2 border-stone-200">
                      <span className="text-2xl font-bold text-slate-400">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-stone-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-mono text-orange-500 uppercase tracking-wider mb-4">
                  {member.title}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
