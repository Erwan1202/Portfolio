import { useState, useEffect } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-funky text-pistachio cursor-pointer" onClick={(e) => handleNavClick(e, 'hero')}>🌿 Erwan Maréchal</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none text-2xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
        <ul className="hidden md:flex gap-6 font-retro text-sm text-gray-700">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-pistachio transition-all">About</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-pistachio transition-all">Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-pistachio transition-all">Contact</a></li>
        </ul>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 font-retro text-sm text-gray-700">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-pistachio transition-all">About</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-pistachio transition-all">Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-pistachio transition-all">Contact</a></li>
        </ul>
      )}
    </header>
  )
}

export default Navbar
