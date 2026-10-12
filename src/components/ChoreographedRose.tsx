import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ChoreographedRoseProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export function ChoreographedRose({ containerRef }: ChoreographedRoseProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', checkViewport);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Track scroll progress across the whole page container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth out spring physics for natural fluid deceleration
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001
  });

  // Desktop scroll mapping:
  // 0.00: Hero (right-center focal visual)
  // 0.15: Manifesto transition (glides to top right, rotates)
  // 0.35: Selected Work (slides left-center, frames project cards)
  // 0.55: CareNova Deep-Dive (centers softly as an ambient backdrop glow)
  // 0.75: Process & About (drifts to left column, scales down)
  // 1.00: Contact & Outro (centers gracefully above final action)
  const desktopX = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1.0],
    ['22vw', '30vw', '-22vw', '0vw', '-24vw', '0vw']
  );

  const desktopY = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1.0],
    ['0vh', '-6vh', '4vh', '0vh', '10vh', '-2vh']
  );

  const desktopScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1.0],
    [1.05, 0.72, 0.60, 0.85, 0.50, 0.75]
  );

  const desktopRotate = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1.0],
    [0, 22, -16, 6, 28, 0]
  );

  const desktopOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.58, 0.78, 1.0],
    [0.96, 0.82, 0.75, 0.45, 0.65, 0.90]
  );

  // Mobile scroll mapping (subtle background accompaniment, strictly non-intrusive)
  const mobileX = useTransform(smoothProgress, [0, 0.5, 1.0], ['0vw', '10vw', '0vw']);
  const mobileY = useTransform(smoothProgress, [0, 0.5, 1.0], ['-10vh', '5vh', '-5vh']);
  const mobileScale = useTransform(smoothProgress, [0, 0.5, 1.0], [0.65, 0.48, 0.55]);
  const mobileRotate = useTransform(smoothProgress, [0, 0.5, 1.0], [0, 15, 0]);
  const mobileOpacity = useTransform(smoothProgress, [0, 0.5, 1.0], [0.38, 0.28, 0.42]);

  // Glow intensity tied to scroll
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1.0], [1.2, 1.5, 1.3]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1.0], [0.6, 0.4, 0.7]);

  if (prefersReducedMotion) {
    return (
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-end pr-12 opacity-35 overflow-hidden"
      >
        <img
          src="/src/assets/images/signature_crimson_rose_1791784030984.jpg"
          alt=""
          className="w-[420px] h-[420px] object-cover rounded-full mix-blend-screen"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic ambient crimson bloom */}
      <motion.div
        style={{
          x: isMobile ? mobileX : desktopX,
          y: isMobile ? mobileY : desktopY,
          scale: glowScale,
          opacity: glowOpacity,
        }}
        className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full blur-[90px] bg-[radial-gradient(circle,_rgba(200,29,55,0.35)_0%,_rgba(153,15,36,0.18)_50%,_transparent_70%)]"
      />

      {/* The Signature Crimson Rose */}
      <motion.div
        style={{
          x: isMobile ? mobileX : desktopX,
          y: isMobile ? mobileY : desktopY,
          scale: isMobile ? mobileScale : desktopScale,
          rotate: isMobile ? mobileRotate : desktopRotate,
          opacity: isMobile ? mobileOpacity : desktopOpacity,
        }}
        className="relative flex items-center justify-center will-change-transform"
      >
        {/* Soft edge radial mask to blend seamlessly into nocturnal black canvas */}
        <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden [mask-image:radial-gradient(circle_at_center,_black_58%,_transparent_78%)]">
          <img
            src="/src/assets/images/signature_crimson_rose_1791784030984.jpg"
            alt="Signature Crimson Rose"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.98] select-none"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Delicate ambient rim highlight */}
        <div className="absolute inset-0 rounded-full border border-[rgba(225,29,72,0.12)] pointer-events-none" />
      </motion.div>
    </div>
  );
}
