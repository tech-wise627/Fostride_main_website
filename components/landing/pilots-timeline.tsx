"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const pilots = [
  {
    name: "Brookfield",
    sub: "Properties",
    status: "live" as const,
    badge: "Live",
    detail: "Waste analytics across commercial real-estate spaces",
    metric: "2,400+ items sorted",
  },
  {
    name: "KJSSE",
    sub: "Campus",
    status: "active" as const,
    badge: "Active",
    detail: "AI sorting at K.J. Somaiya School of Engineering",
    metric: "8,000+ items sorted",
  },
  {
    name: "Target",
    sub: "95% Accuracy",
    status: "goal" as const,
    badge: "Goal",
    detail: "Full autonomous accuracy across all pilot sites",
    metric: "Q2 2025",
  },
]

// progress: Brookfield complete, KJSSE in-progress → ~60% along the rail
const PROGRESS_TARGET = 62

export function PilotsTimeline() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const timeout = setTimeout(() => {
      let p = 0
      const interval = setInterval(() => {
        p += 1.2
        setProgress(Math.min(p, PROGRESS_TARGET))
        if (p >= PROGRESS_TARGET) clearInterval(interval)
      }, 14)
      return () => clearInterval(interval)
    }, 500)
    return () => clearTimeout(timeout)
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

        {/* Timeline track */}
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-start justify-between">

            {/* Rail background */}
            <div className="absolute top-[27px] left-[16.67%] right-[16.67%] h-0.5 bg-white/8 pointer-events-none" />

            {/* Animated progress fill */}
            <div
              className="absolute top-[27px] left-[16.67%] h-0.5 bg-gradient-to-r from-[#0C8346] to-[#22c55e] pointer-events-none"
              style={{
                width: `${(progress / 100) * 66.66}%`,
                boxShadow: "0 0 8px rgba(12,131,70,0.6)",
              }}
            />

            {pilots.map((pilot, i) => {
              const isLive = pilot.status === "live"
              const isActive = pilot.status === "active"
              const isGoal = pilot.status === "goal"

              return (
                <div
                  key={pilot.name}
                  className="flex-1 flex flex-col items-center text-center group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.7s ease ${0.3 + i * 0.2}s, transform 0.7s ease ${0.3 + i * 0.2}s`,
                  }}
                >
                  {/* Dot + badge */}
                  <div className="relative mb-6 z-10">

                    {/* Pulsing halo for live/active */}
                    {(isLive || isActive) && (
                      <>
                        <div
                          className="absolute rounded-full bg-[#0C8346]/20 pointer-events-none"
                          style={{
                            width: 68,
                            height: 68,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: "glowPulse 2.4s ease-in-out infinite",
                          }}
                        />
                        <div
                          className="absolute rounded-full bg-[#0C8346]/10 pointer-events-none"
                          style={{
                            width: 84,
                            height: 84,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            animation: "glowPulse 2.4s ease-in-out infinite 0.4s",
                          }}
                        />
                      </>
                    )}

                    {/* Main dot */}
                    <div
                      className={[
                        "relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                        isGoal
                          ? "bg-[#050505] border-2 border-dashed border-[#0C8346]/35"
                          : "bg-[#0C8346] border-2 border-[#0C8346]",
                      ].join(" ")}
                      style={
                        !isGoal
                          ? { boxShadow: "0 0 20px rgba(12,131,70,0.45)" }
                          : undefined
                      }
                    >
                      {isLive && (
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      )}
                      {isActive && (
                        <div
                          className="w-3.5 h-3.5 rounded-full bg-white"
                          style={{ animation: "dotBlink 1.3s ease-in-out infinite" }}
                        />
                      )}
                      {isGoal && (
                        <div className="w-4 h-4 rounded-full border-2 border-[#0C8346]/45" />
                      )}
                    </div>

                    {/* Status badge — floats above dot */}
                    <div
                      className={[
                        "absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider whitespace-nowrap",
                        isLive
                          ? "bg-[#0C8346] text-white"
                          : isActive
                          ? "bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/35"
                          : "bg-white/5 text-gray-500 border border-white/10",
                      ].join(" ")}
                    >
                      {pilot.badge}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white font-[family-name:var(--font-unbounded)] mb-0.5 group-hover:text-[#0C8346] transition-colors duration-300">
                    {pilot.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-[#0C8346] font-semibold uppercase tracking-widest mb-3">
                    {pilot.sub}
                  </p>

                  {/* Detail */}
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[150px] mb-3">
                    {pilot.detail}
                  </p>

                  {/* Metric pill */}
                  <div className="text-xs font-bold text-white/50 bg-white/5 border border-white/8 rounded-full px-3 py-1">
                    {pilot.metric}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress label */}
          <div
            className="mt-12 flex items-center justify-center gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 1s",
            }}
          >
            <div className="flex-1 max-w-[200px] h-1.5 bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#0C8346] to-[#22c55e] rounded-full"
                style={{
                  width: `${progress}%`,
                  boxShadow: "0 0 6px rgba(12,131,70,0.5)",
                }}
              />
            </div>
            <span className="text-sm text-gray-400 font-medium">
              <span className="text-[#0C8346] font-bold">{Math.round(progress)}%</span> toward Target
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
