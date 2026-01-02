'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Container from './ui/Container';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useI18n();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <Container>
        <div className="text-center">
          {/* Name */}
          <h3 className="text-xl font-semibold mb-6">
            {t('hero.name')}
          </h3>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:hoang@example.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t('hero.name')}. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              {t('footer.built')}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
