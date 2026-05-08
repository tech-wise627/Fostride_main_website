"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  value: number
  suffix?: string
  prefix?: string
  decimalPlaces?: number
  duration?: number
  /** If true, formats the integer with commas (e.g. 65000 → "65,000") */
  commaSeparated?: boolean
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  decimalPlaces = 0,
  duration = 1800,
  commaSeparated = false,
}: Props) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  /* Trigger when element enters viewport */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  /* Count up once triggered */
  useEffect(() => {
    if (!started) return
    let raf: number
    let start: number | null = null

    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(2, -10 * progress) // easeOutExpo
      const current = value * ease
      setDisplay(current)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])

  const formatted = commaSeparated
    ? Math.round(display).toLocaleString("en-IN")
    : display.toFixed(decimalPlaces)

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}