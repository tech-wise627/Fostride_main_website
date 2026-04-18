"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  suffix: string
  decimals?: number
  duration?: number
}

function Counter({ end, suffix, decimals = 0, duration = 1800 }: CounterProps) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let raf: number
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(eased * end)
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [started, end, duration])

  const display = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString()

  return (
    <span ref={ref}>
      {end >= 1000 && decimals === 0
        ? `${(value / 1000).toFixed(1)}K`
        : display}
      {suffix}
    </span>
  )
}

const stats = [
  { end: 10000,  suffix: "+",  label: "Items Sorted",    decimals: 0 },
  { end: 94.2,   suffix: "%",  label: "Recycling Rate",  decimals: 1 },
  { end: 500,    suffix: "kg", label: "Carbon Offset",   decimals: 0 },
  { end: 15,     suffix: "+",  label: "Active Bins",     decimals: 0 },
]

export function ImpactStatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-16 bg-[#080808] border-y border-white/5 overflow-hidden">
      {/* top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#0C8346] to-transparent"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          transformOrigin: "center",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)] group-hover:scale-110 transition-transform duration-300 tabular-nums">
                <Counter end={s.end} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-medium">
                {s.label}
              </div>
              {/* underline accent */}
              <div className="mt-3 w-8 h-px bg-[#0C8346]/50 group-hover:w-14 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#0C8346] to-transparent"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scaleX(1)" : "scaleX(0)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          transformOrigin: "center",
        }}
      />
    </section>
  )
}
