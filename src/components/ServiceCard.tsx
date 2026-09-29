import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  key?: React.Key;
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="group bg-white relative overflow-hidden border border-slate-200 rounded-xl shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col justify-between">
      <div>
        {/* Top Gold Hover Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>

        {/* Image Container */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 border-b border-slate-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
        
        {/* Text Content */}
        <div className="p-5 sm:p-6">
          <h3 className="font-oswald text-base sm:text-lg font-bold text-brand-charcoal mb-2 leading-snug tracking-wide uppercase group-hover:text-brand-orange transition-colors">
            {title}
          </h3>
          <p className="text-brand-medium-gray text-xs sm:text-sm leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-5 sm:px-6 pb-5 pt-0">
        <Link 
          to={link}
          className="inline-flex items-center gap-1.5 text-brand-orange font-oswald text-xs font-semibold hover:text-brand-charcoal transition-colors tracking-wider uppercase group-hover:gap-2.5 transition-all"
        >
          <span>INQUIRE CAPABILITY</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
