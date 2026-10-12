import { useState } from 'react';
import { Copy, Check, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'prathammahale8@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-28 px-6 max-w-7xl mx-auto z-10 border-t border-white/[0.06]">
      {/* Contact Focal Hero */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 mb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-[#990F24] font-medium">
          Get In Touch
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] text-[#F5F2EB] leading-tight text-balance">
          Let’s Connect & Collaborate.
        </h2>

        <p className="text-base sm:text-lg text-[#A8A59E] max-w-xl text-balance">
          Interested in working together, discussing web design, or sharing feedback on CareNova? Feel free to send a message.
        </p>

        {/* Email Copy & Direct Mail Action Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md pt-4">
          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E0E14] border border-white/[0.1] hover:border-[#990F24] text-[#F5F2EB] text-sm font-semibold transition-all duration-200 group"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#A8A59E] group-hover:text-[#F5F2EB] transition-colors" />
                <span className="font-mono text-xs sm:text-sm">{emailAddress}</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${emailAddress}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#990F24] hover:bg-[#C81D37] text-[#F5F2EB] text-sm font-semibold transition-all duration-200 whitespace-nowrap shadow-[0_12px_32px_rgba(153,15,36,0.25)]"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </div>

        {/* Availability Marker */}
        <div className="text-xs text-[#A8A59E] mt-2">
          Open to design collaborations and freelance projects
        </div>
      </div>

      {/* Social Links & Non-clickable Placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-20 text-center">
        {/* Real Verified GitHub */}
        <a
          href="https://github.com/prathammahale04-png"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-xl bg-[#0E0E14] border border-white/[0.06] hover:border-[#990F24]/50 text-[#F5F2EB] flex items-center justify-between transition-colors group"
        >
          <div className="text-left">
            <div className="text-sm font-medium">GitHub</div>
            <div className="text-xs text-white/40 font-mono">prathammahale04-png</div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#A8A59E] group-hover:text-[#F5F2EB] transition-colors" />
        </a>

        {/* Non-Clickable Placeholder: LinkedIn */}
        <div className="p-5 rounded-xl bg-[#0E0E14]/60 border border-white/[0.04] text-[#A8A59E] flex items-center justify-between cursor-default">
          <div className="text-left">
            <div className="text-sm font-medium text-[#F5F2EB]/80">LinkedIn</div>
            <div className="text-xs text-white/40">Add your profile link</div>
          </div>
          <span className="text-xs text-white/30 uppercase tracking-wider font-mono">Pending</span>
        </div>

        {/* Non-Clickable Placeholder: X / Twitter */}
        <div className="p-5 rounded-xl bg-[#0E0E14]/60 border border-white/[0.04] text-[#A8A59E] flex items-center justify-between cursor-default">
          <div className="text-left">
            <div className="text-sm font-medium text-[#F5F2EB]/80">X (Twitter)</div>
            <div className="text-xs text-white/40">Add your profile link</div>
          </div>
          <span className="text-xs text-white/30 uppercase tracking-wider font-mono">Pending</span>
        </div>
      </div>

      {/* Clean Editorial Footer */}
      <footer className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A59E]">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#F5F2EB]">PRATHAM</span>
          <span>·</span>
          <span>AI Web Designer & Digital Product Creator</span>
          <span>·</span>
          <span>2026</span>
        </div>

        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-1.5 hover:text-[#F5F2EB] transition-colors"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </footer>
    </section>
  );
}
