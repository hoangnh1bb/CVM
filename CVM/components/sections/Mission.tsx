'use client';

import { Quote } from 'lucide-react';
import Section from '../ui/Section';
import { useI18n } from '@/lib/i18n';

export default function Mission() {
  const { t } = useI18n();

  const principles = [
    t('mission.principle1'),
    t('mission.principle2'),
    t('mission.principle3'),
  ];

  return (
    <Section id="mission" background="muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {t('mission.title')}
        </h2>

        {/* Mission Statement */}
        <div className="relative mb-12">
          <Quote 
            size={48} 
            className="absolute -top-4 -left-4 text-accent-200 dark:text-accent-800" 
          />
          <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed italic bg-white dark:bg-gray-800 rounded-lg p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-gray-700 relative">
            "{t('mission.statement')}"
          </blockquote>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="w-8 h-8 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-600 dark:text-accent-400 font-bold">
                  {index + 1}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
