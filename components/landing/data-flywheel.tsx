"use client"

import { useEffect, useRef, useState } from "react"

const NODES = [
  { label: "Real-World", sub: "Waste Data" },
  { label: "W.I.S.E.", sub: "Learns & Trains" },
  { label: "Smarter", sub: "Sorting" },
  { label: "More", sub: "Deployments" },
  { label: "Proprietary", sub: "Data Moat" },
]

const STEPS = [
  {
    title: "Real-World Waste Data",
    desc: "Captured at the source through R3Bin — structured, labelled, and timestamped.",
  },
  {
    title: "W.I.S.E. Learns & Trains",
    desc: "Models continuously improve using real-world datasets — increasing accuracy over time.",
  },
  {
    title: "Smarter Sorting",
    desc: "Better models drive higher segregation accuracy and cleaner material streams.",
  },
  {
    title: "More Deployments",
    desc: "Improved performance drives adoption across campuses, enterprises, and cities.",
  },
  {
    title: "Proprietary Data Moat",
    desc: "Each deployment adds unique data — building a dataset competitors cannot replicate.",
  },
]

const LOOP = ["More data", "Better models", "Higher accuracy", "More deployments"]

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

export function DataFlywheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { ref: sectionRef, visible } = useReveal()
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!visible) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let startTime: number | null = null
    const N = NODES.length

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    setSize()
    window.addEventListener("resize", setSize)

    const particles = Array.from({ length: 55 }, (_, idx) => ({
      nodeIdx: idx % N,
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.003,
      size: 1.5 + Math.random() * 2,
      alpha: 0.35 + Math.random() * 0.45,
    }))

    const draw = (ts: number) => {
      if (!startTime) startTime = ts
      const sec = (ts - startTime) / 1000

      const rect = canvas.getBoundingClientRect()
      const W = rect.width
      const H = rect.height
      const cx = W / 2
      const cy = H / 2
      // Slightly larger R to fill the dedicated column
      const R = Math.min(W * 0.38, H * 0.34)
      const rot = sec * 0.10

      ctx.clearRect(0, 0, W, H)

      // Moat rings — expand slowly
      const moat = Math.min(sec / 90, 1)
      for (let ring = 0; ring < 5; ring++) {
        const rr = R + 30 + ring * 18 + moat * ring * 16
        ctx.beginPath()
        ctx.arc(cx, cy, rr, 0, Math.PI * 2)
        ctx.setLineDash(ring % 2 === 0 ? [] : [5, 12])
        ctx.strokeStyle = `rgba(12,131,70,${0.08 - ring * 0.012})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.setLineDash([])

      // Node positions (rotate over time)
      const positions = NODES.map((_, i) => {
        const a = (i / N) * Math.PI * 2 - Math.PI / 2 + rot
        return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R }
      })

      // Spokes from center
      positions.forEach(({ x, y }) => {
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x, y)
        ctx.strokeStyle = "rgba(12,131,70,0.06)"
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Curved directional arrows between nodes
      for (let i = 0; i < N; i++) {
        const from = positions[i]
        const to = positions[(i + 1) % N]
        const mx = (from.x + to.x) / 2
        const my = (from.y + to.y) / 2
        const dx = to.x - from.x
        const dy = to.y - from.y
        const len = Math.hypot(dx, dy) || 1
        const cpx = mx - (dy / len) * R * 0.28
        const cpy = my + (dx / len) * R * 0.28
        const pulse = 0.22 + 0.2 * Math.sin(sec * 1.4 + i * 1.26)

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.quadraticCurveTo(cpx, cpy, to.x, to.y)
        ctx.strokeStyle = `rgba(12,131,70,${pulse})`
        ctx.lineWidth = 1.8
        ctx.stroke()

        // Arrowhead
        const t = 0.82
        const ax = (1 - t) ** 2 * from.x + 2 * (1 - t) * t * cpx + t * t * to.x
        const ay = (1 - t) ** 2 * from.y + 2 * (1 - t) * t * cpy + t * t * to.y
        const ha = Math.atan2(to.y - ay, to.x - ax)
        const hl = 8
        ctx.beginPath()
        ctx.moveTo(to.x, to.y)
        ctx.lineTo(to.x - hl * Math.cos(ha - 0.42), to.y - hl * Math.sin(ha - 0.42))
        ctx.moveTo(to.x, to.y)
        ctx.lineTo(to.x - hl * Math.cos(ha + 0.42), to.y - hl * Math.sin(ha + 0.42))
        ctx.strokeStyle = `rgba(34,197,94,${pulse + 0.12})`
        ctx.lineWidth = 1.8
        ctx.stroke()
      }

      // Node glow + circle + pulsing dot + label
      positions.forEach(({ x, y }, i) => {
        const pulse = 0.28 + 0.18 * Math.sin(sec * 2.2 + i * 1.26)

        // Glow halo
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 30)
        grd.addColorStop(0, `rgba(12,131,70,${pulse})`)
        grd.addColorStop(1, "rgba(12,131,70,0)")
        ctx.beginPath()
        ctx.arc(x, y, 30, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Circle border
        ctx.beginPath()
        ctx.arc(x, y, 14, 0, Math.PI * 2)
        ctx.fillStyle = "#050505"
        ctx.fill()
        ctx.strokeStyle = "#0C8346"
        ctx.lineWidth = 1.8
        ctx.stroke()

        // Inner pulsing dot
        const pr = 5 + 2.5 * Math.sin(sec * 2.8 + i)
        ctx.beginPath()
        ctx.arc(x, y, pr, 0, Math.PI * 2)
        ctx.fillStyle = "#0C8346"
        ctx.fill()

        // Labels — computed at current rotated angle, text itself stays upright
        const labelAngle = (i / N) * Math.PI * 2 - Math.PI / 2 + rot
        const labelR = R + 50
        const lx = cx + Math.cos(labelAngle) * labelR
        const ly = cy + Math.sin(labelAngle) * labelR

        ctx.textAlign = "center"
        ctx.font = "bold 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        ctx.fillStyle = "rgba(255,255,255,0.9)"
        ctx.fillText(NODES[i].label, lx, ly)
        ctx.font = "10px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        ctx.fillStyle = "rgba(12,131,70,0.9)"
        ctx.fillText(NODES[i].sub, lx, ly + 14)
      })

      // Particles flowing from each node toward center
      particles.forEach((p) => {
        p.t += p.speed
        if (p.t > 1) p.t = 0
        const { x: nx, y: ny } = positions[p.nodeIdx]
        const px = nx + (cx - nx) * p.t
        const py = ny + (cy - ny) * p.t
        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(12,131,70,${p.alpha * (1 - p.t * 0.5)})`
        ctx.fill()
      })

      // Center hub
      const hubGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50)
      hubGrd.addColorStop(0, "rgba(12,131,70,0.6)")
      hubGrd.addColorStop(0.5, "rgba(12,131,70,0.22)")
      hubGrd.addColorStop(1, "rgba(12,131,70,0)")
      ctx.beginPath()
      ctx.arc(cx, cy, 50, 0, Math.PI * 2)
      ctx.fillStyle = hubGrd
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, 32, 0, Math.PI * 2)
      ctx.fillStyle = "#0C8346"
      ctx.fill()

      ctx.textAlign = "center"
      ctx.font = "bold 11px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      ctx.fillStyle = "white"
      ctx.fillText("W.I.S.E.", cx, cy - 2)
      ctx.font = "8.5px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      ctx.fillStyle = "rgba(255,255,255,0.65)"
      ctx.fillText("AI CORE", cx, cy + 11)

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", setSize)
    }
  }, [visible])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0C8346]/5 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT — Text + vertical steps ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
            }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              <div
                className="h-px bg-[#0C8346]"
                style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.3s" }}
              />
              Competitive Advantage
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight mb-4">
              The Data{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0C8346, #22c55e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Flywheel
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Every item processed by W.I.S.E. makes the system smarter. A self-reinforcing intelligence loop that compounds with every deployment.
            </p>

            {/* Vertical steps with connecting line */}
            <div className="relative pl-1">
              {/* Growing vertical line */}
              <div
                className="absolute left-[9px] top-3 w-px pointer-events-none"
                style={{
                  height: visible ? "calc(100% - 32px)" : "0%",
                  background: "linear-gradient(to bottom, #0C8346 60%, rgba(12,131,70,0.05) 100%)",
                  transition: "height 1.6s ease 0.6s",
                }}
              />

              {STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="relative flex gap-5 mb-8 last:mb-0"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-18px)",
                    transition: `opacity 0.6s ease ${0.45 + i * 0.13}s, transform 0.6s ease ${0.45 + i * 0.13}s`,
                  }}
                >
                  {/* Step dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div
                      className="w-[18px] h-[18px] rounded-full bg-[#0C8346] flex items-center justify-center"
                      style={{ boxShadow: "0 0 8px rgba(12,131,70,0.5)" }}
                    >
                      <div className="w-[7px] h-[7px] rounded-full bg-white/85" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="group cursor-default">
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#0C8346] transition-colors duration-200">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Loop outcome */}
            <div
              className="mt-8 pt-6 border-t border-white/8"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.8s ease 1.4s",
              }}
            >
              <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-2 font-medium">
                Loop Outcome
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {LOOP.map((item, i) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="text-sm text-[#0C8346] font-semibold">{item}</span>
                    {i < LOOP.length - 1 && (
                      <span className="text-gray-600 text-sm">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Canvas ── */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity 1s ease 0.35s, transform 1s ease 0.35s",
            }}
          >
            {/* Subtle border/card wrap around the canvas */}
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#080808]/60">
              <canvas
                ref={canvasRef}
                className="w-full block"
                style={{ height: "580px" }}
              />
              {/* Bottom "callout" inside the card */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-[#050505]/90 border border-[#0C8346]/20 rounded-full px-4 py-1.5 text-xs text-[#0C8346] font-medium backdrop-blur-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0C8346]"
                    style={{ animation: "dotBlink 1.6s ease-in-out infinite" }}
                  />
                  Proprietary dataset competitors cannot buy
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
