import { BackgroundPattern } from "@/components/landing/background-pattern";
import { Navbar } from "@/components/landing/navbar"
import { HomeLandingHero } from "@/components/landing/home-landing-hero"
import dynamic from "next/dynamic"

// Loading Skeleton
const SectionLoader = () => (
  <div className="w-full py-20 min-h-[40vh] flex flex-col items-center justify-center gap-4 text-[#0C8346]/50">
    <div className="w-10 h-10 border-4 border-[#0C8346]/20 border-t-[#0C8346] rounded-full animate-spin"></div>
    <span className="text-sm font-medium tracking-wide">Loading content...</span>
  </div>
)

const WhatWeWorkFor = dynamic(() => import('@/components/landing/what-we-work-for').then(mod => mod.WhatWeWorkFor), {
  loading: () => <SectionLoader />,
  ssr: true
})

const Testimonials = dynamic(() => import('@/components/landing/testimonials').then(mod => mod.Testimonials), {
  loading: () => <SectionLoader />,
  ssr: true
})

const CompaniesTicker = dynamic(() => import('@/components/landing/companies-ticker').then(mod => mod.CompaniesTicker), {
  loading: () => <SectionLoader />,
  ssr: true
})

const Footer = dynamic(() => import('@/components/landing/footer').then(mod => mod.Footer), {
  loading: () => <SectionLoader />,
  ssr: true
})


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground relative">
      {/* Geometric Background Pattern Component */}
            <BackgroundPattern />

      {/* Dark Overlay Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10">
        <Navbar />
        <HomeLandingHero />
        <WhatWeWorkFor />
        <Testimonials />
        <CompaniesTicker />
        <Footer />
      </div>
    </main>
  )
}
