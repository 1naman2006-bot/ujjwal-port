import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import SmartImage from '../components/SmartImage';
import { site } from '../data/site';
import { scrollToSection } from '../lib/scroll';
import { useFitText } from '../lib/useFitText';

export default function HeroSection() {
  const headingRef = useFitText<HTMLHeadingElement>();

  return (
    <section id="home" className="relative flex h-screen flex-col overflow-x-clip">
      {/* Navigation */}
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20 flex justify-between px-6 pt-6 md:px-10 md:pt-8" aria-label="Primary">
        {site.nav.map((link) => (
          <a
            key={link.target}
            href={`#${link.target}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.target);
            }}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Heading */}
      <div className="relative z-0 overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 ref={headingRef} className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            {site.heroHeading}
          </h1>
        </FadeIn>
      </div>

      {/* Hero visual */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <SmartImage image={site.heroImage} eager className="block h-auto w-full select-none" />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {site.heroDescription}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
