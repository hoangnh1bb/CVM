'use client';

import { Target, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { useI18n } from '@/lib/i18n';

export default function Vision() {
  const { t } = useI18n();

  const successMetrics = [
    t('vision.metric1'),
    t('vision.metric2'),
    t('vision.metric3'),
    t('vision.metric4'),
    t('vision.metric5'),
  ];

  return (
    <Section id="vision">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target size={32} className="text-accent-600 dark:text-accent-400" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('vision.title')}
          </h2>
        </div>

        <Card className="mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center mb-8">
            {t('vision.description')}
          </p>
        </Card>

        <Card>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            {t('vision.success')}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {successMetrics.map((metric, index) => (
              <div 
                key={index}
                className="flex items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
              >
                <CheckCircle 
                  size={20} 
                  className="text-accent-500 mr-3 mt-0.5 flex-shrink-0" 
                />
                <p className="text-gray-700 dark:text-gray-300">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
