function About() {
  const stack = [
    { name: "Python", level: 5 },
    { name: "JavaScript", level: 4 },
    { name: "Java", level: 4 },
    { name: "C", level: 4 },
    { name: "HTML/CSS", level: 5 },
    { name: "SQL", level: 5 },
    { name: "PHP", level: 4 },
    { name: "Node.js", level: 4 },
    { name: "Vue.js", level: 4 },
    { name: "React", level: 3 },
    { name: "C++", level: 3 },
    { name: "Kotlin", level: 2 },
    { name: "Assembly", level: 3 },
  ];

  return (
    <section id="about" className="scroll-mt-32 p-10 bg-pistachio text-cream rounded-3xl shadow-2xl mx-4 my-10">
      <h2 className="text-3xl md:text-4xl font-bold font-funky mb-4">Moi, en quelques lignes</h2>
      <p className="font-retro text-lg leading-relaxed mb-6">
        Actuellement étudiant en développement web et application à l’Efrei Paris.<br />
        Rigoureux, curieux et motivé, je souhaite mettre en pratique mes compétences techniques en frontend (HTML, CSS, JavaScript, Vue.js…) comme en backend (Node.js, PHP, Python…), tout en continuant à apprendre au sein d’une équipe dynamique.
        <br /><br />
        Mon objectif à partir de la rentrée 2025-2026 : intégrer une alternance dans le même domaine, pour renforcer mon expérience et monter en compétences.
      </p>

      <div>
        <h3 className="text-2xl font-funky mb-3">💻 Stack de langages</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-retro">
          {stack.map((lang, idx) => (
            <li key={idx}>
              <p className="mb-1">{lang.name}</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 w-6 rounded-sm ${
                      i < lang.level ? 'bg-cream' : 'bg-cream/30'
                    }`}
                  ></div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
