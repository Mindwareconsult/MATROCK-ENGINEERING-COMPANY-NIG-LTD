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
    <div className={cn('mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-left')}>
      <h2 
        className={cn(
          'font-oswald text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-wide mb-4',
          light ? 'text-white' : 'text-brand-charcoal'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'font-open-sans text-base md:text-lg max-w-3xl leading-relaxed',
            align === 'center' ? 'mx-auto' : '',
            light ? 'text-brand-light-gray/80' : 'text-brand-medium-gray'
          )}
        >
          {subtitle}
        </p>
      )}
      <div 
        className={cn(
          'h-1.5 w-16 bg-brand-orange mt-6 rounded-full',
          align === 'center' ? 'mx-auto' : ''
        )}
      ></div>
    </div>
  );
}
