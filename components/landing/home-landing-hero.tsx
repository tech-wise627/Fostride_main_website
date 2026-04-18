"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export function HomeLandingHero() {
    return (
        <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-start overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 h-full flex items-center pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

                    {/* Text Column - Left */}
                    <div className="flex flex-col items-start text-left space-y-8">
                        {/* Main Headline Group */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-[70px] font-semibold tracking-tight text-white leading-[1.1]">
                                Welcome to <br />
                                <span className="bg-[#0C8346] text-black font-semibold relative inline-block px-2 py-0 -rotate-2 ml-0 mt-2 rounded-sm font-[family-name:var(--font-unbounded)]">
                                    Fostride
                                </span>
                            </h1>

                            <h2 className="text-3xl md:text-5xl lg:text-[36px] xl:text-[50px] font-normal tracking-tight text-white leading-[1.1]">
                                <span className="block sm:inline whitespace-normal sm:whitespace-nowrap">One-Step Solution towards</span>
                                <span className="block mt-2 text-[#0C8346]">Waste Management</span>
                            </h2>
                        </div>

                        {/* Subtitle */}
                        <p className="max-w-xl text-lg text-muted-foreground/80 font-light tracking-wide leading-relaxed">
                            We believe in combining innovative design, sustainable practices, and
                            exceptional craftsmanship to bring your vision to life.
                        </p>
                    </div>

                    {/* Robot Image Column - Right */}
                    <div className="relative flex justify-center items-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Subtle Glow Behind Mascot */}
                            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0C8346]/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse" />

                            <Image
                                src="/images/wise-robot.png"
                                alt="W.I.S.E. Robot"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
