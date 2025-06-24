import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Community from './components/Community'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Community />
          <Testimonials />
          <Contact />
        </motion.div>
      </main>
      </div>
    </ThemeProvider>
  )
}

export default App