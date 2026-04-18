"use client"

import {
  Cpu,
  Camera,
  Gauge,
  Shield,
  Cloud,
  Zap,
} from "lucide-react"
import { Card } from "@/components/ui/card"

const techSpecs = [
  { icon: Cpu, label: "Edge AI Processing", value: "4 TOPS neural engine" },
  { icon: Camera, label: "Vision System", value: "12MP + depth sensing" },
  { icon: Gauge, label: "Classification Speed", value: "<500ms per item" },
  { icon: Shield, label: "Data Security", value: "AES-256 encryption" },
  { icon: Cloud, label: "Cloud Platform", value: "99.99% uptime SLA" },
  { icon: Zap, label: "Power Efficiency", value: "Solar self-sufficient" },
]

export default function R3binTechSpecs() {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Enterprise Scale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every component is engineered for reliability, security, and performance
            at scale across distributed deployments.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techSpecs.map((spec) => (
            <Card key={spec.label} className="bg-card border-border text-center p-6">
              <spec.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
              <p className="text-sm font-semibold text-foreground">{spec.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
