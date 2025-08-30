import { useMotionValue, useTransform } from "motion/react";
import { PanInfo } from "motion/react";

export function useCardRotation(onThresholdExceed) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const handleDragEnd = (info) => {
    if (Math.abs(info.offsetX) > 180 || Math.abs(info.offsetY) > 180) {
      onThresholdExceed?.();
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return { x, y, rotateX, rotateY, handleDragEnd };
}
