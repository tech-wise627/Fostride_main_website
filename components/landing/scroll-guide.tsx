"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

const SECTIONS = [
  {
    id: "section-hero",
    line1: "Hi, I'm W.I.S.E.",
    line2: "Scroll down — I'll walk you through everything.",
  },
  {
    id: "section-impact",
    line1: "10,000+ items sorted.",
    line2: "Every single one made me smarter.",
  },
  {
    id: "section-how",
    line1: "Drop it in. I handle the rest.",
    line2: "Sort → Track → Route. Zero effort.",
  },
  {
    id: "section-flywheel",
    line1: "More data = better AI.",
    line2: "This loop never stops compounding.",
  },
  {
    id: "section-pilots",
    line1: "Live at Brookfield & KJ Somaiya.",
    line2: "~80% accuracy and climbing.",
  },
  {
    id: "section-sectors",
    line1: "Campuses, offices, airports —",
    line2: "I work wherever waste happens.",
  },
  {
    id: "section-cta",
    line1: "Ready to make waste intelligent?",
    line2: "Let's build something great.",
  },
]

export function ScrollGuide() {
  const [show, setShow] = useState(false)
  const [bubbleOpen, setBubbleOpen] = useState(true)
  const [activeIdx, setActiveIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  // Track scroll direction for subtle robot lean
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down")
  const lastScrollY = useRef(0)
  const observersRef = useRef<IntersectionObserver[]>([])

  // Appear after page settles
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2200)
    return () => clearTimeout(t)
  }, [])

  // Section observers — set up after sections are in DOM
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
              setAnimating(true)
              setTimeout(() => {
                setActiveIdx(idx)
                setAnimating(false)
                setBubbleOpen(true)
              }, 240)
            }
          },
          { threshold: 0.25, rootMargin: "-10% 0px -10% 0px" }
        )
        observer.observe(el)
        observersRef.current.push(observer)
      })
    }

    // Wait a moment for dynamic sections to mount
    const t = setTimeout(setup, 800)
    return () => {
      clearTimeout(t)
      observersRef.current.forEach((o) => o.disconnect())
    }
  }, [])

  // Scroll direction detection
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrollDir(y > lastScrollY.current ? "down" : "up")
      lastScrollY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleBubble = useCallback(() => setBubbleOpen((v) => !v), [])

  const active = SECTIONS[activeIdx]

  if (!show) return null

  return (
    <div
      className="fixed bottom-6 right-5 z-[100] flex flex-col items-end gap-2 select-none"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* ── Speech bubble ── */}
      {bubbleOpen && (
        <div
          className="relative max-w-[210px] bg-[#0a0a0a]/95 border border-[#0C8346]/40 rounded-2xl rounded-br-none px-4 py-3 shadow-[0_4px_30px_rgba(12,131,70,0.2)] backdrop-blur-md"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(6px) scale(0.97)" : "translateY(0) scale(1)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          <p className="text-xs font-semibold text-[#22c55e] leading-snug mb-0.5">
            {active.line1}
          </p>
          <p className="text-xs text-white/70 leading-snug">
            {active.line2}
          </p>
          {/* Step dots */}
          <div className="flex gap-1 mt-2.5">
            {SECTIONS.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? "16px" : "5px",
                  height: "5px",
                  background: i === activeIdx ? "#0C8346" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
          {/* Tail */}
          <div className="absolute -bottom-[6px] right-0 w-3 h-3 overflow-hidden">
            <div
              className="w-3 h-3 rotate-45 border-r border-b border-[#0C8346]/40 bg-[#0a0a0a]"
              style={{ transform: "translate(-3px, -3px) rotate(45deg)" }}
            />
          </div>
        </div>
      )}

      {/* ── Robot avatar ── */}
      <button
        onClick={toggleBubble}
        className="relative w-[60px] h-[60px] rounded-full cursor-pointer focus:outline-none group"
        aria-label="Toggle W.I.S.E. guide"
      >
        {/* Outer pulsing ring */}
        <div
          className="absolute inset-[-4px] rounded-full border border-[#0C8346]/40 pointer-events-none"
          style={{ animation: "glowPulse 2.4s ease-in-out infinite" }}
        />
        {/* Inner glow */}
        <div
          className="absolute inset-0 rounded-full bg-[#0C8346]/15 blur-md pointer-events-none"
          style={{ animation: "glowPulse 2.4s ease-in-out infinite 0.6s" }}
        />
        {/* Avatar circle */}
        <div className="relative w-full h-full rounded-full bg-[#0a0a0a] border border-[#0C8346]/50 overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(12,131,70,0.3)] group-hover:border-[#0C8346] transition-all duration-200">
          <div
            className="w-full h-full"
            style={{
              transform: scrollDir === "down"
                ? "rotate(-4deg) scale(1.15)"
                : "rotate(4deg) scale(1.15)",
              transition: "transform 0.6s ease",
            }}
          >
            <Image
              src="/images/wise-robot.png"
              alt="W.I.S.E."
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* "WISE" label */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#0C8346] uppercase tracking-widest whitespace-nowrap">
          W.I.S.E.
        </div>
      </button>

      {/* Spacer for label */}
      <div className="h-3" />
    </div>
  )
}
