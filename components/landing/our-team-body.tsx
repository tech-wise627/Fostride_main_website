"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  LinkedinIcon, Mail, ArrowUpRight, Plus, X,
  Atom, Users, Lightbulb, Heart,
  Leaf, Cpu, TrendingUp, RefreshCw, Shield, Star, Zap, Handshake,
} from "lucide-react"

/* ─────────────────────────────────────────────── */
/*  DATA                                            */
/* ─────────────────────────────────────────────── */

const teamMembers = [
  {
    name: "Mayank Verma",
    role: "Chief Technology Officer",
    bgText: "Tech",
    smallText: "SPECIALIZED COMPUTING",
    image: "/images/team/mayank-verma.png",
    linkedin: "https://www.linkedin.com/in/mayank-verma-3a459b306/",
    mail: "mailto:tech@fostride.com",
    bio: "Leads the W.I.S.E. AI stack — from model training pipelines to embedded hardware deployment on R3Bin.",
  },
  {
    name: "Aryan Jain",
    role: "Chief Financial Officer",
    bgText: "Finance",
    smallText: "FINANCIAL FORECASTING",
    image: "/images/team/aryan-jain.png",
    linkedin: "https://www.linkedin.com/in/aryan-jain-4357241b9/",
    mail: "mailto:fostride@gmail.com",
    bio: "Builds the financial architecture that turns waste data into investor confidence and sustainable unit economics.",
  },
  {
    name: "Aryan Nair",
    role: "Chief Strategy Officer",
    bgText: "Practical",
    smallText: "INGENIUS STRATEGY",
    image: "/images/team/aryan-nair.png",
    linkedin: "https://www.linkedin.com/in/aryan-nair-b70248317/",
    mail: "mailto:fostride@gmail.com",
    bio: "Maps Fostride's path from campus pilots to enterprise scale — connecting the dots between data, partners, and opportunity.",
  },
  {
    name: "Piyush Tanwar",
    role: "Chief Marketing Officer",
    bgText: "Strategic",
    smallText: "MARKETING GENIUS",
    image: "/images/team/piyush-tanwar.png",
    linkedin: "https://www.linkedin.com/",
    mail: "mailto:fostride@gmail.com",
    bio: "Shapes the Fostride brand voice — translating deep-tech sustainability into stories that resonate and convert.",
  },
]

const VALUES = [
  {
    n: "01", icon: Leaf, title: "Sustainability",
    tagline: "Planet-first decisions.",
    desc: "Every Fostride decision — from hardware choice to cloud provider — is weighed against its environmental cost. We build for the planet, not just the market.",
  },
  {
    n: "02", icon: Cpu, title: "Innovation",
    tagline: "Question everything.",
    desc: "W.I.S.E. exists because we asked: what if waste could think? We challenge assumptions constantly and believe the best solution hasn't been built yet.",
  },
  {
    n: "03", icon: TrendingUp, title: "Impact",
    tagline: "Metrics over optics.",
    desc: "We measure success in kilograms diverted, CO₂ saved, and communities empowered — not press mentions. Real numbers, on a live dashboard.",
  },
  {
    n: "04", icon: RefreshCw, title: "Circularity",
    tagline: "Close every loop.",
    desc: "Nothing is waste until you stop thinking. We connect generators, sorters, recyclers, and upcyclers into one closed system that leaves nothing behind.",
  },
  {
    n: "05", icon: Shield, title: "Integrity",
    tagline: "No greenwashing.",
    desc: "Transparent data, honest claims, real pilots. Every stat we publish comes from a live deployment — we'll never inflate a number to look better.",
  },
  {
    n: "06", icon: Handshake, title: "Collaboration",
    tagline: "We grow together.",
    desc: "From Brookfield to KJ Somaiya, Fostride grows by bringing institutions, recyclers, and municipalities into a shared ecosystem — not a walled garden.",
  },
  {
    n: "07", icon: Star, title: "Trustworthiness",
    tagline: "Our data is real.",
    desc: "Our pilots are real, our accuracy numbers are real, and our dashboards run live. Trust isn't claimed — it's earned through consistent, verifiable results.",
  },
  {
    n: "08", icon: Zap, title: "Reliability",
    tagline: "Infrastructure-grade uptime.",
    desc: "W.I.S.E. operates silently in the background — sorting, logging, routing — without needing human babysitting. It just works, every time.",
  },
]

