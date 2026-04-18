"use client"

import dynamic from "next/dynamic"

const DataFlywheelCanvas = dynamic(
  () => import("./data-flywheel").then((m) => m.DataFlywheel),
  { ssr: false, loading: () => <div className="w-full py-20 min-h-[30vh]" /> }
)

export function DataFlywheelClient() {
  return <DataFlywheelCanvas />
}
