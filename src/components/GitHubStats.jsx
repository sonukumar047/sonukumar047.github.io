import React from 'react';
import { useInView } from '../hooks/useInView';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GitHubStats = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { isDarkMode } = useTheme();

  const theme = isDarkMode ? 'tokyonight' : 'react';

  return (
    <section id="github-stats" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="section-title">GitHub Statistics</h2>
          <p className="section-subtitle">My Open Source Contributions</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col xl:flex-row gap-6 justify-center items-center xl:items-start"
        >
          
          <div className="flex flex-col gap-6 w-full xl:w-auto items-center">
            <a href="https://github.com/sonukumar047" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300 w-full max-w-md">
              <img 
                src={`https://github-readme-streak-stats.herokuapp.com?user=sonukumar047&theme=${theme}&hide_border=true&background=${isDarkMode ? '1e293b' : 'ffffff'}&stroke=0000`} 
                alt="GitHub Streak Stats" 
                className="w-full rounded-xl shadow-lg border border-light-border dark:border-dark-border"
                loading="lazy"
              />
            </a>
            
            <a href="https://github.com/sonukumar047" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300 w-full max-w-md">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=sonukumar047&count_private=true&theme=${theme}&show_icons=true&hide_border=true&bg_color=${isDarkMode ? '1e293b' : 'ffffff'}`} 
                alt="GitHub Stats Card" 
                className="w-full rounded-xl shadow-lg border border-light-border dark:border-dark-border"
                loading="lazy"
              />
            </a>
          </div>

          <div className="w-full xl:w-auto flex justify-center">
            <a href="https://github.com/sonukumar047?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300 w-full max-w-md">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=sonukumar047&theme=${theme}&hide_border=true&layout=compact&bg_color=${isDarkMode ? '1e293b' : 'ffffff'}`} 
                alt="Top Languages" 
                className="w-full rounded-xl shadow-lg border border-light-border dark:border-dark-border"
                loading="lazy"
              />
            </a>
          </div>

        </motion.div>
        
      </div>
    </section>
  );
};

export default GitHubStats;
