import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted';
}

export default function Section({ 
  id,
  children, 
  className = '',
  containerSize = 'lg',
  background = 'default'
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-900',
    muted: 'bg-gray-50 dark:bg-gray-800'
  };

  return (
    <section 
      id={id}
      className={`py-16 lg:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
