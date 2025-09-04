import SectionTitle from "@/components/ui/section-title";
import { Database, Zap, Shield, CloudUpload } from "lucide-react";

const items = [
  { icon: CloudUpload, title: "Upload & Connect Seamlessly", desc: "Import from spreadsheets, databases, and APIs for frictionless integration."},
  { icon: Zap, title: "AI in Real‑Time", desc: "Streaming inference highlights anomalies, patterns, and trends instantly."},
  { icon: Database, title: "No‑Code Workflows", desc: "Drag, drop, and automate pipelines with guardrails and versioning."},
  { icon: Shield, title: "Enterprise‑Grade", desc: "Role‑based access, audit trails, and SOC2‑friendly controls."},
]

export default function HowItWorks(){
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle eyebrow="HOW IT WORKS" title="Unlock the Power of Your Data" subtitle="Organize, track progress, and achieve more — effortlessly." />
          <a href="#" className="hidden md:inline-flex h-11 px-5 items-center rounded-2xl border border-white/10 hover:bg-white/5">Try AI‑powered analysis</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-surface-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
