"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function BoldCTA() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4">
      <div
        className="relative max-w-5xl mx-auto rounded-[48px] overflow-hidden"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Green gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #064e26 0%, #0C8346 40%, #16a34a 70%, #0a7340 100%)",
          }}
        />

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glowing orb top-right */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-[80px] pointer-events-none"
          style={{ animation: "glowPulse 5s ease-in-out infinite" }}
        />

        {/* Glowing orb bottom-left */}
        <div
          className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-black/20 blur-[80px] pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-8 py-16 md:px-16 md:py-20">
          <div
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-white/90 text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{ animation: "dotBlink 1.6s ease-in-out infinite" }}
            />
            Ready to get started?
          </div>

          <h2
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white font-[family-name:var(--font-unbounded)] leading-[1.0] mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s",
            }}
          >
            Make Waste<br />
            <span className="text-white/80">Work For You.</span>
          </h2>

          <p
            className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.52s, transform 0.7s ease 0.52s",
            }}
          >
            Join forward-thinking campuses and corporations turning waste into real-time data, carbon credits, and ESG wins.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.64s, transform 0.7s ease 0.64s",
            }}
          >
            <Link
              href="/r3bin"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#0C8346] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:scale-[1.04] active:scale-100"
            >
              Get R3Bin
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
