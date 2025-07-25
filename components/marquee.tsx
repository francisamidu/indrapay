"use client";
import { motion, useAnimationFrame } from "framer-motion";
import React, { useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // px/sec
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "left",
  speed = 40,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  // Animation state
  const x = useRef(0);
  useAnimationFrame((t, delta) => {
    if (paused || !width) return;
    const dir = direction === "left" ? -1 : 1;
    x.current += dir * speed * (delta / 1000);
    // Loop
    if (dir === -1 && x.current <= -width / 2) x.current += width / 2;
    if (dir === 1 && x.current >= 0) x.current -= width / 2;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  // Duplicate children for seamless loop
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{maskImage:'linear-gradient(90deg,transparent,black 10%,black 90%,transparent)'}}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ minWidth: width }}
      >
        <div ref={contentRef} className="flex">
          {children}
        </div>
        <div className="flex">
          {children}
        </div>
      </div>
    </div>
  );
};
