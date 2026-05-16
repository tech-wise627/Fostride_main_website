"use client"

import { Trash2, ScanEye, DatabaseZap, Recycle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    step: "01",
    icon: Trash2,
    title: "Drop It In",
    desc: "No pre-sorting required. Users simply dispose of waste — R3Bin handles everything from there.",
    accent: "#0C8346",
  },
  {
    step: "02",
    icon: ScanEye,
    title: "AI Classifies",
    desc: "W.I.S.E. captures and identifies every item in under 500ms — fully on-device, no cloud needed.",
    accent: "#0C8346",
  },
  {
    step: "03",
    icon: DatabaseZap,
    title: "Data Logged",
    desc: "Each item becomes a timestamped data point — feeding your live dashboard and ESG audit trail.",
    accent: "#0C8346",
  },
  {
    step: "04",
    icon: Recycle,
    title: "Routed to Recyclers",
    desc: "Sorted material is dispatched to certified recycling partners. Every gram tracked end to end.",
    accent: "#0C8346",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(12,131,70,0.05) 0%, transparent 70%)" }} />

      <style>{`
        @keyframes travelDot {
          0%   { left: -1%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 101%; opacity: 0; }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.18); opacity: 0; }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0px); }
          40%       { transform: translateY(-5px); }
          70%       { transform: translateY(-2px); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>

          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px bg-[#0C8346]"
              style={{ width: visible ? 32 : 0, transition: "width 0.8s ease 0.3s", display: "block" }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#0C8346" }}>
              How It Works
            </span>
            <span className="h-px bg-[#0C8346]"
              style={{ width: visible ? 32 : 0, transition: "width 0.8s ease 0.3s", display: "block" }} />
          </div>

          <h2 className="font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight"
            style={{ fontSize: "clamp(32px,5vw,56px)" }}>
            Four Steps.{" "}
            <span style={{
              background: "linear-gradient(135deg, #0C8346 0%, #22c55e 50%, #0C8346 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Closed Loop.
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed max-w-md mx-auto" style={{ color: "#6B6358" }}>
            From disposal to recycler — every gram of waste accounted for, automatically.
          </p>
        </div>

        {/* ── Step progress indicator ── */}
        <div className="flex justify-center gap-2 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}>
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? 28 : 8,
                height: 8,
                background: active === i ? "#0C8346" : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>

        {/* ── Cards grid ── */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">

          {/* Connector line — desktop only, runs through icon circles */}
          <div className="hidden lg:block absolute top-[88px] left-[calc(12.5%+2px)] right-[calc(12.5%+2px)] h-px pointer-events-none" style={{ zIndex: 0 }}>
            {/* Track */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(90deg, rgba(26,107,60,0.2) 50%, transparent 50%)",
              backgroundSize: "8px 1px",
            }} />
            {/* Animated green fill */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, #0C8346 0%, #22c55e 50%, #0C8346 100%)",
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 1.6s cubic-bezier(0.4,0,0.2,1) 0.8s",
              opacity: 0.65,
            }} />
            {/* Traveling glow dot */}
            {visible && (
              <div style={{
                position: "absolute", top: "50%", marginTop: -5,
                width: 10, height: 10, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 10px #22c55e, 0 0 24px #22c55e90",
                animation: "travelDot 3s ease-in-out 2.2s infinite",
              }} />
            )}
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon
            const isActive = active === i

            return (
              <div
                key={s.step}
                onClick={() => setActive(active === i ? null : i)}
                className="relative flex flex-col items-center text-center cursor-pointer rounded-3xl p-6 transition-all duration-400"
                style={{
                  background: isActive
                    ? "rgba(26,107,60,0.08)"
                    : "rgba(255,255,255,0.02)",
                  border: isActive
                    ? "1px solid rgba(26,107,60,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isActive
                    ? "0 0 40px rgba(12,131,70,0.12), inset 0 1px 0 rgba(26,107,60,0.1)"
                    : "none",
                  opacity: visible ? (active !== null && !isActive ? 0.45 : 1) : 0,
                  transform: visible ? "translateY(0)" : "translateY(36px)",
                  transition: `opacity 0.7s ease ${0.25 + i * 0.12}s, transform 0.7s ease ${0.25 + i * 0.12}s, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
              >
                {/* Top glow on active */}
                {isActive && (
                  <div className="absolute inset-x-0 top-0 h-px rounded-t-3xl"
                    style={{ background: "linear-gradient(90deg, transparent, #0C8346, transparent)" }} />
                )}

                {/* Step number */}
                <span className="text-[11px] font-bold tracking-[0.2em] mb-4 font-mono"
                  style={{ color: isActive ? "#0C8346" : "#2A2820" }}>
                  {s.step}
                </span>

                {/* Icon circle */}
                <div className="relative mb-6 z-10">
                  {/* Pulse ring — active only */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(12,131,70,0.5)",
                        animation: "pulseRing 1.8s ease-out infinite",
                      }} />
                  )}
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isActive
                        ? "rgba(12,131,70,0.2)"
                        : "rgba(12,131,70,0.08)",
                      border: isActive
                        ? "1.5px solid rgba(12,131,70,0.6)"
                        : "1.5px solid rgba(12,131,70,0.2)",
                      boxShadow: isActive ? "0 0 24px rgba(12,131,70,0.3)" : "none",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{
                        color: isActive ? "#22c55e" : "#0C8346",
                        animation: isActive ? "iconBounce 1.2s ease-in-out infinite" : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-white leading-snug mb-3 font-[family-name:var(--font-unbounded)]"
                  style={{ fontSize: "clamp(13px,1.2vw,15px)" }}>
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="text-[13px] leading-relaxed"
                  style={{ color: isActive ? "#9A9288" : "#5A5450" }}>
                  {s.desc}
                </p>

                {/* Active indicator dot */}
                <div className="mt-4 w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{ background: isActive ? "#0C8346" : "transparent" }} />
              </div>
            )
          })}
        </div>

        {/* ── Click hint ── */}
        <p className="text-center mt-8 text-[11px] uppercase tracking-widest"
          style={{
            color: "#2A2820",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 1.2s",
          }}>
          Tap any step to explore
        </p>

      </div>
    </section>
  )
}