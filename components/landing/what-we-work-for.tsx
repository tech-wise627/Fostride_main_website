"use client"

import { GraduationCap, Building2, Wheat, Home, Plane } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const sectors = [
  {
    title: "Campuses & Universities",
    icon: GraduationCap,
    description: "Empowering educational institutions with smart, data-driven waste management that shapes the next generation of sustainability leaders.",
    size: "large",
    gradient: "from-[#0C8346]/20 via-[#0C8346]/8 to-transparent",
  },
  {
    title: "IT Parks & Corporates",
    icon: Building2,
    description: "Streamline waste ops for modern workplaces with real-time bin tracking and ESG-ready carbon reports.",
    size: "small",
    gradient: "from-[#22c55e]/15 via-[#22c55e]/5 to-transparent",
  },
  {
    title: "Agricultural Clusters",
    icon: Wheat,
    description: "Optimize organic waste handling in agri-hubs with AI-powered segregation tuned for biomass.",
    size: "small",
    gradient: "from-[#16a34a]/15 via-[#16a34a]/5 to-transparent",
  },
  {
    title: "Residential & Smart Cities",
    icon: Home,
    description: "Build cleaner, healthier communities through network-connected smart bins that report to city dashboards.",
    size: "small",
    gradient: "from-[#0C8346]/15 via-[#0C8346]/5 to-transparent",
  },
  {
    title: "Airports & Malls",
    icon: Plane,
    description: "Handle high-volume, mixed-waste streams efficiently in busy public venues with automated overflow alerts.",
    size: "large",
    gradient: "from-[#22c55e]/20 via-[#22c55e]/8 to-transparent",
  },
]

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
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

export function WhatWeWorkFor() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="py-24 text-white relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(12,131,70,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-16"
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
            Where We Operate
            <div
              className="h-px bg-[#0C8346]"
              style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] leading-tight">
            What We{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0C8346, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Work For
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Tailored waste intelligence for every environment where people and waste collide.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto">

          {/* Row 1: Large card left + 2 smalls right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

            {/* Large card — Universities */}
            {[sectors[0]].map((sector, i) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.title}
                  className="md:col-span-2 group relative rounded-3xl p-8 md:p-10 border border-white/8 overflow-hidden cursor-default transition-all duration-500 hover:border-[#0C8346]/50 hover:shadow-[0_0_60px_rgba(12,131,70,0.08)]"
                  style={{
                    background: `linear-gradient(135deg, ${sector.gradient.replace("from-", "").replace(" via-", ", ").replace(" to-transparent", ", transparent")})`.replace("linear-gradient(135deg, ", "linear-gradient(135deg, "),
                    backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(12,131,70,0.15) 0%, transparent 60%)`,
                    backgroundColor: "#0a0a0a",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                    transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                  }}
                >
                  {/* bg glow on hover */}
                  <div className="absolute inset-0 bg-[#0C8346]/0 group-hover:bg-[#0C8346]/5 transition-colors duration-500 pointer-events-none rounded-3xl" />

                  <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(12,131,70,0.4)]"
                      style={{ background: "rgba(12,131,70,0.15)", border: "1px solid rgba(12,131,70,0.3)" }}
                    >
                      <Icon className="w-7 h-7 text-[#0C8346]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-unbounded)] group-hover:text-[#22c55e] transition-colors duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* 2 small cards stacked */}
            <div className="flex flex-col gap-4">
              {[sectors[1], sectors[2]].map((sector, i) => {
                const Icon = sector.icon
                return (
                  <div
                    key={sector.title}
                    className="group relative rounded-3xl p-6 border border-white/8 overflow-hidden cursor-default flex-1 transition-all duration-500 hover:border-[#0C8346]/50 hover:shadow-[0_0_40px_rgba(12,131,70,0.08)]"
                    style={{
                      backgroundColor: "#0a0a0a",
                      backgroundImage: "radial-gradient(ellipse at 80% 20%, rgba(34,197,94,0.1) 0%, transparent 60%)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                      transition: `opacity 0.7s ease ${0.12 + i * 0.1}s, transform 0.7s ease ${0.12 + i * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[#0C8346]/0 group-hover:bg-[#0C8346]/4 transition-colors duration-500 pointer-events-none rounded-3xl" />
                    <div className="relative z-10">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "rgba(12,131,70,0.12)", border: "1px solid rgba(12,131,70,0.25)" }}
                      >
                        <Icon className="w-5 h-5 text-[#0C8346]" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Row 2: 2 smalls left + Large card right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* 2 small cards */}
            <div className="flex flex-col gap-4">
              {[sectors[3]].map((sector) => {
                const Icon = sector.icon
                return (
                  <div
                    key={sector.title}
                    className="group relative rounded-3xl p-6 border border-white/8 overflow-hidden cursor-default flex-1 h-full transition-all duration-500 hover:border-[#0C8346]/50"
                    style={{
                      backgroundColor: "#0a0a0a",
                      backgroundImage: "radial-gradient(ellipse at 20% 80%, rgba(12,131,70,0.1) 0%, transparent 60%)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                      transition: `opacity 0.7s ease 0.32s, transform 0.7s ease 0.32s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[#0C8346]/0 group-hover:bg-[#0C8346]/4 transition-colors duration-500 pointer-events-none rounded-3xl" />
                    <div className="relative z-10">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "rgba(12,131,70,0.12)", border: "1px solid rgba(12,131,70,0.25)" }}
                      >
                        <Icon className="w-5 h-5 text-[#0C8346]" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Large card — Airports */}
            {[sectors[4]].map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.title}
                  className="md:col-span-2 group relative rounded-3xl p-8 md:p-10 border border-white/8 overflow-hidden cursor-default transition-all duration-500 hover:border-[#0C8346]/50 hover:shadow-[0_0_60px_rgba(12,131,70,0.08)]"
                  style={{
                    backgroundColor: "#0a0a0a",
                    backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.15) 0%, transparent 60%)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                    transition: `opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s`,
                  }}
                >
                  <div className="absolute inset-0 bg-[#0C8346]/0 group-hover:bg-[#0C8346]/5 transition-colors duration-500 pointer-events-none rounded-3xl" />
                  <div className="relative z-10 h-full flex flex-col justify-between min-h-[220px]">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(12,131,70,0.4)]"
                      style={{ background: "rgba(12,131,70,0.15)", border: "1px solid rgba(12,131,70,0.3)" }}
                    >
                      <Icon className="w-7 h-7 text-[#0C8346]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-unbounded)] group-hover:text-[#22c55e] transition-colors duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        {sector.description}
                      </p>
                    </div>
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
