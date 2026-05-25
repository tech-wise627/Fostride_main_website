"use client"

import { useEffect, useRef, useState } from "react"

const STEPS = [
  {
    num: "01",
    title: "Real-World Waste Data",
    desc: "Every item sorted by R3Bin is captured, labelled, and timestamped at the source.",
    angle: -90,
  },
  {
    num: "02",
    title: "W.I.S.E. Learns & Trains",
    desc: "Models retrain continuously on real-world data — accuracy compounds over time.",
    angle: -18,
  },
  {
    num: "03",
    title: "Smarter Sorting",
    desc: "Higher accuracy means cleaner material streams and more reliable recycler outputs.",
    angle: 54,
  },
  {
    num: "04",
    title: "More Deployments",
    desc: "Better performance drives adoption across campuses, enterprises, and cities.",
    angle: 126,
  },
  {
    num: "05",
    title: "Proprietary Data Moat",
    desc: "Each new deployment adds unique data — building a dataset no competitor can buy.",
    angle: 198,
  },
]

const LOOP = ["More Data", "Better AI", "Higher Accuracy", "More Deployments"]

const R = 130   // SVG circle radius
const CX = 200  // SVG viewBox center X
const CY = 200  // SVG viewBox center Y

function nodePos(angle: number) {
  const rad = (angle * Math.PI) / 180
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) }
}

