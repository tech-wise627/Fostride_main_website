"use client"

import { useEffect, useRef, useState } from "react"

export function R3binVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [revealed, setRevealed] = useState(false)

  /* Reveal on scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRevealed(true) },
      { threshold: 0.15 }
    )
    if (wrapRef.current) obs.observe(wrapRef.current)
    return () => obs.disconnect()
  }, [])

  /* Auto-play when visible */
  useEffect(() => {
    if (!revealed || !videoRef.current) return
    const vid = videoRef.current
    vid.play().then(() => setPlaying(true)).catch(() => {})
  }, [revealed])

  const toggle = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) { vid.play(); setPlaying(true) }
    else { vid.pause(); setPlaying(false) }
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(12,131,70,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto">

        {/* Label + headline */}
        <div
          className="text-center mb-14"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#1A6B3C" }}>
            <span className="w-5 h-px bg-current" />
            See It In Action
            <span className="w-5 h-px bg-current" />
          </span>
          <h2
            className="text-[clamp(28px,4vw,52px)] font-extrabold leading-tight tracking-tight font-[family-name:var(--font-unbounded)]"
            style={{ color: "#EDE8E0" }}
          >
            R3Bin at work.
          </h2>
        </div>

        {/* Video wrapper */}
        <div
          ref={wrapRef}
          onClick={toggle}
          className="relative cursor-pointer group"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "scale(1) translateY(0)" : "scale(0.96) translateY(32px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          {/* Glow frame */}
          <div className="absolute -inset-px rounded-2xl pointer-events-none z-10"
            style={{
              background: "linear-gradient(135deg, rgba(26,107,60,0.4) 0%, transparent 50%, rgba(139,100,50,0.2) 100%)",
              borderRadius: "inherit",
            }} />

          {/* Corner accents */}
          {[
            "top-0 left-0 border-t border-l",
            "top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l",
            "bottom-0 right-0 border-b border-r",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-6 h-6 ${cls} z-20 pointer-events-none`}
              style={{ borderColor: "rgba(26,107,60,0.6)", borderRadius: 2 }} />
          ))}

          {/* Video */}
          <video
            ref={videoRef}
            src="/videos/myvideo3.mp4"
            loop
            muted
            playsInline
            className="w-full rounded-2xl"
            style={{
              display: "block",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(26,107,60,0.12)",
            }}
          />

          {/* Play/pause overlay — shows on hover when playing, always when paused */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-2xl transition-opacity duration-300 z-10"
            style={{
              background: "rgba(0,0,0,0.35)",
              opacity: playing ? 0 : 1,
            }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm"
              style={{ background: "rgba(26,107,60,0.85)", boxShadow: "0 0 40px rgba(26,107,60,0.4)" }}>
              {/* Play icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </div>
          </div>

          {/* Hover overlay when playing */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{ background: "rgba(0,0,0,0.2)", display: playing ? undefined : "none" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center border border-white/15 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.5)" }}>
              {/* Pause icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
                <rect x="3" y="2" width="4" height="14" rx="1" />
                <rect x="11" y="2" width="4" height="14" rx="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p
          className="text-center mt-6 text-[12px] tracking-[0.12em] uppercase"
          style={{
            color: "#3A3830",
            opacity: revealed ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          W.I.S.E. classifying waste in real time — live deployment footage
        </p>
      </div>
    </section>
  )
}