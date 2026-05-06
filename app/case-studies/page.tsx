import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "Case Studies | Fostride",
  description: "Real-world R3Bin deployments — measurable results from live pilots.",
}

/* ── Somaiya data ── */
const somaiyaStats = [
  { value: "664", label: "Items Processed", sub: "10-day pilot" },
  { value: "70%", label: "Segregation Accuracy", sub: "Real-world conditions" },
  { value: "21 kg", label: "CO₂ Offset", sub: "Total across waste streams" },
  { value: "94.2%", label: "Recycling Rate", sub: "Materials diverted from landfill" },
]
const somaiyaComposition = [
  { label: "Plastic", count: 233, pct: 35, note: "CO₂ offset: 14.25 kg", color: "#1A6B3C" },
  { label: "Paper", count: 212, pct: 32, note: "CO₂ offset: 2.88 kg", color: "#2A8A50" },
  { label: "Mixed", count: 204, pct: 31, note: "Landfill routed", color: "#3A3830" },
  { label: "Metal", count: 15, pct: 2, note: "CO₂ offset: 3.60 kg", color: "#8B6432" },
]

/* ── Brookfield data ── */
const brookfieldStats = [
  { value: "100", label: "Items Processed", sub: "4-day pilot" },
  { value: "4×", label: "Daily Growth", sub: "11 → 43 items" },
  { value: "54%", label: "Plastic Share", sub: "Dominant category" },
  { value: "GRI / LEED", label: "ESG Frameworks", sub: "Compliance-ready output" },
]
const brookfieldDaily = [
  { date: "Nov 11", total: 11, pct: 26 },
  { date: "Nov 12", total: 21, pct: 49 },
  { date: "Nov 13", total: 25, pct: 58 },
  { date: "Nov 14", total: 43, pct: 100 },
]
const brookfieldComposition = [
  { label: "Plastic", pct: 54, note: "Wrappers, cups, bottles", color: "#1A6B3C" },
  { label: "Paper / Dry", pct: 43, note: "Tissue, paper cups", color: "#2A8A50" },
  { label: "Metal", pct: 3, note: "Cans, foil", color: "#8B6432" },
]

