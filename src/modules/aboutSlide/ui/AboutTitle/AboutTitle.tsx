import { motion } from 'framer-motion';

export const AboutTitle = () => {
  return (
    <motion.h1
      className='text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-1.5 max-md:mt-0 leading-tight'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        },
      }}
    >
      <span className='first-letter:text-accent inline-block mr-3 sm:mr-4'>
        HIROHIKO
      </span>
      <span className='first-letter:text-accent inline-block'>ARAKI</span>
    </motion.h1>
  );
};
