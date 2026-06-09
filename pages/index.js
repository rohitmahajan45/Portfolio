import Layout from '../components/Layout'
import ThreeScene from '../components/ThreeScene'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <Layout>
      <ThreeScene />
      <header className="py-6 container-wide">
        <nav className="flex justify-between items-center">
          <div className="logo text-xl font-semibold">Rohit<span className="accent">.</span></div>
          <div className="hidden md:flex gap-6">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-400">© {new Date().getFullYear()} Rohit Mahajan — Built with care</footer>
    </Layout>
  )
}
