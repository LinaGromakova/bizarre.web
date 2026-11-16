import clsx from 'clsx';
import { motion } from 'framer-motion';

const EffectsLayout = ({
  className1,
  className2,
}: {
  className1: string;
  className2: string;
}) => {
  return (
    <>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-6, -4, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        data-text='ゴゴゴ'
        className={clsx(
          `font-extralight font-shippori pointer-events-none text-black [-webkit-text-stroke:4px_black] md:block hidden
        before:content-[attr(data-text)]
        before:absolute before:inset-0
        before:text-transparent before:bg-clip-text
        before:bg-linear-15 before:from-[#d84a96] before:via-[#602388] before:to-[#602388]
        before:[-webkit-text-stroke:0]`,
          className1,
        )}
      >
        ゴゴゴ
      </motion.div>
      <motion.div
        animate={{ y: [0, 5, 0], rotate: [12, 8, 12] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        data-text='ドドド'
        className={clsx(
          'font-extralight text-accent/50 text-shadow-[-2px_-2px_0] text-shadow-black pointer-events-none tracking-widest font-shippori md:block hidden',
          className2,
        )}
      >
        ドドド
      </motion.div>
    </>
  );
};
export default EffectsLayout;
