'use client';

import { ReactNode } from 'react';
import Card from './Card';
import { useI18n } from '@/lib/i18n';

interface TimelineItemProps {
  title: string;
  duration: string;
  description: string;
  goals: string[];
  actions: string[];
  metrics: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  duration,
  description,
  goals,
  actions,
  metrics,
  isLast = false
}: TimelineItemProps) {
  const { t } = useI18n();
  
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-900" />
      
      {/* Content */}
      <div className="ml-12">
        <Card hover className="mb-8">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-accent-600 dark:text-accent-400 font-medium">
              {duration}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('roadmap.goals')}</h4>
              <ul className="space-y-1">
                {goals.map((goal, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">•</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('roadmap.actions')}</h4>
              <ul className="space-y-1">
                {actions.map((action, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">•</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('roadmap.metrics')}</h4>
              <ul className="space-y-1">
                {metrics.map((metric, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-accent-500 mr-2 mt-1">•</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
