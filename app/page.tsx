"use client";

import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootSequence onDone={() => setBooted(true)} />
      <div
        className={`transition-opacity duration-700 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Nav />
        <main className="mx-auto max-w-4xl px-6">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}
