import { ArrowUpRight, Camera } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#990F24] font-medium mb-3">
            About Pratham
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F2EB] text-balance">
            Design Direction Meets Generative Intelligence
          </h2>
        </div>
        <div className="text-sm text-[#A8A59E]">
          Independent Creator · Based in Digital Space
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Real Portrait Frame */}
        <div className="lg:col-span-5 relative group">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#070709] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <img
              src="/src/assets/images/editorial_designer_portrait_1791784084309.jpg"
              alt="Pratham — AI Web Designer & Digital Product Creator"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.05] grayscale-[25%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60" />
            
            {/* Beginner-friendly asset note badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.1] text-xs text-[#F5F2EB]">
              <div className="flex items-center gap-2 text-[#E11D48] font-semibold mb-1">
                <Camera className="w-3.5 h-3.5" />
                <span>Editorial Portrait Slot</span>
              </div>
              <p className="text-white/60 leading-tight">
                Structured for your real photograph. When you are ready, simply drop your portrait photo into the assets folder to update seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative & Craft Ethos */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="space-y-4 text-base sm:text-lg text-[#A8A59E] leading-relaxed">
            <p>
              I am <span className="text-[#F5F2EB] font-semibold">Pratham</span>, an AI-assisted web designer and digital product creator.
            </p>
            <p>
              I focus on building clean, dark-themed web interfaces with clear typography, intuitive layouts, and comfortable visual contrast. Using tools like Figma, Google AI Studio, and modern frontend frameworks, I translate ideas into working digital products like the CareNova healthcare platform.
            </p>
            <p>
              My goal is to create web experiences that feel intentional, responsive, and easy to use across all devices—combining modern design principles with efficient AI-assisted development workflows.
            </p>
          </div>

          {/* Core Values Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-[#0E0E14] border border-white/[0.04]">
              <div className="text-xs uppercase tracking-wider text-[#990F24] font-semibold mb-1">
                Design Focus
              </div>
              <div className="text-sm font-medium text-[#F5F2EB] mb-1">
                Visual Clarity
              </div>
              <div className="text-xs text-[#A8A59E]">
                Clean layouts and balanced typography that prioritize user readability.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E0E14] border border-white/[0.04]">
              <div className="text-xs uppercase tracking-wider text-[#990F24] font-semibold mb-1">
                Development
              </div>
              <div className="text-sm font-medium text-[#F5F2EB] mb-1">
                Practical Execution
              </div>
              <div className="text-xs text-[#A8A59E]">
                Turning concepts into clean, mobile-responsive code efficiently.
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5F2EB] hover:text-[#E11D48] transition-colors"
            >
              <span>Get in touch with Pratham</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
