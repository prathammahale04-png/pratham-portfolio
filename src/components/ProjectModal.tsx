import { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Backdrop click dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0E0E14] border border-white/[0.12] rounded-2xl shadow-2xl z-10 flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E0E14]/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#990F24]">
            <span className="font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-[#F5F2EB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-Resolution Media Viewer */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070709]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F5F2EB] mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#F5F2EB]/90 font-medium">
              {project.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.06]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#990F24] font-semibold mb-2">
                The Challenge
              </div>
              <p className="text-sm text-[#A8A59E] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#990F24] font-semibold mb-2">
                Design Approach
              </div>
              <p className="text-sm text-[#A8A59E] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <div className="text-xs uppercase tracking-wider text-[#A8A59E] font-semibold mb-3">
              Key Deliverables & Specifications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F2EB]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#990F24] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Action Links */}
          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#A8A59E]">
              <span className="font-semibold text-[#F5F2EB]">Tools & Stack:</span>
              <span>{project.techStack.join(' · ')}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.isConcept ? (
                <span className="text-xs text-amber-300/80 font-medium px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/20">
                  Concept Design Exploration
                </span>
              ) : (
                <>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#990F24] hover:bg-[#C81D37] text-xs font-semibold text-[#F5F2EB] transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-[#F5F2EB] transition-colors"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A59E]" />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
