import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { LightsLayout } from './LighstLayout/LightsLayout';
import type { MangaInterface } from '@/shared';
import type { SwiperClass } from 'swiper/react';

interface MangaCardsProps {
  mangaList: MangaInterface[];
  swiperRef: React.RefObject<SwiperClass | null>;
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
}
const MangaCards = ({
  mangaList,
  swiperRef,
  setActiveIdx,
}: MangaCardsProps) => {
  return (
    <div className='relative shrink-0 flex items-center justify-center'>
      <LightsLayout />
      <Swiper
        effect={'cards'}
        grabCursor={true}
        keyboard={{ enabled: true }}
        modules={[EffectCards, Keyboard]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}
        cardsEffect={{
          slideShadows: false,
          perSlideOffset: 8,
          perSlideRotate: 3,
        }}
        className='mySwiper w-48 sm:w-68 lg:w-72 h-72 sm:h-96 lg:h-116 -rotate-3'
      >
        {mangaList.map((manga) => (
          <SwiperSlide
            key={manga.mangaId}
            className='overflow-hidden'
          >
            <img
              src={manga.coverImage}
              className='w-full h-full pointer-events-none'
              loading='lazy'
              decoding='async'
              alt={manga.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MangaCards;
