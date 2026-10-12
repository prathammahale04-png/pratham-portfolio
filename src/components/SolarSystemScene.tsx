/**
 * Phase 1: static cinematic scaffold only.
 * No orbital motion, scroll-dolly, or planet interaction yet.
 * Planet scale/order: CareNova (inner, largest) → Sonder AI → Aura Sound.
 */
const STARS = [
  { top: '6%', left: '8%', size: 1.2, opacity: 0.35 },
  { top: '9%', left: '22%', size: 0.8, opacity: 0.22 },
  { top: '4%', left: '41%', size: 1, opacity: 0.28 },
  { top: '11%', left: '63%', size: 0.7, opacity: 0.2 },
  { top: '7%', left: '81%', size: 1.4, opacity: 0.4 },
  { top: '14%', left: '93%', size: 0.8, opacity: 0.18 },
  { top: '18%', left: '4%', size: 0.9, opacity: 0.25 },
  { top: '22%', left: '17%', size: 1.1, opacity: 0.32 },
  { top: '19%', left: '36%', size: 0.6, opacity: 0.16 },
  { top: '26%', left: '52%', size: 1, opacity: 0.24 },
  { top: '21%', left: '74%', size: 0.8, opacity: 0.2 },
  { top: '28%', left: '88%', size: 1.3, opacity: 0.36 },
  { top: '34%', left: '11%', size: 0.7, opacity: 0.18 },
  { top: '38%', left: '29%', size: 1, opacity: 0.26 },
  { top: '42%', left: '48%', size: 0.6, opacity: 0.14 },
  { top: '36%', left: '67%', size: 0.9, opacity: 0.22 },
  { top: '44%', left: '84%', size: 1.1, opacity: 0.3 },
  { top: '51%', left: '6%', size: 1.2, opacity: 0.28 },
  { top: '56%', left: '19%', size: 0.7, opacity: 0.16 },
  { top: '49%', left: '39%', size: 0.8, opacity: 0.2 },
  { top: '58%', left: '58%', size: 1, opacity: 0.24 },
  { top: '53%', left: '76%', size: 0.6, opacity: 0.15 },
  { top: '61%', left: '91%', size: 1.3, opacity: 0.34 },
  { top: '68%', left: '13%', size: 0.8, opacity: 0.2 },
  { top: '72%', left: '31%', size: 1.1, opacity: 0.28 },
  { top: '66%', left: '47%', size: 0.7, opacity: 0.17 },
  { top: '74%', left: '69%', size: 0.9, opacity: 0.22 },
  { top: '70%', left: '86%', size: 0.6, opacity: 0.14 },
  { top: '81%', left: '5%', size: 1, opacity: 0.26 },
  { top: '86%', left: '24%', size: 0.8, opacity: 0.19 },
  { top: '83%', left: '43%', size: 1.2, opacity: 0.32 },
  { top: '89%', left: '61%', size: 0.7, opacity: 0.16 },
  { top: '84%', left: '78%', size: 1, opacity: 0.24 },
  { top: '91%', left: '94%', size: 0.9, opacity: 0.21 },
  { top: '16%', left: '55%', size: 0.5, opacity: 0.12 },
  { top: '63%', left: '41%', size: 0.5, opacity: 0.12 },
] as const;

function planetPoint(rx: number, ry: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: Math.cos(rad) * rx, y: Math.sin(rad) * ry };
}

const CARENOVA = planetPoint(168, 148, -28);
const SONDER = planetPoint(268, 232, 132);
const AURA = planetPoint(372, 318, 48);

