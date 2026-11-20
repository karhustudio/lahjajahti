import { useEffect, useRef, useState } from "react";

export function useFitText(text: string, min = 10, max = 48) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState(min);

  useEffect(() => {
    const box = boxRef.current;
    const el = textRef.current;
    if (!box || !el) return;

    const fit = () => {
      let low = min;
      let high = max;
      let best = min;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        el.style.fontSize = `${mid}px`;

        if (
          el.scrollHeight <= box.clientHeight &&
          el.scrollWidth <= box.clientWidth
        ) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      el.style.fontSize = `${best}px`;
      setFontSize(best);
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    return () => observer.disconnect();
  }, [text, min, max]);

  return { boxRef, textRef, fontSize };
}