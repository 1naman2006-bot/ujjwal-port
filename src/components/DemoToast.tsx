import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EVENT = 'demo-toast';

/** Show the demo-preview toast from anywhere. */
export const showDemoToast = (message: string) => {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: message }));
};

export default function DemoToast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    const onToast = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setMessage(null), 2600);
    };
    window.addEventListener(EVENT, onToast);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(EVENT, onToast);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 font-kanit"
      style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }} aria-live="polite">
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-full border border-[#D7E2EA]/30 bg-[#0C0C0C]/90 px-6 py-3 text-xs uppercase tracking-widest text-[#D7E2EA] backdrop-blur-md sm:text-sm"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
