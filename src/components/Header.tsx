import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
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
    handleScroll();
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md',
        isScrolled 
          ? 'py-2.5 bg-white/95 shadow-md border-brand-orange/30' 
          : 'py-3.5 sm:py-4 bg-white/95 border-slate-200/80 shadow-xs'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0" title="MATROCK ENGINEERING COMPANY NIG LTD">
          <img
            src="/images/matrock/MLOGO.PNG"
            alt="MATROCK ENGINEERING COMPANY NIG LTD"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-oswald font-bold text-lg sm:text-2xl leading-none text-brand-charcoal tracking-wide group-hover:text-brand-orange transition-colors">
              MATROCK
            </span>
            <span className="font-oswald text-[9px] sm:text-[11px] font-semibold text-brand-medium-gray tracking-[0.16em] sm:tracking-[0.2em] leading-none mt-1">
              ENGINEERING CO. NIG LTD
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
                'font-oswald font-medium tracking-wider text-sm transition-colors relative py-1 hover:text-brand-orange',
                getIsActive(link.path) ? 'text-brand-orange font-semibold' : 'text-slate-700'
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute -bottom-0.5 left-0 h-0.5 bg-brand-orange transition-all duration-300 rounded-full",
                  getIsActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
          
          <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
            <Link
              to="/contact"
              className="bg-brand-orange text-white font-oswald font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-brand-charcoal hover:shadow transition-all tracking-wide text-xs sm:text-sm whitespace-nowrap inline-flex items-center gap-1.5"
            >
              GET A QUOTE
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/contact"
            className="bg-brand-orange text-white font-oswald font-semibold px-3 py-1.5 rounded-md text-xs tracking-wider"
          >
            QUOTE
          </Link>
          <button
            className="text-brand-charcoal p-2 focus:outline-none rounded-lg hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-t border-brand-border shadow-2xl">
          <nav className="flex flex-col px-5 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'font-oswald font-medium tracking-wide py-3 border-b border-slate-100 text-base transition-colors hover:text-brand-orange flex items-center justify-between',
                  getIsActive(link.path) ? 'text-brand-orange font-semibold' : 'text-slate-800'
                )}
              >
                <span>{link.name}</span>
                {getIsActive(link.path) && <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>}
              </Link>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="bg-brand-orange text-white font-oswald text-center font-semibold px-5 py-3 rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors tracking-wide text-sm"
              >
                REQUEST A PROJECT QUOTE
              </Link>
              <a
                href="tel:08061294537"
                className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-oswald font-medium py-2.5 rounded-lg text-xs tracking-wider"
              >
                <PhoneCall size={14} className="text-brand-orange" /> CALL 0806 129 4537
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
