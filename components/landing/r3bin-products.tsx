"use client"

import {
  Brain,
  Wifi,
  BarChart3,
  FileText,
  Check,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: "r3bin-core",
    name: "R3Bin Core",
    tagline: "AI-Powered Smart Bin Hardware",
    description: "Next-generation waste bins with embedded AI for real-time waste classification and segregation at the source.",
    icon: Brain,
    color: "#34d399",
    features: [
      "On-device AI classification with 94%+ accuracy",
      "Multi-stream segregation (recyclables, organics, general)",
      "Ultrasonic fill-level sensors",
      "Solar-powered with backup battery",
      "Weather-resistant industrial design",
      "Capacitive touch user interface"
    ],
    specs: {
      "AI Engine": "Edge TPU, 4 TOPS",
      "Camera": "12MP with night vision",
      "Connectivity": "4G LTE / WiFi / LoRaWAN",
      "Capacity": "120L / 240L / 360L options",
      "Power": "Solar + 72hr battery backup"
    }
  },
  {
    id: "sensor-network",
    name: "IoT Sensor Network",
    tagline: "Connected Intelligence Infrastructure",
    description: "Comprehensive sensor ecosystem that transforms your waste infrastructure into a connected, intelligent network.",
    icon: Wifi,
    color: "#60a5fa",
    features: [
      "Real-time fill level monitoring",
      "Temperature and humidity sensors",
      "Weight measurement for accurate tracking",
      "GPS location tracking",
      "Tamper detection alerts",
      "Mesh networking capability"
    ],
    specs: {
      "Range": "Up to 10km (LoRaWAN)",
      "Battery Life": "5+ years",
      "Update Frequency": "Every 15 min",
      "Sensors": "Ultrasonic, load cell, temp",
      "Protocol": "LoRaWAN / NB-IoT"
    }
  },
  {
    id: "analytics-platform",
    name: "Analytics Dashboard",
    tagline: "Real-Time Waste Intelligence",
    description: "Powerful analytics platform that transforms raw sensor data into actionable insights for sustainability teams.",
    icon: BarChart3,
    color: "#f59e0b",
    features: [
      "Live waste composition analysis",
      "Predictive collection scheduling",
      "Route optimization algorithms",
      "Custom KPI dashboards",
      "Anomaly detection alerts",
      "Historical trend analysis"
    ],
    specs: {
      "Data Refresh": "Real-time streaming",
      "Retention": "Unlimited historical",
      "API Access": "REST & GraphQL",
      "Integrations": "50+ platforms",
      "Export": "CSV, PDF, Excel"
    }
  },
  {
    id: "esg-reporting",
    name: "ESG Compliance Suite",
    tagline: "Automated Sustainability Reporting",
    description: "Comprehensive ESG reporting tools that automatically generate compliance documentation for regulatory bodies.",
    icon: FileText,
    color: "#a78bfa",
    features: [
      "GRI Standards compliance",
      "CDP reporting automation",
      "Carbon offset calculations",
      "Waste diversion tracking",
      "Audit trail documentation",
      "Stakeholder report generation"
    ],
    specs: {
      "Frameworks": "GRI, CDP, SASB, TCFD",
      "Reports": "Monthly, Quarterly, Annual",
      "Verification": "Third-party audit ready",
      "Languages": "20+ languages",
      "Customization": "White-label available"
    }
  }
]

export default function R3binProducts() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="bg-card border-border overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <product.icon className="h-7 w-7" style={{ color: product.color }} />
                  </div>
                  <Badge className="mb-3 bg-secondary text-secondary-foreground border-border">
                    {product.tagline}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div
                  className={`bg-secondary/50 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Technical Specifications
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-border last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">{key}</span>
                        <span className="text-sm font-medium text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-primary font-medium">
                      Available for enterprise deployment
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Contact sales for volume pricing and customization
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
