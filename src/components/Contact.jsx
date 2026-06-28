import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Placeholder for EmailJS integration
    // Replace this setTimeout with actual emailjs.sendForm call later
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Let's Connect</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex flex-col space-y-8"
          >
            <div className="glass-card p-8 flex-grow">
              <h3 className="text-3xl font-display font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                Whether you have a question, a project proposition, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center text-xl shrink-0">
                    <FiMail />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold">Email</h4>
                    <a href="mailto:sonuhits047@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                      sonuhits047@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center text-xl shrink-0">
                    <FiPhone />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold">Phone</h4>
                    <a href="tel:+917595020599" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                      +91 7595020599
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center text-xl shrink-0">
                    <FiMapPin />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-bold">Location</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Gurugram, Haryana, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-light-border dark:border-dark-border">
                <h4 className="text-lg font-bold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/sonukumar047" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sonu-kumar-6868b7276/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-8">Send me a message</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800 text-sm font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`mt-8 w-full btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <FiSend className="ml-2" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
