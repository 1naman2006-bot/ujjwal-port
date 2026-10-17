import { useEffect, useRef } from 'react';
import SmartImage from '../components/SmartImage';
import { site } from '../data/site';
import type { RemoteImage } from '../data/site';

const rowOne = site.marqueeImages.slice(0, 11);
const rowTwo = site.marqueeImages.slice(11);

// Tripled for seamless scrolling.
const triple = (items: RemoteImage[]) => [...items, ...items, ...items];

function Tile({ image }: { image: RemoteImage }) {
  return (
    <SmartImage
      image={image}
      className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    // Writes transforms straight to the DOM: no React state updates per scroll event.
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      if (rowOneRef.current) rowOneRef.current.style.transform = `translateX(${offset - 200}px)`;
      if (rowTwoRef.current) rowTwoRef.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="work-reel"
      ref={sectionRef}
      aria-label="Showreel"
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 moves right; starts shifted left so the gap never shows. */}
        <div className="flex justify-end">
          <div ref={rowOneRef} className="flex gap-3" style={{ willChange: 'transform' }}>
            {triple(rowOne).map((image, i) => (
              <Tile key={`r1-${i}`} image={image} />
            ))}
          </div>
        </div>
        {/* Row 2 moves left. */}
        <div className="flex justify-start">
          <div ref={rowTwoRef} className="flex gap-3" style={{ willChange: 'transform' }}>
            {triple(rowTwo).map((image, i) => (
              <Tile key={`r2-${i}`} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
