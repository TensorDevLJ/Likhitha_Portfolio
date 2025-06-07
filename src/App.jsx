import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Globe,
  Mail,
  Database,
  Brain,
  Code,
  Server,
  MousePointerClick,
  LayoutPanelLeft,
  Cpu,
  GitBranch,
  ActivitySquare,
  Workflow,
  Bot,
  ContactRound,
  Component,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Menu,
  X,
  Award,
  Home,
  User,
  MessageCircle,
  ChevronDown,
  Play,
  Star,
  Folder
} from 'lucide-react';

// Mock data based on your constants
const SECTION_LIST = [
  { id: 1, displayText: "HOME", sectionID: "home", icon: Home },
  { id: 2, displayText: "SKILLS", sectionID: "skills", icon: Award },
  { id: 3, displayText: "PROJECTS", sectionID: "projects", icon: Folder },
  { id: 4, displayText: "ABOUT", sectionID: "about", icon: User },
  { id: 5, displayText: "CONTACT", sectionID: "contact", icon: MessageCircle },
];

const TECH_STACK = [
  { name: "React", color: "#61DAFB", icon: Component },
  { name: "Node.js", color: "#68A063", icon: Server },
  { name: "MongoDB", color: "#47A248", icon: Database },
  { name: "Python", color: "#3776AB", icon: Cpu },
  { name: "AWS", color: "#FF9900", icon: Globe },
  { name: "Express", color: "#000000", icon: Code },
];

const PROJECTS = [
  {
    title: "Wanderlust",
    description: "A travel-friendly stay-booking platform built using the MERN stack. Includes authentication, accessible UI, and dynamic room listings.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    status: "Live",
    featured: true,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop",
    liveLink: "https://wanderlust-airbnb-6gli.onrender.com/",
    sourceLink: "https://github.com/Likhithaj123/wanderlust_airbnb.git",
  },
  {
    title: "Movie Recommender System",
    description: "Content-based recommendation system built using Python, Streamlit, and TMDB API. Provides trailer embedding and genre filters.",
    tech: ["Python", "AI/ML", "Firebase"],
    status: "Live",
    featured: true,
    image: "https://images.unsplash.com/photo-1489599843425-72d8c4aa8d5c?w=500&h=300&fit=crop",
    liveLink: "https://movie-recommendation-app-demo.vercel.app/",
    sourceLink: "https://github.com/Likhithaj123/Movie_recom_system.git",
  },
  {
    title: "Traffic Management System",
    description: "YOLOv8-powered smart signal system from a national-level hackathon. Reduced traffic waiting time using real-time object detection.",
    tech: ["Python", "YOLOv8", "Computer Vision"],
    status: "Prototype",
    featured: true,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    title: "Netflix-GPT",
    description: "An AI-powered movie suggestion app using the OpenAI API to deliver personalized recommendations in a Netflix-style interface.",
    tech: ["React", "OpenAI API", "Firebase"],
    status: "Paused",
    featured: true,
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&h=300&fit=crop",
    liveLink: "#",
    sourceLink: "https://github.com/Likhithaj123/netflix-gpt.git",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const NavigationBar = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Likhitha J
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {SECTION_LIST.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.sectionID)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.sectionID
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.displayText}
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-gray-800"
          >
            {SECTION_LIST.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.sectionID);
                  setIsMenuOpen(false);
                }}
                whileHover={{ x: 10 }}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {section.displayText}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );

  const HeroSection = () => (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
      
      {/* Floating particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            animate={floatingAnimation}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Building exceptional digital experiences with modern technologies and creative solutions
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold flex items-center justify-center gap-2"
          >
            <Play size={20} />
            View My Work
          </motion.button>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-400 rounded-full text-gray-300 font-semibold hover:border-white hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-12"
        >
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Icon size={24} className="text-gray-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </motion.section>
  );

  const SkillsSection = () => (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${tech.color}20`, border: `1px solid ${tech.color}40` }}
              >
                <tech.icon size={24} style={{ color: tech.color }} />
              </div>
              <h3 className="text-white font-semibold">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  const ProjectsSection = () => (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'Prototype' ? 'bg-yellow-500 text-black' :
                    'bg-gray-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.liveLink !== '#' && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.sourceLink !== '#' && (
                    <motion.a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:border-gray-500 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );

  const AboutSection = () => (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating innovative solutions that make a real impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience in MERN stack, Python, and cloud technologies, I enjoy 
              tackling complex problems and building scalable applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Projects", value: "15+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Technologies", value: "20+" },
                { label: "Hackathons", value: "5+" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={floatingAnimation}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );

  const ContactSection = () => (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can bring your ideas to life!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="mailto:your@email.com"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold flex items-center gap-3 text-lg"
          >
            <Mail size={24} />
            Get In Touch
          </motion.a>

          <div className="flex gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                title={social.label}
              >
                <social.icon size={28} className="text-gray-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavigationBar />
      
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default App;