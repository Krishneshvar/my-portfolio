import NavBar from "../components/modern/NavBar";
import HeroSection from "../components/modern/HeroSection";
import Footer from "../components/modern/Footer";
import SkillsSection from "../components/modern/SkillsSection";
import ProjectsSection from "../components/modern/ProjectsSection";
import ContactSection from "../components/modern/ContactSection";

export default function ModernPortfolio() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-[#C0EEF2]">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
