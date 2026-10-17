import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  /** Distance (px) beyond the element edge where the pull starts. */
  padding?: number;
  /** Higher = weaker pull. The offset is divided by this factor. */
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

/** Mouse-following magnetic hover effect. Disabled on touch devices and for reduced motion. */
export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const noHover = window.matchMedia('(hover: none)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (noHover || reduced) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const within =
          Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding;
        if (within) {
          setActive(true);
          setOffset({ x: dx / strength, y: dy / strength });
        } else {
          setActive(false);
          setOffset({ x: 0, y: 0 });
        }
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
    };
  }, [padding, strength]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
