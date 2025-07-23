import { PROJECTS } from "../../utils/list";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import React, { useState } from "react";
import { PREVIEW_IMAGE_GENRATE_URL } from "../../utils/constants";

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

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filters = ["All", "Live", "Prototype", "Completed"];
  
  const filteredProjects = PROJECTS.filter(project => 
    filter === "All" || project.status === filter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          A showcase of my recent work and contributions to various projects
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === filterOption
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filterOption}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={PREVIEW_IMAGE_GENRATE_URL + project.liveLink}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live"
                        ? "bg-green-500 text-white"
                        : project.status === "Prototype"
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {project.liveLink !== "#" && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.sourceLink !== "#" && (
                    <motion.a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:border-gray-500 hover:text-white transition-colors"
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

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            variants={itemVariants}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {showAll ? "Show Less" : `Show All ${filteredProjects.length} Projects`}
            </button>
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {[
            { label: "Total Projects", value: PROJECTS.length },
            { label: "Live Projects", value: PROJECTS.filter(p => p.status === "Live").length },
            { label: "Technologies Used", value: "15+" },
            { label: "GitHub Stars", value: "100+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 bg-gray-800/30 rounded-lg border border-gray-700"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};