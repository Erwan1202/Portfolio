const projects = [
  {
    title: 'Momentia',
    desc: 'Réseau social fullstack Node.js + Vue + Supabase. Système de like, commentaires, follow.',
    img: '/assets/momentia.png',
    url: '#'
  },
  {
    title: 'Contes Magiques',
    desc: 'App Android Kotlin qui génère des histoires illustrées pour enfants avec ChatGPT.',
    img: '/assets/contes.png',
    url: '#'
  },
  {
    title: 'Portfolio Pixel Hayabusa',
    desc: 'Portfolio inspiré d’un jeu rétro avec moto pixel art et style cyberpunk.',
    img: '/assets/pixelbike.png',
    url: '#'
  }
]

function Projects({ theme }) {
  return (
    <section id="projects" className="scroll-mt-32 py-20 px-4 max-w-7xl mx-auto">
      <h2 className={`text-3xl font-bold mb-8 text-center 
        ${theme === 'dark' ? 'text-gray-100' : ''} 
      `}>
        Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <a
            href={proj.url}
            key={proj.title}
            className={`rounded-xl border overflow-hidden transition-all duration-300 shadow-sm 
              ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100 hover:shadow-gray-700/30' : ''}
              ${theme === 'light' ? 'bg-white border-gray-200 text-gray-800 hover:shadow-lg' : ''}
            `}
          >
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm mt-2">{proj.desc}</p>
              <span className={`inline-block mt-4 font-medium hover:underline 
                ${theme === 'dark' ? 'text-gray-300' : ''}
                ${theme === 'light' ? 'text-blue-600' : ''}
              `}>
                Voir le projet →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects