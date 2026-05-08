import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

const nav = [
  { label: "Home", href: "/" },
  { label: "R3Bin", href: "/r3bin" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
]

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative w-full mt-8"
      style={{ background: "#080807", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* Top bar — logo + nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12
                      flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0 justify-between">

        {/* Brand */}
        <div className="flex flex-col gap-5 max-w-xs">
          <Link href="/">
            <Image
              src="/images/fostride-logo.png"
              alt="Fostride"
              width={70}
              height={70}
              className="h-[56px] w-auto"
            />
          </Link>
          <p className="text-[13px] leading-relaxed" style={{ color: "#4A4540" }}>
            India&apos;s first AI-powered waste intelligence platform — classifying, tracking, and routing
            waste in real time.
          </p>
          <div className="flex gap-3 mt-1">
            <Link href="https://www.linkedin.com/company/fostride/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#1A6B3C]/60 group/social"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#4A4540] group-hover/social:text-[#1A6B3C] transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/fostride/" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#1A6B3C]/60 group/social"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4A4540] group-hover/social:text-[#1A6B3C] transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Pages */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#2A8A50" }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}
                    className="text-[13px] transition-colors duration-200 hover:text-white"
                    style={{ color: "#4A4540" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#2A8A50" }}>
              Product
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "R3Bin Hardware", href: "/r3bin" },
                { label: "W.I.S.E. AI Engine", href: "/r3bin" },
                { label: "Live Analytics", href: "/dashboard" },
                { label: "ESG Reporting", href: "/r3bin" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}
                    className="text-[13px] transition-colors duration-200 hover:text-white"
                    style={{ color: "#4A4540" }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#2A8A50" }}>
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="mailto:fostride@gmail.com"
                  className="inline-flex items-center gap-2 text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: "#4A4540" }}>
                  <Mail size={13} />
                  fostride@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://maps.google.com/?q=Riidl+Somaiya+Vidyavihar+Mumbai"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-[13px] transition-colors duration-200 hover:text-white"
                  style={{ color: "#4A4540" }}>
                  <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                  RIIDL, Somaiya Vidyavihar<br />Mumbai — 400077
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6
                      flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px]" style={{ color: "#2A2820" }}>
          &copy; {new Date().getFullYear()} Fostride Technologies Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {legal.map((item) => (
            <Link key={item.label} href={item.href}
              className="text-[12px] transition-colors duration-200 hover:text-white"
              style={{ color: "#2A2820" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  )
}