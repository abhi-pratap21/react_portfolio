import { Toaster } from "react-hot-toast";
import CursorGlow from "./components/CursorGlow";
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
      <CursorGlow />

      {/* Background */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute rounded-full -left-24 -top-24 h-72 w-72 bg-purple-600/20 blur-3xl animate-blob" />
        <div
          className="absolute rounded-full top-1/3 -right-24 h-72 w-72 bg-cyan-500/20 blur-3xl animate-blob"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="absolute rounded-full bottom-0 left-1/3 h-72 w-72 bg-pink-500/10 blur-3xl animate-blob"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <Navbar />
      <SectionNav />

      <main className="container px-6 pt-28 mx-auto md:px-8">
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
