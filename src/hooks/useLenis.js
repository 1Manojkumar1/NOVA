import { useEffect } from "react";
import Lenis from "lenis";

export const SCROLL_OFFSET = -80;

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function scrollToHash(hash) {
  if (!hash || hash === "#") return false;
  const target = document.querySelector(hash);
  if (!target) return false;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { offset: SCROLL_OFFSET, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return true;
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      autoRaf: true,
    });

    lenisInstance = lenis;

    return () => {
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);
}
