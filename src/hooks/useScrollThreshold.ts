import { useWindowScroll } from 'react-use';
import { useMounted } from './useMounter';

interface UseScrollThresholdOptions {
  /** Threshold as a percentage of viewport height (0-1) */
  thresholdPercent: number;
}

export const useScrollThreshold = ({ thresholdPercent }: UseScrollThresholdOptions) => {
  const { y } = useWindowScroll();
  const isMounted = useMounted();

  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
  const threshold = viewportHeight * thresholdPercent;
  const isPastThreshold = isMounted && y > threshold;

  return { isPastThreshold, scrollY: y, threshold };
};
