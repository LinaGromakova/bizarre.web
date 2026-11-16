import clsx from 'clsx';
import { BORDERS, CORNERS, ORIGINS } from '../../configs/borders.config';
import { motion } from 'framer-motion';

export const BorderList = () => {
  return (
    <>
      {BORDERS.map((border, idx) => (
        <motion.span
          key={idx}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2, delay: 0.09 + idx / 10, ease: 'linear' }}
          className={clsx('absolute bg-accent z-1000', border)}
        />
      ))}
      {CORNERS.map((border, idx) => (
        <div
          key={idx}
          className={clsx(
            'absolute z-200 w-25 h-25 pointer-events-none',
            border.pos,
          )}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: ORIGINS[idx].h }}
            className={clsx(
              'block absolute w-full h-0.5 bg-accent',
              border.hOrigin,
            )}
          />
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: ORIGINS[idx].v }}
            className={clsx(
              'block absolute h-full w-0.5 bg-accent',
              border.vOrigin,
            )}
          />
        </div>
      ))}
    </>
  );
};
