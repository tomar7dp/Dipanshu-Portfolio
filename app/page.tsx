import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Channels from "@/components/Channels";
import Journey from "@/components/Journey";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Channels />
        <Journey />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
