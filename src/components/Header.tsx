import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { cn } from '../lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
        let current = '';
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            // Using a top offset to detect when a section is sufficiently in view
            if (rect.top <= window.innerHeight / 2.5) {
              current = sections[i];
              break;
            }
          }
        }
        
        if (current) {
          setActiveSection(current);
        } else if (window.scrollY === 0) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const getIsActive = (path: string) => {
    if (location.pathname === '/') {
      const sectionId = path === '/' ? 'home' : path.replace('/', '');
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b',
        isScrolled ? 'py-3 shadow-md border-brand-orange' : 'py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-charcoal text-brand-orange p-2 rounded shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
            <Building2 size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-oswald font-bold text-xl leading-none text-brand-charcoal tracking-wide">
              ONYIITEX
            </span>
            <span className="font-oswald text-xs font-medium text-brand-medium-gray tracking-[0.2em] leading-none mt-1">
              CONSTRUCTION
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-oswald font-medium tracking-wide text-sm transition-colors hover:text-brand-orange relative group',
                getIsActive(link.path) ? 'text-brand-orange' : 'text-brand-charcoal'
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300",
                  getIsActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-orange text-white font-oswald font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors tracking-tight"
          >
            GET A QUOTE
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-charcoal p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-brand-light-gray shadow-lg">
          <nav className="flex flex-col px-4 pt-2 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-oswald font-medium tracking-wide py-3 border-b border-brand-light-gray text-lg transition-colors hover:text-brand-orange',
                  getIsActive(link.path) ? 'text-brand-orange' : 'text-brand-charcoal'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 bg-brand-orange text-white font-oswald text-center font-medium px-6 py-3 rounded hover:bg-brand-charcoal transition-colors tracking-wide"
            >
              GET A QUOTE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
