import FadeIn from '../components/FadeIn';
import { site } from '../data/site';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative rounded-t-[40px] bg-[#FFFFFF] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {site.servicesHeading}
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {site.services.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            className="flex items-center gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.title}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
