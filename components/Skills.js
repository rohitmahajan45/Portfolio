import { motion } from 'framer-motion'

const skills = [
  { name: 'Excel', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Power BI', level: 82 },
  { name: 'Python', level: 70 },
  { name: 'Statistics', level: 78 },
  { name: 'Data Viz', level: 88 }
]

export default function Skills(){
  return (
    <section id="skills" className="section container-wide py-16">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map(s => (
          <div key={s.name} className="glass p-4">
            <div className="flex justify-between">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-slate-300">{s.level}%</div>
            </div>
            <div className="h-2 bg-slate-800 rounded mt-3 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${s.level}%` }} className="h-full bg-gradient-to-r from-accent to-neon"></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
