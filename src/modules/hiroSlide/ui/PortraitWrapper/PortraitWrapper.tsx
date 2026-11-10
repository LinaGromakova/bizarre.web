import { motion } from 'framer-motion';
import PortraitImage from './assets/Hirohiko.png';

export const PortraitWrapper = () => {
  return (
    <div
      className='relative flex justify-center items-end w-full max-sm:w-full 
    md:w-[76%] max-w-none sm:max-w-135 lg:max-w-150 xl:max-w-167.5 mt-auto md:mt-0 bottom-0'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 90 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='absolute w-162.5 max-md:w-1/2 max-sm:w-150 max-2xs:w-145 lg:w-[105%] xl:w-[115%] aspect-square bg-main rotate-45 bottom-2 sm:bottom-0 drop-shadow-[-20px_10px_10px_rgba(0,0,0,0.4)]'
      />
      <motion.img
        src={PortraitImage}
        alt='Hirohiko Araki self-portrait'
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className='relative max-md:h-screen w-full xl:w-152 h-auto object-contain drop-shadow-[-20px_10px_30px_rgba(0,0,0,0.4)]'
      />
    </div>
  );
};
