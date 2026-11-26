import { useRef } from 'react';

/**
 * Lightweight 3D tilt effect. Spread the returned handlers on an element and
 * attach `ref`. The element should have `transition-transform` for smoothness.
 */
export default function useTilt(max = 10) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return { ref, onMouseMove, onMouseLeave };
}
