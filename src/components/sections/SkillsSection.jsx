import { TECH_STACK } from "../../utils/list";
import { motion } from "framer-motion";
import React from "react";

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

export const SkillsSection = () => (
  <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {TECH_STACK.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -10 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: `${tech.color}20`,
                border: `1px solid ${tech.color}40`,
              }}
            >
              <tech.icon size={20} style={{ color: tech.color }} />
            </div>
            <h3 className="text-white font-semibold text-sm sm:text-base">{tech.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills Categories */}
      <motion.div
        variants={itemVariants}
        className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {[
          {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
            color: "from-blue-500 to-cyan-500"
          },
          {
            title: "Backend",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
            color: "from-green-500 to-emerald-500"
          },
          {
            title: "Tools & Others",
            skills: ["Git", "Docker", "AWS", "Figma", "Jest"],
            color: "from-purple-500 to-pink-500"
          }
        ].map((category, index) => (
          <div
            key={index}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
          >
            <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);