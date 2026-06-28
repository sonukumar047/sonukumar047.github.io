import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-300 hover:-translate-y-1 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FiChevronUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTop;
