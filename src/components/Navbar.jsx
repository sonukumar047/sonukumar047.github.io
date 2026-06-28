import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer text-2xl font-display font-bold">
          Sonu <span className="gradient-text">Kumar</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  activeClass="text-primary-600 dark:text-primary-400 font-semibold"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle Dark Mode">
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a href="/resume/Sonu-Kumar-Resume-AI.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2" aria-label="Toggle Dark Mode">
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none" aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-nav flex flex-col items-center py-6 space-y-4 shadow-xl border-t border-light-border dark:border-dark-border animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              activeClass="text-primary-600 dark:text-primary-400 font-bold"
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-lg cursor-pointer hover:text-primary-500 transition-colors w-full text-center py-2"
            >
              {link.name}
            </Link>
          ))}
          <a href="/resume/Sonu-Kumar-Resume-AI.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary w-[200px] mt-4" onClick={() => setIsOpen(false)}>
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
