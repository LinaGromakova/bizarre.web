import { motion } from 'framer-motion';
import { SubtitleStars } from './SubtitleStars';

export const InspirationSubtitle = () => {
  return (
    <>
      <div className='relative z-10 flex items-center gap-x-3 sm:gap-x-4 mb-1 opacity-60 before:block before:w-10 sm:before:w-15 before:h-px before:bg-accent/50 after:block after:w-10 sm:after:w-15 after:h-px after:bg-accent/50'>
        <SubtitleStars />
      </div>
      <motion.div
        className='w-full max-w-xl text-center py-1 sm:py-1.5 bg-main relative z-10 border-t-accent/60 border-b-accent/60 border-b border-t px-2 sm:px-4'
        variants={{
          inactive: { opacity: 0, y: 60, scale: 0.95 },
          active: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5,
            },
          },
        }}
      >
        <p className='text-white/80 leading-relaxed text-sm 2xs:text-base lg:text-xl tracking-normal'>
          Визуальный язык <span className='text-accent font-medium'>JoJo </span>
          вдохновлен эстетикой
          <span className='italic text-white'> Haute Couture</span>.
          Экспрессивные позы моделей из
          <span className='text-accent font-medium'> Vogue</span> и
          <span className='text-accent font-medium'> V Magazine</span>,
          авангардные костюмы от
          <span className='text-accent font-medium'> Versace</span> и
          <span className='text-accent font-medium'> Dior</span>, а также
          дерзкая графика фэшн-иллюстратора
          <span className='text-accent font-medium'> Тони Вирамонтеса </span>
          сформировали культовый стиль вселенной.
        </p>
      </motion.div>
    </>
  );
};
