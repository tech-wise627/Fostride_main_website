"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Wifi, BarChart3, Leaf } from "lucide-react"
import { ScheduleDemoModal } from "@/components/landing/schedule-demo-modal"

const FLOATS = [
  { icon: Brain,    label: "AI Vision",   sub: "94%+ accuracy",    pos: "top-10 -left-2 md:-left-16" },
  { icon: Wifi,     label: "IoT Sensors", sub: "Real-time data",   pos: "top-1/3 -right-2 md:-right-16" },
  { icon: BarChart3,label: "Analytics",   sub: "Live dashboard",   pos: "bottom-1/3 -left-2 md:-left-14" },
  { icon: Leaf,     label: "Eco Impact",  sub: "CO₂ tracked",      pos: "bottom-20 -right-2 md:-right-14" },
]

export function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-[70px]">

        {/* Dot grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(12,131,70,0.17) 1.5px, transparent 1.5px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 20%, #050505 76%)" }}
        />
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(12,131,70,0.6) 50%, transparent 100%)",
              animation: "scanLine 10s ease-in-out infinite",
              top: 0,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="flex items-center gap-2.5 bg-[#0C8346]/10 border border-[#0C8346]/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[#0C8346]" style={{ animation: "dotBlink 1.6s ease-in-out infinite" }} />
                <span className="text-sm text-[#0C8346] font-semibold tracking-wide">Powered by W.I.S.E.</span>
              </div>

              {/* Headline */}
              <div className="space-y-[2px]">
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-bold tracking-tight leading-[0.92] font-[family-name:var(--font-unbounded)] text-white">
                  The Bin
                </h1>
                <h1
                  className="text-5xl md:text-7xl lg:text-[76px] font-bold tracking-tight leading-[0.92] font-[family-name:var(--font-unbounded)]"
                  style={{
                    background: "linear-gradient(135deg, #0C8346 0%, #22c55e 40%, #0C8346 80%)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gradientShift 6s ease infinite",
                  }}
                >
                  That Thinks.
                </h1>
              </div>

              {/* Subtitle */}
              <p className="max-w-md text-base md:text-lg text-gray-400 font-light leading-relaxed">
                R3Bin sorts, identifies, and logs every item you throw away — turning waste disposal into real-time intelligence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setDemoOpen(true)}
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#0C8346] text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(12,131,70,0.55)] hover:scale-[1.04] active:scale-100"
                >
                  <span className="relative z-10">Schedule a Demo</span>
                  <ArrowRight className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                </button>

                <Link
                  href="/dashboard"
                  className="group inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#0C8346]/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#0C8346]/10 backdrop-blur-sm"
                >
                  Live Analytics
                  <span className="w-2 h-2 rounded-full bg-[#0C8346]" style={{ animation: "dotBlink 1.6s ease-in-out infinite 0.8s" }} />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10">
                {[
                  { v: "94%+", l: "Sort Accuracy" },
                  { v: "<500ms", l: "Classify Time" },
                  { v: "10K+", l: "Items Sorted" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col group cursor-default">
                    <span className="text-2xl font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)] group-hover:scale-110 transition-transform duration-200 origin-left">
                      {s.v}
                    </span>
                    <span className="text-[11px] text-gray-500 uppercase tracking-widest mt-0.5">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — product */}
            <div className="relative flex justify-center items-center min-h-[420px] order-1 lg:order-2">
              {/* Orbital rings */}
              <div
                className="absolute w-[115%] h-[115%] rounded-full border border-[#0C8346]/12 pointer-events-none"
                style={{ animation: "spinSlowCW 24s linear infinite" }}
              />
              <div
                className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-[#0C8346]/20 pointer-events-none"
                style={{ animation: "spinSlowCCW 16s linear infinite" }}
              />

              {/* Glow */}
              <div
                className="absolute w-72 h-72 rounded-full bg-[#0C8346]/10 blur-[100px] pointer-events-none"
                style={{ animation: "glowPulse 4s ease-in-out infinite" }}
              />

              {/* Product image */}
              <div
                className="relative w-full max-w-[400px] aspect-square z-10"
                style={{ animation: "floatY 5s ease-in-out infinite" }}
              >
                <Image
                  src="/images/r3bin-product.svg"
                  alt="R3Bin Smart Waste Bin"
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(12,131,70,0.2)]"
                  priority
                />
              </div>

              {/* Floating callouts */}
              {FLOATS.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.label}
                    className={`absolute ${f.pos} bg-[#0a0a0a]/90 border border-[#0C8346]/30 rounded-xl px-3 py-2.5 backdrop-blur-md shadow-lg z-20`}
                    style={{ animation: `floatY ${4 + i * 0.4}s ease-in-out infinite ${i * 0.7}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0C8346]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#0C8346]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-white">{f.label}</div>
                        <div className="text-[10px] text-gray-500">{f.sub}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <ScheduleDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}
