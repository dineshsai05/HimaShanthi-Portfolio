export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming & Statistical Tools",
      skills: ["Java", "R", "C", "MATLAB", "SAS", "JASP", "SQL", "LaTeX", "HTML"],
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Tableau", "Excel", "Google Sheets", "Qualtrics", "SurveyMonkey"],
    },
    {
      category: "Research & Collaboration",
      skills: ["Slack", "Teams", "Zoom", "Microsoft Word", "PowerPoint", "OneDrive", "Dropbox"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">SKILLS</h2>
        <div className="h-1 w-32 bg-black mb-12"></div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold uppercase mb-6 tracking-wide">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-400"></span>
                    {skill}
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
