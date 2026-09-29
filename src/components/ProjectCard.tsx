import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  key?: React.Key;
  title: string;
  category: string;
  location?: string;
  image: string;
  link: string;
}

export function ProjectCard({ title, category, location, image, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden bg-brand-charcoal h-72 sm:h-80 w-full cursor-pointer border border-slate-200/90 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-end">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Refined Deep Teal / Scrim Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
        <span className="text-brand-orange font-oswald text-[11px] sm:text-xs tracking-widest font-semibold uppercase mb-1.5 block">
          {category}
        </span>
        <h3 className="text-white font-oswald text-lg sm:text-xl font-bold leading-snug tracking-wide line-clamp-2 mb-1.5">
          {title}
        </h3>
        
        {location && (
          <div className="flex items-center gap-1.5 text-slate-300 text-xs font-light">
            <MapPin size={13} className="text-brand-orange shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        )}
        
        {/* Action Link */}
        <div className="pt-3 flex items-center justify-between border-t border-white/10 mt-3">
          <Link 
            to={link}
            className="text-white group-hover:text-brand-orange font-oswald text-xs font-semibold tracking-wider transition-colors inline-flex items-center gap-1 uppercase"
          >
            VIEW SITE DETAILS <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
