function About() {
  return (
    <section id="about" className="scroll-mt-32 py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">À propos</h2>
      <div className="space-y-4 text-gray-700 text-lg">
        <p>Actuellement étudiant en développement web à l’Efrei Paris, je suis passionné par la conception de solutions digitales modernes et centrées utilisateur.</p>
        <p>Mon approche combine rigueur, curiosité et créativité. Je travaille régulièrement avec des outils comme <strong>React</strong>, <strong>Vue</strong>, <strong>Node.js</strong>, <strong>Supabase</strong>, et bien d’autres.</p>
        <p>Mon objectif : devenir développeur fullstack dans une structure où je peux apprendre, collaborer et avoir de l’impact.</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Stack technique</h3>
        <ul className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "SQL", "Node.js", "Vue.js", "React", "Supabase", "Kotlin"].map((tech) => (
            <li key={tech} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
