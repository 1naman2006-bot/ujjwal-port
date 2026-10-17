import { ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';
import { showDemoToast } from './DemoToast';

type LiveProjectButtonProps = {
  url: string;
  projectName: string;
};

export default function LiveProjectButton({ url, projectName }: LiveProjectButtonProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      showDemoToast(site.demoToastMessage);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Live Project: ${projectName}`}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </button>
  );
}
