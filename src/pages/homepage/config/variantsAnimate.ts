import type { Variants } from 'framer-motion';
export const VARIANTS_ANIMATE: Variants = {
  active: {
    opacity: 1,
    pointerEvents: 'auto',
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  inactive: {
    opacity: 0,
    pointerEvents: 'none',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};
