import { Navbar } from "@/components/landing/navbar"
import { HomeLandingHero } from "@/components/landing/home-landing-hero"
import { WhatWeWorkFor } from "@/components/landing/what-we-work-for"
import { Testimonials } from "@/components/landing/testimonials"
import { Companies } from "@/components/landing/companies"

import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-foreground relative">
      {/* Geometric Background Pattern - Exact 9x3 Grid */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pill-pattern-dark-home"
              x="0"
              y="0"
              width="0.111111111"
              height="0.333333333"
              patternUnits="objectBoundingBox"
              viewBox="0 0 80 140"
              preserveAspectRatio="none"
            >
              {/* Left Half - Fuller body, narrower gap, sharp flare */}
              <path d="M 36 5 L 36 85 Q 36 135 4 135 L 4 45 A 35 35 0 0 1 36 5 Z" fill="#1a1a1a" style={{ fill: '#1a1a1a' }} />
              {/* Right Half - Fuller body, narrower gap, sharp flare */}
              <path d="M 44 5 A 35 35 0 0 1 76 45 L 76 135 Q 44 135 44 85 L 44 5 Z" fill="#1a1a1a" style={{ fill: '#1a1a1a' }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pill-pattern-dark-home)" />
        </svg>
      </div>

      {/* Dark Overlay Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10">
        <Navbar />
        <HomeLandingHero />
        <WhatWeWorkFor />
        <Testimonials />
        <Companies />
        <Footer />
      </div>
    </main>
  )
}
