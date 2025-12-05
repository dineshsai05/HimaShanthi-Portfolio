export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 border-t-2 border-black">
      {/* Outer wide container for big cards */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        {/* Inner 4xl container just for heading so it aligns with ABOUT / RESEARCH */}
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
            PROJECTS
          </h2>
          <div className="h-1 w-24 bg-black mb-10"></div>
        </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid gap-8 md:grid-cols-2 justify-center">
          {/* Project 1 – Survey on Indian Undergraduate Students */}
          <div className="text-left group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-black">
              Survey on Indian Undergraduate Students’ Perceptions of Psychology and Mental Health
            </h3>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Applied Research &amp; Data Project · In Progress · Fall 2025
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Arizona State University · Independent Research
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>Designing and conducting a survey-based research study focused on Indian undergraduate students.</li>
              <li>Exploring perceptions of psychology as an academic degree and attitudes toward mental health importance.</li>
              <li>Aiming to understand awareness, stigma, and cultural views related to mental health among students.</li>
              <li>Collecting and analyzing data to identify key trends and insights.</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-[11px] text-gray-600">
              <span className="rounded-full bg-gray-100 px-2.5 py-1">Survey Research</span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1">Psychology</span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1">Mental Health</span>
            </div>
          </div>

          {/* Project 2 – ANCOVA Presentation */}
          <div className="text-left group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-black">
              ANCOVA Presentation
            </h3>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Spring 2024 · Class Project
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Arizona State University
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>Conducted thorough research to understand and apply ANCOVA techniques.</li>
              <li>Developed a presentation on ANCOVA using R and presentation tools such as Slidy.</li>
              <li>Presented findings and insights effectively in a classroom setting.</li>
            </ul>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 hover:text-gray-800"
            >
              View Presentation →
            </a>
          </div>

          {/* Project 3 – Sleep & Caffeine Study */}
          <div className="text-left group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-black">
              The Relationship Between University Students’ Sleep and Caffeine Intake (Correlational Study)
            </h3>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Spring 2024 · Class Project
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Arizona State University
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>Designed and distributed a survey via Google Forms to gather data from students.</li>
              <li>Conducted a literature review on the impact of caffeine intake on sleep patterns among students.</li>
              <li>Imported and cleaned data using Excel to ensure accuracy.</li>
              <li>Performed ANOVA and analyzed results using JASP and G*Power.</li>
              <li>Authored a comprehensive research paper detailing findings and insights.</li>
            </ul>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 hover:text-gray-800"
            >
              View Paper →
            </a>
          </div>

          {/* Project 4 – Baseball Team Performance (SAS) */}
          <div className="text-left group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-black">
              Predictive Analysis of Team Performance in Baseball using SAS
            </h3>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Fall 2024 · Class Project
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Arizona State University
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>Developed a statistical model to predict team wins using historical baseball data.</li>
              <li>Conducted EDA and correlation analysis on Minnesota Twins batting records (1998–2024, excluding 2020).</li>
              <li>Built multiple regression models to identify key predictors of team wins, selecting runs and batting averages for a parsimonious model.</li>
              <li>Addressed multicollinearity and validated model assumptions to improve predictive accuracy.</li>
              <li>Provided data-driven insights into team performance metrics, contributing to baseball analytics research.</li>
            </ul>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 hover:text-gray-800"
            >
              View Project →
            </a>
          </div>

          {/* Project 5 – ADP Stock Price Prediction (SAS) */}
          <div className="text-left group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black">
            <h3 className="text-lg font-semibold mb-1 group-hover:text-black">
              Predicting Daily Stock Prices of ADP using SAS
            </h3>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Fall 2024 · Class Project
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Arizona State University
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>Created a predictive model for ADP stock prices based on financial indicators.</li>
              <li>Analyzed daily stock prices (11/01/2023–10/31/2024) in the Industrials sector of the S&amp;P 500.</li>
              <li>Applied EDA, correlation analysis, and multiple regression (stepwise, backward, forward selection) to determine significant predictors.</li>
              <li>Developed a quadratic regression model with strong explanatory power while addressing multicollinearity.</li>
              <li>Examined sector-specific dynamics and market trends influencing ADP’s stock behavior.</li>
            </ul>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 hover:text-gray-800"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
