'use client';

import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import { useI18n } from '@/lib/i18n';

export default function About() {
  const { t } = useI18n();

  // Create points array dynamically to ensure fresh translations
  const getAboutPoints = () => [
    t('about.point1'),
    t('about.point2'),
    t('about.point3'),
    t('about.point4'),
    t('about.point5'),
  ];

  return (
    <Section id="about" background="muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {t('about.title')}
        </h2>
        
        <div className="space-y-6">
          {getAboutPoints().map((point, index) => (
            <div 
              key={index}
              className="flex items-start text-left bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <CheckCircle 
                size={24} 
                className="text-accent-500 mr-4 mt-0.5 flex-shrink-0" 
              />
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
