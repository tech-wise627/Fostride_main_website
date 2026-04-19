"use client"

// Two-row infinite marquee — sits between hero and impact stats
// Row 1: waste action words in earth/brown tones, scrolls left
// Row 2: tech/AI words in green, scrolls right (reverse)

const ROW1 = ["SORT", "CLASSIFY", "TRACK", "ROUTE", "RECYCLE", "UPCYCLE", "COMPOST", "RECOVER", "REUSE", "REDUCE"]
const ROW2 = ["W.I.S.E.", "AI VISION", "EDGE AI", "IOT SENSORS", "LIVE DATA", "ESG READY", "ZERO WASTE", "CIRCULAR", "CARBON OFFSET", "REAL TIME"]

function MarqueeRow({ words, reverse, green }: { words: string[]; reverse?: boolean; green?: boolean }) {
  // Duplicate for seamless loop — 2 copies so -50% translate = exactly one set
  const doubled = [...words, ...words]

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-0 w-max"
        style={{
          animation: `marquee ${reverse ? "reverse" : "normal"} 30s linear infinite`,
        }}
      >
        {doubled.map((word, i) => (
          <div key={i} className="flex items-center gap-0 flex-shrink-0">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.25em] px-6 py-3 whitespace-nowrap"
              style={{ color: green ? "rgba(12,131,70,0.7)" : "rgba(160,120,80,0.55)" }}
            >
              {word}
            </span>
            <span
              className="text-[8px]"
              style={{ color: green ? "rgba(12,131,70,0.3)" : "rgba(124,82,48,0.3)" }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MarqueeStrip() {
  return (
    <div
      className="w-full border-y py-0 overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(10,8,5,0.6)" }}
    >
      {/* Row 1 — earth brown, left */}
      <div className="py-2 border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
        <MarqueeRow words={ROW1} />
      </div>
      {/* Row 2 — green, right */}
      <div className="py-2">
        <MarqueeRow words={ROW2} reverse green />
      </div>
    </div>
  )
}
