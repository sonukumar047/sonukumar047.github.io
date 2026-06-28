import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Sonu delivered production-grade LLM tooling for our analytics team — fast, thoughtful and reliable.",
    author: "Product Lead",
    company: "Monocept"
  },
  {
    id: 2,
    text: "His AskDB agent saved hours for non-technical stakeholders — brilliant engineering and UX.",
    author: "Data Engineer",
    company: "Monocept"
  },
  {
    id: 3,
    text: "Excellent backend skills — API design and migrations were seamless and well-tested.",
    author: "Engineering Manager",
    company: "SuperSeva"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary-500 to-accent-400 blur-3xl"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-primary-600 to-primary-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Testimonials</h2>
          <p className="text-primary-200 uppercase tracking-wider font-semibold">What people say</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative min-h-[250px] flex items-center justify-center">
            
            <div className="absolute top-0 left-0 text-6xl text-primary-500/50 font-serif">"</div>
            <div className="absolute bottom-0 right-0 text-6xl text-primary-500/50 font-serif rotate-180">"</div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-8 md:px-16"
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                  {testimonials[currentIndex].text}
                </p>
                <div>
                  <h4 className="text-lg font-bold text-accent-300">- {testimonials[currentIndex].author}</h4>
                  <p className="text-primary-200">{testimonials[currentIndex].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>

          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-accent-400 w-8' : 'bg-primary-500 hover:bg-primary-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
