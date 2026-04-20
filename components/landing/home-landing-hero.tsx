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

  const s = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  })

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-[70px]"
      style={{ background: "linear-gradient(135deg, #0B1510 0%, #090907 45%, #0E0B07 100%)" }}
    >
      {/* ── BACKGROUND LAYER ─────────────────────────────── */}

      {/* Dot grid — warm, slightly visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,107,60,0.18) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Main ambient — green from top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "-5%",
          width: "65%", height: "80%",
          background: "radial-gradient(ellipse, rgba(12,131,70,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Warm amber glow — bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", right: "5%",
          width: "45%", height: "60%",
          background: "radial-gradient(ellipse, rgba(139,100,50,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Large decorative arc — top right corner */}
      <svg
        className="absolute top-0 right-0 pointer-events-none opacity-[0.06]"
        width="600" height="600" viewBox="0 0 600 600" fill="none"
      >
        <circle cx="600" cy="0" r="320" stroke="#1A6B3C" strokeWidth="1" fill="none" />
        <circle cx="600" cy="0" r="440" stroke="#1A6B3C" strokeWidth="0.5" fill="none" />
        <circle cx="600" cy="0" r="560" stroke="#8B6432" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Horizontal rule under nav */}
      <div className="absolute top-[70px] left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)" }} />

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8">

            <div style={s(0.05)}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: "#2A8A50" }}>
                <span className="w-6 h-px bg-current" />
                AI-Powered Waste Intelligence
              </span>
            </div>

            <div style={s(0.12)}>
              <h1 className="font-extrabold leading-[0.86] tracking-[-0.03em] font-[family-name:var(--font-unbounded)]"
                style={{ fontSize: "clamp(54px,9vw,116px)", color: "#EDE8E0" }}>
                WASTE IS
              </h1>
              <h1 className="font-extrabold leading-[0.86] tracking-[-0.03em] font-[family-name:var(--font-unbounded)]"
                style={{ fontSize: "clamp(54px,9vw,116px)", color: "#1A6B3C" }}>
                WAITING.
              </h1>
            </div>

            <div style={s(0.28)}>
              <p className="text-[clamp(15px,1.5vw,19px)] font-light leading-[1.75] max-w-[420px]"
                style={{ color: "#6B6358" }}>
                W.I.S.E. classifies, tracks, and routes waste in real time —
                from toss to insight in milliseconds.
              </p>
            </div>

            <div className="flex flex-wrap gap-3" style={s(0.42)}>
              <Link href="/r3bin"
                className="group inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "#1A6B3C", color: "#fff" }}>
                Discover W.I.S.E.
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/r3bin"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full border transition-all duration-300 hover:border-[#1A6B3C]/50 hover:text-white"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "#B8B0A5" }}>
                View R3Bin
              </Link>
            </div>

            <div style={s(0.54)} className="flex items-center gap-3 pt-1">
              <div className="h-px w-10" style={{ background: "rgba(255,255,255,0.1)" }} />
              <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: "#3A3630" }}>
                Deployed at Brookfield Mall · KJ Somaiya · DST India
              </p>
            </div>
          </div>

          {/* RIGHT — Robot with ring animations */}
          <div className="relative flex justify-center items-center min-h-[460px]" style={s(0.2)}>

            {/* Outermost ring — slow rotate */}
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: "105%", height: "105%",
                border: "1px solid rgba(26,107,60,0.12)",
                animation: "spinRingCW 28s linear infinite",
              }} />

            {/* Mid ring — dashed, counter-rotate */}
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: "82%", height: "82%",
                border: "1px dashed rgba(139,100,50,0.15)",
                animation: "spinRingCCW 18s linear infinite",
              }} />

            {/* Inner ring — pulse */}
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: "60%", height: "60%",
                border: "1px solid rgba(26,107,60,0.08)",
                animation: "ringPulse 4s ease-in-out infinite",
              }} />

            {/* Green glow core */}
            <div className="absolute rounded-full pointer-events-none"
              style={{
                width: "55%", height: "55%",
                background: "radial-gradient(circle, rgba(12,131,70,0.18) 0%, transparent 70%)",
                filter: "blur(24px)",
                animation: "ringPulse 5s ease-in-out infinite 1s",
              }} />

            {/* 4 corner tick marks on outer ring */}
            {[0, 90, 180, 270].map((deg) => (
              <div key={deg} className="absolute pointer-events-none"
                style={{
                  width: "105%", height: "105%",
                  transform: `rotate(${deg}deg)`,
                }}>
                <div style={{
                  position: "absolute", top: -2, left: "50%", transform: "translateX(-50%)",
                  width: 1, height: 8,
                  background: "rgba(26,107,60,0.4)",
                }} />
              </div>
            ))}

            {/* Robot */}
            <div className="relative w-full max-w-[460px] aspect-square z-10"
              style={{ animation: "floatY 6s ease-in-out infinite" }}>
              <Image
                src="/images/wise-robot.png"
                alt="W.I.S.E. Robot"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 40px rgba(12,131,70,0.25))" }}
                priority
              />
            </div>

            {/* Accuracy chip */}
            <div className="absolute top-4 right-0 z-20 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(10,14,11,0.92)",
                border: "1px solid rgba(26,107,60,0.3)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 1.1s",
                animation: "floatY 5s ease-in-out infinite 0.8s",
              }}>
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B3C]"
                  style={{ animation: "ringPulse 1.6s ease-in-out infinite", boxShadow: "0 0 6px #1A6B3C" }} />
                <span className="text-[9px] uppercase tracking-widest font-medium" style={{ color: "#506858" }}>Live Sorting</span>
              </div>
              <div className="text-2xl font-bold leading-none font-[family-name:var(--font-unbounded)]"
                style={{ color: "#1A6B3C" }}>
                99.2<span className="text-xs ml-0.5 opacity-70">%</span>
              </div>
              <div className="text-[9px] mt-1" style={{ color: "#506858" }}>AI Accuracy</div>
            </div>

            {/* CO₂ chip */}
            <div className="absolute bottom-10 left-0 z-20 rounded-2xl px-4 py-3"
              style={{
                background: "rgba(12,10,7,0.92)",
                border: "1px solid rgba(139,100,50,0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 1.4s",
                animation: "floatY 4.5s ease-in-out infinite 2.2s",
              }}>
              <div className="text-[9px] uppercase tracking-widest mb-1.5 font-medium" style={{ color: "#7A6040" }}>CO₂ Saved Today</div>
              <div className="text-2xl font-bold leading-none font-[family-name:var(--font-unbounded)]"
                style={{ color: "#EDE8E0" }}>
                12.4<span className="text-sm ml-1" style={{ color: "#1A6B3C" }}>kg</span>
              </div>
              <div className="mt-2.5 h-0.5 w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: "72%", background: "#1A6B3C", transition: "width 1.2s ease 1.8s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ color: "#282420" }}>
        <span className="text-[9px] uppercase tracking-[0.28em] font-medium">Scroll</span>
        <div className="w-px h-7 bg-current opacity-50" style={{ animation: "scrollPulse 2.5s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes spinRingCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinRingCCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes ringPulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.4; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%      { opacity: 0.8; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}