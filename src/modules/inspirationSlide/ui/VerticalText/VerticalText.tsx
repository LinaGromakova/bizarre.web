import clsx from 'clsx';
import { motion } from 'framer-motion';

export const VerticalText = ({
  className,
  position,
  content,
}: {
  className: string;
  position: 'right' | 'left';
  content: string;
}) => {
  return (
    <motion.div
      className={clsx(
        'hidden md:block absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none',
        position === 'left' ? 'left-5' : 'right-5',
      )}
      initial={{ opacity: 0, y: position === 'left' ? 120 : -120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className={clsx(
          'text-xs tracking-[0.6em] uppercase font-light [writing-mode:vertical-lr]',
          className,
        )}
      >
        {content}
      </p>
    </motion.div>
  );
};
