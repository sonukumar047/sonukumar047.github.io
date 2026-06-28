import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import certifications from '../data/certifications';

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Continuous Learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <FiAward />
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{cert.title}</h3>
              <p className="text-accent-600 dark:text-accent-400 font-semibold mb-4">{cert.issuer}</p>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-8 flex-grow">
                {cert.description}
              </p>
              
              <a 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline w-full text-sm group-hover:bg-primary-600 group-hover:text-white dark:group-hover:text-white"
              >
                View Credential <FiExternalLink className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
