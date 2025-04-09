import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light')
  const cycleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 
        ${theme === 'light' ? 'bg-white text-gray-800' : ''} 
        ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : ''}`}
    >
      <Navbar theme={theme} cycleTheme={cycleTheme} />
      <main className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <Hero theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  )
}

export default App