import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import experiences from '../data/experience';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My Professional Journey</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-primary-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-6 md:p-8 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-shadow duration-300">
                      
                      <div className="flex flex-col mb-4">
                        <span className="text-sm font-bold text-accent-500 uppercase tracking-wider mb-1">{exp.period}</span>
                        <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                        <h4 className="text-lg text-slate-600 dark:text-slate-400 font-medium">{exp.company}</h4>
                      </div>

                      <ul className="list-none space-y-2 mb-6">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2 mt-1">▹</span>
                            <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
