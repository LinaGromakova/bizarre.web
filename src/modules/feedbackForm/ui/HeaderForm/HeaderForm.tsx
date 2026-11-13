import { motion } from 'framer-motion';

export const HeaderForm = () => {
  return (
    <header className='pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 relative'>
      <motion.div
        className='absolute w-full h-px bg-accent/30 bottom-0'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
      <div>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='font-cinzel text-xs tracking-[0.35em] text-accent/60 uppercase mb-2'
        >
          CUSTOM ARTWORK
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className='font-cinzel text-3xl md:text-5xl text-accent uppercase tracking-wider leading-none'
        >
          Персональный комикс
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className='text-sm text-white/50 max-w-xs leading-relaxed'
      >
        Создано с помощью Email.js{' '}
        <a
          href='https://emailjs.com'
          target='_blank'
          className='underline hover:text-accent transition-colors'
        >
          https://emailjs.com
        </a>
      </motion.p>
    </header>
  );
};
