export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20 md:pt-0">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">HIMA SHANTHI</h1>
              <div className="h-1 w-32 bg-black mb-6"></div>
              <p className="text-lg font-semibold">Mathematics & Psychology Student</p>
            </div>

            <p className="text-xl leading-relaxed italic text-gray-700">
              "Finding certainty in numbers, wonder in people, and stories in everything."
            </p>

            <p className="text-sm leading-relaxed text-gray-600 max-w-sm">
              Undergraduate student at Arizona State University majoring in Mathematics (Statistics) and Psychology with
              a minor in Philosophy. Passionate about research, data analysis, and understanding human behavior.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 uppercase text-sm hover:bg-yellow-300 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="border-8 border-black bg-gray-200">
                <img src="/Duddu.jpg" alt="Hima Shanthi" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-yellow-400 bg-yellow-400 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
