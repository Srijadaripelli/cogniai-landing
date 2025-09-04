import SectionTitle from "@/components/ui/section-title";

const faqs = [
  {q:"Is there a free trial?", a:"Yes, start with a 14‑day full‑feature trial; no credit card required."},
  {q:"How do integrations work?", a:"Connect Google, FB, X, Instagram and dozens more with one click."},
  {q:"Do you support on‑prem?", a:"Enterprise plan supports private cloud & on‑prem deployments."},
  {q:"What about security?", a:"SSO, RBAC, encryption at rest & in transit, and audit logs."},
]

export default function FAQ(){
  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title="Answers to common questions" />
        <div className="mt-8 space-y-3">
          {faqs.map(f => (
            <details key={f.q} className="card p-4">
              <summary className="cursor-pointer text-sm font-medium">{f.q}</summary>
              <p className="mt-2 text-surface-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
