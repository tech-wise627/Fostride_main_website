"use client"

import { useEffect, useRef, useState } from "react"

const NODES = [
  { label: "Real-World", sub: "Waste Data" },
  { label: "W.I.S.E.", sub: "Trains" },
  { label: "Smarter", sub: "Sorting" },
  { label: "More", sub: "Pilots" },
  { label: "Proprietary", sub: "Moat Grows" },
]

function useReveal(threshold = 0.15) {
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
  const { ref: sectionRef, visible } = useReveal(0.1)
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

    // Particles flowing from each node toward center
    const particles = Array.from({ length: 50 }, (_, i) => ({
      nodeIdx: i % N,
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.003,
      size: 1.5 + Math.random() * 1.5,
      alpha: 0.3 + Math.random() * 0.5,
    }))

    const draw = (ts: number) => {
      if (!startTime) startTime = ts
      const sec = (ts - startTime) / 1000

      const rect = canvas.getBoundingClientRect()
      const W = rect.width
      const H = rect.height
      const cx = W / 2
      const cy = H / 2
      const R = Math.min(W, H) * 0.30
      const rot = sec * 0.10 // ~1 full rotation per 63s

      ctx.clearRect(0, 0, W, H)

      // ── Compounding moat rings ──
      // Each ring slowly expands over the first 90s to show the "moat" growing
      const moat = Math.min(sec / 90, 1)
      for (let ring = 0; ring < 5; ring++) {
        const rr = R + 35 + ring * 18 + moat * ring * 14
        ctx.beginPath()
        ctx.arc(cx, cy, rr, 0, Math.PI * 2)
        ctx.setLineDash(ring % 2 === 0 ? [] : [5, 10])
        ctx.strokeStyle = `rgba(12,131,70,${0.07 - ring * 0.01})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
      ctx.setLineDash([])

      // ── Compute node positions ──
      const positions = NODES.map((_, i) => {
        const a = (i / N) * Math.PI * 2 - Math.PI / 2 + rot
        return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R }
      })

      // ── Spokes (dim, from center) ──
      positions.forEach(({ x, y }) => {
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x, y)
        ctx.strokeStyle = "rgba(12,131,70,0.06)"
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // ── Curved directional arrows between consecutive nodes ──
      for (let i = 0; i < N; i++) {
        const from = positions[i]
        const to = positions[(i + 1) % N]

        // Control point: midpoint nudged inward (toward center)
        const mx = (from.x + to.x) / 2
        const my = (from.y + to.y) / 2
        const dx = to.x - from.x
        const dy = to.y - from.y
        const len = Math.hypot(dx, dy) || 1
        const cpx = mx - (dy / len) * R * 0.28
        const cpy = my + (dx / len) * R * 0.28

        const pulse = 0.25 + 0.18 * Math.sin(sec * 1.4 + i * 1.26)

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.quadraticCurveTo(cpx, cpy, to.x, to.y)
        ctx.strokeStyle = `rgba(12,131,70,${pulse})`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Arrow head
        const t = 0.82
        const ax = (1 - t) ** 2 * from.x + 2 * (1 - t) * t * cpx + t * t * to.x
        const ay = (1 - t) ** 2 * from.y + 2 * (1 - t) * t * cpy + t * t * to.y
        const ha = Math.atan2(to.y - ay, to.x - ax)
        const hl = 7
        ctx.beginPath()
        ctx.moveTo(to.x, to.y)
        ctx.lineTo(to.x - hl * Math.cos(ha - 0.42), to.y - hl * Math.sin(ha - 0.42))
        ctx.moveTo(to.x, to.y)
        ctx.lineTo(to.x - hl * Math.cos(ha + 0.42), to.y - hl * Math.sin(ha + 0.42))
        ctx.strokeStyle = `rgba(34,197,94,${pulse + 0.1})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // ── Node glows + circles + labels ──
      positions.forEach(({ x, y }, i) => {
        const pulse = 0.3 + 0.15 * Math.sin(sec * 2.2 + i * 1.26)

        // Glow halo
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 24)
        grd.addColorStop(0, `rgba(12,131,70,${pulse})`)
        grd.addColorStop(1, "rgba(12,131,70,0)")
        ctx.beginPath()
        ctx.arc(x, y, 24, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Outer ring
        ctx.beginPath()
        ctx.arc(x, y, 12, 0, Math.PI * 2)
        ctx.fillStyle = "#050505"
        ctx.fill()
        ctx.strokeStyle = "#0C8346"
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Inner pulsing dot
        const pr = 4 + 2 * Math.sin(sec * 2.8 + i)
        ctx.beginPath()
        ctx.arc(x, y, pr, 0, Math.PI * 2)
        ctx.fillStyle = "#0C8346"
        ctx.fill()

        // Labels — positioned further out from node (not rotated)
        const labelAngle = (i / N) * Math.PI * 2 - Math.PI / 2 + rot
        const labelR = R + 40
        const lx = cx + Math.cos(labelAngle) * labelR
        const ly = cy + Math.sin(labelAngle) * labelR

        ctx.textAlign = "center"
        ctx.font = "bold 11px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        ctx.fillStyle = "rgba(255,255,255,0.88)"
        ctx.fillText(NODES[i].label, lx, ly - 1)
        ctx.font = "9px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        ctx.fillStyle = "rgba(12,131,70,0.85)"
        ctx.fillText(NODES[i].sub, lx, ly + 11)
      })

      // ── Particles flowing from nodes toward center ──
      particles.forEach((p) => {
        p.t += p.speed
        if (p.t > 1) p.t = 0
        const { x: nx, y: ny } = positions[p.nodeIdx]
        const px = nx + (cx - nx) * p.t
        const py = ny + (cy - ny) * p.t
        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(12,131,70,${p.alpha * (1 - p.t * 0.6)})`
        ctx.fill()
      })

      // ── Center hub ──
      const hubGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 44)
      hubGrd.addColorStop(0, "rgba(12,131,70,0.55)")
      hubGrd.addColorStop(0.55, "rgba(12,131,70,0.18)")
      hubGrd.addColorStop(1, "rgba(12,131,70,0)")
      ctx.beginPath()
      ctx.arc(cx, cy, 44, 0, Math.PI * 2)
      ctx.fillStyle = hubGrd
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, 26, 0, Math.PI * 2)
      ctx.fillStyle = "#0C8346"
      ctx.fill()

      ctx.textAlign = "center"
      ctx.font = "bold 9.5px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      ctx.fillStyle = "white"
      ctx.fillText("W.I.S.E.", cx, cy - 1)
      ctx.font = "7.5px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      ctx.fillStyle = "rgba(255,255,255,0.65)"
      ctx.fillText("AI CORE", cx, cy + 10)

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
      {/* Ambient glow behind canvas */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0C8346]/5 blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#0C8346] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
            <div
              className="h-px bg-[#0C8346]"
              style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }}
            />
            Competitive Advantage
            <div
              className="h-px bg-[#0C8346]"
              style={{ width: visible ? "32px" : "0px", transition: "width 0.8s ease 0.2s" }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-unbounded)] text-white leading-tight">
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
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Every item W.I.S.E. sorts makes it smarter. A self-reinforcing data moat that compounds with every pilot — building a lead no competitor can easily replicate.
          </p>
        </div>

        {/* Canvas */}
        <div
          className="relative max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.4s",
          }}
        >
          <canvas
            ref={canvasRef}
            className="w-full block"
            style={{ height: "460px" }}
          />
        </div>

        {/* Callout pill */}
        <div
          className="mt-6 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.8s",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-[#0C8346]/10 border border-[#0C8346]/25 rounded-full px-5 py-2 text-sm text-[#0C8346] font-medium">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#0C8346]"
              style={{ animation: "dotBlink 1.6s ease-in-out infinite" }}
            />
            Proprietary dataset competitors cannot buy — only build over years
          </div>
        </div>
      </div>
    </section>
  )
}
