import React from "react";
import {
  Play,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const HeroSection = () => (
  <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
  >
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />

    {/* Floating particles */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-400/30 rounded-full"
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

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
        <motion.div
          animate={floatingAnimation}
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1"
        >
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-2xl sm:text-4xl">
            👨‍💻
          </div>
        </motion.div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
      >
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Full Stack Developer
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
      >
        Building exceptional digital experiences with modern technologies and
        creative solutions
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
      >
        <Link to="/projects">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Play size={18} />
            View My Work
          </motion.button>
        </Link>

        <motion.a
          href="#"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gray-400 rounded-full text-gray-300 font-semibold hover:border-white hover:text-white transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Download size={18} />
          Download Resume
        </motion.a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
      >
        {[
          { Icon: Github, href: "#", label: "GitHub" },
          { Icon: Linkedin, href: "#", label: "LinkedIn" },
          { Icon: Mail, href: "#", label: "Email" }
        ].map(({ Icon, href, label }, index) => (
          <motion.a
            key={index}
            href={href}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            aria-label={label}
          >
            <Icon size={20} className="text-gray-300" />
          </motion.a>
        ))}
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <ChevronDown size={28} className="text-gray-400" />
    </motion.div>
  </motion.section>
);