/* ─────────────────────────────────────────────── */
/*  HOOKS                                           */
/* ─────────────────────────────────────────────── */

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─────────────────────────────────────────────── */
/*  VALUES CARD                                     */
/* ─────────────────────────────────────────────── */

function ValueCard({
  value,
  active,
  visible,
  delay,
  onClick,
}: {
  value: typeof VALUES[0]
  active: boolean
  visible: boolean
  delay: number
  onClick: () => void
}) {
  const Icon = value.icon
  return (
    <button
      onClick={onClick}
      className="group relative text-left w-full outline-none focus-visible:ring-2 focus-visible:ring-[#0C8346]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      <div
        className={[
          "relative rounded-2xl p-5 border transition-all duration-350 overflow-hidden h-full",
          active
            ? "border-[#0C8346]/70 bg-[#0C8346]/10 shadow-[0_0_32px_rgba(12,131,70,0.18)]"
            : "border-white/8 bg-white/3 hover:border-[#0C8346]/35 hover:bg-[#0C8346]/5",
        ].join(" ")}
      >
        {/* Active glow blob */}
        {active && (
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#0C8346]/20 blur-2xl pointer-events-none" />
        )}

        {/* Number */}
        <span
          className={[
            "block text-[10px] font-bold uppercase tracking-widest mb-3 transition-colors duration-250",
            active ? "text-[#0C8346]" : "text-gray-600 group-hover:text-[#0C8346]/70",
          ].join(" ")}
        >
          {value.n}
        </span>

        {/* Icon */}
        <div
          className={[
            "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-250",
            active
              ? "bg-[#0C8346] shadow-[0_0_14px_rgba(12,131,70,0.5)]"
              : "bg-white/8 group-hover:bg-[#0C8346]/20",
          ].join(" ")}
        >
          <Icon
            className={[
              "w-5 h-5 transition-colors duration-250",
              active ? "text-white" : "text-gray-400 group-hover:text-[#0C8346]",
            ].join(" ")}
          />
        </div>

        {/* Title */}
        <h3
          className={[
            "font-bold text-base leading-tight mb-1 transition-colors duration-250",
            active ? "text-[#22c55e]" : "text-white group-hover:text-[#22c55e]",
          ].join(" ")}
        >
          {value.title}
        </h3>

        {/* Tagline */}
        <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest mb-3">
          {value.tagline}
        </p>

        {/* Description — visible when active */}
        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: active ? "120px" : "0px", opacity: active ? 1 : 0 }}
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            {value.desc}
          </p>
        </div>

        {/* Bottom indicator */}
        <div
          className={[
            "absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-400",
            active ? "w-full bg-gradient-to-r from-[#0C8346] to-[#22c55e]" : "w-0",
          ].join(" ")}
        />
      </div>
    </button>
  )
}

/* ─────────────────────────────────────────────── */
/*  MAIN                                            */
/* ─────────────────────────────────────────────── */

