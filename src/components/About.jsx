import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiUser, FiBriefcase, FiMapPin, FiLinkedin, FiGithub, FiPhone, FiMail } from 'react-icons/fi';
import profilePic from '../assets/images/profile.jpeg';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const infoList = [
    { icon: <FiUser />, label: 'Name', value: 'Sonu Kumar' },
    { icon: <FiBriefcase />, label: 'Organization', value: 'TRC Corporate Consulting Pvt. Ltd.' },
    { icon: <FiMapPin />, label: 'Location', value: 'Gurugram, Haryana, India' },
    { icon: <FiPhone />, label: 'Phone', value: '+91 7595020599' },
    { icon: <FiMail />, label: 'Email', value: 'sonuhits047@gmail.com' },
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sonu-kumar-6868b7276/' },
    { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/sonukumar047' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Introduction</p>
        </div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column - Image and Info */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex flex-col items-center">
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-accent-500/30 z-10 mix-blend-overlay"></div>
              {/* Fallback to a placeholder if image is missing during dev */}
              <img 
                src={profilePic} 
                alt="Sonu Kumar" 
                className="w-full h-full object-cover z-0 relative hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Sonu+Kumar&size=512&background=6366f1&color=fff'; }}
              />
            </div>

            <div className="w-full glass-card p-6">
              <ul className="space-y-4">
                {infoList.map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 dark:text-slate-300">
                    <span className="text-primary-500 mr-4 text-xl">{item.icon}</span>
                    <span className="font-semibold w-28 text-sm uppercase tracking-wider">{item.label}</span>
                    <span className="flex-1 font-medium">{item.value}</span>
                  </li>
                ))}
                
                {socialLinks.map((item, index) => (
                  <li key={item.label} className="flex items-center text-slate-700 dark:text-slate-300">
                    <span className="text-primary-500 mr-4 text-xl">{item.icon}</span>
                    <span className="font-semibold w-28 text-sm uppercase tracking-wider">{item.label}</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex-1 font-medium hover:text-primary-500 transition-colors">
                      {item.label === 'LinkedIn' ? 'Sonu Kumar' : 'sonukumar047'}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div variants={itemVariants} className="w-full lg:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p className="text-xl leading-relaxed mb-6">
                🤖 Ha ha ha… who knew one <code className="bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 px-2 py-1 rounded">"Hello World!"</code> would lead to building intelligent systems powered by AI and LLMs?
              </p>
              
              <p className="mb-6">
                I'm <strong>Sonu Kumar</strong>, an AI enthusiast turned engineer who evolved from debugging C programs to developing advanced AI-driven applications. My journey began with curiosity and has grown into a passion for solving real-world problems using cutting-edge technologies.
              </p>

              <p className="mb-6">
                I specialize in creating smart systems with <strong>Large Language Models</strong>, <strong>LangChain</strong>, <strong>LangGraph</strong>, and <strong>RAG</strong> architectures. One of my key projects, <strong>AskDB</strong>, translates natural language into executable SQL using LLMs — making database access conversational and intuitive.
              </p>

              <p className="mb-6">
                In another project, I used <strong>OCR</strong> and <strong>YOLOv8</strong> to detect and mask Aadhar numbers from images, addressing data privacy through AI and computer vision. These solutions showcase my ability to combine NLP, vision, and automation to create secure, scalable tools.
              </p>

              <p className="mb-6">
                On the backend, I build robust APIs using <strong>Java Spring Boot</strong> and <strong>FastAPI</strong> to support these AI pipelines and integrate them with external platforms seamlessly. I focus on clean architecture, scalable design, and performance optimization.
              </p>

              <p className="mb-6 text-primary-600 dark:text-primary-400 font-medium italic">
                Let’s build AI systems that are smart, helpful, and maybe a little funny too. 😄
              </p>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Completed' },
                { number: '3', label: 'Certifications' },
                { number: '1M+', label: 'Lines of Code' }
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-4 text-center">
                  <h3 className="text-3xl font-display font-bold gradient-text mb-1">{stat.number}</h3>
                  <p className="text-sm text-slate-500 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
