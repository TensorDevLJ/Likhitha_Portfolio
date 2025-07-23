import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { PageNavigation } from "./components/layout/PageNavigation";
import { Footer } from "./components/layout/Footer";
import { AIChatbot } from "./components/ui/AIChatbot";

// Import all pages
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import CollaborationsPage from "./pages/CollaborationsPage";
import AchievementsPage from "./pages/AchievementsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <PageNavigation />
        
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/collaborations" element={<CollaborationsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <AIChatbot />

        {/* Background elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </Router>
  );
};

export default App;