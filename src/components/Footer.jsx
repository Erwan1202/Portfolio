function Footer() {
  return (
    <footer className="text-center py-8 bg-white text-gray-500 text-sm border-t border-gray-200">
      <p>© 2025 Erwan Maréchal. Tous droits réservés.</p>
      <div className="flex justify-center gap-6 mt-3">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline">CV</a>
      </div>
    </footer>
  )
}

export default Footer