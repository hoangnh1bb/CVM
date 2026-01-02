'use client';

import { MapPin } from 'lucide-react';
import Section from '../ui/Section';
import TimelineItem from '../ui/TimelineItem';
import { useI18n } from '@/lib/i18n';

export default function Roadmap() {
  const { t } = useI18n();

  const phases = [
    {
      title: t('roadmap.phase1.title'),
      duration: t('roadmap.phase1.duration'),
      description: t('roadmap.phase1.description'),
      goals: [
        t('roadmap.phase1.goal1'),
        t('roadmap.phase1.goal2'),
      ],
      actions: [
        t('roadmap.phase1.action1'),
        t('roadmap.phase1.action2'),
        t('roadmap.phase1.action3'),
        t('roadmap.phase1.action4'),
        t('roadmap.phase1.action5'),
      ],
      metrics: [
        t('roadmap.phase1.metric1'),
        t('roadmap.phase1.metric2'),
        t('roadmap.phase1.metric3'),
      ]
    },
    {
      title: t('roadmap.phase2.title'),
      duration: t('roadmap.phase2.duration'),
      description: t('roadmap.phase2.description'),
      goals: [
        t('roadmap.phase2.goal1'),
        t('roadmap.phase2.goal2'),
      ],
      actions: [
        t('roadmap.phase2.action1'),
        t('roadmap.phase2.action2'),
        t('roadmap.phase2.action3'),
        t('roadmap.phase2.action4'),
        t('roadmap.phase2.action5'),
      ],
      metrics: [
        t('roadmap.phase2.metric1'),
        t('roadmap.phase2.metric2'),
        t('roadmap.phase2.metric3'),
      ]
    },
    {
      title: t('roadmap.phase3.title'),
      duration: t('roadmap.phase3.duration'),
      description: t('roadmap.phase3.description'),
      goals: [
        t('roadmap.phase3.goal1'),
        t('roadmap.phase3.goal2'),
      ],
      actions: [
        t('roadmap.phase3.action1'),
        t('roadmap.phase3.action2'),
        t('roadmap.phase3.action3'),
        t('roadmap.phase3.action4'),
        t('roadmap.phase3.action5'),
      ],
      metrics: [
        t('roadmap.phase3.metric1'),
        t('roadmap.phase3.metric2'),
        t('roadmap.phase3.metric3'),
      ]
    }
  ];

  return (
    <Section id="roadmap" background="muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin size={32} className="text-accent-600 dark:text-accent-400" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('roadmap.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="relative">
          {phases.map((phase, index) => (
            <TimelineItem
              key={index}
              title={phase.title}
              duration={phase.duration}
              description={phase.description}
              goals={phase.goals}
              actions={phase.actions}
              metrics={phase.metrics}
              isLast={index === phases.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
