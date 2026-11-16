import { StarIcon } from '@/shared';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const SubtitleStars = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, idx) => (
        <motion.div
          variants={{
            inactive: { opacity: 0, y: 60, scale: 0.95 },
            active: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 + idx / 10,
              },
            },
          }}
        >
          <StarIcon
            key={idx}
            className={clsx(
              'fill-accent',
              idx === 1
                ? 'h-3.5 w-3.5 sm:h-4 sm:w-4'
                : 'h-2.5 w-2.5 sm:h-3 sm:w-3',
            )}
          />
        </motion.div>
      ))}
    </>
  );
};
