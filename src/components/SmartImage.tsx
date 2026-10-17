import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { RemoteImage } from '../data/site';

type SmartImageProps = {
  image: RemoteImage;
  className?: string;
  style?: CSSProperties;
  eager?: boolean;
  decorative?: boolean;
};

/** Loads the remote image first and swaps to the local fallback on error (once). */
export default function SmartImage({ image, className, style, eager, decorative }: SmartImageProps) {
  const [src, setSrc] = useState(image.src || image.fallback);
  return (
    <img
      src={src}
      alt={decorative ? '' : image.alt}
      aria-hidden={decorative ? true : undefined}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      className={className}
      style={style}
      onError={() => {
        // Guard against loops: only swap once, and never away from the fallback.
        if (src !== image.fallback) setSrc(image.fallback);
      }}
    />
  );
}
