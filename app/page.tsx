import { BackgroundPattern } from "@/components/landing/background-pattern"
import { Navbar } from "@/components/landing/navbar"
import { HomeLandingHero } from "@/components/landing/home-landing-hero"
import dynamic from "next/dynamic"

const SectionLoader = () => (
  <div className="w-full py-20 min-h-[30vh] flex flex-col items-center justify-center gap-4 text-[#0C8346]/40">
    <div className="w-8 h-8 border-[3px] border-[#0C8346]/20 border-t-[#0C8346] rounded-full animate-spin" />
  </div>
)

const ImpactStatsStrip = dynamic(
  () => import("@/components/landing/impact-stats-strip").then((m) => m.ImpactStatsStrip),
  { loading: () => <SectionLoader />, ssr: true }
)

const HowItWorks = dynamic(
  () => import("@/components/landing/how-it-works").then((m) => m.HowItWorks),
  { loading: () => <SectionLoader />, ssr: true }
)

const WhatWeWorkFor = dynamic(
  () => import("@/components/landing/what-we-work-for").then((m) => m.WhatWeWorkFor),
  { loading: () => <SectionLoader />, ssr: true }
)

const Testimonials = dynamic(
  () => import("@/components/landing/testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionLoader />, ssr: true }
)

const CompaniesTicker = dynamic(
  () => import("@/components/landing/companies-ticker").then((m) => m.CompaniesTicker),
  { loading: () => <SectionLoader />, ssr: true }
)

const BoldCTA = dynamic(
  () => import("@/components/landing/bold-cta").then((m) => m.BoldCTA),
  { loading: () => <SectionLoader />, ssr: true }
)

const Footer = dynamic(
  () => import("@/components/landing/footer").then((m) => m.Footer),
  { loading: () => <SectionLoader />, ssr: true }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground relative">
      {/* Geometric Background Pattern */}
      <BackgroundPattern />

      {/* Dark overlay gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10">
        <Navbar />
        <HomeLandingHero />
        <ImpactStatsStrip />
        <HowItWorks />
        <WhatWeWorkFor />
        <Testimonials />
        <CompaniesTicker />
        <BoldCTA />
        <Footer />
      </div>
    </main>
  )
}
