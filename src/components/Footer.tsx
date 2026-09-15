import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Phone, MapPin, Mail, Navigation } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="bg-brand-orange text-white p-2 rounded shrink-0">
                <Building2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-oswald font-bold text-xl leading-none text-white tracking-wide">
                  ONYIITEX
                </span>
                <span className="font-oswald text-xs font-medium text-brand-light-gray tracking-[0.2em] leading-none mt-1">
                  CONSTRUCTION
                </span>
              </div>
            </Link>
            <p className="text-brand-light-gray mb-6 text-sm leading-relaxed">
              Professional general contracting and construction solutions for residential, commercial, renovation, and building projects.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/onyiitexconstructioncompanyltd/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-orange p-2 rounded transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/onyiitexconstruction/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-orange p-2 rounded transition-colors">
                <Instagram size={20} />
              </a>
              {/* TikTok icon using a generic play or navigation icon as standard lucide doesn't have tiktok, or use svg */}
              <a href="https://www.instagram.com/onyiitexconstruction/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brand-orange p-2 rounded transition-colors">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-oswald text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-brand-orange inline-block"></span>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-brand-light-gray hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-oswald text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-brand-orange inline-block"></span>
              OUR SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                'New Home Construction',
                'General Building Construction',
                'Commercial Projects',
                'Building Design',
                'Home Renovations',
                'Accessory Building Construction',
                'Metal Building Construction',
                'General Construction'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-brand-light-gray hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-orange rounded-full"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-oswald text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-brand-orange inline-block"></span>
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-light-gray text-sm">
                <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
                <span>153 Ziks Avenue,<br />Awka 420109,<br />Anambra State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-brand-light-gray text-sm">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <span>0806 129 4537</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-light-gray/60">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© 2026 ONYIITEX CONSTRUCTION COMPANY LTD. All Rights Reserved.</p>
            <span className="hidden md:inline">•</span>
            <p>
              Developed By{' '}
              <a 
                href="https://mindwareconsult.com.ng/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-brand-orange transition-colors font-medium"
              >
                Mindware Consulting Ltd
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
