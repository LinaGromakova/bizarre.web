import { motion } from 'framer-motion';
import { containerVariants, letterVariants } from './animate.config';

export const HiroTitle = () => {
  const text = 'HIROHIKO ARAKI';
  return (
    <motion.h1
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='absolute bottom-0 md:bottom-45 z-100 w-full md:w-auto text-center text-[clamp(2.5rem,9.5vw,8rem)] leading-[0.95] text-accent font-cinzel tracking-[-0.06em] md:tracking-[-0.08em] drop-shadow-[0_2px_4px_#000,0_0_16px_rgba(0,0,0,0.95)] bg-main/70 md:bg-transparent p-2.5 md:p-0 flex justify-center flex-wrap '
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className='inline-block'
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
