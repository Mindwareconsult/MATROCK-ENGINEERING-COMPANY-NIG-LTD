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
    <div className="group bg-white relative overflow-hidden border border-brand-border shadow-sm rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl h-full flex flex-col">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden border-b border-brand-border">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* The angled white shape at the bottom of the image, matching the reference screenshot */}
        <div 
          className="absolute bottom-0 w-full h-0 bg-white transform origin-bottom-left"
          style={{ clipPath: 'none' }}
        ></div>
        {/* Orange border line on top of the angle */}
        <div 
          className="absolute bottom-0 w-full h-0 bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ clipPath: 'none' }} 
        ></div>
      </div>
      
      {/* Content */}
      <div className="pt-6 pb-8 px-8 flex-grow flex flex-col items-start text-left bg-white relative z-10">
        {/* Better way to do the orange border line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        
        <h3 className="font-oswald text-lg font-bold text-brand-charcoal mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-brand-medium-gray text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center gap-2 text-brand-orange font-oswald text-sm font-semibold hover:text-brand-charcoal transition-colors tracking-tight"
        >
          READ MORE
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
