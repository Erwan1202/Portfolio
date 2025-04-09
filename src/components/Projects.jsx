import { useRef } from 'react'

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
  },
  {
    title: 'Portfolio React',
    desc: 'Mon portfolio actuel, construit avec React et Tailwind CSS.',
    img: '/assets/portfolio.png',
    url: '#'
  },
  {
    title: 'Portfolio v1',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v1.png',
    url: '#'
  },
  {
    title: 'Portfolio v2',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v2.png',
    url: '#'
  },
  {
    title: 'Portfolio v3',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v3.png',
    url: '#'
  },
  {
    title: 'Portfolio v4',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v4.png',
    url: '#'
  },
  {
    title: 'Portfolio v5',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v5.png',
    url: '#'
  },
  {
    title: 'Portfolio v6',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v6.png',
    url: '#'
  },
  {
    title: 'Portfolio v7',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v7.png',
    url: '#'
  },
  {
    title: 'Portfolio v8',
    desc: 'Ancien portfolio, HTML/CSS pur.',
    img: '/assets/portfolio-v8.png',
    url: '#'
  }

]

function Projects({ theme }) {
  const containerRef = useRef(null)

  const scroll = (direction) => {
    const container = containerRef.current
    if (!container) return
    const scrollAmount = 300
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="scroll-mt-32 py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projets</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => scroll('left')}
          className="text-xl px-3 py-1 rounded-full border border-transparent hover:border-current bg-transparent"
        >
          ◀
        </button>

        <div
          ref={containerRef}
          className="overflow-x-auto scroll-smooth flex gap-4 px-4 scrollbar-hide"
        >
          {projects.map((proj) => (
            <a
              href={proj.url}
              key={proj.title}
              className={`min-w-[280px] max-w-[280px] rounded-xl flex-shrink-0 border overflow-hidden transition-all duration-300 
                ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-800'}
              `}
            >
              <img src={proj.img} alt={proj.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-sm mt-1">{proj.desc}</p>
                <span className="text-blue-500 text-sm inline-block mt-3 hover:underline">
                  Voir le projet →
                </span>
              </div>
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="text-xl px-3 py-1 rounded-full border border-transparent hover:border-current bg-transparent"
        >
          ▶
        </button>
      </div>
    </section>
  )
}

export default Projects