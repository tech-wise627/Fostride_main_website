import { BackgroundPattern } from "@/components/landing/background-pattern"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

const SectionLoader = () => (
  <div className="w-full py-20 min-h-[50vh] flex flex-col items-center justify-center gap-4 text-[#0C8346]/50">
    <div className="w-10 h-10 border-4 border-[#0C8346]/20 border-t-[#0C8346] rounded-full animate-spin" />
    <span className="text-sm font-medium tracking-wide">Loading team profiles...</span>
  </div>
)

const OurTeamBody = dynamic(
  () => import("@/components/landing/our-team-body").then((m) => m.OurTeamBody),
  { loading: () => <SectionLoader />, ssr: true }
)

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground relative">
      <BackgroundPattern />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 px-4 md:px-8 lg:px-[60px] overflow-hidden">
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(12,131,70,0.16) 1.5px, transparent 1.5px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #050505 80%)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2.5 bg-[#0C8346]/10 border border-[#0C8346]/30 rounded-full px-5 py-2">
                <span className="w-2 h-2 rounded-full bg-[#0C8346]" style={{ animation: "dotBlink 1.6s ease-in-out infinite" }} />
                <span className="text-sm text-[#0C8346] font-semibold tracking-wide">The People Behind W.I.S.E.</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-center text-5xl md:text-7xl xl:text-[88px] font-bold tracking-tight leading-[0.92] font-[family-name:var(--font-unbounded)] text-white mb-6">
              Meet the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0C8346 0%, #22c55e 50%, #0C8346 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradientShift 6s ease infinite",
                }}
              >
                Team
              </span>
            </h1>

            <p className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14">
              A group of builders, thinkers, and sustainability obsessives on a mission to make waste intelligent.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/8">
              {[
                { v: "2022", l: "Founded" },
                { v: "5+",   l: "Core Team" },
                { v: "2",    l: "Live Pilots" },
                { v: "~80%", l: "AI Accuracy" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col items-center gap-1">
                  <span className="text-3xl font-bold text-[#0C8346] font-[family-name:var(--font-unbounded)]">{s.v}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-widest">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <main className="pb-20 px-4 md:px-8 lg:px-[40px]">
          <OurTeamBody />
        </main>

        <Footer />
      </div>
    </div>
  )
}
