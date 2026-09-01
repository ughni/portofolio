import About from "./components/sections/about/page";
import CertificationsSection from "./components/sections/certifications/CertificationsSection";
import ContactSection from "./components/sections/contact/ContactSection";
import EducationSection from "./components/sections/education/EducationSection";
import ExperienceSection from "./components/sections/experience/ExperienceSection";
import Hero from "./components/sections/home/Hero";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import SkillsSection from "./components/sections/skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection/>
      <EducationSection/>
      <ContactSection/>
    </main>
  );
}
