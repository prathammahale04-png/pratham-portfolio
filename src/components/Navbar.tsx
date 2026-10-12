import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'CareNova', href: '#carenova' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Strict single element, no subtitles or pills) */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-[#F5F2EB] hover:text-[#E11D48] transition-colors whitespace-nowrap shrink-0"
        >
          PRATHAM
        </a>

        {/* Zone 2: 4-5 Clean Nav Links (Single-line, no capsule buttons) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A8A59E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F5F2EB] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E11D48] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Single-line CTA) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onContactClick}
            className="group flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-[#F5F2EB] bg-white/[0.06] hover:bg-[#990F24] border border-white/[0.12] hover:border-[#990F24] rounded-lg transition-all duration-200 whitespace-nowrap shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 text-[#A8A59E] hover:text-[#F5F2EB] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu (Strictly clean, within viewport budget) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070709]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#A8A59E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#F5F2EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wide uppercase text-[#F5F2EB] bg-[#990F24] rounded-lg hover:bg-[#C81D37] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
