import { useMemo } from 'react';

export default function Snowfall({ count = 36, className = '' }) {
  const flakes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 7,
        duration: 9 + Math.random() * 12,
        delay: -Math.random() * 20,
        opacity: 0.35 + Math.random() * 0.55,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            filter: 'blur(0.5px)',
            animation: `snow ${f.duration}s linear ${f.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
