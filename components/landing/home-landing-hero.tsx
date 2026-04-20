"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HomeLandingHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const s = (delay: number, extra = ""): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s ${extra}`,
  })

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-[70px]"
      style={{ background: "#080807" }}>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      {/* Single, restrained ambient glow */}
      <div className="absolute top-0 left-[20%] w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(12,131,70,0.07) 0%, transparent 70%)" }} />

      {/* Thin horizontal rule at top */}
      <div className="absolute top-[70px] left-0 right-0 h-px bg-white/5 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] gap-16 lg:gap-12 items-center">

          {/* ── LEFT ─────────────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow */}
            <div style={s(0.05)}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current inline-block" />
                AI-Powered Waste Intelligence
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <div style={s(0.12)}>
                <h1 className="text-[clamp(52px,8.5vw,108px)] font-extrabold leading-[0.88] tracking-[-0.03em] font-[family-name:var(--font-unbounded)]"
                  style={{ color: "#F2EDE6" }}>
                  WASTE IS
                </h1>
              </div>
              <div style={s(0.22)}>
                <h1 className="text-[clamp(52px,8.5vw,108px)] font-extrabold leading-[0.88] tracking-[-0.03em] font-[family-name:var(--font-unbounded)]"
                  style={{ color: "#1A6B3C" }}>
                  WAITING.
                </h1>
              </div>
            </div>

            {/* Sub-headline */}
            <div style={s(0.34)}>
              <p className="text-[clamp(15px,1.6vw,20px)] font-light leading-relaxed max-w-md"
                style={{ color: "#7A7060", fontFamily: "var(--font-inter), sans-serif" }}>
                W.I.S.E. classifies, tracks, and routes waste in real time —
                from toss to insight in milliseconds.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3" style={s(0.46)}>
              <Link href="/r3bin"
                className="group inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                style={{ background: "#1A6B3C", color: "#fff" }}
              >
                Discover W.I.S.E.
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/r3bin"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full border transition-all duration-300 hover:border-[#1A6B3C]/40 hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "#C8C0B5" }}
              >
                View R3Bin
              </Link>
            </div>

            {/* Divider + small proof line */}
            <div style={s(0.58)} className="flex items-center gap-4 pt-2">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <p className="text-[11px] tracking-[0.12em] uppercase" style={{ color: "#4A4640" }}>
                Deployed at Brookfield Mall · KJ Somaiya · DST India
              </p>
            </div>
          </div>

          {/* ── RIGHT — Robot ─────────────────────────── */}
          <div className="relative flex justify-center items-center" style={s(0.18)}>

            {/* Subtle glow behind robot */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(12,131,70,0.1) 0%, transparent 70%)", filter: "blur(20px)" }} />

            {/* Robot image */}
            <div className="relative w-full max-w-[440px] aspect-square"
              style={{ animation: "floatY 6s ease-in-out infinite" }}>
              <Image
                src="/images/wise-robot.png"
                alt="W.I.S.E. Robot"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Accuracy chip — top right */}
            <div className="absolute top-4 right-0 rounded-xl px-3.5 py-2.5 backdrop-blur-sm"
              style={{
                background: "rgba(8,8,7,0.88)",
                border: "1px solid rgba(26,107,60,0.25)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 1s",
                animation: "floatY 5s ease-in-out infinite 1.2s",
              }}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B3C] animate-pulse" />
                <span className="text-[9px] uppercase tracking-widest" style={{ color: "#5A5450" }}>Live Sorting</span>
              </div>
              <div className="text-xl font-bold leading-none font-[family-name:var(--font-unbounded)]"
                style={{ color: "#1A6B3C" }}>
                99.2<span className="text-xs ml-0.5">%</span>
              </div>
              <div className="text-[9px] mt-0.5" style={{ color: "#5A5450" }}>AI Accuracy</div>
            </div>

            {/* CO₂ chip — bottom left */}
            <div className="absolute bottom-8 left-0 rounded-xl px-3.5 py-2.5 backdrop-blur-sm"
              style={{
                background: "rgba(8,8,7,0.88)",
                border: "1px solid rgba(139,106,74,0.22)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 1.3s",
                animation: "floatY 4.5s ease-in-out infinite 2.4s",
              }}>
              <div className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "#8B6A4A" }}>CO₂ Saved Today</div>
              <div className="text-xl font-bold leading-none font-[family-name:var(--font-unbounded)]"
                style={{ color: "#F2EDE6" }}>
                12.4<span className="text-sm ml-0.5" style={{ color: "#1A6B3C" }}>kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ color: "#2A2820" }}>
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-8 bg-current opacity-40" />
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}