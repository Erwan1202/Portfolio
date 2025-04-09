const skills = [
  { name: "HTML", level: 7 },
  { name: "CSS", level: 6 },
  { name: "JavaScript", level: 6 },
  { name: "TypeScript", level: 3 },
  { name: "PHP", level: 5 },
  { name: "SQL", level: 5 },
  { name: "Node.js", level: 4 },
  { name: "Vue.js", level: 3 },
  { name: "React", level: 5 },
  { name: "Supabase", level: 3 },
  { name: "Kotlin", level: 2 }
]

function About({ theme }) {
  return (
    <section id="about" className={`scroll-mt-32 py-20 px-4 max-w-5xl mx-auto transition-all duration-300 
      ${theme === 'light' ? 'bg-white text-gray-800' : ''} 
      ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : ''}`}
    >
      <h2 className={`text-3xl font-bold mb-8 text-center 
        ${theme === 'dark' ? 'text-gray-100' : ''} 
      `}>À propos</h2>

      <div className="space-y-4 text-lg leading-relaxed text-center">
        <p>
          Étudiant en informatique à l’Efrei Paris, je me spécialise dans le développement web
          fullstack. J’aime concevoir des solutions efficaces, maintenir une codebase propre et
          travailler sur des projets à impact.
        </p>
        <p>
          Mon style de travail est orienté produit, utilisateur et accessibilité. Curieux,
          méthodique et créatif, je suis à l’aise en autonomie comme en équipe.
        </p>
        <p className="font-semibold">Stack technique :</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {skills.map(({ name, level }) => (
            <div key={name} className="text-left">
              <div className="flex justify-between items-center">
                <span className="font-medium">{name}</span>
                <span className="text-sm opacity-60">{level}/8</span>
              </div>
              <div className={`w-full h-2 rounded-full mt-1 overflow-hidden 
                ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out 
                    ${theme === 'dark' ? 'bg-blue-400' : ''}
                    ${theme === 'light' ? 'bg-blue-600' : ''}`}
                  style={{ width: `${(level / 8) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About