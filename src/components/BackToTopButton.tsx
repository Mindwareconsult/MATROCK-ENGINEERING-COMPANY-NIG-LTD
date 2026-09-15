import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 bg-brand-charcoal text-white p-3 rounded-full shadow-lg hover:bg-brand-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
          <span className="absolute right-full mr-4 bg-brand-charcoal text-white text-sm font-medium py-1 px-3 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
