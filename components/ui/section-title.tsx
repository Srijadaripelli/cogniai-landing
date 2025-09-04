export default function SectionTitle({ eyebrow, title, subtitle }:{eyebrow?:string; title:string; subtitle?:string}){
  return (
    <div className="max-w-2xl">
      {eyebrow ? <div className="mb-2 text-xs tracking-widest text-primary/70">{eyebrow}</div> : null}
      <h2 className="h2">{title}</h2>
      {subtitle ? <p className="lead mt-3">{subtitle}</p> : null}
    </div>
  )
}
