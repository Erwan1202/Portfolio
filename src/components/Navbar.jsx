// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

function Navbar({ theme, cycleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-shadow ${isScrolled ? 'shadow-sm' : ''} bg-white dark:bg-gray-900 nature:bg-[#fdf6ec]`}>
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-blue-700 dark:text-white nature:text-green-900 tracking-tight cursor-pointer" onClick={(e) => handleNavClick(e, 'hero')}>
          Erwan Maréchal
        </h1>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-200 nature:text-green-900">
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600 dark:hover:text-blue-400 nature:hover:text-green-600">À propos</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-blue-600 dark:hover:text-blue-400 nature:hover:text-green-600">Projets</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-600 dark:hover:text-blue-400 nature:hover:text-green-600">Contact</a></li>
          </ul>
          <div className="flex flex-col items-center justify-center">
            <button onClick={cycleTheme} title="Changer de thème" className="text-xl hover:opacity-80 transition">
              {theme === 'light' ? '🌞' : theme === 'dark' ? '🌚' : '🌿'}
            </button>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 nature:text-green-800 mt-1">cliquez</span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 dark:text-white text-2xl">{isOpen ? '✖' : '☰'}</button>
        </div>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-4 text-sm text-gray-700 dark:text-gray-200 nature:text-green-900">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600 dark:hover:text-blue-400 nature:hover:text-green-600">À propos</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-blue-600 dark:hover:text-blue-400 nature:hover:text-green-600">Projets</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-600 dark:hover:text-blue-400 nature:hover:text-green-600">Contact</a></li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
