import { Toaster } from "react-hot-toast";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import SectionNav from "./components/SectionNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      <ScrollProgress />

      {/* Original purple-tinted depth gradient (grid lives in the Hero) */}
      <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <Navbar />
      <SectionNav />

      <main className="container px-6 mx-auto md:px-8">
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Education />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default App;
