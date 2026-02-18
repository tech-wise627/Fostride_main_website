"use client"

import { useState } from "react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { MessageCircle, Phone, Mail, Users, Instagram, Linkedin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChatWidget } from "@/components/support/chat-widget"

export default function SupportPage() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#050505] text-foreground relative">
      {/* Geometric Background Pattern - Exact 9x3 Grid */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pill-pattern-dark"
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
          <rect width="100%" height="100%" fill="url(#pill-pattern-dark)" />
        </svg>
      </div>

      {/* Dark Overlay Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 pt-[110px] pb-20 px-4 lg:px-8">
          {/* Hero Section */}
          <section className="bg-transparent">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                How can we help you?
              </h1>
            </div>
          </section>

          {/* Support Options */}
          <section className="py-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid md:grid-cols-12 gap-6">
                <Card className="md:col-span-4 bg-white/5 backdrop-blur-[8px] border-white/5 transition-all duration-300 cursor-pointer group relative overflow-hidden h-full flex flex-col">
                  <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-full bg-[#0C8346]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-7 w-7 text-[#0C8346]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <a
                        href="https://www.instagram.com/fostride/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-[#E1306C] hover:text-white transition-all hover:scale-110 group/insta"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-6 w-6 text-white group-hover/insta:text-white" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/fostride/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110 group/linkedin"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-6 w-6 text-white group-hover/linkedin:text-white" />
                      </a>
                    </div>
                    <p className="text-[16px] text-gray-400 font-light mt-auto leading-tight">
                      Stay updated with our latest news and updates
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-4 bg-white/5 backdrop-blur-[8px] border-white/5 transition-colors cursor-pointer h-full flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-6">Phone Support</h3>
                    <div className="flex items-center justify-center mb-6">
                      <a
                        href="tel:+919818801050"
                        className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <p className="text-lg text-white font-semibold">
                          +91 9818801050
                        </p>
                      </a>
                    </div>
                    <p className="text-[16px] text-gray-400 font-light mt-auto leading-tight">
                      Mon-Fri, 8AM-8PM IST
                    </p>
                  </CardContent>
                </Card>

                <Card className="md:col-span-4 bg-white/5 backdrop-blur-[8px] border-white/5 transition-colors cursor-pointer h-full flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-6">Email Support</h3>
                    <div className="flex items-center justify-center mb-6">
                      <a
                        href="mailto:support@fostride.com"
                        className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <p className="text-lg text-white font-semibold">
                          support@fostride.com
                        </p>
                      </a>
                    </div>
                    <p className="text-[16px] text-gray-400 font-light mt-auto leading-tight">
                      Response within 4 hours
                    </p>
                  </CardContent>
                </Card>

                {/* Map Tile */}
                <Card className="md:col-span-7 bg-white/5 backdrop-blur-[8px] border-white/5 overflow-hidden h-[420px] p-0">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Riidl+520,+Bhaskaracharya+building,+Somaiya+Vidyavihar+Campus,+Vidyavihar,+Mumbai+400077&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Fostride Office Location"
                  ></iframe>
                </Card>

                {/* Operational Hours Tile */}
                <Card className="md:col-span-5 bg-white/5 backdrop-blur-[8px] border-white/5 transition-colors cursor-pointer h-[420px] flex flex-col justify-center items-center">
                  <CardContent className="p-8 text-center flex flex-col h-full w-full justify-center">
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                      <Clock className="h-7 w-7 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-8">Operational Hours</h3>

                    <div className="space-y-4 w-full max-w-sm mx-auto">
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <span className="text-gray-400 font-medium">Mon - Fri</span>
                        <span className="text-white font-semibold">9:00 AM - 8:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-3">
                        <span className="text-gray-400 font-medium">Saturday</span>
                        <span className="text-white font-semibold">10:00 AM - 6:30 PM</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-gray-400 font-medium">Sunday</span>
                        <span className="text-red-400 font-semibold">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

function Loading() {
  return null
}
