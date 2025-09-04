import SectionTitle from "@/components/ui/section-title";

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="ABOUT"
          title="Turn raw data into outcomes"
          subtitle="CogniAI streamlines analysis, surfaces insights, and drives faster, smarter decision‑making."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-6">
            <div className="text-surface-300">Verified Customer Testimonials</div>
            <div className="mt-2 text-5xl font-semibold">100%</div>
          </div>
          <div className="card p-6">
            <div className="text-surface-300">Faster, Smarter, Efficient</div>
            <div className="mt-2 text-5xl font-semibold">7x</div>
          </div>
        </div>
      </div>
    </section>
  )
}
