import About from "../components/sections/About.jsx";
import Contact from "../components/sections/Contact.jsx";
import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Resume from "../components/sections/Resume.jsx";
import Skills from "../components/sections/Skills.jsx";

function Home() {
  return (
    <main className="portfolio-main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}

export default Home;