import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bone-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <Projects />
        <Process />
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
