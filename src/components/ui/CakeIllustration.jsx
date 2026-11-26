import { useId } from 'react';

export const PALETTES = {
  plum: { body: '#7a2e3a', dark: '#451720', frost: '#fffaf0', shade: '#ecdcc4', accent: '#d41a3c', leaf: '#1c7e55', gold: '#ffd166' },
  chocolate: { body: '#5a2d1a', dark: '#2a120a', frost: '#8a5438', shade: '#5f3a27', accent: '#f7b733', leaf: '#1c7e55', gold: '#ffd166' },
  velvet: { body: '#c4153a', dark: '#780a22', frost: '#fff4ea', shade: '#f2d9cc', accent: '#176445', leaf: '#1c7e55', gold: '#ffd166' },
  fruit: { body: '#b9742a', dark: '#6d3f12', frost: '#fff1d6', shade: '#efd2a0', accent: '#d41a3c', leaf: '#1c7e55', gold: '#ffe08a' },
  matcha: { body: '#4f9a6c', dark: '#25583d', frost: '#f4fff6', shade: '#d3ecd9', accent: '#d41a3c', leaf: '#0f3f2e', gold: '#ffd166' },
  snow: { body: '#dfe8ff', dark: '#8ea5dd', frost: '#ffffff', shade: '#dce6fb', accent: '#d41a3c', leaf: '#1c7e55', gold: '#ffd166' },
};

const starPoints = (cx, cy, R, r) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rad = i % 2 ? r : R;
    return `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

function Drips({ cx, topY, rx, ry, count, color, seed = 0 }) {
  return Array.from({ length: count }, (_, i) => {
    const t = (i + 0.5) / count;
    const x = cx - rx + t * 2 * rx;
    const nx = (x - cx) / rx;
    const y = topY + ry * Math.sqrt(Math.max(0, 1 - nx * nx));
    const len = 12 + (((i * 7 + seed) % 5) * 8);
    return <rect key={i} x={x - 7} y={y - 4} width={14} height={len} rx={7} fill={color} />;
  });
}

function Tier({ id, cx, topY, rx, h, p, count, seed }) {
  const ry = Math.round(rx * 0.18);
  const left = cx - rx;
  const bandY = topY + h * 0.62;
  return (
    <g>
      <path d={`M${left} ${topY} v${h} a${rx} ${ry} 0 0 0 ${rx * 2} 0 v${-h} Z`} fill={`url(#${id}-body)`} />
      <path
        d={`M${left} ${bandY} a${rx} ${ry} 0 0 0 ${rx * 2} 0 v7 a${rx} ${ry} 0 0 1 ${-rx * 2} 0 Z`}
        fill={p.gold}
        opacity="0.92"
      />
      <Drips cx={cx} topY={topY} rx={rx} ry={ry} count={count} color={p.frost} seed={seed} />
      <ellipse cx={cx} cy={topY} rx={rx} ry={ry} fill={p.shade} />
      <ellipse cx={cx} cy={topY - 1.5} rx={rx - 5} ry={ry - 2} fill={p.frost} />
    </g>
  );
}

function Holly({ x, y, s = 1, p }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="-13" cy="2" rx="16" ry="6.5" transform="rotate(-24 -13 2)" fill={p.leaf} />
      <ellipse cx="13" cy="2" rx="16" ry="6.5" transform="rotate(24 13 2)" fill={p.leaf} />
      <circle cx="0" cy="-3" r="6" fill={p.accent} />
      <circle cx="-7" cy="3" r="5.5" fill={p.accent} />
      <circle cx="7" cy="3" r="5.5" fill={p.accent} />
      <circle cx="-1.5" cy="-5" r="1.8" fill="#fff" opacity="0.75" />
    </g>
  );
}

const sparkles = [
  [38, 120, 5, 0],
  [352, 90, 4, 0.6],
  [70, 40, 3, 1.1],
  [330, 200, 5, 1.6],
  [20, 260, 3, 0.3],
  [378, 300, 4, 0.9],
  [300, 30, 3, 1.4],
];

export default function CakeIllustration({ variant = 'plum', className = '', sparkle = true }) {
  const uid = useId().replace(/:/g, '');
  const p = PALETTES[variant] || PALETTES.plum;

  return (
    <svg viewBox="0 0 400 430" className={className} role="img" aria-label="Christmas cake illustration">
      <defs>
        <linearGradient id={`${uid}-body`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={p.dark} />
          <stop offset="0.3" stopColor={p.body} />
          <stop offset="0.62" stopColor={p.body} />
          <stop offset="1" stopColor={p.dark} />
        </linearGradient>
        <linearGradient id={`${uid}-plate`} x1="0" x2="1">
          <stop offset="0" stopColor="#c9c2b8" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c9c2b8" />
        </linearGradient>
        <radialGradient id={`${uid}-shadow`}>
          <stop offset="0" stopColor="#000" stopOpacity="0.35" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="200" cy="410" rx="185" ry="16" fill={`url(#${uid}-shadow)`} />
      <ellipse cx="200" cy="388" rx="178" ry="26" fill={`url(#${uid}-plate)`} />
      <ellipse cx="200" cy="384" rx="160" ry="21" fill="#f6f1ea" />

      <Tier id={uid} cx={200} topY={288} rx={140} h={84} p={p} count={13} seed={1} />
      <Holly x={110} y={282} s={0.85} p={p} />
      <Holly x={292} y={286} s={0.85} p={p} />

      <Tier id={uid} cx={200} topY={207} rx={100} h={80} p={p} count={10} seed={3} />
      <Holly x={238} y={203} s={0.7} p={p} />

      <Tier id={uid} cx={200} topY={137} rx={66} h={70} p={p} count={7} seed={2} />
      <Holly x={200} y={131} s={0.8} p={p} />

      <polygon points={starPoints(200, 98, 15, 6.5)} fill={p.gold} stroke="#f7b733" strokeWidth="1.5" strokeLinejoin="round" />

      {sparkle &&
        sparkles.map(([x, y, r, d], i) => (
          <g key={i} className="animate-twinkle" style={{ animationDelay: `${d}s`, transformOrigin: `${x}px ${y}px` }}>
            <path
              d={`M${x} ${y - r * 2.2} L${x + r * 0.55} ${y - r * 0.55} L${x + r * 2.2} ${y} L${x + r * 0.55} ${y + r * 0.55} L${x} ${y + r * 2.2} L${x - r * 0.55} ${y + r * 0.55} L${x - r * 2.2} ${y} L${x - r * 0.55} ${y - r * 0.55} Z`}
              fill="#fff"
              opacity="0.95"
            />
          </g>
        ))}
    </svg>
  );
}
