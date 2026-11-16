import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export const useHandleMouseMove = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const standX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const standY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const bgX = useTransform(smoothX, [-0.5, 0.5], [8, -8]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  return { handleMouseMove, standX, standY, bgY, bgX };
};
