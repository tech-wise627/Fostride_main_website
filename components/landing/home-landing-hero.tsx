"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HomeLandingHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  const lines = ["The Future", "of Waste", "Is Smart."]

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-[70px]">

      {/* ── Dot-grid background ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(12,131,70,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── Radial vignette to fade edges ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 20%, #050505 75%)",
        }}
      />

      {/* ── Scanning line ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(12,131,70,0.7) 50%, transparent 100%)",
            animation: "scanLine 10s ease-in-out infinite",
            top: 0,
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT — Text column ── */}
          <div className="flex flex-col items-start space-y-8">

            {/* Live badge */}
            <div
              className="flex items-center gap-2.5 bg-[#0C8346]/10 border border-[#0C8346]/30 rounded-full px-4 py-2"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-[#0C8346]"
                style={{ animation: "dotBlink 1.6s ease-in-out infinite" }}
              />
              <span className="text-sm text-[#0C8346] font-semibold tracking-wide">
                AI-Powered Waste Intelligence
              </span>
            </div>

            {/* Headline — 3 animated lines */}
            <div className="space-y-[2px]">
              {lines.map((line, i) => (
                <h1
                  key={line}
                  className="text-5xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold tracking-tight leading-[0.92] font-[family-name:var(--font-unbounded)]"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.7s ease ${0.15 + i * 0.13}s, transform 0.7s ease ${0.15 + i * 0.13}s`,
                    ...(i === 1
                      ? {
                          background:
                            "linear-gradient(135deg, #0C8346 0%, #22c55e 40%, #0C8346 80%)",
                          backgroundSize: "200% 200%",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          animation: "gradientShift 6s ease infinite",
                        }
                      : { color: "white" }),
                  }}
                >
                  {line}
                </h1>
              ))}
            </div>

            {/* Subtitle */}
            <p
              className="max-w-md text-base md:text-lg text-gray-400 font-light leading-relaxed"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
              }}
            >
              W.I.S.E. — Waste Intelligence &amp; Sorting Engine — classifies, tracks, and reports waste in real time. From toss to insight — in milliseconds.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(18px)",
                transition: "opacity 0.7s ease 0.68s, transform 0.7s ease 0.68s",
              }}
            >
              <Link
                href="/r3bin"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#0C8346] text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(12,131,70,0.55)] hover:scale-[1.04] active:scale-100"
              >
                <span className="relative z-10">Discover W.I.S.E.</span>
                <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                {/* shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </Link>

              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#0C8346]/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#0C8346]/10 backdrop-blur-sm"
              >
                View Live Analytics
                <span
                  className="w-2 h-2 rounded-full bg-[#0C8346]"
                  style={{ animation: "dotBlink 1.6s ease-in-out infinite 0.8s" }}
                />
              </Link>
            </div>

            {/* Mini stats row */}
            <div
              className="flex flex-wrap gap-8 pt-6 border-t border-white/10"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.7s ease 0.82s",
              }}
            >
              {[
                { v: "10K+", l: "Items Sorted" },
                { v: "94%", l: "Recycling Rate" },
                { v: "500kg", l: "CO₂ Offset" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span className="text-2xl font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)]">
                    {s.v}
                  </span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest mt-0.5">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Robot column ── */}
          <div className="relative flex justify-center items-center min-h-[420px]">

            {/* Outer orbital ring */}
            <div
              className="absolute w-[115%] h-[115%] rounded-full border border-[#0C8346]/12 pointer-events-none"
              style={{ animation: "spinSlowCW 24s linear infinite" }}
            />

            {/* Inner dashed ring */}
            <div
              className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-[#0C8346]/25 pointer-events-none"
              style={{ animation: "spinSlowCCW 16s linear infinite" }}
            />

            {/* Large ambient glow */}
            <div
              className="absolute w-80 h-80 rounded-full bg-[#0C8346]/10 blur-[100px] pointer-events-none"
              style={{ animation: "glowPulse 4s ease-in-out infinite" }}
            />
            {/* Inner bright glow */}
            <div className="absolute w-44 h-44 rounded-full bg-[#0C8346]/20 blur-[48px] pointer-events-none" />

            {/* Robot image — floating */}
            <div
              className="relative w-full max-w-[460px] aspect-square z-10"
              style={{ animation: "floatY 5s ease-in-out infinite" }}
            >
              <Image
                src="/images/wise-robot.png"
                alt="W.I.S.E. Robot — Fostride AI"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(12,131,70,0.25)]"
                priority
              />
            </div>

            {/* ── Floating card: Accuracy (top-right) ── */}
            <div
              className="absolute top-6 -right-2 md:right-0 bg-[#0a0a0a]/90 border border-[#0C8346]/35 rounded-2xl px-4 py-3 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20"
              style={{
                animation: "floatY 4.6s ease-in-out infinite 0.9s",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 1.1s",
              }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#0C8346]"
                  style={{ animation: "dotBlink 1.4s ease-in-out infinite" }}
                />
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                  Live Sorting
                </span>
              </div>
              <div className="text-2xl font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)] leading-none">
                99.2<span className="text-sm ml-0.5">%</span>
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5">AI Accuracy</div>
            </div>

            {/* ── Floating card: CO₂ (bottom-left) ── */}
            <div
              className="absolute bottom-10 -left-2 md:left-0 bg-[#0a0a0a]/90 border border-white/12 rounded-2xl px-4 py-3 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20"
              style={{
                animation: "floatY 4.2s ease-in-out infinite 2s",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 1.4s",
              }}
            >
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                CO₂ Saved Today
              </div>
              <div className="text-2xl font-bold text-white font-[family-name:var(--font-unbounded)] leading-none">
                12.4<span className="text-[#0C8346] text-base ml-0.5">kg</span>
              </div>
              {/* mini bar */}
              <div className="mt-2 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0C8346] rounded-full"
                  style={{ width: "72%", animation: "lineGrow 1.2s ease 1.6s both" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 pointer-events-none z-10"
        style={{ animation: "floatY 3s ease-in-out infinite" }}
      >
        <span className="text-[10px] uppercase tracking-[0.22em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}
