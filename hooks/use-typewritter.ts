// useTypewriter.ts
import { useState, useEffect, useRef, useCallback } from "react";

type Options = {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
};

export function useTypewriter({
  words,
  loop = true,
  typeSpeed = 200,
  deleteSpeed = 10,
  delaySpeed = 2000,
}: Options) {
  const [text, setText] = useState("");
  const [isDeleting, setDeleting] = useState(false);
  const [idx, setIdx] = useState(0);
  const timeout = useRef<number>(0);

  const tick = useCallback(() => {
    const full = words[idx];
    const next = isDeleting
      ? full.substring(0, text.length - 1)
      : full.substring(0, text.length + 1);

    setText(next);

    if (!isDeleting && next === full) {
      timeout.current = window.setTimeout(() => setDeleting(true), delaySpeed);
    } else if (isDeleting && next === "") {
      setDeleting(false);
      const nextIdx = idx + 1;
      if (nextIdx === words.length) {
        if (loop) {
          setIdx(0);
        }
      } else {
        setIdx(nextIdx);
      }
    }
  }, [text, isDeleting, idx, words, delaySpeed, loop]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    timeout.current = window.setTimeout(tick, speed);
    return () => clearTimeout(timeout.current);
  }, [tick, isDeleting, typeSpeed, deleteSpeed, text]);

  useEffect(() => {
    // Stop after last word if not looping
    if (
      !loop &&
      idx === words.length - 1 &&
      text === words[idx] &&
      !isDeleting
    ) {
      clearTimeout(timeout.current);
    }
  }, [idx, text, isDeleting, words, loop]);

  return { text, isDeleting, idx };
}
