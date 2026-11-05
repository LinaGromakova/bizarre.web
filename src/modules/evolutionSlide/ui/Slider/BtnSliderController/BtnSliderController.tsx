import clsx from 'clsx';
import NextIcon from './assets/Next.svg?react';
import PrevIcon from './assets/Prev.svg?react';
import type { Swiper as SwiperClass } from 'swiper';
export const BtnSliderController = ({
  instance,
  type,
  className,
}: {
  instance: null | SwiperClass;
  type: 'prev' | 'next';
  className: string;
}) => {
  return (
    <button
      className={clsx(
        'cursor-pointer absolute top-1/2 -translate-y-1/2 z-0',
        className,
      )}
      onClick={() =>
        type === 'prev' ? instance?.slidePrev() : instance?.slideNext()
      }
    >
      <div className='w-122 h-122 fill-main'>
        {type === 'prev' ? (
          <PrevIcon className='drop-shadow-[-12px_12px_10px_#d4af37]' />
        ) : (
          <NextIcon className='drop-shadow-[12px_12px_10px_#d4af37]' />
        )}
      </div>
    </button>
  );
};