function useReveal() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export function DataFlywheel() {
  const { ref, visible } = useReveal()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(12,131,70,0.05) 0%, transparent 70%)" }} />

      <style>{`
        @keyframes spinArc    { to { stroke-dashoffset: -628; } }
        @keyframes hubPulse   { 0%,100%{r:28} 50%{r:31} }
        @keyframes nodePop    { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
        @keyframes dotBlink   { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes loopSlide  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>

          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px bg-[#0C8346] block" style={{ width: visible ? 32 : 0, transition: "width 0.8s ease 0.3s" }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#0C8346" }}>Competitive Advantage</span>
            <span className="h-px bg-[#0C8346] block" style={{ width: visible ? 32 : 0, transition: "width 0.8s ease 0.3s" }} />
          </div>

          <h2 className="font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight"
            style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            The Data{" "}
            <span style={{
              background: "linear-gradient(135deg, #0C8346 0%, #86efac 50%, #0C8346 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}>Flywheel</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed max-w-lg mx-auto" style={{ color: "#6B6358" }}>
            Every item W.I.S.E. processes makes it smarter. A self-reinforcing intelligence loop that compounds with every deployment.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center">

          {/* LEFT — step cards */}
          <div className="flex flex-col gap-3">
            {STEPS.map((s, i) => {
              const isActive = active === i
              return (
                <div
                  key={s.num}
                  onClick={() => setActive(active === i ? null : i)}
                  className="group relative flex items-start gap-4 rounded-2xl p-5 cursor-pointer transition-all duration-300"
                  style={{
                    background: isActive ? "rgba(26,107,60,0.08)" : "rgba(255,255,255,0.02)",
                    border: isActive ? "1px solid rgba(26,107,60,0.35)" : "1px solid rgba(255,255,255,0.06)",
                    opacity: visible ? (active !== null && !isActive ? 0.4 : 1) : 0,
                    transform: visible ? "translateX(0)" : "translateX(-24px)",
                    transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s ease ${0.2 + i * 0.1}s, background 0.25s, border-color 0.25s`,
                  }}
                >
                  {/* Number + vertical line */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold font-mono transition-all duration-300"
                      style={{
                        background: isActive ? "rgba(12,131,70,0.25)" : "rgba(255,255,255,0.04)",
                        border: isActive ? "1px solid rgba(12,131,70,0.2)" : "1px solid rgba(255,255,255,0.08)",
                        color: isActive ? "#86efac" : "#3A3830",
                      }}>
                      {s.num}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 min-h-[12px]"
                        style={{ background: isActive ? "rgba(12,131,70,0.15)" : "rgba(255,255,255,0.05)" }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h4 className="font-semibold text-[14px] leading-snug mb-1 transition-colors duration-200"
                      style={{ color: isActive ? "#EDE8E0" : "#9A9288" }}>
                      {s.title}
                    </h4>
                    <p className="text-[12px] leading-relaxed transition-colors duration-200"
                      style={{ color: isActive ? "#6B6358" : "#3A3830" }}>
                      {s.desc}
                    </p>
                  </div>

                  {/* Active right-edge glow */}
                  {isActive && (
                    <div className="absolute right-0 top-1/4 bottom-1/4 w-0.5 rounded-full"
                      style={{ background: "linear-gradient(to bottom, transparent, #0C8346, transparent)" }} />
                  )}
                </div>
              )
            })}
          </div>

          {/* RIGHT — SVG flywheel */}
          <div
            className="relative flex items-center justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.92)",
              transition: "opacity 1s ease 0.4s, transform 1s ease 0.4s",
            }}
          >
            <div className="relative w-full max-w-[420px] mx-auto rounded-3xl p-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>

              <svg viewBox="0 0 400 400" className="w-full h-auto" style={{ overflow: "visible" }}>
                <defs>
                  {/* Rotating arc gradient */}
                  <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0C8346" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#86efac" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0C8346" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Outer moat rings */}
                {[175, 190, 205].map((r, i) => (
                  <circle key={r} cx={CX} cy={CY} r={r}
                    fill="none"
                    stroke="rgba(12,131,70,0.06)"
                    strokeWidth={1}
                    strokeDasharray={i === 1 ? "4 10" : "none"}
                  />
                ))}

                {/* Spinning arc on the main orbit */}
                <circle
                  cx={CX} cy={CY} r={R}
                  fill="none"
                  stroke="url(#arcGrad)"
                  strokeWidth={2}
                  strokeDasharray="120 514"
                  style={{ animation: "spinArc 6s linear infinite", transformOrigin: `${CX}px ${CY}px` }}
                />

                {/* Static orbit ring */}
                <circle cx={CX} cy={CY} r={R}
                  fill="none" stroke="rgba(26,107,60,0.15)" strokeWidth={1} />

                {/* Spokes */}
                {STEPS.map((s, i) => {
                  const { x, y } = nodePos(s.angle)
                  const isActive = active === i
                  return (
                    <line key={`spoke-${i}`}
                      x1={CX} y1={CY} x2={x} y2={y}
                      stroke={isActive ? "rgba(12,131,70,0.12)" : "rgba(12,131,70,0.06)"}
                      strokeWidth={isActive ? 1.5 : 0.8}
                      style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                    />
                  )
                })}

                {/* Arcs between nodes */}
                {STEPS.map((_, i) => {
                  const from = nodePos(STEPS[i].angle)
                  const to = nodePos(STEPS[(i + 1) % STEPS.length].angle)
                  const mx = (from.x + to.x) / 2
                  const my = (from.y + to.y) / 2
                  const dx = to.x - from.x; const dy = to.y - from.y
                  const len = Math.hypot(dx, dy) || 1
                  const cpx = mx - (dy / len) * R * 0.3
                  const cpy = my + (dx / len) * R * 0.3
                  const isFromActive = active === i
                  return (
                    <path key={`arc-${i}`}
                      d={`M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`}
                      fill="none"
                      stroke={isFromActive ? "#86efac" : "rgba(12,131,70,0.2)"}
                      strokeWidth={isFromActive ? 2 : 1}
                      filter={isFromActive ? "url(#glow)" : undefined}
                      style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                    />
                  )
                })}

                {/* Nodes */}
                {STEPS.map((s, i) => {
                  const { x, y } = nodePos(s.angle)
                  const isActive = active === i
                  const labelR = R + 36
                  const rad = (s.angle * Math.PI) / 180
                  const lx = CX + labelR * Math.cos(rad)
                  const ly = CY + labelR * Math.sin(rad)

                  return (
                    <g key={`node-${i}`} onClick={() => setActive(active === i ? null : i)}
                      style={{ cursor: "pointer" }}>
                      {/* Glow halo */}
                      {isActive && (
                        <circle cx={x} cy={y} r={22}
                          fill="rgba(12,131,70,0.15)"
                          style={{ animation: "nodePop 0.3s ease" }}
                        />
                      )}
                      {/* Pulse ring */}
                      <circle cx={x} cy={y} r={isActive ? 16 : 12}
                        fill={isActive ? "rgba(12,131,70,0.2)" : "#050505"}
                        stroke={isActive ? "#86efac" : "#0C8346"}
                        strokeWidth={isActive ? 2 : 1.2}
                        style={{ transition: "r 0.3s, fill 0.3s, stroke 0.3s" }}
                      />
                      {/* Inner dot */}
                      <circle cx={x} cy={y} r={isActive ? 6 : 4}
                        fill={isActive ? "#86efac" : "#0C8346"}
                        style={{ transition: "r 0.3s, fill 0.3s" }}
                      />
                      {/* Node label */}
                      <text x={lx} y={ly - 6} textAnchor="middle"
                        fontSize={10} fontWeight="600" fill={isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)"}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", transition: "fill 0.3s" }}>
                        {s.title.split(" ").slice(0, 2).join(" ")}
                      </text>
                      <text x={lx} y={ly + 7} textAnchor="middle"
                        fontSize={9} fill={isActive ? "rgba(12,131,70,0.6)" : "rgba(12,131,70,0.22)"}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", transition: "fill 0.3s" }}>
                        {s.num}
                      </text>
                    </g>
                  )
                })}

                {/* Center hub */}
                <circle cx={CX} cy={CY} r={38} fill="rgba(12,131,70,0.06)" />
                <circle cx={CX} cy={CY} r={32} fill="#0a0a08" stroke="rgba(12,131,70,0.15)" strokeWidth={1.5} />
                <circle cx={CX} cy={CY} r={28} fill="rgba(12,131,70,0.15)" />

                <text x={CX} y={CY - 4} textAnchor="middle" fontSize={11} fontWeight="700"
                  fill="white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
                  W.I.S.E.
                </text>
                <text x={CX} y={CY + 9} textAnchor="middle" fontSize={8}
                  fill="rgba(12,131,70,0.4)" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", letterSpacing: "0.1em" }}>
                  AI CORE
                </text>
              </svg>

              {/* Active step detail callout */}
              <div className="mt-2 text-center min-h-[44px] transition-all duration-300"
                style={{ opacity: active !== null ? 1 : 0 }}>
                {active !== null && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{ background: "rgba(12,131,70,0.1)", border: "1px solid rgba(12,131,70,0.25)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C8346]"
                      style={{ animation: "dotBlink 1.2s infinite" }} />
                    <span className="text-[12px] font-medium" style={{ color: "#86efac" }}>
                      {STEPS[active].title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Loop outcome strip ── */}
        <div className="mt-16 overflow-hidden"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 1s" }}>
          <div className="flex items-center gap-0" style={{ animation: "loopSlide 12s linear infinite", width: "max-content" }}>
            {[...LOOP, ...LOOP, ...LOOP, ...LOOP].map((item, i) => (
              <span key={i} className="flex items-center gap-0">
                <span className="px-6 py-2 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap"
                  style={{ color: i % LOOP.length === 0 ? "#86efac" : "#1A6B3C" }}>
                  {item}
                </span>
                <span className="text-[#0C8346] text-xs opacity-40 mx-1">→</span>
              </span>
            ))}
          </div>
          <div className="mt-2 text-center">
            <p className="text-[10px] uppercase tracking-widest" style={{ color: "#2A2820" }}>
              A loop that never stops compounding
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}