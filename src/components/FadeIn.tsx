import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

// Cache motion components per element type so they are not recreated on every render.
const motionCache = new Map<ElementType, ElementType>();
const getMotion = (as: ElementType): ElementType => {
  if (as === 'div') return motion.div;
  let component = motionCache.get(as);
  if (!component) {
    component = motion.create(as as never) as ElementType;
    motionCache.set(as, component);
  }
  return component;
};

/** Reusable fade + slide-in wrapper triggered once when scrolled into view. */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
  id,
}: FadeInProps) {
  const Component = getMotion(as);
  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
