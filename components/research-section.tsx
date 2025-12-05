export function ResearchSection() {
  const research = [
    {
      title: "Social Cognition & Behavioral Research",
      period: "Fall 2023",
      inst: "Arizona State University · Neuberg Lab · Dr. Steve Neuberg",
      bullets: [
        "Contributed to research in social cognition and behavioral studies as an undergraduate research assistant.",
        "Participated in lab meetings and collaborative idea development.",
        "Assisted in designing and administering surveys and experimental protocols.",
        "Conducted pilot testing, organized and coded collected data.",
        "Performed comprehensive literature reviews for ongoing projects.",
      ],
    },
    {
      title: "Longitudinal Research on Behavior & Learning",
      period: "Fall 2024",
      inst: "Arizona State University · Longitudinal & Behavioral Data Science Lab",
      bullets: [
        "Participated in bi-weekly lab meetings contributing to research discussions.",
        "Stayed engaged with ongoing analytical progress and research updates.",
      ],
    },
  ];

  return (
    <section id="research" className="py-20 bg-white border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
          RESEARCH
        </h2>
        <div className="h-1 w-32 bg-black mb-12"></div>

        <div className="space-y-12">
          {research.map((item, idx) => (
            <div key={idx} className="pb-6 border-b-2 border-gray-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <span className="text-sm font-bold uppercase text-gray-600">{item.period}</span>
              </div>
              <p className="text-sm font-semibold text-gray-600 mb-3">{item.inst}</p>
              <ul className="list-disc ml-4 text-gray-700 leading-relaxed space-y-1">
                {item.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
