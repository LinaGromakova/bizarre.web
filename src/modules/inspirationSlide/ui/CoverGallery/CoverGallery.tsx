import clsx from 'clsx';
import { COVERS } from './config/covers.config';
import { motion } from 'framer-motion';

export const CoverGallery = () => {
  return (
    <div className='w-full sm:w-[90%] md:w-[82%] lg:w-[76%] xl:w-[48%] max-w-4xl h-auto flex items-center justify-center my-4 lg:my-6 xl:-mt-14 xl:mb-6'>
      {COVERS.map((cover, idx) => (
        <motion.img
          key={idx}
          src={cover.image}
          alt='Cover'
          className={clsx(
            'relative w-[36%] sm:w-[36%] md:w-1/3 h-auto object-contain shadow-lg shadow-black/60',
            cover.style,
          )}
          variants={{
            inactive: { opacity: 0, y: 60, scale: 0.95, rotate: -20 },
            active: {
              opacity: 1,
              rotate: 0,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3 + idx / 10,
              },
            },
          }}
        />
      ))}
    </div>
  );
};
