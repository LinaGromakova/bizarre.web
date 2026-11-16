import { ArrowIcon } from '@/shared';
import { ARROWS } from '../../configs/arrows.config';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const ArrowList = () => {
  return (
    <>
      {ARROWS.map((arrow, idx) => (
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            x: arrow.initialX,
            y: arrow.initialY,
            rotate: arrow.initialRotate,
            scale: 0.85,
          }}
          animate={{
            opacity: [0, 1, 1, 1],
            scale: [0.85, 1, 1, 1],
            x: [arrow.initialX, arrow.initialX, arrow.initialX, 0],
            y: [arrow.initialY, arrow.initialY, arrow.initialY, 0],
            rotate: [
              arrow.initialRotate,
              arrow.initialRotate,
              arrow.initialRotate,
              arrow.targetRotate,
            ],
          }}
          transition={{
            duration: 1.3,
            delay: 0.4 + idx * 0.1,
            times: [0, 0.35, 0.45, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
          className={clsx(
            'absolute w-16 h-7 z-200 pointer-events-none',
            arrow.pos,
          )}
        >
          <ArrowIcon className='fill-accent w-full h-full' />
        </motion.div>
      ))}
    </>
  );
};
