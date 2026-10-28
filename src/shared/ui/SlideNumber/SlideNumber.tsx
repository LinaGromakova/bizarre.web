import clsx from 'clsx';

const SlideNumber = ({ color, number }: { color: string; number: number }) => {
  return (
    <div className='absolute bottom-10 left-24 z-50 flex items-center gap-4 text-md font-bold tracking-widest uppercase text-white/50 justify-center'>
      <span>
        Vol. 0{number} / Page 0{number}
      </span>
      <div className='w-12 h-0.5 bg-white/50'></div>
      <span
        className={clsx(
          'cursor-pointer animate-pulse -mt-1.5',
          `text-${color}`,
        )}
      >
        Scroll to enter <span className='text-2xl'>⬇</span>
      </span>
    </div>
  );
};
export default SlideNumber;
