import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'an AI/ML Engineer.',
        'a Generative AI Developer.',
        'a Prompt Engineer.',
        'a Backend Developer.'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      backDelay: 1500,
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background decoration elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
              Sonu <span className="gradient-text">Kumar</span>
            </h1>
            <div className="text-2xl md:text-4xl font-semibold h-12 mb-8">
              I am <span ref={el} className="text-primary-600 dark:text-primary-400"></span>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto md:mx-0">
              Passionate about building scalable AI systems, LLM agents, and robust backend architectures.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="/resume/Sonu-Kumar-Resume-AI.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                Download Resume
              </a>
              <Link to="contact" smooth={true} offset={-70} duration={500} className="btn-outline w-full sm:w-auto cursor-pointer">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating CTA Card */}
        <div className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card p-8 max-w-sm animate-float hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2">Looking to hire?</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Available for AI/ML & backend roles. Let's build something great together.
            </p>
            <Link to="contact" smooth={true} offset={-70} duration={500} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline cursor-pointer group">
              Hire Me <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
