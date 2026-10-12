import { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export function DesignProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#990F24] font-medium mb-3">
            Design Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F2EB] text-balance">
            Four Steps from Premise to Production
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#A8A59E] leading-relaxed">
          How I channel generative speed into disciplined digital products with measurable outcomes and aesthetic permanence.
        </p>
      </div>

      {/* Process Interactive Tabs / Number Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {PROCESS_STEPS.map((step, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={step.phase}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-6 rounded-2xl text-left transition-all border ${
                isActive
                  ? 'bg-[#0E0E14] border-[#990F24] shadow-[0_8px_24px_rgba(153,15,36,0.18)]'
                  : 'bg-[#070709] border-white/[0.06] hover:border-white/[0.15] text-[#A8A59E]'
              }`}
            >
              <div className="text-xs font-mono tabular-nums text-[#990F24] mb-2">
                PHASE {step.phase}
              </div>
              <div className={`text-base sm:text-lg font-bold tracking-tight mb-1 ${isActive ? 'text-[#F5F2EB]' : 'text-[#A8A59E]'}`}>
                {step.name}
              </div>
              <div className="text-xs text-white/40 line-clamp-1">
                {step.summary}
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Phase Deep Dive */}
      <div className="p-8 sm:p-12 rounded-2xl bg-[#0E0E14] border border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono text-[#990F24] uppercase tracking-wider mb-3">
              <span>Phase {activeStep.phase} Breakdown</span>
              <span aria-hidden="true">·</span>
              <span>Execution Strategy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2EB] mb-4">
              {activeStep.name}
            </h3>
            <p className="text-base text-[#A8A59E] leading-relaxed mb-6">
              {activeStep.summary}
            </p>

            <div className="space-y-3">
              {activeStep.activities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#F5F2EB]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#990F24] shrink-0 mt-0.5" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl bg-[#070709] border border-white/[0.06] flex flex-col justify-between">
            <div className="text-xs uppercase tracking-wider text-[#A8A59E] mb-4">
              Quality Gate Invariants
            </div>
            <div className="space-y-4 text-xs text-[#A8A59E]">
              <div className="pb-3 border-b border-white/[0.04]">
                <div className="text-[#F5F2EB] font-medium mb-1">Purity of Intent</div>
                <span>Every layout decision traces back to user psychology and brand resonance.</span>
              </div>
              <div className="pb-3 border-b border-white/[0.04]">
                <div className="text-[#F5F2EB] font-medium mb-1">60fps Compositor Safety</div>
                <span>No layout thrashing or geometric recalculation during scroll events.</span>
              </div>
              <div>
                <div className="text-[#F5F2EB] font-medium mb-1">Human Verifiability</div>
                <span>Strictly honest portfolio representations without exaggerated claims.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
