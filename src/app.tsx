import NavBar from "./nav-bar.tsx";
import SkillsSection from "./skills/skills-section.tsx";
import AboutSection from "./about/about-section.tsx";
import Footer from "./footer/footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <NavBar />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
