import clsx from 'clsx';
import NextIcon from './assets/Next.svg?react';
import PrevIcon from './assets/Prev.svg?react';
import type { Swiper as SwiperClass } from 'swiper';
import { motion } from 'framer-motion';
import { handleClick } from './model/handleClick';

interface BtnSliderControllerProps {
  instance: null | SwiperClass;
  type: 'prev' | 'next';
  className?: string;
}

export const BtnSliderController = ({
  instance,
  type,
  className,
}: BtnSliderControllerProps) => {
  return (
    <motion.button
      onClick={() => handleClick(type, instance)}
      className={clsx(
        'cursor-pointer',
        'px-4 py-1.5 mb-2 mt-3 border border-accent text-accent font-cinzel text-sm active:bg-accent active:text-main transition-colors',
        'lg:p-0 lg:m-0 lg:border-0 lg:outline-0 lg:active:bg-transparent',
        'lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:z-0 lg:active:scale-95 lg:transition-transform',
        type === 'prev' ? 'lg:-left-7 xl:-left-18' : 'lg:-right-7 xl:-right-18',
        className,
      )}
      variants={{
        inactive: { opacity: 0, x: type === 'prev' ? -10 : 10, scale: 0.95 },
        active: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        },
      }}
    >
      <span className='lg:hidden'>{type === 'prev' ? '← PREV' : 'NEXT →'}</span>
      <div className='hidden lg:block w-90 h-90 fill-main'>
        {type === 'prev' ? (
          <PrevIcon className='w-full h-full drop-shadow-[-12px_12px_10px_#d4af37]' />
        ) : (
          <NextIcon className='w-full h-full drop-shadow-[12px_12px_10px_#d4af37]' />
        )}
      </div>
    </motion.button>
  );
};
