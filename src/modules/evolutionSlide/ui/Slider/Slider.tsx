import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { EVOLUTION_SLIDES_CONFIG } from '../../config/EvolutionSlides.config';
import { Slide } from './Slide/Slide';
import { BtnSliderController } from './BtnSliderController/BtnSliderController';

export const EvolutionSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );
  console.log(EVOLUTION_SLIDES_CONFIG);
  return (
    <main className='relative flex items-center justify-center w-full max-w-6xl h-10/12 px-16'>
      <BtnSliderController
        className='-left-45'
        type='prev'
        instance={swiperInstance}
      />
      <Swiper
        modules={[Navigation]}
        loop={true}
        onSwiper={setSwiperInstance}
        className='mySwiper w-full h-full relative z-100'
      >
        {EVOLUTION_SLIDES_CONFIG.map((slide, idx) => (
          <SwiperSlide
            className='h-full flex flex-col items-center'
            key={idx}
          >
            <Slide dataSlide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <BtnSliderController
        className='-right-45'
        type='next'
        instance={swiperInstance}
      />
    </main>
  );
};
