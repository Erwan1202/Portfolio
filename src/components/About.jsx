function About({ theme }) {
  return (
    <section id="about" className="scroll-mt-32 py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">À propos</h2>
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
        <p>
          <strong>Stack technique :</strong>
        </p>
        <ul className="flex flex-wrap justify-center gap-2">
          {["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "SQL", "Node.js", "Vue.js", "React", "Supabase", "Kotlin"].map((tech) => (
            <li
              key={tech}
              className={`px-3 py-1 text-sm rounded-full font-medium 
                ${theme === 'dark' ? 'bg-gray-700 text-gray-100' : ''}
                ${theme === 'light' ? 'bg-gray-100 text-gray-800' : ''}
                ${theme === 'nature' ? 'bg-green-100 text-green-800' : ''}
              `}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About