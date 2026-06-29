import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Adds a CSS class when the element enters the viewport.
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal"> ... </div>
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
