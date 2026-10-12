import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCareNovaClick: () => void;
}

export function HeroSection({ onExploreClick, onCareNovaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 max-w-7xl mx-auto z-10">
      {/* Top Editorial Kicker */}
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#A8A59E] mb-6">
        <span>Pratham</span>
        <span aria-hidden="true" className="text-[#990F24]">/</span>
        <span>AI Web Designer</span>
        <span aria-hidden="true" className="text-[#990F24]">/</span>
        <span>Digital Product Creator</span>
      </div>

      {/* Main Hero Typographic Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.035em] text-[#F5F2EB] leading-[1.02] text-balance">
            Thoughtful Design Guided by AI.
          </h1>

          <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#A8A59E] font-normal leading-relaxed text-balance">
            Designing modern web interfaces and digital products with clean structure, dark aesthetics, and clear typography. 
            Leveraging AI tools to prototype faster and build thoughtful user experiences.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="group flex items-center gap-2 px-6 py-3.5 bg-[#990F24] hover:bg-[#C81D37] text-[#F5F2EB] text-sm font-semibold rounded-xl transition-all duration-200 shadow-[0_12px_32px_rgba(153,15,36,0.25)] whitespace-nowrap"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onCareNovaClick}
              className="group flex items-center gap-2 px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-[#F5F2EB] text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap"
            >
              <span>CareNova Case Study</span>
              <ArrowUpRight className="w-4 h-4 text-[#A8A59E] group-hover:text-[#F5F2EB] transition-colors" />
            </button>
          </div>
        </div>

        {/* Spatial right column spacer allowing the Choreographed Rose to occupy focal center stage */}
        <div className="hidden lg:block lg:col-span-4 min-h-[400px] pointer-events-none" />
      </div>

      {/* Full-width editorial principle strip below hero */}
      <div className="pt-12 border-t border-white/[0.08] mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#A8A59E]">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-[#F5F2EB] font-medium">01. Visual Direction</span>
          <span>Clean typography, dark surfaces, and deliberate spacing</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-[#F5F2EB] font-medium">02. Modern Frontend</span>
          <span>Built with React, TypeScript, Tailwind CSS, and smooth Motion interactions</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-[#F5F2EB] font-medium">03. Real Case Study</span>
          <span>Featuring CareNova, a live healthcare web application</span>
        </div>
      </div>
    </section>
  );
}
