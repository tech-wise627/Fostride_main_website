"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        name: "Gaurang Shetty",
        role: "CEO, RIIDL",
        image: "/images/team/gaurang-shetty.png",
        content: "Watching Fostride grow from an inspired idea into a purpose-driven organization has been nothing short of remarkable. The team’s dedication to reducing waste generation and transforming communities into cleaner, healthier spaces is a reflection of their deep sense of responsibility toward the planet. Fostride doesn’t just manage waste, it redefines how we think about sustainability and environmental care. I’m proud to have mentored such a passionate and forward-thinking team that is truly making the world a less wasteful and more livable place.",
    },
    {
        name: "Michael Johnson",
        role: "CEO, Brightsun",
        image: "/images/team/aryan-nair.png",
        content: "Fostride has been instrumental in transforming our sustainability goals. Their expertise across various waste processing channels, coupled with their data-driven approach, has significantly boosted our efficiency.",
    },
    {
        name: "Sarah Williams",
        role: "Director, EcoTech Solutions",
        image: "/images/team/gobind-singh.png",
        content: "The level of insight provided by Fostride's analytics platform is unmatched. We can now track our waste generation in real-time and make informed decisions that save costs and protect the environment.",
    },
]

export function Testimonials() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
            <div className="text-center mb-16 z-10 relative px-4">
                <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white tracking-tight">
                    Testimonials
                </h2>
            </div>

            <div className="relative z-10 w-full px-4 md:px-0">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    {/* Navigation Arrows at Screen Edges - Outside the hidden content */}
                    <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 h-14 w-14 border-white/10 bg-black/20 hover:bg-[#0C8346] hover:border-[#0C8346] text-white transition-all hidden md:flex z-20" />
                    <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 h-14 w-14 border-white/10 bg-black/20 hover:bg-[#0C8346] hover:border-[#0C8346] text-white transition-all hidden md:flex z-20" />

                    {/* Centered Constrained Wrapper for Content - Hides adjacent slides */}
                    <div className="max-w-3xl mx-auto overflow-hidden">
                        <CarouselContent className="-ml-0">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="basis-full pl-0">
                                    <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 p-8 md:p-10 rounded-[40px] relative group hover:border-[#0C8346]/50 transition-colors duration-300 mx-4">
                                        {/* Green Quote Icon */}
                                        <div className="absolute top-8 left-8 text-[#0C8346] opacity-50">
                                            <Quote size={60} className="fill-[#0C8346]/20" />
                                        </div>

                                        <div className="relative z-10 space-y-6">
                                            {/* Stars */}
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={16} className="text-[#0C8346] fill-[#0C8346]" />
                                                ))}
                                            </div>

                                            {/* Content */}
                                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                                "{testimonial.content}"
                                            </p>

                                            {/* User Profile */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10">
                                                    {/* Use a generic avatar if specific ones aren't suitable, but sticking to placeholders for now */}
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-base">{testimonial.name}</h4>
                                                    <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
