import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Link } from 'react-router-dom';

export function GenericPage({ title, children }: { title: string, children?: React.ReactNode }) {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative py-24 bg-brand-charcoal">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Banner" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-4xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-brand-light-gray font-oswald text-sm tracking-widest uppercase">
            <Link to="/" className="hover:text-brand-orange transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-orange">{title}</span>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children ? children : (
            <div className="text-center py-20 border border-dashed border-gray-300">
               <h3 className="font-oswald text-2xl text-brand-medium-gray mb-4">CONTENT COMING SOON</h3>
               <p className="text-gray-500 max-w-lg mx-auto">This page is currently being structured. For full experience, please refer to the Homepage layout.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
