const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const InstagramIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

export const FacebookIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14 8h2.5V4.5H14a4 4 0 0 0-4 4V11H7.5v3.5H10V21h3.5v-6.5H16L16.5 11h-3V8.8A.8.8 0 0 1 14 8Z" />
  </svg>
);

export const XIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
);

export const YoutubeIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" />
  </svg>
);
