import SectionTitle from "@/components/ui/section-title";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Startup Plan",
    price: 1200,
    cta: "Start a Project",
    features: ["Basic KPIs & Dashboards","Popular Integrations","Role‑based Access","Email Support"]
  },
  {
    name: "Enterprise Plan",
    price: 3600,
    cta: "Start a Project",
    highlight: true,
    features: ["Landing Page Design","All Integrations","Advanced Reporting","Dedicated Manager","Priority Support"]
  }
]

export default function Pricing(){
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionTitle eyebrow="PRICING PLAN" title="Plans for Every Need and Budget" subtitle="Start simple, scale as you grow." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((p)=> (
            <div key={p.name} className={"p-6 rounded-2xl border " + (p.highlight ? "bg-gradient-to-b from-primary/20 to-transparent border-primary/30" : "card")}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="text-3xl font-semibold">${p.price}<span className="text-sm text-surface-300">/mo</span></div>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5" />
                    <span className="text-surface-300">{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full">{p.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
