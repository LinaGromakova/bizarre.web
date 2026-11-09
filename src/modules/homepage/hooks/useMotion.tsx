import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

interface SlideInterface {
  id: string;
  component: React.JSX.Element;
}

export const useMotion = (
  slides: SlideInterface[],
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const step = 1 / slides.length;
    const index = Math.min(Math.floor(latest / step), slides.length - 1);
    setCurrentIdx(index);
  });

  return currentIdx;
};
