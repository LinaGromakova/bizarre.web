import { motion } from 'framer-motion';
import { SLIDES } from '../../config/slides';
import { VARIANTS_ANIMATE } from '../../config/variantsAnimate';
import { useMotion } from '../../hooks/useMotion';

export const SlidesList = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const currentIdx = useMotion(SLIDES, containerRef);
  return (
    <>
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIdx;
        return (
          <motion.div
            key={slide.id}
            className='absolute inset-0 w-full h-full flex flex-col justify-center items-center'
            variants={VARIANTS_ANIMATE}
            animate={isActive ? 'active' : 'inactive'}
            initial='inactive'
          >
            {isActive && slide.component}
          </motion.div>
        );
      })}
    </>
  );
};
