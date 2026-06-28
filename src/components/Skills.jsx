import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import skillCategories from '../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Tech Stack & Tools</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card p-8">
              
              <h3 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400 border-b border-light-border dark:border-dark-border pb-3">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-primary-500 transition-colors">{skill.name}</span>
                      <span className="text-xs text-slate-400">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Meter */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full skill-fill-animate relative"
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      >
                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-white/20 overflow-hidden">
                          <div className="w-full h-full -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Skills;
