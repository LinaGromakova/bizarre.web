import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

export const NotFoundHeader = ({
  standX,
  standY,
}: {
  standX: MotionValue<number>;
  standY: MotionValue<number>;
}) => {
  return (
    <>
      <span className='text-[10px] sm:text-xs font-bold tracking-[0.45em] text-purple-300/70 uppercase mb-2'>
        BIZARRE.WEB // ERROR
      </span>
      <div className='relative flex items-center justify-center my-1'>
        <motion.span
          style={{ x: standX, y: standY }}
          aria-hidden='true'
          className='absolute text-8xl sm:text-[176px] leading-none font-cinzel font-black text-purple-500/35 blur-[2px] pointer-events-none'
        >
          404
        </motion.span>
        <motion.h2
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 20 }}
          className='relative text-accent text-8xl sm:text-[176px] leading-none font-cinzel font-black drop-shadow-[0_8px_28px_rgba(212,175,55,0.3)]'
        >
          404
        </motion.h2>
      </div>
    </>
  );
};
