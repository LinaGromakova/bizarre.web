import clsx from 'clsx';

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
    <div
      className={clsx(
        'hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none',
        position === 'left' ? 'left-0' : 'right-0',
      )}
    >
      <p
        className={clsx(
          'text-xs tracking-[0.6em] uppercase font-light [writing-mode:vertical-lr]',
          className,
        )}
      >
        {content}
      </p>
    </div>
  );
};
