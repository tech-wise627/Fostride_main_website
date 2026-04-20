"use client"

import { useEffect, useRef } from "react"

const problems = [
  {
    number: "01",
    title: "Manual Sorting",
    desc: "Inaccurate, unscalable, and leaves zero data trail behind.",
  },
  {
    number: "02",
    title: "Zero Audit Trail",
    desc: "No proof of compliance, no ESG data — nothing to show regulators or investors.",
  },
  {
    number: "03",
    title: "BRSR is Mandatory",
    desc: "Listed companies need waste data that simply doesn't exist yet.",
  },
]

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal-up") ?? []
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; obs.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* subtle red-tinted glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(220,38,38,0.06),transparent)]" />

      <div className="max-w-6xl mx-auto">

        {/* label */}
        <div
          className="reveal-up flex items-center gap-3 mb-6"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
          <span className="text-xs font-semibold tracking-[0.2em] text-red-400/80 uppercase">The Problem</span>
        </div>

        {/* headline stat */}
        <p
          className="reveal-up text-2xl md:text-4xl font-bold text-white/90 leading-snug max-w-3xl mb-16"
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}
        >
          India generates{" "}
          <span className="text-red-400">62 million tonnes</span>{" "}
          of waste annually.{" "}
          <span className="text-white/50">Less than 20% is processed correctly.</span>
        </p>

        {/* three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {problems.map((p, i) => (
            <div
              key={p.number}
              className="reveal-up bg-[#0a0a08] p-8 flex flex-col gap-4 group hover:bg-[#0f0f0c] transition-colors"
              style={{ opacity: 0, transform: "translateY(24px)", transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s` }}
            >
              <span className="text-xs font-mono text-red-500/50 tracking-widest">{p.number}</span>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}