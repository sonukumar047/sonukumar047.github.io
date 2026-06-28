import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-light-border dark:border-dark-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          
          <div className="text-center md:text-left mb-8 md:mb-0">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-display font-bold inline-block mb-4">
              Sonu <span className="gradient-text">Kumar</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto md:mx-0">
              Building intelligent systems, scalable backend services, and elegant user interfaces.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/sonukumar047" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors transform hover:scale-110" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sonu-kumar-6868b7276/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors transform hover:scale-110" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/sanu0047/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors transform hover:scale-110" aria-label="Instagram">
              <FiInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008451156756" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-500 transition-colors transform hover:scale-110" aria-label="Facebook">
              <FiFacebook size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center mb-4 md:mb-0">
            Made with <FiHeart className="mx-1 text-red-500" /> by Sonu Kumar
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
