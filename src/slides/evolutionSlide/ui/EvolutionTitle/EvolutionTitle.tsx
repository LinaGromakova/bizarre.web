import { motion } from "framer-motion";

export const EvolutionTitle = () => {
  return (
    <motion.h1
      className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center text-accent relative z-10 px-4 mb-2.5'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      Эволюция стиля
    </motion.h1>
  );
};
