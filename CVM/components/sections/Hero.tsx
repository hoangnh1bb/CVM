'use client';

import { Download, Mail, ArrowDown } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  const scrollToRoadmap = () => {
    const element = document.querySelector('#roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          {t('hero.name')}
        </h1>
        
        {/* Role */}
        <p className="text-xl lg:text-2xl text-accent-600 dark:text-accent-400 font-medium mb-6 animate-slide-up">
          {t('hero.role')}
        </p>
        
        {/* Tagline */}
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
          {t('hero.tagline')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
          <Button 
            variant="primary" 
            size="lg"
            onClick={scrollToRoadmap}
            className="w-full sm:w-auto"
          >
            <ArrowDown size={20} className="mr-2" />
            {t('hero.cta.roadmap')}
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            href="#"
            className="w-full sm:w-auto"
          >
            <Download size={20} className="mr-2" />
            {t('hero.cta.pdf')}
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            href="mailto:hoang@example.com"
            className="w-full sm:w-auto"
          >
            <Mail size={20} className="mr-2" />
            {t('hero.cta.contact')}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown size={24} className="mx-auto text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </Section>
  );
}
