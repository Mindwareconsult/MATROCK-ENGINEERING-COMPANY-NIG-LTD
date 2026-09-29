import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = 'center', light = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 sm:mb-14', align === 'center' ? 'text-center' : 'text-left')}>
      <h2 
        className={cn(
          'font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-tight',
          light ? '!text-white' : 'text-brand-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'font-open-sans text-sm sm:text-base max-w-2xl leading-relaxed mt-2.5',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-slate-300 font-light' : 'text-brand-medium-gray'
          )}
        >
          {subtitle}
        </p>
      )}
      <div 
        className={cn(
          'h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-gold mt-4 rounded-full',
          align === 'center' ? 'mx-auto' : ''
        )}
      ></div>
    </div>
  );
}
