import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 10L20 40L30 15L40 40L50 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5" cy="10" r="3" fill="#00E5FF" />
    <circle cx="45" cy="10" r="3" fill="#00E5FF" />
  </svg>
);