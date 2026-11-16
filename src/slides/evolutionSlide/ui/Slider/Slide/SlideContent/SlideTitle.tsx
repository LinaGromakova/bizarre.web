import { motion } from 'framer-motion';

export const SlideTitle = ({ title }: { title: string }) => {
  return (
    <motion.h2
      className='py-2 sm:py-3 text-xl 2xs:text-2xl sm:text-3xl xl:text-4xl tracking-wide font-bold text-accent'
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
      {title}
    </motion.h2>
  );
};
