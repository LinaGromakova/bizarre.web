import { DiamondGradient, EffectsLayout } from '@/shared';
import BackfroundEffectSVG from './assets/backgroundEffect.svg?react';
import { motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

export const BackgroundLayout = ({
  bgX,
  bgY,
}: {
  bgX: MotionValue<number>;
  bgY: MotionValue<number>;
}) => {
  return (
    <>
      <DiamondGradient
        className='absolute inset-0 pointer-events-none'
        size={55}
        color='#fff'
        opacity='0.04'
      />
      <div className='absolute inset-0 bg-radial from-purple-900/35 via-purple-950/15 to-black pointer-events-none' />
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.04 }}
        className='fixed inset-0 pointer-events-none opacity-45'
      >
        <BackfroundEffectSVG className='w-full h-full text-purple-950/80 object-cover' />
      </motion.div>
      <EffectsLayout
        className1='fixed right-16 top-28 text-7xl sm:text-9xl'
        className2='fixed left-14 bottom-16 text-5xl sm:text-7xl'
      />
    </>
  );
};
