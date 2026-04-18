"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const pilots = [
  {
    name: "Brookfield",
    location: "Powai",
    month: "Dec",
    status: "done" as const,
    badge: "Complete",
    tagline: "First real-world benchmark",
    detail: "Commercial building deployment — established baseline sorting performance",
    items: "250+",
    accuracy: "~50%",
  },
  {
    name: "KJ Somaiya",
    location: "College",
    month: "Jan",
    status: "done" as const,
    badge: "Complete",
    tagline: "Dataset expansion & retraining",
    detail: "Campus pilot — accuracy improved through model retraining on expanded dataset",
    items: "640+",
    accuracy: "~70%",
  },
  {
    name: "95%+ Accuracy",
    location: "Scaled deployments",
    month: "Target",
    status: "goal" as const,
    badge: "Goal",
    tagline: "Full autonomous accuracy",
    detail: "Near-term milestone — achieved through multi-site scaling and continuous retraining",
    items: "—",
    accuracy: "95%+",
  },
]

// Rail fill: current accuracy 80% sits between KJSSE (70%) and Target (95%)
// Position = 50% (KJSSE node) + (80-70)/(95-70) * 50% = 50% + 20% = 70% of rail
const RAIL_TARGET = 71

// Accuracy bar: shows current ~80% out of 95% target
const ACCURACY_TARGET = Math.round((80 / 95) * 100) // ~84%

