export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white border-t-2 border-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">EDUCATION</h2>
        <div className="h-1 w-32 bg-black mb-12"></div>

        <div className="space-y-12">
          {/* Degree */}
          <div className="pb-8 border-b-2 border-gray-300">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="font-bold uppercase text-sm">Degree</p>
                <p className="text-lg">Bachelor of Science (Senior)</p>
              </div>
              <div>
                <p className="font-bold uppercase text-sm">University</p>
                <p className="text-lg">Arizona State University</p>
              </div>
              <div>
                <p className="font-bold uppercase text-sm">Period</p>
                <p className="text-lg">Jan 2023 - May 2026</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold uppercase text-sm">Majors</p>
                <p className="text-lg">Mathematics (Statistics) & Psychology</p>
              </div>
              <div>
                <p className="font-bold uppercase text-sm">Minor</p>
                <p className="text-lg">Philosophy</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-bold uppercase text-sm">GPA</p>
                <p className="text-lg">4.00/4.00</p>
              </div>
              <div>
                <p className="font-bold uppercase text-sm">Honors</p>
                <p className="text-lg">Dean's List (Multiple Semesters)</p>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Scholarships</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• New American University Scholarship</li>
              <li>• Andre Levard Mackey Scholarship</li>
            </ul>
          </div>

          {/* Coursework */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Relevant Coursework</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold mb-2">Statistics & Data Science</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• STP 420 – Introductory Applied Statistics</li>
                  <li>• STP 421 – Probability</li>
                  <li>• STP 427 – Mathematical Statistics</li>
                  <li>• STP 429 – Applied Regression</li>
                  <li>• STP 470 – Predictive Analytics</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Psychology & Research</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• PSY 101 – Introduction to Psychology</li>
                  <li>• PSY 230 – Introduction to Statistics</li>
                  <li>• PSY 290 – Research Methods</li>
                  <li>• PSY 350 – Social Psychology</li>
                  <li>• PSY 434 – Cognitive Psychology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
