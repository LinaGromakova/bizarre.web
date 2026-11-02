import { ArrowIcon } from '@/shared';
import { ARROWS_CONFIG } from '../../configs/arrows.config';
import clsx from 'clsx';

export const ArrowList = () => {
  return (
    <>
      {ARROWS_CONFIG.map((arrow, idx) => (
        <ArrowIcon
          key={idx}
          className={clsx('fill-accent absolute w-16 h-7', arrow)}
        />
      ))}
    </>
  );
};
