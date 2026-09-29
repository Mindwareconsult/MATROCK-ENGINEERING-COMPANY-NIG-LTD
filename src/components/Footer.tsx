import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t-4 border-brand-orange relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-flex" title="MATROCK ENGINEERING COMPANY NIG LTD">
              <div className="bg-white p-1.5 rounded-lg shadow-sm shrink-0">
                <img
                  src="/images/matrock/MLOGO.PNG"
                  alt="MATROCK ENGINEERING COMPANY NIG LTD"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-oswald font-bold text-xl leading-none text-white tracking-wide group-hover:text-brand-orange transition-colors">
                  MATROCK
                </span>
                <span className="font-oswald text-[10px] font-semibold text-slate-300 tracking-[0.18em] leading-none mt-1">
                  ENGINEERING CO. NIG LTD
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-light">
              Registered civil engineering and building construction contractors. Specializing in reinforced concrete structures, commercial complexes, and residential developments across Nigeria.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-brand-orange text-white p-2.5 rounded-lg transition-colors">
                <Facebook size={17} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-brand-orange text-white p-2.5 rounded-lg transition-colors">
                <Instagram size={17} />
              </a>
              <a href="mailto:info@matrockengineering.com.ng" aria-label="Email" className="bg-white/10 hover:bg-brand-orange text-white p-2.5 rounded-lg transition-colors">
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-oswald text-base sm:text-lg mb-5 flex items-center gap-2 tracking-wide !text-white uppercase font-bold">
              <span className="w-1.5 h-4 bg-brand-orange inline-block rounded-xs"></span>
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home Overview', path: '/' },
                { name: 'About The Firm', path: '/about' },
                { name: 'Engineering Services', path: '/services' },
                { name: 'Site Portfolio', path: '/projects' },
                { name: 'Technical Insights', path: '/blog' },
                { name: 'Contact & Location', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-2 group font-light"
                  >
                    <span className="w-1 h-1 bg-brand-orange/60 rounded-full group-hover:w-2 transition-all"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-oswald text-base sm:text-lg mb-5 flex items-center gap-2 tracking-wide !text-white uppercase font-bold">
              <span className="w-1.5 h-4 bg-brand-orange inline-block rounded-xs"></span>
              OUR CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Civil & Structural Engineering',
                'New Building Construction',
                'Commercial Developments',
                'Architectural & Engineering Design',
                'Building Renovation & Remodeling',
                'Substructure & Foundation Works',
                'Roofing & Steel Structures',
                'General Engineering Contracting'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-slate-300 hover:text-brand-orange transition-colors flex items-center gap-2 group font-light"
                  >
                    <span className="w-1 h-1 bg-brand-orange/60 rounded-full group-hover:w-2 transition-all"></span>
                    <span className="truncate">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-oswald text-base sm:text-lg mb-5 flex items-center gap-2 tracking-wide !text-white uppercase font-bold">
              <span className="w-1.5 h-4 bg-brand-orange inline-block rounded-xs"></span>
              HEAD OFFICE
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
                <span className="leading-relaxed">Commissioner's Quarters, Esther Obuakor Rd, Awka 420112, Anambra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-orange shrink-0" />
                <a href="tel:07037823288" className="hover:text-brand-orange transition-colors">0703 782 3288</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <a href="mailto:info@matrockengineering.com.ng" className="hover:text-brand-orange transition-colors truncate">
                  info@matrockengineering.com.ng
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-1.5 text-xs font-oswald uppercase tracking-wider text-brand-orange font-semibold hover:text-white transition-colors"
              >
                Directions to Awka Office <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <p>© 2026 MATROCK ENGINEERING COMPANY NIG LTD. All Rights Reserved.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <p>
              Developed By{' '}
              <a 
                href="https://mindwareconsult.com.ng/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-brand-orange transition-colors font-medium underline underline-offset-2"
              >
                Mindware Consulting Ltd
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-brand-orange transition-colors">Corporate Profile</Link>
            <Link to="/contact" className="hover:text-brand-orange transition-colors">Privacy & Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