export function OurTeamBody() {
  const [activeMemberIndex, setActiveMemberIndex]   = useState<number | null>(null)
  const [activeAboutIndex, setActiveAboutIndex]     = useState<number | null>(null)
  const [activeFaqIndex, setActiveFaqIndex]         = useState<number | null>(null)
  const [activeValueIndex, setActiveValueIndex]     = useState<number | null>(null)

  const aboutReveal  = useReveal()
  const founderReveal = useReveal()
  const teamReveal   = useReveal()
  const valuesReveal = useReveal()
  const faqReveal    = useReveal()

  return (
    <>
      {/* ══════════════════════════════════════════ */}
      {/*  ABOUT COMPANY                             */}
      {/* ══════════════════════════════════════════ */}
      <div
        ref={aboutReveal.ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] py-16 lg:py-32 items-start"
      >
        {/* Left sticky */}
        <div
          className="space-y-6 lg:sticky lg:top-32"
          style={{
            opacity: aboutReveal.visible ? 1 : 0,
            transform: aboutReveal.visible ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em]">
            <div
              className="h-px bg-[#0C8346]"
              style={{ width: aboutReveal.visible ? "32px" : "0px", transition: "width 0.8s ease 0.3s" }}
            />
            Our Story
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-white font-[family-name:var(--font-unbounded)] leading-tight">
            About<br />
            <span
              style={{
                background: "linear-gradient(135deg, #0C8346, #22c55e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fostride
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We're passionate about sustainability and innovation — redefining waste as an opportunity for a greener tomorrow. From AI-powered sorting to grassroots initiatives, we're building infrastructure for a circular economy.
          </p>
        </div>

        {/* Right accordion */}
        <div
          className="space-y-3"
          style={{
            opacity: aboutReveal.visible ? 1 : 0,
            transform: aboutReveal.visible ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          {[
            {
              title: "01. Our History",
              content: "Fostride began in 2022 as a school competition idea. What started small has evolved into a full R&D effort focused on AI-powered waste sorting. In 2024 we directed focus entirely on expanding our capabilities — today Fostride is at the prototyping stage with two live pilots under our belt.",
            },
            {
              title: "02. Our Mission",
              content: "To revolutionize waste management through innovative technology, fostering a circular economy that minimizes environmental impact and creates sustainable value. We connect waste generators, recyclers, and upcyclers — empowering communities and reducing pollution.",
            },
            {
              title: "03. Our Vision",
              content: "To lead the global transition toward a zero-waste future — transforming waste into opportunities and creating a world where every resource is valued, reused, and repurposed for the benefit of people and the planet.",
            },
          ].map((item, index) => {
            const isExpanded = activeAboutIndex === index
            return (
              <div
                key={index}
                onClick={() => setActiveAboutIndex(isExpanded ? null : index)}
                className={[
                  "group flex flex-col w-full border overflow-hidden transition-all duration-400 cursor-pointer",
                  isExpanded
                    ? "rounded-[24px] border-[#0C8346]/40 bg-[#0C8346]/8"
                    : "rounded-[20px] border-white/8 bg-white/3 hover:border-[#0C8346]/25",
                ].join(" ")}
              >
                <div className="flex items-center justify-between px-6 h-[68px] w-full">
                  <span className={["text-[15px] transition-colors duration-250", isExpanded ? "text-[#22c55e] font-medium" : "text-white group-hover:text-[#0C8346]"].join(" ")}>
                    {item.title}
                  </span>
                  <div className={["w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-250", isExpanded ? "bg-[#0C8346]" : "bg-white/8 group-hover:bg-[#0C8346]"].join(" ")}>
                    {isExpanded
                      ? <X className="text-white w-4 h-4" />
                      : <Plus className="text-white group-hover:text-white w-4 h-4" />}
                  </div>
                </div>
                <div className={["px-6 transition-all duration-400 overflow-hidden", isExpanded ? "max-h-[300px] opacity-100 pb-6" : "max-h-0 opacity-0"].join(" ")}>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/*  FOUNDER                                   */}
      {/* ══════════════════════════════════════════ */}
      <div ref={founderReveal.ref} className="py-20 mb-16">
        <div
          style={{
            opacity: founderReveal.visible ? 1 : 0,
            transform: founderReveal.visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div className="h-px bg-[#0C8346]" style={{ width: founderReveal.visible ? "32px" : "0px", transition: "width 0.8s ease 0.3s" }} />
            Founder
          </div>
          <h2 className="text-3xl md:text-[42px] font-bold text-white font-[family-name:var(--font-unbounded)] leading-tight mb-4">
            Meet The Founder
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed mb-12 max-w-2xl">
            <span className="text-white font-normal">Gavi Kothari</span> — founder of Fostride — is passionate about{" "}
            <span className="text-white font-normal">leveraging technology for sustainability</span>. His innovative vision drives our mission to{" "}
            <span className="text-[#0C8346] font-semibold">revolutionize waste management</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-[60px] items-start">
          {/* Image */}
          <div
            className="relative h-[580px] w-full max-w-md mx-auto lg:mx-0"
            style={{
              opacity: founderReveal.visible ? 1 : 0,
              transform: founderReveal.visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            <div className="absolute inset-x-8 bottom-0 top-20 bg-[#0C8346] rounded-t-full rounded-b-[40px]" />
            <Image src="/images/founder.png" alt="Gavi Kothari" fill className="object-cover object-top relative z-10 mix-blend-normal rounded-b-[40px]" />
            <div className="absolute bottom-4 left-4 z-20 leading-none">
              <span className="block text-[#0C8346] text-4xl font-bold">Gavi</span>
              <span className="block text-white text-5xl font-black uppercase tracking-tighter">KOTHARI</span>
            </div>
          </div>

          {/* Details */}
          <div
            className="space-y-8 pt-4"
            style={{
              opacity: founderReveal.visible ? 1 : 0,
              transform: founderReveal.visible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 0.9s ease 0.35s, transform 0.9s ease 0.35s",
            }}
          >
            <p className="text-gray-300 leading-relaxed text-[16px] font-light">
              Gavi is an accomplished builder who combines technological innovation with sustainable practices to create genuine value. Known for his strategic vision and dedication to excellence, he's guided Fostride from a school project to a live AI system sorting waste in real campuses and commercial buildings.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Atom size={14} className="text-[#0C8346]" />, text: "Visionary Thinker" },
                { icon: <Users size={14} className="text-[#0C8346]" />, text: "Empathetic Leader" },
                { icon: <Lightbulb size={14} className="text-[#0C8346]" />, text: "Creative Problem-Solver" },
                { icon: <Heart size={14} className="text-[#0C8346]" />, text: "Passionate Mentor" },
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-[#0C8346]/10 border border-[#0C8346]/25 rounded-full">
                  {tag.icon}
                  <span className="text-gray-300 text-xs font-medium">{tag.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn", href: "https://in.linkedin.com/in/gavikothari" },
                  { label: "Instagram", href: "https://www.instagram.com/gavi.kothari/" },
                  { label: "Mail", href: "mailto:gavi@fostride.com" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.label === "Mail" ? undefined : "_blank"}
                    rel={item.label === "Mail" ? undefined : "noopener noreferrer"}
                    className="group px-5 py-2 bg-[#0C8346] text-white font-medium text-xs rounded-full flex items-center gap-1.5 hover:bg-[#22c55e] transition-colors duration-200"
                  >
                    {item.label}
                    <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:rotate-45" />
                  </a>
                ))}
              </div>
            </div>

            {/* Featured In */}
            <div className="space-y-3">
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Featured In</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "The Hindu In School", href: "https://drive.google.com/file/d/1QTAlZHICLFw7WFB1zexor9qMtQkkkqPl/view?usp=sharing" },
                  { label: "Guiding Young Minds", href: "https://drive.google.com/file/d/1uQ9PFhs4yBvDeIlnDfK0SiUdbHSuVyU9/view?usp=sharing" },
                  { label: "Somaiya University", href: "https://www.somaiya.edu/en/view-announcement/1018/" },
                ].map((feature, i) => (
                  <a
                    key={i}
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-5 py-2 border border-white/15 rounded-full text-xs font-medium text-gray-300 tracking-wide hover:bg-[#0C8346]/15 hover:border-[#0C8346]/40 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                  >
                    {feature.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/*  TEAM SQUAD                                */}
      {/* ══════════════════════════════════════════ */}
      <div ref={teamReveal.ref} className="py-20 mb-16">
        <div
          className="mb-16"
          style={{
            opacity: teamReveal.visible ? 1 : 0,
            transform: teamReveal.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div className="h-px bg-[#0C8346]" style={{ width: teamReveal.visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
            Core Team
            <div className="h-px bg-[#0C8346]" style={{ width: teamReveal.visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight mb-4">
            Say Hello to Our{" "}
            <span style={{ background: "linear-gradient(135deg, #0C8346, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Squad
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-xl">
            The dreamers, the builders, and the relentless optimists behind W.I.S.E.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group h-[580px] w-full bg-white/4 backdrop-blur-sm rounded-[28px] overflow-hidden border border-white/6 hover:border-[#0C8346]/30 transition-colors duration-300"
              style={{
                opacity: teamReveal.visible ? 1 : 0,
                transform: teamReveal.visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${0.1 + idx * 0.12}s, transform 0.6s ease ${0.1 + idx * 0.12}s`,
              }}
            >
              {/* Background text */}
              <div className="absolute top-8 w-full z-10 leading-none select-none px-6 transition-transform duration-700 ease-out group-hover:-translate-y-4">
                <h3 className="font-bold text-[#0C8346] tracking-tighter mix-blend-screen text-left text-[48px] -ml-4">{member.bgText}</h3>
                <div className="text-white uppercase text-right -mr-2 font-light tracking-[-0.01em]" style={{ fontSize: "18px" }}>{member.smallText}</div>
              </div>

              {/* Green bg shape (active) */}
              <div
                className={["absolute bottom-0 left-0 right-0 h-[80%] bg-[#0C8346] rounded-t-[100%] transition-all duration-700 ease-out z-[15]", activeMemberIndex === idx ? "translate-y-0 scale-100" : "translate-y-full scale-0"].join(" ")}
                style={{ transformOrigin: "bottom" }}
              />

              {/* Photo */}
              <div className="absolute inset-0 z-20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={["object-cover object-bottom transition-all duration-700 ease-out", activeMemberIndex === idx ? "grayscale-0 translate-y-6" : "grayscale contrast-125 group-hover:translate-y-12"].join(" ")}
                />
              </div>

              {/* Social actions */}
              <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 z-40 w-full flex justify-center">
                {activeMemberIndex === idx ? (
                  <div className="flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                    <button onClick={() => setActiveMemberIndex(null)} className="h-10 w-10 bg-white rounded-[14px] flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-[#050505]"><X size={18} /></button>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-white rounded-[14px] flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-[#050505]"><LinkedinIcon size={18} /></a>
                    <a href={member.mail} className="h-10 w-10 bg-white rounded-[14px] flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-[#050505]"><Mail size={18} /></a>
                  </div>
                ) : (
                  <button onClick={() => setActiveMemberIndex(idx)} className="h-10 w-10 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#0C8346] transition-all duration-200 shadow-lg group/btn">
                    <Plus className="text-[#050505] group-hover/btn:text-white w-5 h-5 transition-colors duration-200" />
                  </button>
                )}
              </div>

              {/* Name card */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0e0e0e] rounded-b-[28px] rounded-t-[18px] z-30 border-t border-white/5 px-5 py-4">
                <h4 className="text-white text-base font-bold leading-tight">{member.name}</h4>
                <p className="text-[#0C8346] text-[11px] font-semibold uppercase tracking-widest mt-0.5">{member.role}</p>
                <p className="text-gray-500 text-xs font-light leading-snug mt-1.5 line-clamp-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/*  VALUES — INTERACTIVE                      */}
      {/* ══════════════════════════════════════════ */}
      <div ref={valuesReveal.ref} className="py-24 mb-16">

        {/* Header */}
        <div
          className="mb-12"
          style={{
            opacity: valuesReveal.visible ? 1 : 0,
            transform: valuesReveal.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div className="h-px bg-[#0C8346]" style={{ width: valuesReveal.visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
            What We Stand For
            <div className="h-px bg-[#0C8346]" style={{ width: valuesReveal.visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }} />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
              Our{" "}
              <span style={{ background: "linear-gradient(135deg, #0C8346, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Values
              </span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Click any value to explore what it means in practice at Fostride.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {VALUES.map((v, i) => (
            <ValueCard
              key={v.n}
              value={v}
              active={activeValueIndex === i}
              visible={valuesReveal.visible}
              delay={0.08 + i * 0.06}
              onClick={() => setActiveValueIndex(activeValueIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Selected value detail panel */}
        <div
          className="mt-6 overflow-hidden transition-all duration-500"
          style={{
            maxHeight: activeValueIndex !== null ? "200px" : "0px",
            opacity: activeValueIndex !== null ? 1 : 0,
          }}
        >
          {activeValueIndex !== null && (
            <div className="relative rounded-2xl border border-[#0C8346]/30 bg-[#0C8346]/6 px-6 py-5 flex gap-5 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#0C8346] flex-shrink-0 flex items-center justify-center shadow-[0_0_16px_rgba(12,131,70,0.4)]">
                {(() => { const Icon = VALUES[activeValueIndex].icon; return <Icon className="text-white w-5 h-5" /> })()}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-white font-bold text-lg">{VALUES[activeValueIndex].title}</h3>
                  <span className="text-[10px] text-[#0C8346] font-bold uppercase tracking-widest bg-[#0C8346]/15 px-2 py-0.5 rounded-full">
                    {VALUES[activeValueIndex].tagline}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">{VALUES[activeValueIndex].desc}</p>
              </div>
              <button
                onClick={() => setActiveValueIndex(null)}
                className="ml-auto flex-shrink-0 w-7 h-7 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════ */}
      {/*  FAQ                                       */}
      {/* ══════════════════════════════════════════ */}
      <div ref={faqReveal.ref} className="py-20 mb-20">
        <div
          className="text-center mb-14"
          style={{
            opacity: faqReveal.visible ? 1 : 0,
            transform: faqReveal.visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div className="h-px bg-[#0C8346]" style={{ width: faqReveal.visible ? "32px" : "0px", transition: "width 0.8s ease" }} />
            FAQ
            <div className="h-px bg-[#0C8346]" style={{ width: faqReveal.visible ? "32px" : "0px", transition: "width 0.8s ease" }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
            Got Questions?<br />
            <span style={{ background: "linear-gradient(135deg, #0C8346, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              We've Got Answers.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-2">
          {[
            { q: "What is Fostride?", a: "Fostride is a sustainability-focused startup that leverages AI to revolutionize waste management. Our flagship product, W.I.S.E., classifies and sorts waste in real time using computer vision, turning every disposed item into structured data." },
            { q: "How does W.I.S.E. work?", a: "W.I.S.E. (Waste Intelligence & Sorting Engine) uses computer vision to identify waste items as they're disposed into R3Bin. It classifies each item, routes it to the correct compartment, logs the data, and sends it to your dashboard — all in milliseconds." },
            { q: "What phase is Fostride currently in?", a: "We've completed two live pilots — Brookfield (Powai, Dec 2024) and KJ Somaiya College (Jan 2025) — and are currently achieving ~80% sorting accuracy. We're actively scaling to more deployments to hit our 95%+ target." },
            { q: "Who can deploy Fostride?", a: "Anyone with waste. Campuses, corporate offices, airports, residential complexes, and municipalities are our primary targets. If you generate waste at scale and want actionable data, W.I.S.E. is for you." },
            { q: "How can I get involved with Fostride?", a: "You can partner with us for a pilot deployment, invest in our mission, join our team, or simply reach out to explore how W.I.S.E. could work in your facility. Contact us at fostride@gmail.com." },
            { q: "What types of waste does W.I.S.E. sort?", a: "Currently plastic, paper, metal, organic waste, and e-waste. Our model is continuously retrained on new data from each deployment, so the categories expand as the dataset grows." },
            { q: "How does Fostride help the environment?", a: "By ensuring waste is correctly sorted at the source, W.I.S.E. increases recycling rates and reduces contamination — meaning more material actually gets recycled instead of ending up in landfill. Every deployment also generates carbon offset data." },
            { q: "Can I invest in Fostride?", a: "Yes — we welcome investors who believe in the future of intelligent waste infrastructure. Reach out at gavi@fostride.com for a conversation." },
          ].map((item, idx) => {
            const isExpanded = activeFaqIndex === idx
            return (
              <div
                key={idx}
                onClick={() => setActiveFaqIndex(isExpanded ? null : idx)}
                className={["group flex flex-col w-full border overflow-hidden transition-all duration-400 cursor-pointer", isExpanded ? "rounded-[22px] border-[#0C8346]/35 bg-[#0C8346]/6" : "rounded-[18px] border-white/8 bg-white/2 hover:border-[#0C8346]/20"].join(" ")}
                style={{
                  opacity: faqReveal.visible ? 1 : 0,
                  transform: faqReveal.visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${0.05 + idx * 0.04}s, transform 0.5s ease ${0.05 + idx * 0.04}s`,
                }}
              >
                <div className="flex items-center justify-between px-6 h-[56px] w-full">
                  <span className={["text-sm font-medium transition-colors duration-250", isExpanded ? "text-[#22c55e]" : "text-white group-hover:text-[#0C8346]"].join(" ")}>
                    {item.q}
                  </span>
                  <div className={["w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ml-4 transition-colors duration-250", isExpanded ? "bg-[#0C8346]" : "bg-white/8 group-hover:bg-[#0C8346]"].join(" ")}>
                    {isExpanded ? <X className="text-white w-3.5 h-3.5" /> : <Plus className="text-white w-3.5 h-3.5" />}
                  </div>
                </div>
                <div className={["px-6 transition-all duration-400 overflow-hidden", isExpanded ? "max-h-[200px] opacity-100 pb-5" : "max-h-0 opacity-0"].join(" ")}>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
