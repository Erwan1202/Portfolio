function Hero({ theme }) {
  return (
    <section
      id="hero"
      className={`scroll-mt-32 h-screen flex items-center justify-center text-center px-4 transition-all duration-300 
        ${theme === 'dark' ? 'bg-[#0f172a] text-gray-100' : ''}
        ${theme === 'nature' ? 'bg-gradient-to-b from-[#eafbf2] to-[#fdf6ec] text-green-900' : ''}
      `}
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bonjour, je suis Erwan Maréchal
          {theme === 'nature' && ' 🌿'}
          {theme === 'dark' && ' 🌚'}
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Développeur web passionné par la création d’interfaces accessibles,
          modernes et performantes.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className={`inline-block px-6 py-3 rounded-md font-medium transition 
              ${theme === 'nature' ? 'bg-green-600 text-white hover:bg-green-700' : ''}
              ${theme === 'dark' ? 'bg-blue-700 text-white hover:bg-blue-800' : ''}
              ${theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
            `}
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero