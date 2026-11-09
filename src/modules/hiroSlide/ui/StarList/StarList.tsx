import { StarIcon } from '@/shared';
import { STARS } from '../../configs/stars.config';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const StarList = () => {
  return (
    <>
      {STARS.map((star, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6 + idx * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={clsx('absolute z-5 pointer-events-none', star)}
        >
          <StarIcon className='w-full h-full fill-inherit' />
        </motion.div>
      ))}
    </>
  );
};
