import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Award, 
  Trophy, 
  Star, 
  Calendar, 
  Shield, 
  Filter,
  Search,
  X,
  CheckCircle,
  Code,
  Database,
  Cloud,
  Network
} from "lucide-react";
import { CODING_PROFILES, CERTIFICATES } from "../utils/list";

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

const AchievementsPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateFilter, setCertificateFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const certificateTypes = ["All", ...new Set(CERTIFICATES.map(cert => cert.type))];
  
  const filteredCertificates = CERTIFICATES.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = certificateFilter === "All" || cert.type === certificateFilter;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "Cloud": return Cloud;
      case "Development": return Code;
      case "Database": return Database;
      case "Networking": return Network;
      case "Data Science": return Trophy;
      default: return Award;
    }
  };

  const CodingProfileCard = ({ profile }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{profile.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
            <p className="text-gray-400 text-sm">@{profile.username}</p>
          </div>
        </div>
        <motion.a
          href={profile.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors"
        >
          <ExternalLink size={18} className="text-blue-400" />
        </motion.a>
      </div>

      <p className="text-gray-300 text-sm mb-4">{profile.description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        {Object.entries(profile.stats).map(([key, value], index) => (
          <div key={index} className="text-center p-2 bg-gray-700/30 rounded-lg">
            <div className="text-lg font-bold text-blue-400">{value}</div>
            <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
          </div>
        ))}
      </div>

      <motion.a
        href={profile.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full px-4 py-2 bg-gradient-to-r ${profile.color} rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-shadow`}
      >
        <Trophy size={16} />
        View Profile
      </motion.a>
    </motion.div>
  );

  const CertificateCard = ({ certificate }) => {
    const TypeIcon = getTypeIcon(certificate.type);
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -10 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group cursor-pointer"
        onClick={() => setSelectedCertificate(certificate)}
      >
        <div className="relative overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-48 object-cover transition-transform group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold flex items-center gap-1">
              <TypeIcon size={12} />
              {certificate.type}
            </span>
          </div>
          <div className="absolute top-4 left-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle size={16} className="text-white" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            {certificate.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Shield size={14} />
            <span>{certificate.issuer}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Calendar size={14} />
            <span>{new Date(certificate.date).toLocaleDateString()}</span>
          </div>

          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {certificate.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {certificate.skills.slice(0, 3).map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">
                +{certificate.skills.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300">
            View Certificate <ExternalLink size={14} className="ml-1" />
          </div>
        </div>
      </motion.div>
    );
  };

  const CertificateModal = ({ certificate, onClose }) => {
    const TypeIcon = getTypeIcon(certificate.type);
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-xl max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700 w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold flex items-center gap-1">
                <TypeIcon size={14} />
                {certificate.type}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">{certificate.title}</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield size={16} className="text-blue-400" />
                <span><strong>Issuer:</strong> {certificate.issuer}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={16} className="text-green-400" />
                <span><strong>Date:</strong> {new Date(certificate.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-300 leading-relaxed">{certificate.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Skills Covered</h3>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                <Shield size={16} />
                Verify Certificate
              </motion.a>
              <div className="flex-1 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-center">
                <span className="text-sm">ID: {certificate.credentialId}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Achievements & Certifications
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          My coding profiles, certifications, and professional achievements
        </motion.p>

        {/* Coding Profiles Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-400" />
            Coding Profiles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CODING_PROFILES.map((profile) => (
              <CodingProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0 flex items-center gap-3">
              <Award className="text-blue-400" />
              Certifications
            </h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none text-sm"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-400" />
                <select
                  value={certificateFilter}
                  onChange={(e) => setCertificateFilter(e.target.value)}
                  className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none text-sm"
                >
                  {certificateTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No certificates found matching your criteria.</p>
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: "Coding Platforms", value: CODING_PROFILES.length },
            { label: "Certifications", value: CERTIFICATES.length },
            { label: "Problems Solved", value: "500+" },
            { label: "Contest Participations", value: "30+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700"
            >
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AchievementsPage;