import { motion } from 'framer-motion';
import JojoImg from './assets/Jojo.png';

export const CharacterImg = () => {
  return (
    <motion.img
      src={JojoImg}
      alt='Jotaro Kujo'
      variants={{
        inactive: {
          opacity: 0,
          x: '-50%',
          y: '-35%',
          scale: 1.35,
          filter: 'drop-shadow(0 0 0px rgba(194, 35, 243,0))',
        },
        active: {
          opacity: 1,
          x: '-50%',
          y: '-50%',
          scale: 1,
          filter:
            'drop-shadow(0 12px 20px rgba(0,0,0,0.85)) drop-shadow(0 0 28px rgba(194, 35, 243,0.85))',
          transition: {
            duration: 0.55,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className='jotaro-hero pointer-events-none absolute top-1/2 left-1/2
         w-full max-md:w-[40%] max-sm:w-[38%] max-w-70 h-auto z-20'
    />
  );
};
