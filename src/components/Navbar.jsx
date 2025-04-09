import { useState, useEffect } from 'react'

function Navbar() {
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
    <header className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}>
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-blue-700 tracking-tight cursor-pointer" onClick={(e) => handleNavClick(e, 'hero')}>Erwan Maréchal</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">{isOpen ? '✖' : '☰'}</button>
        </div>
        <ul className="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600">À propos</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-blue-600">Projets</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-4 text-sm text-gray-700">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-blue-600">À propos</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-blue-600">Projets</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </header>
  )
}

export default Navbar