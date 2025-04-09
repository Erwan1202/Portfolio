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
    const next = theme === 'light' ? 'dark' : theme === 'dark'
    setTheme(next)
  }

  return (
    <div
      className={`
        ${theme === 'light' ? 'bg-white text-gray-800' : ''} 
        ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : ''} 
       `}

    >
      <Navbar theme={theme} cycleTheme={cycleTheme} />
      <main>
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