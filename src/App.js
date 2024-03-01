
import React, { useRef } from 'react';
import WelcomeSection from "./components/WelcomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";



function App() {

  const aboutRef = useRef(null);

  return (
    <>
      <WelcomeSection aboutRef={aboutRef} />
      <AboutSection aboutRef={aboutRef} />
      <ProjectsSection />
      <ContactSection />
      <FooterSection aboutRef={aboutRef} />
    </>
  )
}

export default App
