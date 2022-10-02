import React from "react";
import About from "./Home/About";
import Contact from "./Home/Contact";
import LandingPage from "./Home/LandingPage";
import Projects from "./Home/Projects";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
