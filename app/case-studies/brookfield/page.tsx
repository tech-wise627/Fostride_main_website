import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "Brookfield Properties — Case Study | Fostride",
  description: "R3Bin pilot at Brookfield Properties: 100 items, 4× daily adoption growth, GRI & LEED compliant outputs in 4 days.",
}

const stats = [
  { value: "100", label: "Items Processed", sub: "4-day pilot" },
  { value: "4×", label: "Daily Growth", sub: "11 → 43 items/day" },
  { value: "54%", label: "Plastic Share", sub: "Dominant category" },
  { value: "GRI / LEED", label: "ESG Frameworks", sub: "Compliance-ready output" },
]

const daily = [
  { date: "Nov 11", total: 11, pct: 26 },
  { date: "Nov 12", total: 21, pct: 49 },
  { date: "Nov 13", total: 25, pct: 58 },
  { date: "Nov 14", total: 43, pct: 100 },
]

const composition = [
  { label: "Plastic", pct: 54, note: "Wrappers, cups, bottles", color: "#1A6B3C" },
  { label: "Paper / Dry", pct: 43, note: "Tissue, paper cups", color: "#2A8A50" },
  { label: "Metal", pct: 3, note: "Cans, foil", color: "#8B6432" },
]

export default function BrookfieldCaseStudy() {
  return (
    <div className="min-h-screen bg-[#111009] text-foreground">
      <Navbar />

      <main className="pt-[70px]">

        {/* Back + Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,100,50,0.05) 0%, transparent 70%)" }} />

          <div className="max-w-5xl mx-auto relative z-10">
            <Link href="/case-studies"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-widest font-medium mb-10 transition-opacity hover:opacity-70"
              style={{ color: "#3A3830" }}>
              <ArrowLeft size={14} />
              All Case Studies
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B6432]/25 bg-[#8B6432]/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6432]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: "#8B6432" }}>Case Study · 02</span>
            </div>

            <h1 className="font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)] mb-4"
              style={{ fontSize: "clamp(32px,5vw,60px)", color: "#EDE8E0" }}>
              Brookfield<br />
              <span style={{ color: "#1A6B3C" }}>Properties</span>
            </h1>

            <p className="text-[15px] font-light mb-6" style={{ color: "#6B6358" }}>
              Wenchester & Kingsinton Building
            </p>

            <div className="flex flex-wrap gap-3 text-[11px] tracking-widest uppercase font-medium">
              {["Nov 11–14, 2025", "4-Day Pilot", "Commercial Real Estate", "ESG Reporting"].map((tag) => (
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
                A commercial campus with ESG targets and no waste intelligence layer.
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                Brookfield Properties needed verifiable, traceable waste data to support GRI, IGBC/LEED, and internal ESG disclosures. Manual sorting provided no audit trail and zero category-level analytics.
              </p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />The Solution
              </span>
              <h2 className="text-xl font-bold text-white leading-snug mb-3">
                Photographic evidence + AI sorting. Fully ESG-compatible.
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                R3Bin was deployed in the building lobby. Every disposal event was photographed, AI-classified, and logged — giving Brookfield category-level evidence usable directly in sustainability reports and vendor audits.
              </p>
            </div>
          </div>
        </section>

        {/* Daily growth + composition */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

            {/* Daily adoption */}
            <div className="rounded-2xl p-7"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />Daily Adoption
              </span>
              <p className="text-white font-bold text-lg mb-6">Waste volume 4× in 4 days</p>
              <div className="flex flex-col gap-4">
                {daily.map((d) => (
                  <div key={d.date}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-medium" style={{ color: "#6B6358" }}>{d.date}</span>
                      <span className="text-[12px] font-bold text-white">{d.total} items</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full"
                        style={{ width: `${d.pct}%`, background: "linear-gradient(90deg, #1A6B3C, #2A8A50)" }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] mt-6 uppercase tracking-wider" style={{ color: "#3A3830" }}>
                Employees self-discovered the bin — no training required
              </p>
            </div>

            {/* Composition + peak */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl p-7 flex-1"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5"
                  style={{ color: "#1A6B3C" }}>
                  <span className="w-5 h-px bg-current" />Waste Composition
                </span>
                <div className="flex flex-col gap-5">
                  {composition.map((c) => (
                    <div key={c.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[13px] font-semibold text-white">{c.label}</span>
                        <span className="text-[11px] font-bold" style={{ color: c.color }}>{c.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                      </div>
                      <p className="text-[11px] mt-1" style={{ color: "#3A3830" }}>{c.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6"
                style={{ background: "rgba(26,107,60,0.04)", border: "1px solid rgba(26,107,60,0.15)" }}>
                <p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: "#1A6B3C" }}>
                  Peak Disposal Window
                </p>
                <p className="text-white font-bold text-xl">12:30 PM – 3:00 PM</p>
                <p className="text-[13px] mt-1" style={{ color: "#6B6358" }}>Lunch hours drove majority of daily disposals</p>
              </div>
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
                  <p className="text-white font-semibold mb-2">Self-Driven Adoption</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    No formal training was conducted. Usage grew from <span style={{ color: "#EDE8E0" }}>11 to 43 items/day</span> organically — employees discovered and adapted without any push campaign.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Audit-Grade Evidence</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    Every disposal is photographed and AI-tagged — creating an <span style={{ color: "#EDE8E0" }}>immutable audit trail</span> that satisfies GRI, IGBC/LEED, and EPR traceability requirements.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Scale Opportunity</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    Deploying in food courts + high-traffic corridors is projected to improve capture rates by <span style={{ color: "#EDE8E0" }}>30–40%</span> and unlock automated monthly diversion dashboards.
                  </p>
                </div>
              </div>
            </div>
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