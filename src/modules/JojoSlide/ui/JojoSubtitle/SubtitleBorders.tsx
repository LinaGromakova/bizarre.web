import clsx from 'clsx';
import { motion } from 'framer-motion';

const BORDERS = [
  { origin: 'top', style: 'left-0' },
  { origin: 'bottom', style: 'right-0' },
];

export const SubtitleBorders = () => {
  return (
    <>
      {BORDERS.map((border, idx) => (
        <motion.span
          key={idx}
          variants={{
            inactive: { scaleY: 0 },
            active: {
              scaleY: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4,
              },
            },
          }}
          style={{ transformOrigin: border.origin }}
          className={clsx(
            'block absolute top-0 w-px h-full bg-accent pointer-events-none',
            border.style,
          )}
        />
      ))}
    </>
  );
};
