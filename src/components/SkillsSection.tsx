import { TOOLKIT_CATEGORIES } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#990F24] font-medium mb-3">
            Toolkit & Skills
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F2EB] text-balance">
            Skills & Everyday Tools
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#A8A59E] leading-relaxed">
          The primary design software, frontend technologies, and AI tools I use when designing and developing web interfaces.
        </p>
      </div>

      {/* 3 Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TOOLKIT_CATEGORIES.map((cat, idx) => (
          <div
            key={cat.category}
            className="p-8 rounded-2xl bg-[#0E0E14] border border-white/[0.06] flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-[#990F24] uppercase tracking-wider mb-2">
                0{idx + 1} / CATEGORY
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#F5F2EB] mb-6">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center justify-between text-sm py-2 border-b border-white/[0.04] text-[#A8A59E] hover:text-[#F5F2EB] transition-colors"
                  >
                    <span>{tool}</span>
                    <span className="text-xs font-mono text-white/30">Active</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 text-xs text-white/40">
              Actively used in daily projects
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
