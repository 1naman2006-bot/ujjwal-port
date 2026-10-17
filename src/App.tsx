import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import DemoToast from './components/DemoToast';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import { site } from './data/site';

export default function App() {
  useEffect(() => {
    document.title = site.title;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
      <DemoToast />
    </MotionConfig>
  );
}
