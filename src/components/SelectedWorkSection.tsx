import { ArrowUpRight, Eye } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
  onViewCareNovaDeepDive: () => void;
}

export function SelectedWorkSection({
  onSelectProject,
  onViewCareNovaDeepDive,
}: SelectedWorkSectionProps) {
  const careNovaProject = PROJECTS.find((p) => p.id === 'carenova')!;
  const secondaryProjects = PROJECTS.filter((p) => p.id !== 'carenova');

  return (
    <section id="work" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#990F24] font-medium mb-3">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F2EB] text-balance">
            Digital Products & Interfaces
          </h2>
        </div>
        <div className="text-sm text-[#A8A59E] flex items-center gap-2">
          <span>Curated Case Studies</span>
          <span aria-hidden="true">·</span>
          <span>2025–2026</span>
        </div>
      </div>

      {/* Flagship Hero Project Card: CareNova AI */}
      <div className="mb-12 group relative rounded-2xl overflow-hidden bg-[#0E0E14] border border-white/[0.08] hover:border-[#990F24]/60 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-[#070709]">
            <img
              src={careNovaProject.image}
              alt={careNovaProject.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-transparent to-transparent opacity-60 lg:opacity-30" />
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Unboxed clean metadata (Zero pills) */}
              <div className="flex items-center gap-2 text-xs text-[#990F24] uppercase tracking-wider mb-3">
                <span className="font-semibold">Live Project</span>
                <span aria-hidden="true">·</span>
                <span>{careNovaProject.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{careNovaProject.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F2EB] mb-4">
                {careNovaProject.title}
              </h3>

              <p className="text-sm sm:text-base font-medium text-[#F5F2EB]/90 mb-3 leading-snug">
                {careNovaProject.tagline}
              </p>

              <p className="text-sm text-[#A8A59E] leading-relaxed mb-6">
                {careNovaProject.summary}
              </p>

              {/* Deliverable list */}
              <ul className="space-y-2 mb-8">
                {careNovaProject.deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#A8A59E]">
                    <span className="text-[#990F24] font-mono">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href={careNovaProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#990F24] hover:bg-[#C81D37] text-[#F5F2EB] text-xs font-semibold rounded-lg transition-colors"
              >
                <span>View Live Site</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onViewCareNovaDeepDive}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F2EB] text-xs font-semibold rounded-lg border border-white/[0.08] transition-colors"
              >
                <span>Read Case Study</span>
              </button>

              <button
                onClick={() => onSelectProject(careNovaProject)}
                className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F2EB] text-xs font-semibold rounded-lg border border-white/[0.08] transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#A8A59E]" />
                <span>Quick Inspect</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Project Grid (Sonder AI & Aura Sound) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {secondaryProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0E0E14] border border-white/[0.08] hover:border-[#990F24]/50 transition-all duration-300 flex flex-col"
          >
            {/* Visual Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#070709]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E14] via-transparent to-transparent opacity-50" />
              
              {/* Concept Project Badge */}
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-medium text-amber-300">
                Concept Design
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#A8A59E] mb-2">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F2EB] mb-2 group-hover:text-[#E11D48] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A8A59E] group-hover:text-[#F5F2EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>

                <p className="text-sm text-[#A8A59E] leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#A8A59E]">
                <span>{project.techStack.join(' · ')}</span>
                <span className="text-[#E11D48] font-medium group-hover:underline">Inspect Details</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
