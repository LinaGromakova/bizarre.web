import { motion } from 'framer-motion';
import { yOffsets } from './yOffsets.config';

export const JojoTitle = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center w-fit mx-auto italic'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        },
      }}
    >
      <h1 className='flex -rotate-6 items-center font-black tracking-tight relative z-10 bg-linear-to-b from-white via-fuchsia-400 to-light bg-clip-text text-transparent font-cinzel pr-2'>
        {[..."JOJO'S"].map((char, index) => (
          <span
            key={index}
            className={`inline-block ${yOffsets[index] || ''}`}
          >
            {char}
          </span>
        ))}
      </h1>
      <div className='text-lg 2xs:text-xl sm:text-2xl lg:text-3xl -mt-4 sm:-mt-7 lg:-mt-10 self-end uppercase drop-shadow-violet text-accent pr-1'>
        <p className='text-right font-bold'>Bizarre</p>
        <p className='-mt-1.5 sm:-mt-2.5 lg:-mt-3 font-bold'>Adventure</p>
      </div>
    </motion.div>
  );
};
