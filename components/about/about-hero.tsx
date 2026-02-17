"use client"

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-950">
      {/* Subtle warm-tinted grid (not full blueprint — differentiate from Services) */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#60A5FA 1px, transparent 1px),
              linear-gradient(90deg, #60A5FA 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Orange accent line across the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              About OB.1
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight text-balance">
            Built in Ohio.
            <span className="block text-orange-500">Built for Builders.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed text-pretty">
            Bridging AI ambition and operational reality for businesses that
            build things.
          </p>
        </div>
      </div>

      {/* Geometric accent — bottom right */}
      <div className="absolute bottom-0 right-0 w-1/5 h-1/5 border-l-4 border-t-4 border-orange-500 opacity-10" />
    </section>
  )
}
