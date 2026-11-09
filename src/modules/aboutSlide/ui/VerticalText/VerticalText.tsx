import clsx from 'clsx';
import { motion } from 'framer-motion';

export const VerticalText = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'w-fit items-center justify-center overflow-hidden font-cinzel text-6xl lg:text-8xl xl:text-9xl gap-1.5 tracking-widest text-accent/50 max-md:hidden flex',
        className,
      )}
    >
      {Array.from({ length: 3 }).map((_, idx) => {
        const isFromBottom = idx % 2 === 0;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: isFromBottom ? 120 : -120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + idx * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={clsx(
              'uppercase select-none whitespace-nowrap font-bold [writing-mode:vertical-rl] block',
              idx === 2 && 'max-lg:hidden',
            )}
          >
            JOJO JOJO JOJO JOJO JOJO JOJO JOJO JOJO JOJO
          </motion.div>
        );
      })}
    </div>
  );
};
