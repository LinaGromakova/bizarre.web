import { motion } from 'framer-motion';

export const SlideImg = ({ image }: { image: string }) => {
  return (
    <motion.img
      src={image}
      alt='image slide'
      className='w-full h-[34vh] 2xs:h-[38vh] sm:h-[45vh] lg:h-[42vh] xl:h-[50vh] object-cover object-top sm:object-center xl:object-bottom'
      variants={{
        inactive: { opacity: 0, y: 60, scale: 0.95 },
        active: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
        },
      }}
    />
  );
};
