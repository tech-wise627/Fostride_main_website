"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 w-full text-white relative z-10 transition-all duration-300">
      <div className="w-full px-10 space-y-8">
        {/* Top Section */}
        <div className="bg-[#1A1A1A] rounded-[48px] p-8 md:p-12 border border-white/5 flex flex-col gap-12">

          {/* Menu Options - Horizontal List (Now First) */}
          <div className="flex flex-col items-center justify-center gap-8 border-b border-white/10 pb-10 w-full">
            <ul className="flex flex-wrap justify-center gap-8 text-gray-400 text-lg font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/r3bin" className="hover:text-white transition-colors">R3Bin</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Live Analytics</Link></li>
              <li><Link href="/our-team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Cards - Horizontal Grid (Now Second) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="mailto:fostride@gmail.com" className="bg-[#262626] rounded-3xl p-6 flex items-center justify-center gap-4 hover:bg-[#2d2d2d] transition-colors group">
              <div className="h-10 w-10 flex items-center justify-center">
                <Mail className="text-[#0C8346] group-hover:scale-110 transition-transform" size={24} />
              </div>
              <span className="text-lg text-gray-200 group-hover:text-white transition-colors">fostride@gmail.com</span>
            </Link>

            <Link href="tel:+919818801050" className="bg-[#262626] rounded-3xl p-6 flex items-center justify-center gap-4 hover:bg-[#2d2d2d] transition-colors group">
              <div className="h-10 w-10 flex items-center justify-center">
                <Phone className="text-[#0C8346] group-hover:scale-110 transition-transform" size={24} />
              </div>
              <span className="text-lg text-gray-200 group-hover:text-white transition-colors">+91 9818801050</span>
            </Link>

            <Link
              href="https://maps.google.com/?q=Riidl+520,+Bhaskaracharya+building,+Somaiya+Vidyavihar+Campus,+Vidyavihar,+Mumbai+400077"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#262626] rounded-3xl p-6 flex items-center justify-center gap-4 hover:bg-[#2d2d2d] transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center">
                <MapPin className="text-[#0C8346] group-hover:scale-110 transition-transform" size={24} />
              </div>
              <span className="text-lg text-gray-200 group-hover:text-white transition-colors">Mumbai</span>
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="bg-[#1A1A1A] rounded-[48px] p-8 border border-white/5 flex flex-col items-center justify-center space-y-6 text-center">
          <h4 className="text-[#0C8346] font-bold text-lg">Follow us:</h4>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/company/fostride/" target="_blank" rel="noopener noreferrer" className="bg-[#262626] p-3 rounded-xl hover:bg-[#0C8346] hover:text-white transition-all text-gray-400">
              <Linkedin size={24} />
            </Link>
            <Link href="https://www.instagram.com/fostride/" target="_blank" rel="noopener noreferrer" className="bg-[#262626] p-3 rounded-xl hover:bg-[#0C8346] hover:text-white transition-all text-gray-400">
              <Instagram size={24} />
            </Link>
          </div>
          <p className="text-sm font-semibold text-gray-400">
            &copy; Copyright 2026 <span className="text-[#0C8346]">Fostride</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
