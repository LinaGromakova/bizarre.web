import { motion } from 'framer-motion';
import BackgroundImage from '../../assets/background.jfif';

export const Background = () => {
  return (
    <>
      <div
        aria-hidden='true'
        className='pointer-events-none select-none absolute inset-0 overflow-hidden'
      >
        <motion.img
          src={BackgroundImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          alt='bg'
          className='w-full h-full object-cover 2xl:object-center object-[15%]  contrast-125 opacity-[0.8]'
        />
        <div className='absolute inset-0 bg-accent mix-blend-color opacity-50' />
        <div className='absolute inset-0 bg-accent/20 mix-blend-multiply' />
      </div>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,14,14,0.65)_0%,rgba(14,14,14,0.92)_100%)]'
      />
    </>
  );
};
