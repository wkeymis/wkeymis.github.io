import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { methodReferences } from '../data/methodReferences';
import ProteinViewer from './ProteinViewer';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer card-hover"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      {/* 3D Protein Viewer */}
      <div className="relative h-56 bg-gradient-to-br from-primary-100 via-accent-100 to-purple-100 overflow-hidden">
        <ProteinViewer objPath={project.objPath} height="100%" width="100%" />
        
        {/* Floating icon */}
        <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg pointer-events-none">
          <ExternalLink className="w-5 h-5 text-primary-600" />
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2 text-gray-800">
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header 3D Viewer */}
        <div className="relative h-72 bg-gradient-to-br from-primary-100 via-accent-100 to-purple-100">
          <ProteinViewer objPath={project.objPath} height="100%" width="100%" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-4xl font-display font-bold mb-2">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Design Goal */}
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold mb-3 text-gray-800">
              Design Goal
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.designGoal}
            </p>
          </div>

          {/* Full Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold mb-3 text-gray-800">
              Description
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Methods */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-gray-800">
              Methods & Tools
            </h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {project.methods.map((methodKey, index) => {
                  const method = methodReferences[methodKey] || { name: methodKey };
                  return (
                    <div key={index} className="group relative">
                      <a
                        href={method.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 bg-white border-2 border-primary-200 text-primary-700 rounded-full font-medium hover:border-primary-400 transition-colors ${!method.url ? 'cursor-default' : 'hover:shadow-md'}`}
                      >
                        {method.name}
                        {method.url && <LinkIcon className="ml-2 w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />}
                      </a>
                      {method.url && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          {method.authors} ({method.year || 'N/A'})
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-t-gray-800 border-l-transparent border-r-transparent"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Click on a method to view the corresponding paper
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-container bg-white/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Design <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-green-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore my computational protein design projects, from enzyme engineering to de novo design
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
