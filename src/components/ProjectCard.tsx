import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="group relative overflow-hidden bg-brand-charcoal h-80 w-full cursor-pointer border border-brand-border rounded-2xl shadow-sm">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-brand-orange font-oswald text-xs tracking-wider font-bold mb-2 uppercase">
          {category}
        </span>
        <h3 className="text-white font-oswald text-xl sm:text-2xl font-bold mb-1 leading-tight tracking-tight">
          {title}
        </h3>
        {location && (
          <p className="text-white/80 text-sm mb-4 font-medium">
            {location}
          </p>
        )}
        
        {/* View Project Button */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto overflow-hidden mt-2">
          <Link 
            to={link}
            className="inline-block bg-white text-[#0F172A] font-oswald font-semibold text-sm px-6 py-2 rounded-lg transition-colors tracking-tight hover:bg-brand-light-gray"
          >
            VIEW PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
}
