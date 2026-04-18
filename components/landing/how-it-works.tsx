"use client"

import { Trash2, Cpu, BarChart3 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    step: "01",
    icon: Trash2,
    title: "Toss It In",
    desc: "Users drop any waste into R3Bin — no pre-sorting required. The bin takes it from there.",
    accent: "#0C8346",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Identifies",
    desc: "Computer vision and multi-sensor fusion classify the waste type in milliseconds with 99.2% accuracy.",
    accent: "#22c55e",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Track the Impact",
    desc: "Your live dashboard shows trends, carbon savings, and ESG-ready PDF reports — instantly.",
    accent: "#0C8346",
  },
]

function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

export function HowItWorks() {
  const { ref, visible } = useReveal(0.15)

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Subtle radial bg accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#0C8346]/5 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
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
              style={{
                width: visible ? "32px" : "0px",
                transition: "width 0.8s ease 0.3s",
              }}
            />
            How It Works
            <div
              className="h-px bg-[#0C8346]"
              style={{
                width: visible ? "32px" : "0px",
                transition: "width 0.8s ease 0.3s",
              }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
            Three Steps.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0C8346, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero Effort.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Waste management that works in the background while you focus on what matters.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative max-w-5xl mx-auto">

          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+8px)] right-[calc(16.67%+8px)] h-px overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#0C8346]/40 via-[#22c55e]/70 to-[#0C8346]/40"
              style={{
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1.2s ease 0.6s",
                transformOrigin: "left",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center text-center group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(40px)",
                    transition: `opacity 0.7s ease ${0.35 + i * 0.18}s, transform 0.7s ease ${0.35 + i * 0.18}s`,
                  }}
                >
                  {/* Step icon circle */}
                  <div className="relative z-10 mb-6">
                    {/* Outer pulse ring */}
                    <div
                      className="absolute inset-0 rounded-full bg-[#0C8346]/20 scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none"
                    />
                    <div
                      className="w-[104px] h-[104px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${s.accent}40, ${s.accent}10)`,
                        border: `1.5px solid ${s.accent}60`,
                        boxShadow: `0 0 32px ${s.accent}25`,
                      }}
                    >
                      <Icon
                        className="w-8 h-8 transition-colors duration-300"
                        style={{ color: s.accent }}
                      />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#050505] border flex items-center justify-center"
                      style={{ borderColor: `${s.accent}60` }}
                    >
                      <span className="text-[10px] font-bold" style={{ color: s.accent }}>
                        {s.step}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="w-full rounded-3xl p-8 border transition-all duration-300 group-hover:border-[#0C8346]/40 group-hover:shadow-[0_0_40px_rgba(12,131,70,0.08)]"
                    style={{
                      background: "linear-gradient(160deg, rgba(12,131,70,0.08) 0%, rgba(12,131,70,0.02) 100%)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-unbounded)]">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
