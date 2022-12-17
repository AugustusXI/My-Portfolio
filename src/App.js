import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
// ===================================================

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}