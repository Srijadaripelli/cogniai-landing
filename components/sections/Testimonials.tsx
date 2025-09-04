import SectionTitle from "@/components/ui/section-title";
import { Avatar } from "@/components/ui/avatar";

const data = [
  {name:"Aarav Sharma", role:"CTO, NexaWorks", quote:"CogniAI cut our analysis time from days to minutes.", avatar:"https://i.pravatar.cc/100?img=1"},
  {name:"Priya Patel", role:"Head of Ops, Fintra", quote:"The insights are spot‑on and the UX is delightful.", avatar:"https://i.pravatar.cc/100?img=2"},
  {name:"Rahul Iyer", role:"VP Data, Orbitly", quote:"Seamless integrations and blazing fast results.", avatar:"https://i.pravatar.cc/100?img=3"}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle eyebrow="TESTIMONIALS" title="Loved by teams everywhere" />
          <a href="#" className="hidden md:inline-flex h-11 px-5 items-center rounded-2xl border border-white/10 hover:bg-white/5">See all testimonials</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map(t => (
            <div key={t.name} className="card p-6">
              <div className="flex items-center gap-3">
                <Avatar src={t.avatar} alt={t.name} />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-surface-300">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-surface-300">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
