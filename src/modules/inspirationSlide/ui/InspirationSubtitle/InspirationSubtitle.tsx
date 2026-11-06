import { StarIcon } from '@/shared';
import clsx from 'clsx';

export const InspirationSubtitle = () => {
  return (
    <>
      <div className='relative z-10 flex items-center gap-x-4 mb-2 opacity-60 before:block before:w-15 before:h-px before:bg-accent/50 after:block after:w-15 after:h-px after:bg-accent/50'>
        {Array.from({ length: 3 }).map((_, idx) => (
          <StarIcon
            key={idx}
            className={clsx('fill-accent', idx === 1 ? 'h-4 w-4' : 'h-3 w-3')}
          />
        ))}
      </div>
      <div className='max-w-xl text-center py-3 bg-main relative z-10 border-t-accent/60 border-b-accent/60 border-b border-t px-4'>
        <p className='text-white/80 leading-relaxed text-lg tracking-normal'>
          Визуальный язык <span className='text-accent font-medium'>JoJo </span>
          вдохновлен эстетикой
          <span className='italic text-white'>Haute Couture</span>.
          Экспрессивные позы моделей из
          <span className='text-accent font-medium'> Vogue</span> и
          <span className='text-accent font-medium'> V Magazine</span>,
          авангардные костюмы от
          <span className='text-accent font-medium'> Versace</span> и
          <span className='text-accent font-medium'> Dior</span>, а также
          дерзкая графика фэшн-иллюстратора
          <span className='text-accent font-medium'> Тони Вирамонтеса </span>
          сформировали культовый стиль вселенной.
        </p>
      </div>
    </>
  );
};
