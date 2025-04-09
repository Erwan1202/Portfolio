import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  const cycleTheme = () => {
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'nature' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <div className={`min-h-screen font-sans scroll-smooth ${theme} transition-colors duration-300`}>
      <Navbar theme={theme} cycleTheme={cycleTheme} />
      <main className={
        `transition-colors duration-300 ` +
        `bg-white text-gray-800 ` +
        `dark:bg-[#0f172a] dark:text-gray-100 ` +
        `nature:bg-[#fdf6ec] nature:text-[#2a2a2a]`
      }>
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