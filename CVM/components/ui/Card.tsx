import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '',
  hover = false,
  padding = 'md'
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClasses = hover 
    ? 'hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 transition-all duration-300' 
    : '';

  return (
    <div className={`
      bg-white dark:bg-gray-800 
      border border-gray-200 dark:border-gray-700 
      rounded-lg 
      shadow-sm 
      ${paddingClasses[padding]} 
      ${hoverClasses} 
      ${className}
    `}>
      {children}
    </div>
  );
}
