import { useState } from 'react';
import { ArrowUpRight, Check, Layout, Palette, Smartphone, Eye } from 'lucide-react';

export function CareNovaCaseStudy() {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'records'>('overview');

  const views = {
    overview: {
      title: 'Patient Overview & Quick Stats',
      description: 'A centralized dashboard summarizing vital metrics, recent activity, and medication schedules in a clean card layout with calm visual contrast.',
      highlights: ['At-a-glance vitals summary cards', 'Clean status badges with calm colors', 'Clear typography and structured spacing']
    },
    appointments: {
      title: 'Appointment Management',
      description: 'An organized view allowing patients to view scheduled consultations, doctor details, and visit history without digging through cluttered menus.',
      highlights: ['Chronological upcoming visit timeline', 'Practitioner details and specialty tags', 'Quick action buttons to reschedule or join']
    },
    records: {
      title: 'Clinical Records & History',
      description: 'A structured list of past medical notes, lab results, and prescriptions designed with tabular clarity for quick reference.',
      highlights: ['Categorized lab reports and prescriptions', 'Scannable date stamps and provider notes', 'High-contrast text for comfortable reading']
    }
  };

  const currentView = views[activeTab];

  return (
    <section id="carenova" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Header & Metadata */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#990F24] font-medium mb-3">
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>Web Platform & UI Design</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F5F2EB] text-balance mb-4">
            CareNova Healthcare Platform
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[#A8A59E] leading-relaxed">
            A comprehensive web application designed to help patients manage appointments, access clinical records, and review health summaries with clarity and ease.
          </p>
        </div>

        {/* Verified Links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://carenova-healthcare-platform.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F2EB] bg-[#990F24] hover:bg-[#C81D37] rounded-lg transition-colors"
          >
            <span>Visit Live Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/prathammahale04-png/carenova-healthcare-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F2EB] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-colors"
          >
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A59E]" />
          </a>
        </div>
      </div>

      {/* Main Showcase Image Frame */}
      <div className="rounded-2xl overflow-hidden bg-[#070709] border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.6)] mb-20 group relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src="/src/assets/images/carenova_ui_mockup_1791784044827.jpg"
            alt="CareNova Healthcare Platform UI Dashboard"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Subtle overlay caption */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#F5F2EB]/80 backdrop-blur-md bg-black/50 px-4 py-2.5 rounded-lg border border-white/[0.08]">
            <span className="font-mono text-[#F5F2EB]">CareNova · Patient Dashboard Interface</span>
            <div className="flex items-center gap-3">
              <span className="text-[#A8A59E]">Built with React, Next.js & Tailwind CSS</span>
              <a
                href="https://carenova-healthcare-platform.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E11D48] hover:underline flex items-center gap-1 font-medium"
              >
                <span>carenova-healthcare-platform.vercel.app</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* The Problem & Solution Split View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E14] border border-white/[0.06] flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-[#990F24] uppercase tracking-wider mb-3">01 / The Problem</div>
            <h3 className="text-2xl font-bold text-[#F5F2EB] mb-4">Cluttered Healthcare Dashboards</h3>
            <p className="text-sm text-[#A8A59E] leading-relaxed mb-4">
              Many patient portals are difficult to navigate, with dense tables, inconsistent formatting, and confusing menu structures that make it stressful for users to find basic health information.
            </p>
            <p className="text-sm text-[#A8A59E] leading-relaxed">
              When patients need to check an appointment time or look up medical records, poor layout hierarchy often leads to confusion and frustration.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.04] text-xs text-[#A8A59E]">
            Goal: Create a clean, straightforward interface that prioritizes readability and ease of use.
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E14] border border-white/[0.06] flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-[#990F24] uppercase tracking-wider mb-3">02 / Design Approach</div>
            <h3 className="text-2xl font-bold text-[#F5F2EB] mb-4">Clean Hierarchy & Dark Theme</h3>
            <p className="text-sm text-[#A8A59E] leading-relaxed mb-4">
              Designed a soothing dark palette that reduces eye fatigue, paired with clearly defined card containers and consistent typography to separate different categories of information.
            </p>
            <p className="text-sm text-[#A8A59E] leading-relaxed">
              Information is grouped logically: upcoming appointments, vital summaries, and recent activity are placed on the main screen, with deeper records accessible through clear side navigation.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.04] text-xs text-[#A8A59E]">
            Result: A responsive, readable healthcare dashboard built and deployed to production.
          </div>
        </div>
      </div>

      {/* Interactive Feature & Layout Explorer */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E14] border border-white/[0.08] mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#990F24] uppercase tracking-wider mb-2">
              <Eye className="w-3.5 h-3.5" />
              <span>Feature Breakdown</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F2EB]">
              Core Interface Sections in CareNova
            </h3>
          </div>
          <span className="text-xs text-[#A8A59E]">
            Select a view to inspect design decisions
          </span>
        </div>

        {/* View Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {(['overview', 'appointments', 'records'] as const).map((key) => {
            const view = views[key];
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#161622] border-[#990F24] text-[#F5F2EB]'
                    : 'bg-[#070709] border-white/[0.06] text-[#A8A59E] hover:text-[#F5F2EB] hover:border-white/[0.15]'
                }`}
              >
                <div className="text-xs font-semibold mb-1">{view.title}</div>
                <div className="text-xs text-white/50 truncate">{view.description}</div>
              </button>
            );
          })}
        </div>

        {/* Selected View Card */}
        <div className="p-6 rounded-xl bg-[#070709] border border-white/[0.06]">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-[#990F24]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F2EB]">
                {currentView.title}
              </span>
            </div>
            <a
              href="https://carenova-healthcare-platform.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#E11D48] hover:underline flex items-center gap-1"
            >
              <span>Explore in live app</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm text-[#A8A59E] leading-relaxed mb-6">
            {currentView.description}
          </p>

          <div className="space-y-2.5 pt-2">
            <div className="text-xs font-medium text-[#F5F2EB] uppercase tracking-wider mb-2">
              Design Highlights:
            </div>
            {currentView.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F2EB]/90">
                <Check className="w-3.5 h-3.5 text-[#990F24] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Implementation Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[#0E0E14] border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Layout className="w-4 h-4 text-[#990F24]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F2EB]">
              Card-Based Layout
            </span>
          </div>
          <p className="text-xs text-[#A8A59E] leading-relaxed">
            Constructed modular card components that organize health metrics, medication lists, and notifications into bite-sized visual units.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#0E0E14] border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-[#990F24]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F2EB]">
              Dark Palette
            </span>
          </div>
          <p className="text-xs text-[#A8A59E] leading-relaxed">
            Applied deep slate and charcoal surfaces with warm ivory text to maintain high contrast while providing a comfortable reading experience.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#0E0E14] border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-3">
            <Smartphone className="w-4 h-4 text-[#990F24]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F2EB]">
              Responsive Design
            </span>
          </div>
          <p className="text-xs text-[#A8A59E] leading-relaxed">
            Designed to scale cleanly from desktop screens down to mobile viewports with collapsible navigation and single-column layout transitions.
          </p>
        </div>
      </div>
    </section>
  );
}
