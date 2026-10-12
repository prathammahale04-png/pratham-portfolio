import { useState } from 'react';
import { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { SolarSystemScene } from './components/SolarSystemScene';
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#F5F2EB] selection:bg-[#990F24] selection:text-[#F5F2EB]">
      <Navbar onContactClick={() => scrollToSection('contact')} />

      <SolarSystemScene />

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

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
