export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">CONTACT</h2>
        <div className="h-1 w-32 bg-black mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="font-bold uppercase text-sm mb-2">Email</p>
            <a href="mailto:hrayapa1@asu.edu" className="text-lg hover:text-yellow-400 transition-colors">
              hrayapa1@asu.edu
            </a>
          </div>
          <div>
            <p className="font-bold uppercase text-sm mb-2">Phone</p>
            <a href="tel:+16234440816" className="text-lg hover:text-yellow-400 transition-colors">
              (623) 444-0816
            </a>
          </div>
          <div>
            <p className="font-bold uppercase text-sm mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/himarayapati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-yellow-400 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          <div>
            <p className="font-bold uppercase text-sm mb-2">Location</p>
            <p className="text-lg">Tempe, Arizona</p>
          </div>
        </div>

        <div className="bg-yellow-400 p-8 text-center">
          <p className="font-bold uppercase text-sm mb-4">Download CV</p>
          <a
            href="#"
            className="inline-block bg-black text-white font-bold px-8 py-3 uppercase text-sm hover:bg-gray-800 transition-colors"
          >
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
