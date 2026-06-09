import Link from 'next/link'

const projects = [
  {title:'Car Sales Dashboard (Excel)', desc:'Interactive Excel dashboard with KPIs and charts', link:'#'},
  {title:'Inventory Management System', desc:'Database-driven inventory prototype', link:'#'},
  {title:'Power BI Dashboards', desc:'Multiple Power BI reports for sales & finance', link:'#'},
  {title:'SQL Projects', desc:'Analytics queries and ETL examples on GitHub', link:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="section container-wide py-16 bg-gradient-to-b from-transparent to-slate-900/20">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.title} className="glass p-6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-300 mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              <Link href={p.link} className="text-accent">View</Link>
              <a href="#" className="text-slate-300">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
