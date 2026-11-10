import { motion } from 'framer-motion';
import ArakiPhoto from './assets/ArakiPhoto.jpg';

export const PortraitWrapper = () => {
  return (
    <motion.img
      alt='Hirohiko Araki'
      src={ArakiPhoto}
      className=' sm:max-w-11/12 md:max-w-8/12 max-md:w-[70%] max-sm:w-11/12 max-h-[50vh] object-cover rounded-sm mx-auto'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
        },
      }}
    />
  );
};
