import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Atom, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { pipelineSteps } from '../data/portfolioData';

// Icon mapping
const iconMap = {
  Dna: Dna,
  Atom: Atom,
  Zap: Zap,
  CheckCircle2: CheckCircle2
};

const Pipeline = () => {
  return (
    <section id="pipeline" className="section-container">
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
            Research <span className="gradient-text">Pipeline</span>
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
            My computational workflow for designing and validating novel proteins
          </motion.p>
        </div>

        {/* Pipeline Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {pipelineSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Connector Arrow (hidden on mobile, shown on larger screens) */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 z-0">
                      <ArrowRight className="w-8 h-8 text-primary-300" />
                    </div>
                  )}

                  {/* Step Card */}
                  <motion.div
                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 h-full hover:shadow-2xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 mt-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-semibold mb-3 text-center text-gray-800">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tools */}
                    <div className="space-y-2">
                      {step.tools.map((tool, toolIndex) => (
                        <motion.div
                          key={toolIndex}
                          className="flex items-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + toolIndex * 0.05 }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-green-500 rounded-full" />
                          <span className="text-gray-700">{tool}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Info Card */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-display font-semibold mb-2 text-gray-800">
                  Iterative Design Process
                </h3>
                <p className="text-gray-600">
                  Each design undergoes multiple rounds of optimization, combining computational predictions with experimental validation to achieve desired properties.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="px-6 py-3 bg-white rounded-full shadow-md">
                  <span className="text-sm font-semibold text-gray-700">
                    Avg. 3-5 iterations per design
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pipeline;
