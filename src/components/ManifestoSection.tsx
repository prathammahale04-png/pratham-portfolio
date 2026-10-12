import { MANIFESTO_PILLARS } from '../data/portfolioData';

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#990F24] font-medium mb-3">
            Design Approach
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F2EB] text-balance">
            How I Approach AI-Assisted Design
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#A8A59E] leading-relaxed">
          Generative tools speed up production, but thoughtful human judgment makes digital products cohesive, usable, and enduring.
        </p>
      </div>

      {/* 3 Pillars Grid with Single-Elevation Depth & Generous Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MANIFESTO_PILLARS.map((pillar) => (
          <div
            key={pillar.number}
            className="group relative p-8 rounded-2xl bg-[#0E0E14] border border-white/[0.06] hover:border-[#990F24]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono tabular-nums text-[#990F24] tracking-widest mb-6">
                {pillar.number} / PRINCIPLE
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2EB] mb-3 group-hover:text-[#F5F2EB] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm font-medium text-[#F5F2EB]/90 leading-snug mb-4">
                {pillar.lead}
              </p>
              <p className="text-sm text-[#A8A59E] leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#A8A59E]">
              <span>Core Principle</span>
              <span className="font-mono tabular-nums text-white/40">#{pillar.number}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
