import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="section-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo/Name */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Protein Design Portfolio
            </h3>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary-500 to-green-500 mx-auto mb-6 rounded-full" />

          {/* Copyright */}
          <p className="text-gray-400 mb-4">
            © {currentYear} All rights reserved.
          </p>

          {/* Made with love */}
          <motion.div
            className="flex items-center justify-center gap-2 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-primary-400" />
            <span>for advancing protein science</span>
          </motion.div>

          {/* Tech Stack Note */}
          <motion.p
            className="text-gray-500 text-xs mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Built with React, TailwindCSS, and Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
