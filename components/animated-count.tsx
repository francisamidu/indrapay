"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCountProps {
  to: number;
  decimals?: number;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCount: React.FC<AnimatedCountProps> = ({
  to,
  decimals = 0,
  duration = 6.5,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || count === to) return;
    let start = 0;
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = (ts - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = start + (to - start) * progress;
      setCount(Number(value.toFixed(decimals)));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [inView, to, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};
