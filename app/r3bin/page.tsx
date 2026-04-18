"use client"
import { BackgroundPattern } from "@/components/landing/background-pattern";


import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { Footer } from "@/components/landing/footer"

import { Button } from "@/components/ui/button"
import Link from "next/link"



import dynamic from "next/dynamic"

// Loading Skeleton
const SectionLoader = () => (
  <div className="w-full py-20 min-h-[40vh] flex flex-col items-center justify-center gap-4 text-[#0C8346]/50">
    <div className="w-10 h-10 border-4 border-[#0C8346]/20 border-t-[#0C8346] rounded-full animate-spin"></div>
    <span className="text-sm font-medium tracking-wide">Loading component...</span>
  </div>
)

const R3binProducts = dynamic(() => import('@/components/landing/r3bin-products'), {
  loading: () => <SectionLoader />,
  ssr: true
})

const R3binTechSpecs = dynamic(() => import('@/components/landing/r3bin-tech-specs'), {
  loading: () => <SectionLoader />,
  ssr: true
})

export default function ProductsPage() {


  return (
    <div className="min-h-screen bg-[#050505] text-foreground relative">
      {/* Geometric Background Pattern Component */}
            <BackgroundPattern />

      {/* Dark Overlay Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10">
        <Navbar />

        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Lazily load below-the-fold content */}
          <R3binProducts />
          <R3binTechSpecs />

          {/* CTA Section */}
          <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-primary/5">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Waste Management?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join leading universities, corporations, and municipalities using R3Bin
                to achieve measurable sustainability goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Link href="/dashboard?from=/r3bin">
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                    View Live Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>


        <Footer />
      </div>
    </div>
  )
}
