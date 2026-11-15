import { motion } from 'framer-motion';

export const GalleryLoading = () => {
  return (
    <div className='relative w-full h-screen flex items-center justify-center  text-accent p-2 sm:p-10 select-none overflow-hidden'>
      <div className='absolute w-125 h-125 bg-purple-500/20 blur-3xl rounded-full pointer-events-none' />
      <div className='absolute w-80 h-80 bg-accent/10 blur-3xl rounded-full pointer-events-none' />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='relative bg-black/50 w-full max-w-5xl h-[65vh] border border-accent/60 flex flex-col items-center justify-center p-8'
      >
        <div className='absolute inset-4 border border-double border-accent/25 pointer-events-none' />
        <div className='text-center space-y-3'>
          <span className='block text-xs sm:text-base tracking-[0.45em] text-purple-300/80 uppercase'>
            BIZARRE.WEB
          </span>
          <h2 className='text-3xl sm:text-6xl font-cinzel tracking-widest uppercase text-accent'>
            GALLERY
          </h2>
        </div>
        <div className='relative w-11/12 sm:w-96 flex items-center justify-center mt-8'>
          <div className='w-full h-px bg-accent/25 overflow-hidden relative'>
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='w-1/2 h-full bg-linear-to-r from-transparent via-accent to-transparent'
            />
          </div>
          <div className='absolute w-2.5 h-2.5 bg-accent rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.8)]' />
        </div>
        <span className='mt-6 text-[10px] sm:text-xs tracking-[0.4em] text-accent/70 uppercase animate-pulse'>
          Загрузка...
        </span>
      </motion.div>
    </div>
  );
};
