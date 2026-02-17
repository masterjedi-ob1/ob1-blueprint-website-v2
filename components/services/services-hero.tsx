"use client"

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-slate-950">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#60A5FA 1px, transparent 1px),
              linear-gradient(90deg, #60A5FA 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Orange accent line across the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />

      {/* Measurement marks */}
      <div className="absolute top-1 left-0 w-full h-6 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-3 w-px bg-orange-500"
            style={{ left: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          {/* Phase label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              The Operational Blueprint
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight text-balance">
            From Assessment
            <span className="block text-orange-500">to Architecture</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed text-pretty">
            A systematic engagement model built for business leaders who need AI
            transformation done right — not fast, not cheap,{" "}
            <span className="text-white font-semibold italic">right.</span>
          </p>
        </div>
      </div>

      {/* Geometric accent — bottom right */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 border-l-4 border-t-4 border-orange-500 opacity-15" />

      {/* Corner detail — top right */}
      <div className="absolute top-12 right-12 hidden lg:block opacity-20">
        <div className="w-24 h-24 border-2 border-slate-500 relative">
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-500 -translate-y-1 translate-x-1" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-500 translate-y-1 -translate-x-1" />
        </div>
      </div>
    </section>
  )
}
