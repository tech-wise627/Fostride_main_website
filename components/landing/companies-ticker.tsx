"use client"

import React from 'react'
import Image from "next/image"

const logos = [
    {
        name: "Brookfield Properties",
        colorSrc: "/images/companies/brookfield-properties.png",
        greySrc: "/images/companies/brookfield-properties-greyscale.png",
        width: "w-48"
    },
    {
        name: "riidl",
        colorSrc: "/images/companies/riidl-hover.png",
        greySrc: "/images/companies/riidl-greyscale.png",
        width: "w-32"
    },
    {
        name: "Somaiya Vidyavihar University",
        colorSrc: "/images/companies/somaiya.png",
        greySrc: "/images/companies/somaiya.png",
        width: "w-40"
    }
]

export function CompaniesTicker() {
    return (
        <section className="w-full bg-[#0a0a0a] border-t border-white/5 pt-12 pb-0 overflow-hidden relative z-20">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-unbounded)] text-white text-center mb-4">
                    Companies We Have <span className="text-[#0C8346]">Worked</span> With
                </h2>
            </div>

            {/* Glass Strip Wrapper */}
            <div className="w-full bg-white/5 backdrop-blur-[10px] py-6">
                <div className="relative w-full overflow-hidden mask-image-gradient-sides">
                    {/* Gradient Masks for edges */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

                    {/* Seamless Loop Structure */}
                    <div className="flex overflow-hidden w-full group">
                        <div className="flex animate-marquee shrink-0 items-center justify-around gap-20 min-w-full px-8 group-hover:[animation-play-state:paused]">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <React.Fragment key={`t1-${i}`}>
                                    {logos.map((logo, idx) => (
                                        <div key={`${i}-${idx}`} className={`relative ${logo.width} h-10 cursor-pointer group/item`}>
                                            {/* Color Image (Detailed, bottom layer) */}
                                            <Image
                                                src={logo.colorSrc}
                                                alt={logo.name}
                                                fill
                                                className="object-contain"
                                            />
                                            {/* Grayscale Image (Top layer, fades out on hover) */}
                                            <Image
                                                src={logo.greySrc}
                                                alt={`${logo.name} Grayscale`}
                                                fill
                                                className="object-contain transition-opacity duration-300 opacity-100 group-hover/item:opacity-0"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                        {/* Duplicate Track */}
                        <div className="flex animate-marquee shrink-0 items-center justify-around gap-20 min-w-full px-8 group-hover:[animation-play-state:paused]">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <React.Fragment key={`t2-${i}`}>
                                    {logos.map((logo, idx) => (
                                        <div key={`${i}-${idx}`} className={`relative ${logo.width} h-10 cursor-pointer group/item`}>
                                            {/* Color Image (Detailed, bottom layer) */}
                                            <Image
                                                src={logo.colorSrc}
                                                alt={logo.name}
                                                fill
                                                className="object-contain"
                                            />
                                            {/* Grayscale Image (Top layer, fades out on hover) */}
                                            <Image
                                                src={logo.greySrc}
                                                alt={`${logo.name} Grayscale`}
                                                fill
                                                className="object-contain transition-opacity duration-300 opacity-100 group-hover/item:opacity-0"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
