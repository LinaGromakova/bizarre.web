import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { EVOLUTION_SLIDES } from '../../config/EvolutionSlides.config';
import { Slide } from './Slide/Slide';
import { BtnSliderController } from './BtnSliderController/BtnSliderController';

export const EvolutionSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );
  return (
    <main className='relative flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl px-3 sm:px-8 lg:px-16'>
      <BtnSliderController
        className='hidden lg:block lg:-left-7 xl:-left-18'
        type='prev'
        instance={swiperInstance}
      />
      <Swiper
        modules={[Navigation]}
        loop={true}
        onSwiper={setSwiperInstance}
        className='mySwiper w-full sm:w-11/12 relative z-20'
      >
        {EVOLUTION_SLIDES.map((slide, idx) => (
          <SwiperSlide
            className='h-full flex flex-col items-center justify-center'
            key={idx}
          >
            <Slide dataSlide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex items-center justify-center gap-8 z-30 lg:contents'>
        <BtnSliderController
          type='prev'
          instance={swiperInstance}
        />
        <BtnSliderController
          type='next'
          instance={swiperInstance}
        />
      </div>
    </main>
  );
};
