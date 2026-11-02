import clsx from 'clsx';

export const VerticalText = ({ className }: { className?: string }) => {
  return (
    <div className='flex-[25%] flex items-center font-cinzel text-9xl tracking-widest text-accent/50 gap-3 pl-6'>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={clsx(
            'uppercase select-none whitespace-nowrap font-bold [writing-mode:vertical-rl]',
            className,
          )}
        >
          JOJO JOJO JOJO
        </div>
      ))}
    </div>
  );
};
