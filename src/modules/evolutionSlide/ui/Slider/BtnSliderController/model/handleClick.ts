import type { SwiperClass } from 'swiper/react';

export function handleClick(
  type: 'prev' | 'next',
  instance: null | SwiperClass,
) {
  return type === 'prev' ? instance?.slidePrev() : instance?.slideNext();
}
