'use client';

import Section from '../ui/Section';
import Card from '../ui/Card';
import { useI18n } from '@/lib/i18n';

export default function CoreValues() {
  const { t } = useI18n();

  const values = [
    {
      title: t('values.value1.title'),
      meaning: t('values.value1.meaning'),
      practices: [
        t('values.value1.practice1'),
        t('values.value1.practice2'),
        t('values.value1.practice3'),
      ]
    },
    {
      title: t('values.value2.title'),
      meaning: t('values.value2.meaning'),
      practices: [
        t('values.value2.practice1'),
        t('values.value2.practice2'),
        t('values.value2.practice3'),
      ]
    },
    {
      title: t('values.value3.title'),
      meaning: t('values.value3.meaning'),
      practices: [
        t('values.value3.practice1'),
        t('values.value3.practice2'),
        t('values.value3.practice3'),
      ]
    },
    {
      title: t('values.value4.title'),
      meaning: t('values.value4.meaning'),
      practices: [
        t('values.value4.practice1'),
        t('values.value4.practice2'),
        t('values.value4.practice3'),
      ]
    },
    {
      title: t('values.value5.title'),
      meaning: t('values.value5.meaning'),
      practices: [
        t('values.value5.practice1'),
        t('values.value5.practice2'),
        t('values.value5.practice3'),
      ]
    },
  ];

  return (
    <Section id="values">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('values.title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('values.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <Card key={index} hover className="h-full">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-600 dark:text-accent-400 font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.meaning}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {t('values.practice')}
              </h4>
              <ul className="space-y-2">
                {value.practices.map((practice, practiceIndex) => (
                  <li 
                    key={practiceIndex}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-accent-500 mr-2 mt-1 flex-shrink-0">•</span>
                    {practice}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
