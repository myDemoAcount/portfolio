import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'

function App() {
  const [isDark] = useState(true)

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <div className="grid-background" />
      <CursorGlow />
      <Navbar isDark={isDark} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
