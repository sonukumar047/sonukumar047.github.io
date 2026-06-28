import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi';
import projectsData from '../data/projects';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'web', label: 'Web Dev' },
    { id: 'db', label: 'Database' },
  ];

  useEffect(() => {
    const results = projectsData.filter((project) => {
      const matchesFilter = filter === 'all' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
    setFilteredProjects(results);
  }, [filter, searchQuery]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've Built</p>
        </div>

        {/* Controls: Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-white/50 dark:bg-slate-800/50 p-1 rounded-full backdrop-blur-sm border border-light-border dark:border-dark-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-primary-500 text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-light-border dark:border-dark-border text-slate-800 dark:text-slate-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
          </div>

        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-card flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top Border Accent */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.featured ? 'from-primary-500 to-accent-500' : 'from-slate-400 to-slate-500'}`}></div>
                
                <div className="p-6 flex flex-col flex-grow">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                      <p className="text-sm font-semibold text-accent-500">{project.subtitle}</p>
                    </div>
                    
                    <div className="flex space-x-3 text-slate-500 dark:text-slate-400">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors" aria-label="GitHub Repo">
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors" aria-label="Live Demo">
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-xl">No projects found matching your criteria.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
