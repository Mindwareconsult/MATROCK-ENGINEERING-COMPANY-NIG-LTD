import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Link } from 'react-router-dom';

export function GenericPage({ title, children }: { title: string, children?: React.ReactNode }) {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative py-20 bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
           <img src="/images/matrock/MP3.PNG" className="w-full h-full object-cover" alt="MATROCK Engineering Banner" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-2 mt-3 text-brand-light-gray font-oswald text-xs sm:text-sm tracking-widest uppercase">
            <Link to="/" className="hover:text-brand-orange transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-orange">{title}</span>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children ? children : (
            <div className="text-center py-16 border border-dashed border-gray-300 rounded-2xl bg-slate-50">
               <h3 className="font-oswald text-xl sm:text-2xl text-brand-charcoal mb-2 font-bold uppercase tracking-wide">
                 MATROCK ENGINEERING SERVICES
               </h3>
               <p className="text-brand-medium-gray text-sm max-w-md mx-auto mb-6 leading-relaxed">
                 For detailed consultations or project inquiries regarding this engineering specialization, please contact our team.
               </p>
               <Link to="/contact" className="inline-block bg-brand-orange text-white font-oswald text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:bg-brand-charcoal transition-colors">
                 CONTACT US
               </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
