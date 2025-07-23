import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SECTION_LIST } from "../../utils/list";

export const PageNavigation = () => {
  const location = useLocation();

  const getCurrentIndex = () => {
    const currentPath = location.pathname;
    return SECTION_LIST.findIndex(section => {
      const routePath = section.sectionID === 'home' ? '/' : `/${section.sectionID}`;
      return routePath === currentPath;
    });
  };

  const currentIndex = getCurrentIndex();
  const prevSection = currentIndex > 0 ? SECTION_LIST[currentIndex - 1] : null;
  const nextSection = currentIndex < SECTION_LIST.length - 1 ? SECTION_LIST[currentIndex + 1] : null;

  const getRoutePath = (sectionID) => {
    return sectionID === 'home' ? '/' : `/${sectionID}`;
  };

  if (currentIndex === -1) return null;

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 z-40">
      {/* Previous Page Arrow */}
      {prevSection && (
        <Link to={getRoutePath(prevSection.sectionID)}>
          <motion.div
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:border-gray-600 transition-colors group"
            title={`Previous: ${prevSection.displayText}`}
          >
            <ChevronLeft size={24} className="text-gray-300 group-hover:text-white" />
          </motion.div>
        </Link>
      )}

      {/* Next Page Arrow */}
      {nextSection && (
        <Link to={getRoutePath(nextSection.sectionID)}>
          <motion.div
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700 hover:border-gray-600 transition-colors group"
            title={`Next: ${nextSection.displayText}`}
          >
            <ChevronRight size={24} className="text-gray-300 group-hover:text-white" />
          </motion.div>
        </Link>
      )}

      {/* Page Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
        {SECTION_LIST.map((section, index) => (
          <Link key={section.id} to={getRoutePath(section.sectionID)}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-400' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              title={section.displayText}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};