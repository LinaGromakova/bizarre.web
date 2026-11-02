import clsx from 'clsx';
import { BORDERS_CONFIG } from '../../configs/borders.config';

export const BorderList = () => {
  return (
    <>
      {BORDERS_CONFIG.map((border, idx) => (
        <div
          key={idx}
          className={clsx('absolute w-25 h-25 border-accent', border)}
        ></div>
      ))}
    </>
  );
};
