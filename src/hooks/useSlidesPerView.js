import { useEffect, useState } from 'react';

const compute = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
};

export default function useSlidesPerView() {
  const [perView, setPerView] = useState(compute);

  useEffect(() => {
    const onResize = () => setPerView(compute());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return perView;
}
