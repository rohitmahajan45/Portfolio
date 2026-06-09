import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="min-h-screen container-wide flex items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight">Hi, I'm <span className="accent">Rohit Mahajan</span></h1>
        <p className="mt-4 text-xl">Data Analyst | Power BI | SQL | Excel</p>
        <p className="mt-6 text-slate-300">I build actionable insights and dashboards that help teams make data-driven decisions. Experienced in SQL, Excel modeling, Power BI, and visualization best practices.</p>

        <div className="mt-8 flex gap-4">
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#contact" className="btn glass px-5 py-3">Hire Me</motion.a>
          <a href="/resume.pdf" download className="btn bg-accent text-slate-900 px-5 py-3 rounded-md font-semibold">Download Resume</a>
        </div>
      </div>
    </section>
  )
}
