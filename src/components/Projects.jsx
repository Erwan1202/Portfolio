const projects = [
  { title: 'Momentia', desc: 'Réseau social fullstack Node.js + Vue + Supabase. Système de like, commentaires, follow.', img: '/assets/momentia.png', url: '#' },
  { title: 'Contes Magiques', desc: 'App Android Kotlin qui génère des histoires illustrées pour enfants avec ChatGPT.', img: '/assets/contes.png', url: '#' },
  { title: 'Portfolio Pixel Hayabusa', desc: 'Portfolio inspiré d’un jeu rétro avec moto pixel art et style cyberpunk.', img: '/assets/pixelbike.png', url: '#' },
]

function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <a href={proj.url} key={proj.title} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
            <img src={proj.img} alt={proj.title} className="rounded-t-xl w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{proj.desc}</p>
              <span className="inline-block mt-4 text-blue-600 text-sm font-medium">Voir le projet →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
  