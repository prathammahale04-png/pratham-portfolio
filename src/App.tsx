import { useState, useRef } from 'react';
import { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { ChoreographedRose } from './components/ChoreographedRose';
import { HeroSection } from './components/HeroSection';
import { ManifestoSection } from './components/ManifestoSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { CareNovaCaseStudy } from './components/CareNovaCaseStudy';
import { DesignProcessSection } from './components/DesignProcessSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#070709] text-[#F5F2EB] selection:bg-[#990F24] selection:text-[#F5F2EB]">
      {/* 1. Signature Scroll-Choreographed Rose Visual Engine */}
      <ChoreographedRose containerRef={containerRef} />

      {/* 2. Top Navigation Bar (Contract compliant: 3 zones, single-line) */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* 3. Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero */}
        <HeroSection
          onExploreClick={() => scrollToSection('work')}
          onCareNovaClick={() => scrollToSection('carenova')}
        />

        {/* Section 2: Creative Manifesto */}
        <ManifestoSection />

        {/* Section 3: Selected Works Showcase */}
        <SelectedWorkSection
          onSelectProject={(project) => setSelectedProject(project)}
          onViewCareNovaDeepDive={() => scrollToSection('carenova')}
        />

        {/* Section 4: CareNova Flagship Deep Dive */}
        <CareNovaCaseStudy />

        {/* Section 5: Design Process Methodology */}
        <DesignProcessSection />

        {/* Section 6: About Pratham */}
        <AboutSection />

        {/* Section 7: Skills & Tools Matrix */}
        <SkillsSection />

        {/* Section 8: Contact & Footer */}
        <ContactSection />
      </main>

      {/* 4. Fullscreen Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
