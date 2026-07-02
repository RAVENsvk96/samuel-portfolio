import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}