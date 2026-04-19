"use client"

import { useState, useEffect, useRef } from "react"
import { Box, Cpu, Wifi, TrendingUp, Check } from "lucide-react"

const FEATURES = [
  {
    id: "hardware",
    icon: Box,
    title: "Hardware",
    tagline: "Industrial-grade smart bin.",
    stat: "120 – 360L",
    statLabel: "Capacity options",
    points: [
      "Multi-stream sorting — recyclable, organic, landfill",
      "Solar-powered with 72hr battery backup",
      "Weather-resistant, tamper-proof enclosure",
    ],
    detail: "R3Bin is built for the real world — campuses, offices, airports. Drop anything in; the hardware handles the rest.",
  },
  {
    id: "intelligence",
    icon: Cpu,
    title: "W.I.S.E. AI",
    tagline: "On-device computer vision.",
    stat: "94%+",
    statLabel: "Sort accuracy",
    points: [
      "12MP camera + depth sensing, classifies in <500ms",
      "Runs fully on-device — no cloud dependency",
      "Model improves with every item sorted",
    ],
    detail: "W.I.S.E. runs at the edge so sorting decisions happen instantly — even offline.",
  },
  {
    id: "connectivity",
    icon: Wifi,
    title: "Connectivity",
    tagline: "Always-on, always-aware.",
    stat: "15 min",
    statLabel: "Data refresh cycle",
    points: [
      "4G LTE / WiFi / LoRaWAN — works anywhere",
      "Fill-level, weight & temperature sensors",
      "Instant alerts — overflows, tampering, anomalies",
    ],
    detail: "R3Bin streams live data to the dashboard — collection routes, fill predictions, and alerts.",
  },
  {
    id: "impact",
    icon: TrendingUp,
    title: "Impact",
    tagline: "Every gram tracked.",
    stat: "500kg",
    statLabel: "CO₂ offset (pilot avg)",
    points: [
      "Automated CO₂ and diversion calculations",
      "ESG-ready reports — GRI, CDP, SASB compliant",
      "Routed directly to certified recyclers & upcyclers",
    ],
    detail: "Turn compliance from a chore into a competitive advantage — automatically.",
  },
]

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

export default function R3binProducts() {
  const [active, setActive] = useState(0)
  const { ref, visible } = useReveal()
  const feat = FEATURES[active]
  const Icon = feat.icon

  return (
    <section ref={ref} className="py-24 px-4 lg:px-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#0C8346]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div className="h-px bg-[#0C8346]" style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
            What's Inside
            <div className="h-px bg-[#0C8346]" style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
            One Bin.{" "}
            <span style={{ background: "linear-gradient(135deg, #0C8346, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Four Layers.
            </span>
          </h2>
        </div>

        {/* Interactive panel */}
        <div
          className="grid lg:grid-cols-[280px_1fr] gap-4 lg:gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.25s",
          }}
        >
          {/* Left nav */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {FEATURES.map((f, i) => {
              const FIcon = f.icon
              const isActive = active === i
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className={[
                    "flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-250 min-w-[140px] lg:min-w-0 flex-shrink-0 lg:flex-shrink border",
                    isActive
                      ? "bg-[#0C8346]/12 border-[#0C8346]/50 shadow-[0_0_20px_rgba(12,131,70,0.12)]"
                      : "bg-white/3 border-white/6 hover:border-[#0C8346]/25 hover:bg-[#0C8346]/5",
                  ].join(" ")}
                >
                  <div className={["w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-250", isActive ? "bg-[#0C8346]" : "bg-white/8"].join(" ")}>
                    <FIcon className={["w-4 h-4 transition-colors duration-250", isActive ? "text-white" : "text-gray-400"].join(" ")} />
                  </div>
                  <div>
                    <div className={["text-sm font-semibold transition-colors duration-250", isActive ? "text-[#22c55e]" : "text-white"].join(" ")}>{f.title}</div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest hidden lg:block">{f.tagline}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right detail */}
          <div
            key={active}
            className="rounded-3xl border border-[#0C8346]/25 bg-[#0C8346]/5 p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12"
            style={{ animation: "fadeSlideUp 0.35s ease both" }}
          >
            {/* Left: info */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0C8346] flex items-center justify-center shadow-[0_0_20px_rgba(12,131,70,0.4)]">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-unbounded)]">{feat.title}</h3>
                  <p className="text-[11px] text-[#0C8346] font-semibold uppercase tracking-widest">{feat.tagline}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{feat.detail}</p>

              <ul className="space-y-3">
                {feat.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0C8346]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#0C8346]" />
                    </div>
                    <span className="text-gray-300 text-sm leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: stat card */}
            <div className="lg:w-[200px] flex-shrink-0 flex flex-col items-center justify-center rounded-2xl border border-[#0C8346]/30 bg-[#050505]/60 p-6 text-center">
              <div className="text-4xl font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)] leading-none mb-2">
                {feat.stat}
              </div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest font-medium mb-6">
                {feat.statLabel}
              </div>
              <div
                className="w-full h-1 rounded-full bg-white/8 overflow-hidden"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#0C8346] to-[#22c55e] rounded-full"
                  style={{ width: "72%", animation: "lineGrow 0.8s ease 0.2s both" }}
                />
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0C8346]" style={{ animation: "dotBlink 1.6s ease-in-out infinite" }} />
                <span className="text-[10px] text-gray-600 font-medium uppercase tracking-widest">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
