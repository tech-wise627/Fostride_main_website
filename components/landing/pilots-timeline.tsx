"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const pilots = [
  {
    name: "Brookfield",
    location: "Powai",
    month: "Dec 2024",
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
    month: "Jan 2025",
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

const RAIL_TARGET = 71
const ACCURACY_TARGET = Math.round((80 / 95) * 100)

// Badge row is fixed height so all dots sit at the same vertical position
const BADGE_H = 36 // px  (height of the badge row above the dot)
const DOT_SIZE = 88 // px  (w/h of the dot circle)
// Rail sits at the vertical centre of the dot
const RAIL_TOP = BADGE_H + DOT_SIZE / 2  // = 36 + 44 = 80

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
    <section ref={ref} className="py-28 relative overflow-hidden">
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
          className="text-center mb-24"
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
          <p className="mt-5 text-gray-400 text-xl max-w-xl mx-auto leading-relaxed">
            Real-world pilots generating the data that makes W.I.S.E. smarter with every sort.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-start justify-between">

            {/* Rail background — centred on dot */}
            <div
              className="absolute left-[16.67%] right-[16.67%] h-0.5 bg-white/8 pointer-events-none"
              style={{ top: `${RAIL_TOP}px` }}
            />

            {/* Animated progress fill */}
            <div
              className="absolute left-[16.67%] h-0.5 pointer-events-none"
              style={{
                top: `${RAIL_TOP}px`,
                width: `${(railProgress / 100) * 66.66}%`,
                background: "linear-gradient(90deg, #0C8346, #22c55e)",
                boxShadow: "0 0 10px rgba(12,131,70,0.7)",
              }}
            />

            {pilots.map((pilot, i) => {
              const isDone = pilot.status === "done"
              const isGoal = pilot.status === "goal"

              return (
                <div
                  key={pilot.name}
                  className="flex-1 flex flex-col items-center text-center group px-2"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 0.7s ease ${0.3 + i * 0.22}s, transform 0.7s ease ${0.3 + i * 0.22}s`,
                  }}
                >
                  {/* ── Badge row (fixed height, sits ABOVE dot, no overlap) ── */}
                  <div
                    className="flex items-center justify-center w-full"
                    style={{ height: `${BADGE_H}px` }}
                  >
                    <div
                      className={[
                        "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest whitespace-nowrap",
                        isDone
                          ? "bg-[#0C8346] text-white shadow-[0_0_12px_rgba(12,131,70,0.4)]"
                          : "bg-white/6 text-gray-400 border border-white/12",
                      ].join(" ")}
                    >
                      {pilot.badge}
                    </div>
                  </div>

                  {/* ── Dot ── */}
                  <div className="relative z-10 flex items-center justify-center" style={{ width: DOT_SIZE, height: DOT_SIZE }}>
                    {/* Pulsing halos for done pilots */}
                    {isDone && (
                      <>
                        <div
                          className="absolute rounded-full bg-[#0C8346]/15 pointer-events-none"
                          style={{
                            width: DOT_SIZE + 28, height: DOT_SIZE + 28,
                            animation: `glowPulse 2.8s ease-in-out infinite ${i * 0.5}s`,
                          }}
                        />
                        <div
                          className="absolute rounded-full bg-[#0C8346]/08 pointer-events-none"
                          style={{
                            width: DOT_SIZE + 52, height: DOT_SIZE + 52,
                            animation: `glowPulse 2.8s ease-in-out infinite ${i * 0.5 + 0.55}s`,
                          }}
                        />
                      </>
                    )}

                    {/* Circle */}
                    <div
                      className={[
                        "rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative z-10",
                        isGoal
                          ? "bg-[#050505] border-2 border-dashed border-[#0C8346]/35"
                          : "bg-[#0C8346] border-2 border-[#0C8346]",
                      ].join(" ")}
                      style={{
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        ...(isDone
                          ? { boxShadow: "0 0 28px rgba(12,131,70,0.45)" }
                          : undefined),
                      }}
                    >
                      {isDone && <Check className="text-white" style={{ width: 32, height: 32 }} strokeWidth={2.5} />}
                      {isGoal && (
                        <div
                          className="rounded-full border-2 border-[#0C8346]/45"
                          style={{ width: 26, height: 26 }}
                        />
                      )}
                    </div>
                  </div>

                  {/* ── Content below dot ── */}
                  <div className="mt-6 flex flex-col items-center gap-2 w-full">
                    {/* Month */}
                    <div className="text-[11px] text-gray-600 uppercase tracking-widest font-medium">
                      {pilot.month}
                    </div>

                    {/* Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-unbounded)] group-hover:text-[#0C8346] transition-colors duration-300 leading-tight">
                      {pilot.name}
                    </h3>

                    {/* Location */}
                    <p className="text-xs text-[#0C8346] font-semibold uppercase tracking-widest">
                      {pilot.location}
                    </p>

                    {/* Tagline */}
                    <p className="text-sm text-gray-500 italic leading-snug max-w-[170px]">
                      {pilot.tagline}
                    </p>

                    {/* Stats pills */}
                    <div className="flex flex-col gap-2 items-center mt-1">
                      {pilot.items !== "—" && (
                        <div className="text-xs font-semibold text-white/50 bg-white/5 border border-white/8 rounded-full px-4 py-1.5">
                          {pilot.items} items processed
                        </div>
                      )}
                      <div
                        className={[
                          "text-sm font-bold rounded-full px-4 py-1.5 border",
                          isDone
                            ? "text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/25"
                            : "text-[#0C8346] bg-[#0C8346]/10 border-[#0C8346]/25",
                        ].join(" ")}
                      >
                        {pilot.accuracy} accuracy
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Current accuracy meter ── */}
          <div
            className="mt-16 max-w-xl mx-auto"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 1.1s",
            }}
          >
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              {/* Labels */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  System Accuracy
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Current</span>
                  <span className="font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)]">~80%</span>
                  <span className="text-gray-600">→</span>
                  <span className="text-gray-500">Target</span>
                  <span className="font-bold text-white font-[family-name:var(--font-unbounded)]">95%+</span>
                </div>
              </div>

              {/* Bar */}
              <div className="relative w-full h-3 bg-white/8 rounded-full overflow-visible">
                <div
                  className="h-full bg-gradient-to-r from-[#0C8346] to-[#22c55e] rounded-full relative"
                  style={{
                    width: `${accProgress}%`,
                    boxShadow: "0 0 10px rgba(12,131,70,0.5)",
                  }}
                >
                  {/* Live cursor */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#22c55e] border-2 border-[#050505]"
                    style={{
                      boxShadow: "0 0 12px rgba(34,197,94,0.9)",
                      animation: "dotBlink 1.8s ease-in-out infinite",
                    }}
                  />
                </div>
                {/* 95% marker */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-0.5 h-5 bg-white/25 rounded-full"
                  style={{ left: "100%", transform: "translate(-50%, -50%)" }}
                />
              </div>

              {/* Milestone labels */}
              <div className="flex justify-between mt-3 text-xs text-gray-600 font-medium">
                <span>50% <span className="text-gray-700">(Brookfield)</span></span>
                <span>70% <span className="text-gray-700">(KJ Somaiya)</span></span>
                <span className="text-[#0C8346] font-bold">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
