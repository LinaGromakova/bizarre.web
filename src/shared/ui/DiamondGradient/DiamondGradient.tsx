import clsx from 'clsx';

const DiamondGradient = ({
  className,
  opacity,
  color,
  size,
}: {
  className?: string;
  opacity: string;
  color: string;
  size: number;
}) => {
  return (
    <div
      className={clsx(
        `w-full h-full opacity-${opacity} bg-[linear-gradient(45deg,${color}_25%,transparent_25%,transparent_75%,${color}_75%),linear-gradient(-45deg,${color}_25%,transparent_25%,transparent_75%,${color}_75%)] bg-size-[${size}px_${size}px] z-0`,
        className,
      )}
    ></div>
  );
};
export default DiamondGradient;
