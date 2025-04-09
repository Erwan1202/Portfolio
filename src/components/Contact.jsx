function Contact({ theme }) {
  return (
    <section id="contact" className="scroll-mt-32 py-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg mb-6">
        Une idée, un projet, une opportunité ? Je serais ravi d’en discuter.
      </p>
      <a
        href="mailto:tonmail@mail.com"
        className={`inline-block px-6 py-3 rounded-md font-medium transition 
          ${theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
          ${theme === 'dark' ? 'bg-blue-700 text-white hover:bg-blue-800' : ''}
          ${theme === 'nature' ? 'bg-green-600 text-white hover:bg-green-700' : ''}
        `}
      >
        Me contacter
      </a>
    </section>
  )
}

export default Contact