import { useLayoutEffect, useRef } from 'react';

/**
 * Keeps a single-line heading at its CSS (Tailwind) size whenever it fits, and
 * shrinks it just enough to fit when it would overflow its container.
 * "HI, I'M UJJWAL" is longer than the original name, so at the spec's 17.5vw it
 * would otherwise be clipped on wide screens.
 */
export function useFitText<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      el.style.fontSize = ''; // reset to the Tailwind size
      const available = el.clientWidth;
      const needed = el.scrollWidth;
      if (needed > available && needed > 0) {
        const base = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = `${Math.floor(base * (available / needed) * 0.98 * 10) / 10}px`;
      }
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el.parentElement ?? el);
    document.fonts?.ready.then(fit).catch(() => undefined);
    return () => observer.disconnect();
  }, []);

  return ref;
}
