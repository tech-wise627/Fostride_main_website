"use client"

import { useState } from "react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`)
    window.location.href = `mailto:fostride@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#111009] text-foreground">
      <Navbar />

      <main className="pt-[70px]">

        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(12,131,70,0.07) 0%, transparent 70%)" }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0C8346]/25 bg-[#0C8346]/8 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0C8346]" />
              <span className="text-[#0C8346] text-[11px] font-semibold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h1 className="font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)] mb-4"
              style={{ fontSize: "clamp(32px,5.5vw,64px)", color: "#EDE8E0" }}>
              Let&apos;s Talk.
            </h1>
            <p className="text-[16px] font-light leading-relaxed max-w-lg mx-auto" style={{ color: "#6B6358" }}>
              Whether you&apos;re interested in a pilot, a partnership, or just want to learn more — we&apos;re here.
            </p>
          </div>
        </section>

        {/* Main grid */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_420px] gap-8">

            {/* Contact form */}
            <div className="rounded-3xl p-8 md:p-10"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: "#1A6B3C" }}>
                <span className="w-5 h-px bg-current" />Send a Message
              </span>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(26,107,60,0.15)", border: "1px solid rgba(26,107,60,0.3)" }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M4 11l5 5L18 6" stroke="#1A6B3C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg">Your email client is opening.</p>
                  <p className="text-[14px]" style={{ color: "#6B6358" }}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "#4A4540" }}>
                        Full Name <span style={{ color: "#1A6B3C" }}>*</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Gavi Kothari"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-all duration-200 focus:border-[#1A6B3C]/50"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "#4A4540" }}>
                        Email <span style={{ color: "#1A6B3C" }}>*</span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-all duration-200 focus:border-[#1A6B3C]/50"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "#4A4540" }}>
                      Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="Company / University / Municipality"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-all duration-200 focus:border-[#1A6B3C]/50"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "#4A4540" }}>
                      Message <span style={{ color: "#1A6B3C" }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project or what you're looking for..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="rounded-xl px-4 py-3 text-[14px] text-white outline-none resize-none transition-all duration-200 focus:border-[#1A6B3C]/50"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: "#1A6B3C", color: "#fff" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5">

              {/* Contact details */}
              <div className="rounded-3xl p-7"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
                  style={{ color: "#1A6B3C" }}>
                  <span className="w-5 h-px bg-current" />Contact Details
                </span>

                <div className="flex flex-col gap-5">
                  <a href="mailto:fostride@gmail.com"
                    className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(26,107,60,0.12)", border: "1px solid rgba(26,107,60,0.25)" }}>
                      <Mail size={14} color="#1A6B3C" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: "#3A3830" }}>Email</p>
                      <p className="text-[14px] text-white group-hover:text-[#1A6B3C] transition-colors">fostride@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+919818801050"
                    className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(26,107,60,0.12)", border: "1px solid rgba(26,107,60,0.25)" }}>
                      <Phone size={14} color="#1A6B3C" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: "#3A3830" }}>Phone</p>
                      <p className="text-[14px] text-white group-hover:text-[#1A6B3C] transition-colors">+91 98188 01050</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(26,107,60,0.12)", border: "1px solid rgba(26,107,60,0.25)" }}>
                      <MapPin size={14} color="#1A6B3C" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: "#3A3830" }}>Address</p>
                      <p className="text-[14px] leading-relaxed" style={{ color: "#6B6358" }}>
                        RIIDL — Room 520, Bhaskaracharya Building<br />
                        Somaiya Vidyavihar Campus<br />
                        Vidyavihar, Mumbai — 400077
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-3xl p-7"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(26,107,60,0.12)", border: "1px solid rgba(26,107,60,0.25)" }}>
                    <Clock size={14} color="#1A6B3C" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#1A6B3C" }}>
                    Office Hours
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 8:30 PM" },
                    { day: "Saturday", hours: "10:00 AM – 6:30 PM" },
                    { day: "Sunday", hours: "Closed", closed: true },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center py-2.5"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <span className="text-[13px]" style={{ color: "#6B6358" }}>{row.day}</span>
                      <span className="text-[13px] font-semibold"
                        style={{ color: row.closed ? "#F87171" : "#EDE8E0" }}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="rounded-3xl p-7"
                style={{ background: "rgba(26,107,60,0.04)", border: "1px solid rgba(26,107,60,0.15)" }}>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#1A6B3C" }}>
                  Follow Fostride
                </p>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/company/fostride/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[12px] font-medium transition-all duration-200 hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#EDE8E0" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/fostride/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-[12px] font-medium transition-all duration-200 hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#EDE8E0" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Map */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)", height: "380px" }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(30%) brightness(0.85)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Riidl+520,+Bhaskaracharya+building,+Somaiya+Vidyavihar+Campus,+Vidyavihar,+Mumbai+400077&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Fostride Office Location"
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}