import { StarIcon } from '@/shared';
import { STARS_CONFIG } from '../../configs/stars.config';
import clsx from 'clsx';

export const StarList = () => {
  return (
    <>
      {STARS_CONFIG.map((star, idx) => (
        <StarIcon
          key={idx}
          className={clsx('fill-accent absolute z-30', star)}
        />
      ))}
    </>
  );
};
