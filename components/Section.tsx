import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, className = '', children, dark = false }) => {
  return (
    <section className={`px-6 py-16 md:px-12 ${dark ? 'bg-slate-50' : 'bg-white'} ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 max-w-3xl border-l-4 border-secondary pl-6">
          {title && <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{title}</h2>}
          {subtitle && <p className="text-lg text-slate-600 font-medium">{subtitle}</p>}
        </div>
      )}
      <div className="prose max-w-none text-slate-700">
        {children}
      </div>
    </section>
  );
};

export default Section;