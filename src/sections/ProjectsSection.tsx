import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import SmartImage from '../components/SmartImage';
import { site } from '../data/site';
import type { Project } from '../data/site';

const imageRadius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const [leftTop, leftBottom, right] = project.images;

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* Top row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-2 sm:mb-6 sm:px-3 md:mb-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading shrink-0 font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-[0.65rem] font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-xs md:text-sm">
                {project.category}
              </span>
              <h3
                className="font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="mt-1 hidden max-w-xl font-light text-[#D7E2EA] sm:block"
                style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', opacity: 0.7 }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <LiveProjectButton url={project.liveUrl} projectName={project.name} />
        </div>

        {/* Image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <SmartImage
              image={leftTop}
              className={`w-full object-cover ${imageRadius}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <SmartImage
              image={leftBottom}
              className={`w-full object-cover ${imageRadius}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="relative w-[60%]">
            <SmartImage image={right} className={`absolute inset-0 h-full w-full object-cover ${imageRadius}`} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const total = site.projects.length;

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {site.projectsHeading}
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {site.projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={total}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
