import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { ResearchSection } from "@/components/research-section"
import { ProjectsSection } from "@/components/projects-section"
import { EssaysSection } from "@/components/essays-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <EssaysSection />
        <SkillsSection />
        <ContactSection />
        <ScrollToTop />
      </main>
    </div>
  )
}