export function PilotsTimeline() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [railProgress, setRailProgress] = useState(0)
  const [accProgress, setAccProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      let r = 0
      let a = 0
      const iv = setInterval(() => {
        r = Math.min(r + 1.4, RAIL_TARGET)
        a = Math.min(a + 1.0, ACCURACY_TARGET)
        setRailProgress(r)
        setAccProgress(a)
        if (r >= RAIL_TARGET && a >= ACCURACY_TARGET) clearInterval(iv)
      }, 14)
      return () => clearInterval(iv)
    }, 450)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Ambient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(12,131,70,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div
              className="h-px bg-[#0C8346]"
              style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }}
            />
            Pilot Program
            <div
              className="h-px bg-[#0C8346]"
              style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
            Where W.I.S.E.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0C8346, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Is Deployed
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Real-world pilots generating the data that makes W.I.S.E. smarter with every sort.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-start justify-between">

            {/* Rail background */}
            <div className="absolute top-[27px] left-[16.67%] right-[16.67%] h-0.5 bg-white/8 pointer-events-none" />

            {/* Animated progress fill along rail */}
            <div
              className="absolute top-[27px] left-[16.67%] h-0.5 pointer-events-none"
              style={{
                width: `${(railProgress / 100) * 66.66}%`,
                background: "linear-gradient(90deg, #0C8346, #22c55e)",
                boxShadow: "0 0 8px rgba(12,131,70,0.6)",
              }}
            />

            {pilots.map((pilot, i) => {
              const isDone = pilot.status === "done"
              const isGoal = pilot.status === "goal"

              return (
                <div
                  key={pilot.name}
                  className="flex-1 flex flex-col items-center text-center group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.7s ease ${0.3 + i * 0.22}s, transform 0.7s ease ${0.3 + i * 0.22}s`,
                  }}
                >
                  {/* Dot */}
                  <div className="relative mb-6 z-10">

                    {/* Pulsing halo — done pilots */}
                    {isDone && (
                      <>
                        <div
                          className="absolute rounded-full bg-[#0C8346]/18 pointer-events-none"
                          style={{
                            width: 68, height: 68,
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: `glowPulse 2.8s ease-in-out infinite ${i * 0.5}s`,
                          }}
                        />
                        <div
                          className="absolute rounded-full bg-[#0C8346]/08 pointer-events-none"
                          style={{
                            width: 86, height: 86,
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: `glowPulse 2.8s ease-in-out infinite ${i * 0.5 + 0.5}s`,
                          }}
                        />
                      </>
                    )}

                    {/* Main circle */}
                    <div
                      className={[
                        "relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                        isGoal
                          ? "bg-[#050505] border-2 border-dashed border-[#0C8346]/35"
                          : "bg-[#0C8346] border-2 border-[#0C8346]",
                      ].join(" ")}
                      style={isDone ? { boxShadow: "0 0 20px rgba(12,131,70,0.4)" } : undefined}
                    >
                      {isDone && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
                      {isGoal && (
                        <div className="w-4 h-4 rounded-full border-2 border-[#0C8346]/45" />
                      )}
                    </div>

                    {/* Status badge */}
                    <div
                      className={[
                        "absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider whitespace-nowrap",
                        isDone
                          ? "bg-[#0C8346] text-white"
                          : "bg-white/5 text-gray-500 border border-white/10",
                      ].join(" ")}
                    >
                      {pilot.badge}
                    </div>
                  </div>

                  {/* Month tag */}
                  <div className="text-[10px] text-gray-600 uppercase tracking-widest mb-1 font-medium">
                    {pilot.month}
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-white font-[family-name:var(--font-unbounded)] mb-0.5 group-hover:text-[#0C8346] transition-colors duration-300 leading-tight">
                    {pilot.name}
                  </h3>

                  {/* Location */}
                  <p className="text-[10px] text-[#0C8346] font-semibold uppercase tracking-widest mb-2">
                    {pilot.location}
                  </p>

                  {/* Tagline */}
                  <p className="text-[11px] text-gray-500 italic leading-snug max-w-[140px] mb-3">
                    {pilot.tagline}
                  </p>

                  {/* Stats row */}
                  <div className="flex flex-col gap-1.5 items-center">
                    {pilot.items !== "—" && (
                      <div className="text-[10px] font-bold text-white/50 bg-white/5 border border-white/8 rounded-full px-3 py-0.5">
                        {pilot.items} items processed
                      </div>
                    )}
                    <div
                      className={[
                        "text-[10px] font-bold rounded-full px-3 py-0.5 border",
                        isDone
                          ? "text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/25"
                          : "text-[#0C8346] bg-[#0C8346]/10 border-[#0C8346]/25",
                      ].join(" ")}
                    >
                      {pilot.accuracy} accuracy
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Current accuracy meter ── */}
          <div
            className="mt-14 max-w-lg mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 1.1s",
            }}
          >
            <div className="bg-white/3 border border-white/8 rounded-2xl p-5">
              {/* Labels */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  System Accuracy
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Current</span>
                  <span className="text-sm font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)]">
                    ~80%
                  </span>
                  <span className="text-gray-600">→</span>
                  <span className="text-xs text-gray-500">Target</span>
                  <span className="text-sm font-bold text-white font-[family-name:var(--font-unbounded)]">
                    95%+
                  </span>
                </div>
              </div>

              {/* Accuracy bar */}
              <div className="relative w-full h-2 bg-white/8 rounded-full overflow-visible">
                {/* Fill */}
                <div
                  className="h-full bg-gradient-to-r from-[#0C8346] to-[#22c55e] rounded-full relative"
                  style={{
                    width: `${accProgress}%`,
                    boxShadow: "0 0 8px rgba(12,131,70,0.5)",
                    transition: "none",
                  }}
                >
                  {/* Live cursor dot */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-[#050505]"
                    style={{
                      boxShadow: "0 0 10px rgba(34,197,94,0.8)",
                      animation: "dotBlink 1.8s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* 95% target marker */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 bg-white/30 rounded-full"
                  style={{ left: "100%" }}
                />
              </div>

              {/* Milestone labels under bar */}
              <div className="flex justify-between mt-2 text-[10px] text-gray-600 font-medium">
                <span>50% <span className="text-gray-700">(Brookfield)</span></span>
                <span>70% <span className="text-gray-700">(KJ Somaiya)</span></span>
                <span className="text-[#0C8346]">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
