function Hero() {
  return (
    <section id="hero" className="scroll-mt-32 h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Bonjour, je suis Erwan Maréchal</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Développeur web passionné par la création d’interfaces accessibles, modernes et performantes.
        </p>
        <div className="mt-8">
          <a href="#projects" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Voir mes projets</a>
        </div>
      </div>
    </section>
  )
}

export default Hero