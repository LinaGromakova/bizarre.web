import { motion } from 'framer-motion';
import { TEXTS } from './texts.config';
import { SubtitleBorders } from './SubtitleBorders';
import { SubtitleStar } from './SubtitleStar';

export const JojoSubtitle = () => {
  return (
    <div className='relative w-full max-w-160 lg:max-w-175 px-3 2xs:px-5 sm:px-8 lg:px-8 xl:px-10 py-2 sm:py-3 lg:py-2 xl:py-5 flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-1.5 text-[11px] 2xs:text-xs sm:text-base lg:text-[15px] xl:text-lg tracking-normal sm:tracking-wide leading-snug lg:leading-normal xl:leading-relaxed'>
      <SubtitleBorders />
      {TEXTS.map((text, idx) => {
        return (
          <motion.p
            key={idx}
            variants={{
              inactive: { opacity: 0, y: 60, scale: 0.95 },
              active: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.5 + idx / 10,
                },
              },
            }}
          >
            {text}
          </motion.p>
        );
      })}
      <SubtitleStar />
    </div>
  );
};
