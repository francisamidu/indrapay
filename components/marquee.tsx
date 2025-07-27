"use client";
import { useWidth } from "@/hooks/use-width";
import { useAnimationFrame } from "framer-motion";
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

  const widowWidth = useWidth();

  React.useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  // Animation state
  const x = useRef(0);
  useAnimationFrame((_t, delta) => {
    if (paused || !width || widowWidth < 768) return;
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
      className={`relative w-full md:overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:whitespace-nowrap md:will-change-transform"
        style={{ minWidth: width }}
      >
        <div ref={contentRef} className="flex flex-col md:flex-row">
          {children}
        </div>
        <div className="flex flex-col md:flex-row">{children}</div>
      </div>
    </div>
  );
};