export function SolarSystemScene() {
  return (
    <section
      aria-label="Cinematic solar system introduction"
      className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-[#050506]"
    >
      {/* Distant stars */}
      <div aria-hidden="true" className="absolute inset-0">
        {STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#F5F2EB]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Restrained crimson atmosphere */}
      <div
        aria-hidden="true"
        className="absolute -right-[12%] top-[18%] h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle,_rgba(153,15,36,0.22)_0%,_rgba(153,15,36,0.06)_38%,_transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-8%] bottom-[-10%] h-[40%] w-[45%] rounded-full bg-[radial-gradient(circle,_rgba(245,242,235,0.04)_0%,_transparent_70%)]"
      />

      {/* System: slightly off-center, cropped on small screens rather than squeezed */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[46%] h-[150%] w-[150%] -translate-y-1/2 sm:left-[18%] sm:h-[140%] sm:w-[140%] md:left-[28%] lg:left-[34%] lg:h-[130%] lg:w-[130%]"
      >
        <svg
          viewBox="-460 -400 920 800"
          className="h-full w-full"
          fill="none"
        >
          <defs>
            <radialGradient id="sunCore" cx="42%" cy="38%" r="58%">
              <stop offset="0%" stopColor="#FFF6E8" />
              <stop offset="38%" stopColor="#F0C9A0" />
              <stop offset="72%" stopColor="#C81D37" />
              <stop offset="100%" stopColor="#4A0812" />
            </radialGradient>
            <radialGradient id="sunHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(200,29,55,0.35)" />
              <stop offset="55%" stopColor="rgba(153,15,36,0.08)" />
              <stop offset="100%" stopColor="rgba(153,15,36,0)" />
            </radialGradient>
            <radialGradient id="planetCareNova" cx="35%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#E8D7D4" />
              <stop offset="45%" stopColor="#A33A48" />
              <stop offset="100%" stopColor="#3B1018" />
            </radialGradient>
            <radialGradient id="planetSonder" cx="38%" cy="30%" r="62%">
              <stop offset="0%" stopColor="#E4E7EE" />
              <stop offset="50%" stopColor="#7B8294" />
              <stop offset="100%" stopColor="#1C1E26" />
            </radialGradient>
            <radialGradient id="planetAura" cx="40%" cy="34%" r="60%">
              <stop offset="0%" stopColor="#DDD6CC" />
              <stop offset="55%" stopColor="#6A645C" />
              <stop offset="100%" stopColor="#1A1816" />
            </radialGradient>
          </defs>

          <g transform="rotate(-16)">
            <circle cx="0" cy="0" r="220" fill="url(#sunHalo)" />

            <ellipse
              cx="0"
              cy="0"
              rx="168"
              ry="148"
              stroke="rgba(245,242,235,0.16)"
              strokeWidth="0.75"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="268"
              ry="232"
              stroke="rgba(245,242,235,0.11)"
              strokeWidth="0.7"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="372"
              ry="318"
              stroke="rgba(245,242,235,0.08)"
              strokeWidth="0.65"
            />

            <circle cx="0" cy="0" r="54" fill="url(#sunCore)" />
            <circle
              cx="-10"
              cy="-12"
              r="18"
              fill="rgba(255,246,232,0.35)"
            />

            {/* CareNova — inner, most prominent */}
            <circle
              cx={CARENOVA.x}
              cy={CARENOVA.y}
              r="18"
              fill="url(#planetCareNova)"
            />
            <circle
              cx={CARENOVA.x - 5}
              cy={CARENOVA.y - 5}
              r="5"
              fill="rgba(245,242,235,0.28)"
            />

            {/* Sonder AI — concept */}
            <circle
              cx={SONDER.x}
              cy={SONDER.y}
              r="11"
              fill="url(#planetSonder)"
            />
            <circle
              cx={SONDER.x - 3}
              cy={SONDER.y - 3}
              r="3"
              fill="rgba(245,242,235,0.22)"
            />

            {/* Aura Sound — concept */}
            <circle
              cx={AURA.x}
              cy={AURA.y}
              r="8"
              fill="url(#planetAura)"
            />
            <circle
              cx={AURA.x - 2}
              cy={AURA.y - 2}
              r="2.2"
              fill="rgba(245,242,235,0.2)"
            />
          </g>
        </svg>
      </div>

      {/* Quiet editorial kicker — existing site identity only */}
      <div className="relative z-10 flex h-full max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:px-10 lg:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#A8A59E]">
          Pratham
        </p>
        <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-[#F5F2EB]/70 md:text-[15px]">
          AI Web Designer & Digital Product Creator
        </p>
      </div>
    </section>
  );
}
