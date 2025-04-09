const projects = [
  { title: 'Momentia', desc: 'Un réseau social inspiré d’Instagram avec backend Node.js, Supabase, et frontend en Vue + Tailwind. Design custom, like/comment/follow.', img: '/assets/momentia.png', url: '#' },
  { title: 'Contes Magiques', desc: 'Application mobile Android en Kotlin générant des histoires illustrées avec l’API ChatGPT, destinée aux enfants de 5 à 9 ans.', img: '/assets/contes.png', url: '#' },
  { title: 'Portfolio Pixel Hayabusa', desc: 'Un portfolio stylé Edgerunners avec moto jaune, ville cyberpunk et fond en pixel art.', img: '/assets/pixelbike.png', url: '#' },
  { title: 'Portfolio Funky', desc: 'Mon portfolio actuel, un site web funky et coloré, avec une ambiance rétro et des animations.', img: '/assets/portfolio.png', url: '#' },
  { title: 'Portfolio 2024', desc: 'Mon ancien portfolio, un site web funky et coloré, avec une ambiance rétro et des animations.', img: '/assets/portfolio2024.png', url: '#' },
  { title: 'Portfolio 2023', desc: 'Mon ancien portfolio, un site web funky et coloré, avec une ambiance rétro et des animations.', img: '/assets/portfolio2023.png', url: '#' },
  { title: 'Portfolio 2022', desc: 'Mon ancien portfolio, un site web funky et coloré, avec une ambiance rétro et des animations.', img: '/assets/portfolio2022.png', url: '#' },
  { title: 'Portfolio 2021', desc: 'Mon ancien portfolio, un site web funky et coloré, avec une ambiance rétro et des animations.', img: '/assets/portfolio2021.png', url: '#' },
  { title: 'Portfolio 2020', desc: 'Mon ancien portfolio, un site web funky et coloré, avec une ambiance rétro et des animations.', img: '/assets/portfolio2020.png', url: '#' },
]
function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <a href={proj.url} key={proj.title} className="border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <img src={proj.img} alt={proj.title} className="rounded-t-lg w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{proj.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
  