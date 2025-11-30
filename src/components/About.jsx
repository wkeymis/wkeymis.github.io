import React from 'react';
import { motion } from 'framer-motion';
import { User, Dna, Wrench } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl">
                <User className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-gray-800">
                  Background
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests and Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Research Interests */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-accent-100 rounded-2xl">
                  <Dna className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-800">
                  Design Capabilities
                </h3>
              </div>
              <ul className="space-y-3">
                {personalInfo.interests.map((interest, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-accent-500 rounded-full" />
                    <span className="text-lg">{interest}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl">
                  <Wrench className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-800">
                  Tools & Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {personalInfo.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full border-2 border-primary-200 hover:border-primary-400 transition-colors cursor-default">
                      <span className="text-sm font-medium text-gray-700">
                        {tool.name}
                      </span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tool.category}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
