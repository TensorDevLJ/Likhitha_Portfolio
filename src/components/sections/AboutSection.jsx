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

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const AboutSection = () => (
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
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web
              technologies. I love creating innovative solutions that make a real
              impact and solve complex problems.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              With experience in MERN stack, Python, and cloud technologies, I
              enjoy tackling challenging projects and building scalable applications
              that provide exceptional user experiences.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or mentoring aspiring developers
              in the community.
            </p>
          </div>

          {/* Skills Progress */}
          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-bold text-white mb-4">Technical Expertise</h3>
            {[
              { skill: "Frontend Development", level: 90 },
              { skill: "Backend Development", level: 85 },
              { skill: "Database Design", level: 80 },
              { skill: "Cloud Technologies", level: 75 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-blue-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={floatingAnimation}
          className="relative order-1 lg:order-2"
        >
       <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-400 rounded-full p-1">
  <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
    <img
      src="/images/image1.jpg"
      alt="profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🚀</span>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
      >
        {[
          { label: "Projects Completed", value: "15+" },
          { label: "Years Experience", value: "2+" },
          { label: "Technologies Mastered", value: "20+" },
          { label: "Hackathons Won", value: "5+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Personal Interests */}
      <motion.div
        variants={itemVariants}
        className="mt-12 sm:mt-16 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Beyond Coding</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: "🎵", label: "Music" },
            { icon: "📚", label: "Reading" },
            { icon: "🏃‍♂️", label: "Fitness" },
            { icon: "🎮", label: "Gaming" },
            { icon: "✈️", label: "Travel" },
            { icon: "📷", label: "Photography" },
          ].map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            >
              <span className="text-2xl">{interest.icon}</span>
              <span className="text-gray-300 text-sm">{interest.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);