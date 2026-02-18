"use client"

import { GraduationCap, Building2, Wheat, Home, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const sectors = [
    {
        title: "Campuses and Universities",
        icon: GraduationCap,
        description: "Empowering educational institutions with sustainable waste management solutions."
    },
    {
        title: "IT Parks and Corporate Offices",
        icon: Building2,
        description: "Streamlining waste operations for modern workplaces and tech parks."
    },
    {
        title: "Agricultural Markets and Agri-Cluster",
        icon: Wheat,
        description: "Optimizing organic waste handling in agricultural hubs and markets."
    },
    {
        title: "Residential Societies and Smart Cities",
        icon: Home,
        description: "Building cleaner communities through smart waste segregation systems."
    },
    {
        title: "Airports and Malls",
        icon: Plane,
        description: "Managing high-volume waste efficiently in busy public spaces."
    }
]

export function WhatWeWorkFor() {
    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-unbounded)]">
                        What We <span className="text-[#0C8346]">Work For</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Delivering tailored waste management solutions across diverse sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {sectors.map((sector, index) => (
                        <Card
                            key={index}
                            className="bg-white/5 backdrop-blur-[10px] border-white/10 hover:border-[#0C8346]/50 transition-all duration-300 group"
                        >
                            <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                                <div className="h-16 w-16 rounded-full bg-[#0C8346]/10 flex items-center justify-center group-hover:bg-[#0C8346] transition-colors duration-300">
                                    <sector.icon className="h-8 w-8 text-[#0C8346] group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-semibold text-white group-hover:text-[#0C8346] transition-colors duration-300">
                                    {sector.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {sector.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
