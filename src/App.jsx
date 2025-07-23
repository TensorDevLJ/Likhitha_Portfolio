import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SECTION_LIST } from "./utils/list";
import { HeroSection } from "./components/sections/HeroSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { BlogSection } from "./components/sections/BlogSection";
import { CollaborationsSection } from "./components/sections/CollaborationsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { AboutSection } from "./components/sections/AboutSection";
import { AIChatbot } from "./components/ui/AIChatbot";
import { Navigation } from "./components/layout/Navigation";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  // --- 1. Implement ScrollSpy to update active section ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTION_LIST.map((s) => document.getElementById(s.sectionID));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // --- 2. Create a function for smooth scrolling ---
  const handleNavClick = (sectionID) => {
    document.getElementById(sectionID)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation 
        activeSection={activeSection} 
        onNavClick={handleNavClick} 
      />

      {/* --- 3. Render all sections directly with corresponding IDs --- */}
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <section id="collaborations">
          <CollaborationsSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default App;