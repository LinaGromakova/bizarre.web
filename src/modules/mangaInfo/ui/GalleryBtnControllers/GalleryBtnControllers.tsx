import clsx from 'clsx';
import { BTN_CONTROLLERS } from './btnControllers.config';
import type React from 'react';
import { styles } from './styles/styles';
import type { SwiperClass } from 'swiper/react';

interface GalleryBtnControllerProps {
  activeIdx: number;
  ref: React.RefObject<SwiperClass | null>;
  mangaListLen: number;
}
export const GalleryBtnController = ({
  activeIdx,
  ref,
  mangaListLen,
}: GalleryBtnControllerProps) => {
  return (
    <div className='flex items-center justify-center lg:justify-start gap-4 pt-6'>
      {BTN_CONTROLLERS.map((btn, idx) => (
        <button
          type='button'
          title={btn.text}
          key={idx}
          onClick={() =>
            btn.action === 'prev'
              ? ref.current?.slidePrev()
              : ref.current?.slideNext()
          }
          disabled={
            btn.action === 'prev'
              ? activeIdx === 0
              : activeIdx === mangaListLen - 1
          }
          className={clsx(btn.className, styles)}
        >
          <span className='inline-block skew-x-12'>{btn.text}</span>
        </button>
      ))}
    </div>
  );
};
