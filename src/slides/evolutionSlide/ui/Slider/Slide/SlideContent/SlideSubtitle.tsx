import { motion } from 'framer-motion';

export const SlideSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <motion.p
      className='text-xs 2xs:text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl text-center pb-5 sm:pb-8 lg:pb-10 px-1'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
        },
      }}
    >
      {subtitle}
    </motion.p>
  );
};
