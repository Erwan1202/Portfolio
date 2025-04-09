function Contact({ theme }) {
  return (
    <section id="contact" className={`scroll-mt-32 py-20 px-4 max-w-3xl mx-auto text-center 
      ${theme === 'light' ? 'bg-white text-gray-800' : ''} 
    `}>
      <h2 className={`text-3xl font-bold mb-6 
        ${theme === 'dark' ? 'text-gray-100' : ''} 
      `}>
        Contact
      </h2>
      <p className="text-lg mb-6">
        Une idée, un projet, une opportunité ? Je serais ravi d’en discuter.
      </p>
      <a
        href="mailto:tonmail@mail.com"
        className={`inline-block px-6 py-3 rounded-md font-medium transition 
          ${theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
          ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : ''}
        `}
      >
        Me contacter
      </a>
    </section>
  )
}

export default Contact