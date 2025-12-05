export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">ABOUT ME</h2>
        <div className="h-1 w-32 bg-black mb-12"></div>

        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="text-2xl font-bold mb-4">A Little About Me</h3>
            <p className="leading-relaxed">
              Born and raised in Khammam, Telangana, India – a place where the biryani's rich, the culture's warm, and
              life smells just as good as the spices in the air. I'm an undergraduate student at Arizona State
              University pursuing dual degrees in Mathematics (Statistics) and Psychology with a minor in Philosophy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="leading-relaxed">
              I started out in engineering and stuck with it for two years during COVID, but something felt off. I
              wanted to do something that felt like my passion, so I switched to psychology. Just one semester in, I
              realized I really missed math — the certainty, the logic, the quiet satisfaction of solving an equation.
              So I added Mathematics (Statistics) as a second major, and because I've always loved deep questions, I
              threw Philosophy into the mix too.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Why Math Matters</h3>
            <p className="leading-relaxed">
              Mathematics has been part of my life for as long as I can remember. At one point I thought I was tired of
              it, but when I studied psychology without math, I felt something was missing. Psychology and philosophy
              are fascinating but often subjective; math grounds me. I especially love algebra and solving equations —
              they let me disappear into the process and forget everything else.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Research Interests</h3>
            <p className="leading-relaxed">
              I'm fascinated by how people make decisions — especially how unconscious biases shape what we choose and
              believe. I'm also curious about the ethics of artificial intelligence: how can we design AI systems that
              make fair, trustworthy decisions? I want to explore how cultural differences influence how people react to
              situations, and how AI might learn to understand and adapt to this diversity.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">What I Love</h3>
            <ul className="space-y-2">
              <li>• Starting arguments just for fun (rage baiting is totally fun!)</li>
              <li>• Finding loopholes and paying close attention to wording</li>
              <li>• Late-night gossip sessions with friends and deep dives into world affairs</li>
              <li>• Fantasy novels and fictional worlds (Percy Jackson is my favorite)</li>
              <li>• Learning anything just for the joy of understanding it</li>
              <li>• Overanalyzing characters in movies/books as if they're case studies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
