'use client';

import { Calendar, Clock } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { useI18n } from '@/lib/i18n';

export default function ReviewSystem() {
  const { t } = useI18n();

  const reviews = [
    {
      frequency: t('review.weekly'),
      duration: t('review.weekly_duration'),
      questions: [
        t('review.weekly_q1'),
        t('review.weekly_q2'),
        t('review.weekly_q3'),
      ]
    },
    {
      frequency: t('review.monthly'),
      duration: t('review.monthly_duration'),
      questions: [
        t('review.monthly_q1'),
        t('review.monthly_q2'),
        t('review.monthly_q3'),
      ]
    },
    {
      frequency: t('review.quarterly'),
      duration: t('review.quarterly_duration'),
      questions: [
        t('review.quarterly_q1'),
        t('review.quarterly_q2'),
        t('review.quarterly_q3'),
      ]
    }
  ];

  const getFrequencyIcon = (frequency: string) => {
    switch (frequency.toLowerCase()) {
      case 'weekly':
        return <Calendar size={24} className="text-green-500" />;
      case 'monthly':
        return <Calendar size={24} className="text-blue-500" />;
      case 'quarterly':
        return <Calendar size={24} className="text-purple-500" />;
      default:
        return <Clock size={24} className="text-gray-500" />;
    }
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency.toLowerCase()) {
      case 'weekly':
        return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20';
      case 'monthly':
        return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20';
      case 'quarterly':
        return 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20';
      default:
        return 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <Section id="review">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('review.title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('review.subtitle')}
        </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              hover 
              className={`h-full ${getFrequencyColor(review.frequency)}`}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {getFrequencyIcon(review.frequency)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {review.frequency}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {review.duration}
                </p>
              </div>

              <div className="space-y-3">
                {review.questions.map((question, questionIndex) => (
                  <div 
                    key={questionIndex}
                    className="flex items-start p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <span className="text-accent-500 mr-2 mt-1 flex-shrink-0 font-bold">
                      {questionIndex + 1}.
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