/* ── Shared sub-components ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
      style={{ color: "#1A6B3C" }}>
      <span className="w-5 h-px bg-current" />
      {children}
    </span>
  )
}

function StatCard({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div className="rounded-2xl p-6 flex flex-col gap-2"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <p className="text-3xl font-extrabold font-[family-name:var(--font-unbounded)] leading-none"
        style={{ color: "#1A6B3C" }}>{value}</p>
      <p className="text-white text-sm font-semibold leading-snug">{label}</p>
      <p className="text-[11px] uppercase tracking-wider" style={{ color: "#3A3830" }}>{sub}</p>
    </div>
  )
}

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-4">
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)" }} />
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground">
      <Navbar />

      <main className="pt-[70px]">

        {/* ── PAGE HERO ── */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(12,131,70,0.07) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0C8346]/25 bg-[#0C8346]/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0C8346]" />
              <span className="text-[#0C8346] text-[11px] font-semibold tracking-widest uppercase">Live Deployments</span>
            </div>
            <h1 className="font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)] mb-4"
              style={{ fontSize: "clamp(36px,6vw,68px)", color: "#EDE8E0" }}>
              Case Studies
            </h1>
            <p className="text-[16px] font-light leading-relaxed max-w-xl mx-auto" style={{ color: "#6B6358" }}>
              Real pilots. Real data. Measurable outcomes from every R3Bin deployment.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CASE STUDY 01 — Somaiya Vidyavihar
        ════════════════════════════════════════ */}

        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: "rgba(26,107,60,0.15)", color: "#1A6B3C", border: "1px solid rgba(26,107,60,0.3)" }}>
                Case Study · 01
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            <div className="mb-8">
              <h2 className="font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)] mb-2"
                style={{ fontSize: "clamp(24px,4vw,44px)", color: "#EDE8E0" }}>
                Somaiya Vidyavihar <span style={{ color: "#1A6B3C" }}>University</span>
              </h2>
              <p className="text-[14px]" style={{ color: "#4A4540" }}>
                Engineering Building, Mumbai &nbsp;·&nbsp; Jan 20–30, 2026 &nbsp;·&nbsp; 10-Day Pilot &nbsp;·&nbsp; R3BIN-SVU-001
              </p>
            </div>
          </div>
        </section>

        {/* Somaiya stats */}
        <section className="pb-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {somaiyaStats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </section>

        {/* Somaiya context */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                Hundreds of items daily — no automated way to sort them.
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                Somaiya Vidyavihar University&apos;s Engineering Building handles high daily footfall of students and faculty. Waste was manually sorted, leading to contamination, compliance gaps, and zero visibility into composition patterns.
              </p>
            </div>
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                One R3Bin unit. 10 days. Real-time AI classification.
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                Fostride deployed one R3Bin (R3BIN-SVU-001) powered by W.I.S.E. The system classified waste into Plastic, Paper, Metal, and Mixed in real time — with zero manual intervention and full timestamp logging for BRSR reporting.
              </p>
            </div>
          </div>
        </section>

        {/* Somaiya composition */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel>Waste Composition</SectionLabel>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-unbounded)] text-white">664 items classified</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {somaiyaComposition.map((c) => (
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

        {/* Somaiya findings */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl p-8 md:p-10"
              style={{ background: "rgba(26,107,60,0.04)", border: "1px solid rgba(26,107,60,0.15)" }}>
              <SectionLabel>Key Findings</SectionLabel>
              <div className="grid md:grid-cols-3 gap-8 mt-2">
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

        <Divider />

        {/* ════════════════════════════════════════
            CASE STUDY 02 — Brookfield Properties
        ════════════════════════════════════════ */}

        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ background: "rgba(139,100,50,0.15)", color: "#8B6432", border: "1px solid rgba(139,100,50,0.3)" }}>
                Case Study · 02
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            <div className="mb-8">
              <h2 className="font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)] mb-2"
                style={{ fontSize: "clamp(24px,4vw,44px)", color: "#EDE8E0" }}>
                Brookfield <span style={{ color: "#1A6B3C" }}>Properties</span>
              </h2>
              <p className="text-[14px]" style={{ color: "#4A4540" }}>
                Wenchester & Kingsinton Building &nbsp;·&nbsp; Nov 11–14, 2025 &nbsp;·&nbsp; 4-Day Pilot
              </p>
            </div>
          </div>
        </section>

        {/* Brookfield stats */}
        <section className="pb-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {brookfieldStats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
        </section>

        {/* Brookfield context */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                A commercial campus with ESG targets and no waste intelligence layer.
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                Brookfield Properties needed verifiable, traceable waste data to support GRI, IGBC/LEED, and internal ESG disclosures. Manual sorting provided no audit trail and zero category-level analytics.
              </p>
            </div>
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <h3 className="text-xl font-bold text-white leading-snug mb-3">
                Photographic evidence + AI sorting. Fully ESG-compatible.
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                R3Bin was deployed in the building lobby. Every disposal event was photographed, AI-classified, and logged — giving Brookfield category-level evidence usable directly in sustainability reports and vendor audits.
              </p>
            </div>
          </div>
        </section>

        {/* Brookfield daily growth */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">

              {/* Daily adoption chart */}
              <div className="rounded-2xl p-7"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <SectionLabel>Daily Adoption</SectionLabel>
                <p className="text-white font-bold text-lg mb-6">Waste volume 4× in 4 days</p>
                <div className="flex flex-col gap-4">
                  {brookfieldDaily.map((d) => (
                    <div key={d.date}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[12px] font-medium" style={{ color: "#6B6358" }}>{d.date}</span>
                        <span className="text-[12px] font-bold text-white">{d.total} items</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${d.pct}%`, background: "linear-gradient(90deg, #1A6B3C, #2A8A50)" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] mt-5 uppercase tracking-wider" style={{ color: "#3A3830" }}>
                  Key insight: adoption grew as employees self-discovered the bin
                </p>
              </div>

              {/* Composition + peak window */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl p-7"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <SectionLabel>Waste Composition</SectionLabel>
                  <div className="flex flex-col gap-4 mt-2">
                    {brookfieldComposition.map((c) => (
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
                  <p className="text-white font-bold text-lg">12:30 PM – 3:00 PM</p>
                  <p className="text-[13px] mt-1" style={{ color: "#6B6358" }}>Lunch hours drove majority of daily disposals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brookfield findings */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl p-8 md:p-10"
              style={{ background: "rgba(26,107,60,0.04)", border: "1px solid rgba(26,107,60,0.15)" }}>
              <SectionLabel>Key Findings</SectionLabel>
              <div className="grid md:grid-cols-3 gap-8 mt-2">
                <div>
                  <p className="text-white font-semibold mb-2">Self-Driven Adoption</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    No formal training was conducted. Employees discovered and adopted R3Bin organically — usage grew from <span style={{ color: "#EDE8E0" }}>11 to 43 items/day</span> without any push campaign.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Audit-Grade Evidence</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                    Every disposal event is photographed and AI-tagged — creating an <span style={{ color: "#EDE8E0" }}>immutable audit trail</span> that satisfies GRI, IGBC/LEED, and EPR traceability requirements.
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

        <Divider />

        {/* ── CTA ── */}
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[13px] uppercase tracking-widest mb-3 font-medium" style={{ color: "#1A6B3C" }}>
              Your facility, next
            </p>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-unbounded)] text-white mb-4 leading-tight">
              Want a pilot?
            </h2>
            <p className="text-[15px] mb-8 leading-relaxed" style={{ color: "#6B6358" }}>
              We run 10–30 day pilots with full reporting included. No long-term commitment required.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "#1A6B3C", color: "#fff" }}>
              Request a Pilot
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}