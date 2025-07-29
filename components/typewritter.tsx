// FancyTypewriter.tsx
import React from "react";
import { useTypewriter } from "@/hooks/use-typewritter";

type FancyTypewriterProps = {
  words: string[];
  style?: React.CSSProperties;
  className?: string;
  cursor?: React.ReactNode;
};

export function FancyTypewriter({
  words,
  style,
  className,
  cursor = <span className="blink">_</span>,
}: FancyTypewriterProps) {
  const { text } = useTypewriter({ words });

  return (
    <span className={className} style={style}>
      {text}
      {cursor}
    </span>
  );
}
