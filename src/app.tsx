import NavBar from "./nav-bar.tsx";
import Skills from "./skills/skills.tsx";
import AboutMe from "./about/about.tsx";
import Footer from "./footer/footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <NavBar />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
}
