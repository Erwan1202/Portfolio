function Hero() {
  return (
    <section id="hero" className="relative h-screen bg-gradient-to-b from-skyBlue to-cream flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center">
        <img src="/src/assets/erwan.jpg" alt="Erwan" className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 shadow-lg" />
        <h1 className="text-5xl md:text-6xl font-bold font-funky text-pistachio drop-shadow-md">

          Salut, moi c’est Erwan 🌿
        </h1>
        <p className="mt-4 text-lg font-retro">
          Développeur web & créatif dans l’âme — bienvenue dans mon univers.
        </p>
      </div>
    </section>
  )
}

export default Hero