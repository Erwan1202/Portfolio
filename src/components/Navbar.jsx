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
    <header className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 
      ${isScrolled ? 'shadow-md' : ''} 
      ${theme === 'light' || theme === 'dark' ? (theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-gray-100') : ''}
    `}>
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <h1
          className="text-xl font-bold tracking-tight cursor-pointer"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          Erwan Maréchal
        </h1>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {['about', 'projects', 'contact'].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`hover:underline transition-colors 
                    ${theme === 'light' ? 'hover:text-blue-600' : ''}
                    ${theme === 'dark' ? 'hover:text-gray-300' : ''}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center">
            <button onClick={cycleTheme} title="Changer de thème" className="text-xl hover:opacity-80 transition">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <span className="text-[10px] mt-1 opacity-60">cliquez</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-4 text-sm">
          {['about', 'projects', 'contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="hover:underline"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar