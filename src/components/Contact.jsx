import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, Sparkles } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a backend
    // For now, we'll just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: `mailto:${contactInfo.email}`, color: 'from-red-400 to-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', href: contactInfo.linkedin, target: '_blank', color: 'from-blue-500 to-blue-600' },
    { icon: Github, label: 'GitHub', href: `https://github.com/${contactInfo.github}`, target: '_blank', color: 'from-gray-700 to-gray-900' },
    { icon: Phone, label: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\D/g, '')}`, color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section id="contact" className="section-container bg-white/30">
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
            Let's <span className="gradient-text">Collaborate</span>
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
            Interested in collaboration or have questions about my work? Get in touch!
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4 sm:px-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6 text-gray-800">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors bg-white text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors bg-white text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none bg-white"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6 text-gray-800">
                Direct Contact
              </h3>
              <div className="space-y-6 md:space-y-8">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 transition-colors group"
                >
                  <div className="p-2 sm:p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">Email</div>
                    <div className="text-sm sm:text-base text-gray-800 font-semibold break-words">{contactInfo.email}</div>
                  </div>
                </a>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 transition-colors group"
                >
                  <div className="p-2 sm:p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm text-gray-500 font-medium">Phone</div>
                    <div className="text-sm sm:text-base text-gray-800 font-semibold">{contactInfo.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-4 sm:mb-6 text-gray-800">
                Connect Online
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`p-3 bg-gradient-to-br ${link.color} rounded-xl shadow-md`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-medium text-gray-700">{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Note */}
            <motion.div
              className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-4 sm:p-6 border-2 border-primary-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">Open to Collaboration</h4>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600">
                    I'm currently available for freelance projects and collaboration opportunities.
                    Let's create something amazing together!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
