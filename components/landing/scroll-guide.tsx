"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const SECTIONS = [
  { id: "section-hero",     line1: "Hi, I'm W.I.S.E.!",                 line2: "Scroll — I'll take you on a tour." },
  { id: "section-impact",   line1: "10,000+ items sorted.",              line2: "Every single one made me smarter." },
  { id: "section-how",      line1: "Drop it in. I handle the rest.",     line2: "Sort → Track → Route. Zero effort." },
  { id: "section-flywheel", line1: "More data = better AI.",             line2: "This loop never stops compounding." },
  { id: "section-pilots",   line1: "Brookfield → KJ Somaiya → 95%+.",   line2: "Real pilots. Real accuracy gains." },
  { id: "section-sectors",  line1: "Campuses, offices, airports —",      line2: "I work wherever waste happens." },
  { id: "section-cta",      line1: "Ready to make waste intelligent?",   line2: "Let's build something great." },
]

// Viewport % positions at each section — zig-zag path across screen
const WAYPOINTS = [
  { x: 80, y: 18 },
  { x:  8, y: 40 },
  { x: 86, y: 50 },
  { x:  6, y: 60 },
  { x: 82, y: 68 },
  { x:  8, y: 76 },
  { x: 75, y: 84 },
]

export function ScrollGuide() {
  const [show, setShow]               = useState(false)
  const [activeIdx, setActiveIdx]     = useState(0)
  const [bubbleReady, setBubbleReady] = useState(false)
  const [bubbleOpen, setBubbleOpen]   = useState(true)
  const [scrollDir, setScrollDir]     = useState<"up" | "down">("down")
  const lastScrollY                   = useRef(0)
  const observersRef                  = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true)
      setTimeout(() => setBubbleReady(true), 400)
    }, 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrollDir(y > lastScrollY.current ? "down" : "up")
      lastScrollY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const setup = () => {
      observersRef.current.forEach((o) => o.disconnect())
      observersRef.current = []
      SECTIONS.forEach(({ id }, idx) => {
        const el = document.getElementById(id)
        if (!el) return
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setBubbleReady(false)
              setActiveIdx(idx)
              setTimeout(() => { setBubbleReady(true); setBubbleOpen(true) }, 1000)
            }
          },
          { threshold: 0.25, rootMargin: "-10% 0px -10% 0px" }
        )
        observer.observe(el)
        observersRef.current.push(observer)
      })
    }
    const t = setTimeout(setup, 700)
    return () => { clearTimeout(t); observersRef.current.forEach((o) => o.disconnect()) }
  }, [])

  const wp      = WAYPOINTS[activeIdx]
  const isRight = wp.x > 50
  const SIZE    = 70

  if (!show) return null

  return (
    <div
      className="hidden md:block fixed z-[200] select-none"
      style={{
        left: `${wp.x}%`,
        top:  `${wp.y}%`,
        transform: "translate(-50%, -50%)",
        // Mismatched X/Y timings create curved arc path
        transition: [
          "left  1.15s cubic-bezier(0.34, 1.18, 0.64, 1) 0s",
          "top   1.40s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.08s",
          "opacity 0.7s ease",
        ].join(", "),
        opacity: show ? 1 : 0,
      }}
    >
      {/* Speech bubble */}
      {bubbleOpen && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[200px] ${isRight ? "right-[calc(100%+16px)]" : "left-[calc(100%+16px)]"}`}
          style={{
            opacity:   bubbleReady ? 1 : 0,
            transform: bubbleReady
              ? "scale(1) translateY(0)"
              : `scale(0.88) translateY(5px) translateX(${isRight ? "10px" : "-10px"})`,
            transition: "opacity 0.4s ease, transform 0.4s ease",
            pointerEvents: "auto",
          }}
        >
          <div className={[
            "relative bg-[#0a0806]/95 border border-[#0C8346]/40 rounded-2xl px-4 py-3 backdrop-blur-md shadow-[0_4px_30px_rgba(12,131,70,0.22)]",
            isRight ? "rounded-tr-none" : "rounded-tl-none",
          ].join(" ")}>
            <p className="text-xs font-semibold text-[#22c55e] leading-snug mb-0.5">{SECTIONS[activeIdx].line1}</p>
            <p className="text-xs text-white/65 leading-snug">{SECTIONS[activeIdx].line2}</p>
            <div className="flex gap-1 mt-2.5">
              {SECTIONS.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === activeIdx ? "14px" : "4px", height: "4px", background: i === activeIdx ? "#0C8346" : "rgba(255,255,255,0.14)" }}
                />
              ))}
            </div>
            {/* Bubble tail */}
            <div className={`absolute top-5 ${isRight ? "-right-[7px]" : "-left-[7px]"} w-3.5 h-3.5`}>
              <div
                className="w-full h-full rotate-45 border-[#0C8346]/40 bg-[#0a0806]"
                style={{ borderWidth: isRight ? "0 1px 1px 0" : "1px 0 0 1px", borderStyle: "solid" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Robot avatar */}
      <button
        className="relative focus:outline-none group"
        style={{ width: SIZE, height: SIZE, pointerEvents: "auto" }}
        onClick={() => setBubbleOpen((v) => !v)}
        aria-label="Toggle W.I.S.E. guide"
      >
        <div className="absolute inset-[-7px] rounded-full border border-[#0C8346]/30 pointer-events-none" style={{ animation: "glowPulse 2.5s ease-in-out infinite" }} />
        <div className="absolute inset-[-4px] rounded-full bg-[#0C8346]/15 blur-xl pointer-events-none" style={{ animation: "glowPulse 2.5s ease-in-out infinite 0.75s" }} />
        <div className="relative w-full h-full rounded-full bg-[#080604]/90 border border-[#0C8346]/55 overflow-hidden shadow-[0_0_22px_rgba(12,131,70,0.4)] group-hover:border-[#0C8346] group-hover:shadow-[0_0_36px_rgba(12,131,70,0.65)] transition-all duration-200">
          <div style={{ width: "100%", height: "100%", transform: scrollDir === "down" ? "rotate(-6deg)" : "rotate(6deg)", transition: "transform 0.55s ease" }}>
            <div style={{ width: "100%", height: "100%", animation: "floatY 3.5s ease-in-out infinite" }}>
              <Image src="/images/wise-robot.png" alt="W.I.S.E." fill className="object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 text-[8px] font-bold text-[#0C8346] uppercase tracking-widest whitespace-nowrap">
          W.I.S.E.
        </div>
      </button>
    </div>
  )
}
