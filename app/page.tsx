import I18nProvider from '@/components/I18nProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import CoreValues from '@/components/sections/CoreValues';
import Mission from '@/components/sections/Mission';
import Vision from '@/components/sections/Vision';
import Roadmap from '@/components/sections/Roadmap';
import ReviewSystem from '@/components/sections/ReviewSystem';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <CoreValues />
        <Mission />
        <Vision />
        <Roadmap />
        <ReviewSystem />
        <Footer />
      </main>
    </I18nProvider>
  );
}
