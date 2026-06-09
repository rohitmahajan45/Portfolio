export default function Experience(){
  const items = [
    {year:'2024', title:'Data Analyst Intern', org:'Company A', desc:'Built dashboards and automated reports.'},
    {year:'2023', title:'Research Assistant', org:'Sandip University', desc:'Worked on data-driven projects under Prof. Anand Singh.'}
  ]
  return (
    <section id="experience" className="section container-wide py-16">
      <h2 className="text-3xl font-semibold">Experience & Achievements</h2>
      <div className="mt-6 space-y-4">
        {items.map(it => (
          <div key={it.title} className="glass p-4 flex gap-4 items-start">
            <div className="w-24 text-accent font-bold">{it.year}</div>
            <div>
              <div className="font-semibold">{it.title} — <span className="text-slate-300">{it.org}</span></div>
              <div className="text-slate-300 text-sm mt-1">{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
