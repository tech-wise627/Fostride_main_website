import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "Somaiya Vidyavihar University — Case Study | Fostride",
  description: "R3Bin pilot at Somaiya Vidyavihar University: 664 items, 21 kg CO₂ offset, 94.2% recycling rate in 10 days.",
}

const stats = [
  { value: "664", label: "Items Processed", sub: "10-day pilot" },
  { value: "70%", label: "Segregation Accuracy", sub: "Real-world conditions" },
  { value: "21 kg", label: "CO₂ Offset", sub: "Total across waste streams" },
  { value: "94.2%", label: "Recycling Rate", sub: "Materials diverted from landfill" },
]

const composition = [
  { label: "Plastic", count: 233, pct: 35, note: "CO₂ offset: 14.25 kg", color: "#1A6B3C" },
  { label: "Paper", count: 212, pct: 32, note: "CO₂ offset: 2.88 kg", color: "#2A8A50" },
  { label: "Mixed", count: 204, pct: 31, note: "Landfill routed", color: "#3A3830" },
  { label: "Metal", count: 15, pct: 2, note: "CO₂ offset: 3.60 kg", color: "#8B6432" },
]

export default function SomaiyaCaseStudy() {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground">
      <Navbar />

      <main className="pt-[70px]">

        {/* Back + Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(12,131,70,0.07) 0%, transparent 70%)" }} />

          <div className="max-w-5xl mx-auto relative z-10">
            <Link href="/case-studies"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest font-medium mb-10 transition-opacity hover:opacity-70"
              style={{ color: "#3A3830" }}>
              <ArrowLeft size={14} />
              All Case Studies
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0C8346]/25 bg-[#0C8346]/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0C8346]" />
              <span className="text-[#0C8346] text-[11px] font-semibold tracking-widest uppercase">Case Study · 01</span>
            </div>

            <h1 className="font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)] mb-4"
              style={{ fontSize: "clamp(32px,5vw,60px)", color: "#EDE8E0" }}>
              Somaiya Vidyavihar<br />
              <span style={{ color: "#1A6B3C" }}>University</span>
            </h1>

            <p className="text-[15px] font-light mb-6" style={{ color: "#6B6358" }}>
              Engineering Building, Mumbai &nbsp;·&nbsp; R3BIN-SVU-001
            </p>

            <div className="flex flex-wrap gap-3 text-[11px] tracking-widest uppercase font-medium">
              {["Jan 20–30, 2026", "10-Day Pilot", "AI Waste Segregation", "Education"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full border"
                  style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", color: "#3A3830" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl p-6 flex flex-col gap-2"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-3xl font-extrabold font-[family-name:var(--font-unbounded)] leading-none"
                  style={{ color: "#1A6B3C" }}>{s.value}</p>
                <p className="text-white text-sm font-semibold leading-snug">{s.label}</p>
                <p className="text-[11px] uppercase tracking-wider" style={{ color: "#3A3830" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge / Solution */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />The Challenge
              </span>
              <h2 className="text-xl font-bold text-white leading-snug mb-3">
                Hundreds of items daily — no automated way to sort them.
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                Somaiya Vidyavihar University&apos;s Engineering Building handles high daily footfall of students and faculty. Waste was manually sorted, leading to contamination, compliance gaps, and zero visibility into composition patterns.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />The Solution
              </span>
              <h2 className="text-xl font-bold text-white leading-snug mb-3">
                One R3Bin unit. 10 days. Real-time AI classification.
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                Fostride deployed one R3Bin (R3BIN-SVU-001) powered by W.I.S.E. The system classified waste into Plastic, Paper, Metal, and Mixed in real time — with zero manual intervention and full timestamp logging for BRSR reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Composition */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />Waste Composition<span className="w-5 h-px bg-current" />
              </span>
              <h2 className="text-2xl font-bold font-[family-name:var(--font-unbounded)] text-white">664 items classified</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {composition.map((c) => (
                <div key={c.label} className="rounded-2xl p-5 flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">{c.label}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${c.color}20`, color: c.color }}>{c.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                  </div>
                  <p className="text-2xl font-extrabold leading-none font-[family-name:var(--font-unbounded)]"
                    style={{ color: "#EDE8E0" }}>{c.count}</p>
                  <p className="text-[11px] uppercase tracking-wider" style={{ color: "#3A3830" }}>{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key findings */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl p-8 md:p-10"
              style={{ background: "rgba(26,107,60,0.04)", border: "1px solid rgba(26,107,60,0.15)" }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />Key Findings
              </span>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-white font-semibold mb-2">Peak Day</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    Jan 23 saw <span style={{ color: "#EDE8E0" }}>176 items classified</span> in a single day — peak hours handled with no performance degradation.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">ESG & BRSR Ready</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    Every event is timestamped and logged — enabling <span style={{ color: "#EDE8E0" }}>zero-manual-entry</span> compliance reporting for ESG, CSR, and BRSR.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Phase 2 Target</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    Model fine-tuning on campus-specific data is targeting <span style={{ color: "#EDE8E0" }}>80–90% accuracy</span>, up from the 70% pilot baseline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[13px] uppercase tracking-widest mb-3 font-medium" style={{ color: "#1A6B3C" }}>
              Environmental Impact
            </p>
            <p className="text-[clamp(22px,3.5vw,40px)] font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight mb-4">
              21 kg of CO₂ offset.<br />
              <span style={{ color: "#6B6358" }}>In 10 days. One bin.</span>
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "#6B6358" }}>
              Plastic recycling alone contributed 14.25 kg of CO₂ offset. Scaled to a full campus deployment, Fostride&apos;s R3Bin network delivers measurable, auditable climate impact — not estimates.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want a pilot at your facility?</h2>
            <p className="text-[14px] mb-8" style={{ color: "#6B6358" }}>
              We run 10–30 day pilots with full reporting included. No long-term commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "#1A6B3C", color: "#fff" }}>
                Request a Pilot
              </Link>
              <Link href="/case-studies"
                className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-full border transition-all duration-300 hover:border-white/20"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "#6B6358" }}>
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}