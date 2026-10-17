import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';
import type { CSSProperties } from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

type CharProps = {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      {/* Invisible placeholder keeps layout stable. */}
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

/** Character-by-character scroll-reveal paragraph. */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = text.length;
  const words = text.split(' ');
  let index = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, w) => {
        const start = index;
        index += word.length + 1; // +1 for the following space
        return (
          <span key={w} aria-hidden="true">
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char, c) => {
                const i = start + c;
                return (
                  <Char
                    key={c}
                    char={char}
                    progress={scrollYProgress}
                    range={[i / total, (i + 1) / total]}
                  />
                );
              })}
            </span>
            {w < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}
