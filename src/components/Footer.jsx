function Footer({ theme }) {
  return (
    <footer className={`text-center py-8 text-sm border-t transition-all duration-300 
      ${theme === 'light' ? 'bg-white text-gray-600 border-gray-200' : ''}
      ${theme === 'dark' ? 'bg-gray-900 text-gray-400 border-gray-700' : ''}
    `}>
      <p className="font-semibold tracking-wide">
         Merci de votre visite, à très bientôt !
         © 2025 Erwan Maréchal. Tous droits réservés.
      </p>
      <div className="flex justify-center gap-6 mt-3 text-sm">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:underline transition font-medium 
            ${theme === 'dark' ? 'text-gray-300 hover:text-white' : ''}
            ${theme === 'light' ? 'text-blue-600 hover:text-blue-800' : ''}`}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:underline transition font-medium 
            ${theme === 'dark' ? 'text-gray-300 hover:text-white' : ''}
            ${theme === 'light' ? 'text-blue-600 hover:text-blue-800' : ''}`}
        >
          LinkedIn
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:underline transition font-medium 
            ${theme === 'dark' ? 'text-gray-300 hover:text-white' : ''}
            ${theme === 'light' ? 'text-blue-600 hover:text-blue-800' : ''}`}
        >
          CV
        </a>
      </div>
    </footer>
  )
}

export default Footer