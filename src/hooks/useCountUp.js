import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useCountUp(
  target,
  { decimals = 0, duration = 1.6, delay = 0, start = false } = {},
) {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setCurrent(target);
      return;
    }

    let raf;
    const timeout = setTimeout(() => {
      const begin = performance.now();
      function tick(now) {
        const progress = Math.min(1, (now - begin) / (duration * 1000));
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(target * eased);
        if (progress < 1) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [start, target, decimals, duration, delay, reduceMotion]);

  return current.toFixed(decimals);
}
