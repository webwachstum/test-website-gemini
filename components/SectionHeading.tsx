import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, light = false }) => {
  return (
    <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto px-4">
      <span className={`uppercase tracking-widest text-xs font-bold mb-4 block ${light ? 'text-accent' : 'text-primary/70'}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`h-1 w-24 mx-auto mt-8 ${light ? 'bg-accent' : 'bg-primary'}`} />
    </div>
  );
};