const DiamondGradient = ({
  className = '',
  opacity,
  color,
  size,
}: {
  className?: string;
  opacity: string;
  color: string;
  size: number;
}) => {
  const inlineStyles = {
    opacity: opacity,
    backgroundImage: `
      linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%),
      linear-gradient(-45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%)
    `,
    backgroundSize: `${size}px ${size}px`,
  };

  return (
    <div
      className={`${className} w-full h-full`}
      style={inlineStyles}
    />
  );
};
export default DiamondGradient;
