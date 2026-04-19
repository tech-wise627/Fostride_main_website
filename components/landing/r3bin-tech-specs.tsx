"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, Camera, Gauge, Shield, Cloud, Zap } from "lucide-react"

const SPECS = [
  { icon: Cpu,    label: "AI Engine",     value: "4 TOPS",    sub: "Edge neural processor" },
  { icon: Camera, label: "Vision",        value: "12MP",      sub: "+ depth sensing" },
  { icon: Gauge,  label: "Speed",         value: "<500ms",    sub: "Per item classified" },
  { icon: Shield, label: "Security",      value: "AES-256",   sub: "End-to-end encrypted" },
  { icon: Cloud,  label: "Uptime",        value: "99.99%",    sub: "Cloud platform SLA" },
  { icon: Zap,    label: "Power",         value: "Solar",     sub: "72hr battery backup" },
]

export default function R3binTechSpecs() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0C8346]/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div
          className="text-center mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <div className="h-px bg-[#0C8346]" style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
            Under the Hood
            <div className="h-px bg-[#0C8346]" style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
            Built for{" "}
            <span style={{ background: "linear-gradient(135deg, #0C8346, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Enterprise Scale
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {SPECS.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="group relative rounded-2xl border border-white/6 bg-white/3 p-5 text-center hover:border-[#0C8346]/40 hover:bg-[#0C8346]/5 transition-all duration-250 cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${0.05 + i * 0.08}s, transform 0.5s ease ${0.05 + i * 0.08}s`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0C8346]/12 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0C8346]/25 transition-colors duration-250">
                  <Icon className="w-5 h-5 text-[#0C8346]" />
                </div>
                <div className="text-lg font-bold text-white font-[family-name:var(--font-unbounded)] leading-tight mb-0.5">
                  {s.value}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-0.5">{s.label}</div>
                <div className="text-[10px] text-gray-600">{s.sub}</div>

                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-[#0C8346] opacity-0 group-hover:opacity-100 transition-opacity duration-250 rounded-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
