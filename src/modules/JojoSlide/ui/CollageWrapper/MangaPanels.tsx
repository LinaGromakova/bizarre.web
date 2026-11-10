import { motion } from 'framer-motion';
import { MANGA_PANELS } from '../../config/mangaPanels';

export const MangaPanels = () => {
  return (
    <motion.div
      variants={{
        inactive: { opacity: 0, scale: 0.92 },
        active: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className='grid grid-cols-12 auto-rows-18 2xs:auto-rows-20.5 sm:auto-rows-30
      md:auto-rows-37.5 lg:auto-rows-62.5 gap-1 sm:gap-2 bg-white p-1 sm:p-2 border-2 border-black shadow-2xl w-full'
    >
      {MANGA_PANELS.map((panel, idx) => (
        <motion.div
          key={idx}
          variants={{
            inactive: { opacity: 0, scale: 1.15, filter: 'contrast(1.4)' },
            active: {
              opacity: 1,
              scale: 1,
              filter: 'contrast(1)',
              transition: {
                duration: 0.4,
                delay: 0.15 + idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className={`manga-panel overflow-hidden border-2 border-black bg-black ${panel.span}`}
        >
          <img
            src={panel.src}
            alt={`Jojo manga panel ${idx + 1}`}
            className='w-full h-full object-cover'
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
