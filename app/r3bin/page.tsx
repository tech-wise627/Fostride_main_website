import { BackgroundPattern } from "@/components/landing/background-pattern"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { Footer } from "@/components/landing/footer"
import dynamic from "next/dynamic"

const SectionLoader = () => (
  <div className="w-full py-20 min-h-[30vh] flex items-center justify-center text-[#0C8346]/40">
    <div className="w-8 h-8 border-[3px] border-[#0C8346]/20 border-t-[#0C8346] rounded-full animate-spin" />
  </div>
)

const R3binVideo = dynamic(
  () => import("@/components/landing/r3bin-video").then((m) => m.R3binVideo),
  { loading: () => <SectionLoader />, ssr: true }
)

const R3binProducts = dynamic(
  () => import("@/components/landing/r3bin-products"),
  { loading: () => <SectionLoader />, ssr: true }
)

const R3binTechSpecs = dynamic(
  () => import("@/components/landing/r3bin-tech-specs"),
  { loading: () => <SectionLoader />, ssr: true }
)

const BoldCTA = dynamic(
  () => import("@/components/landing/bold-cta").then((m) => m.BoldCTA),
  { loading: () => <SectionLoader />, ssr: true }
)

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-foreground relative">
      <BackgroundPattern />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <R3binVideo />
          <R3binProducts />
          <R3binTechSpecs />
          <BoldCTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
