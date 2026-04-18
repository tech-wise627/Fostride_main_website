import { BackgroundPattern } from "@/components/landing/background-pattern";
import dynamic from "next/dynamic"
import Image from "next/image"

import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"// Loading Skeleton
const SectionLoader = () => (
    <div className="w-full py-20 min-h-[50vh] flex flex-col items-center justify-center gap-4 text-[#0C8346]/50">
        <div className="w-10 h-10 border-4 border-[#0C8346]/20 border-t-[#0C8346] rounded-full animate-spin"></div>
        <span className="text-sm font-medium tracking-wide">Loading team profiles...</span>
    </div>
)

const OurTeamBody = dynamic(() => import('@/components/landing/our-team-body'), {
    loading: () => <SectionLoader />,
    ssr: true
})

export default function OurTeam() {
    return (
        <div className="min-h-screen bg-[#050505] text-foreground relative">
            {/* Geometric Background Pattern Component */}
            <BackgroundPattern />

            {/* Dark Overlay Gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

            <div className="relative z-10">
                <Navbar />

                <main className="pt-32 pb-20 px-4 md:px-8 lg:px-[40px]">
                    {/* Header Section */}
                    {/* Hero Section */}
                    <div className="relative w-full h-[300px] md:h-[500px] mb-16 md:mb-24 rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {/* Background Image */}
                        <Image
                            src="/images/our-team-hero.png"
                            alt="Fostride Team Hero"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Overlay Gradient for Text Readability - Matching the reference darkness */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Bottom Aligned Text Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-[16px]">
                            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-normal tracking-tight text-white drop-shadow-lg">
                                Hey There! Welcome to<br />
                                <span className="text-[#0C8346]">Fostride!</span>
                            </h1>
                        </div>
                    </div>

                    {/* Lazily load everything below the fold */}
                    <OurTeamBody />
                </main>

                <Footer />
            </div>
        </div>
    )
}

