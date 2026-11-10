import { motion } from 'framer-motion';
import { Star } from './Star';
export const SubtitleStar = () => {
  return (
    <motion.div
      variants={{
        inactive: { opacity: 0, scale: 0.5 },
        active: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2 * 0.18,
          },
        },
      }}
      className='mt-1 lg:mt-2 flex justify-center scale-75 sm:scale-90 xl:scale-90 max-sm:hidden'
    >
      <Star />
    </motion.div>
  );
};
