export function EssaysSection() {
  return (
    <section id="essays" className="py-16 bg-gray-50 border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        {/* Inner 4xl container just for heading so it aligns with ABOUT / RESEARCH */}
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
            ESSAYS
          </h2>
          <div className="h-1 w-24 bg-black mb-10"></div>
        </div>
        </div>
      <div className="max-w-6xl mx-auto px-6">
        {/* <div className="h-1 w-24 bg-black mb-10" /> */}

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Essay Card */}
          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              Personal Identity
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              An exploration of my own identity and the experiences that shaped it.
            </p>
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:7cfc0808-a831-415a-951d-b0200bb7a1e1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
            >
              Read Full Essay →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              AI in UX Research: Collaboration, Not Replacement
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A public service announcement emphasizing the collaborative role of AI in UX research
            </p>
            <a
              href="/essay-2"
              target="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:83962e55-a176-4efe-98c1-f635a663116b"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
            >
              Read Full PSA →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              International Pop Culture: Heartstopper
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A reflective essay exploring the themes and cultural impact of the series <i>Heartstopper</i>.
            </p>
            <a
              href="/essay-3"
              target="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:1fd87176-3611-4b41-bfb3-9963f1cacbed"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
            >
              Read Full Essay →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              Effects of Cyberbullying and Prevention
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              An analysis of cyberbullying's impact on communities and strategies to prevent it, supported by research and quotes.
            </p>
            <a
              href="/essay-4"
              target="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:1104c125-7e75-4ed7-a4db-29720a216b20"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
            >
              Read Full Essay →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              Animal Experimentation: Ethical Considerations
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              My perspective on why animal experimentation should not be completely banned, balancing ethics and scientific progress.
            </p>
            <a
              href="/essay-5"
              target="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:d241f5ff-e8d1-4a63-8667-e1719eb64296"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
            >
              Read Full Essay →
            </a>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-2">
              Mental Health Stigma: Impact and Importance of Reduction
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A discussion on how mental health stigma affects people and why reducing it matters.
            </p>
            <a
              href="/essay-6"
              target="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:83962e55-a176-4efe-98c1-f635a663116b"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline underline-offset-4 transition-colors duration-200"
            >
              Read Full Essay →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
