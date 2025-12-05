export function ExperienceSection() {
  const jobs = [
    {
      title: "Research Aide",
      company: "Arizona State University",
      period: "12/2024 - Present",
      duties: [
        "Review and categorize user comments to ensure adherence to quality standards",
        "Assign relevant tags to comments for improved organization and searchability",
        "Perform data cleaning tasks, identifying and correcting inconsistencies",
        "Work with databases to structure data and ensure accessibility for future use",
      ],
    },
    {
      title: "Lead Survey Assistant",
      company: "Arizona State University",
      period: "05/2023 - Present",
      duties: [
        "Conduct phone-based survey interviews with employed and recently graduated ASU students",
        "Assist in the hiring process, including interviewing and evaluating candidates",
        "Perform data cleaning and ensure the integrity of datasets for analysis",
        "Train new student workers in survey procedures and oversee tool calibration",
      ],
    },
    {
      title: "Intern",
      company: "Arizona State University",
      period: "08/2024 - 11/2024",
      duties: [
        "Perform quantitative analysis and use statistical software to support research",
        "Support accreditation by ensuring documentation and conducting data analysis",
        "Contribute to website development through research on clinical procedures",
      ],
    },
    {
      title: "Advising Office Aide",
      company: "Arizona State University",
      period: "08/2023 - 05/2024",
      duties: [
        "Engaged with students, faculty, and staff through effective communication",
        "Performed administrative tasks including data entry, filing, and calendar management",
        "Worked closely with advising staff to provide exceptional student support",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">WORK EXPERIENCE</h2>
        <div className="h-1 w-32 bg-black mb-12"></div>

        <div className="space-y-10">
          {jobs.map((job, idx) => (
            <div key={idx} className="pb-8 border-b-2 border-gray-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                </div>
                <p className="text-sm font-bold uppercase">{job.period}</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                {job.duties.map((duty, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-bold">•</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
