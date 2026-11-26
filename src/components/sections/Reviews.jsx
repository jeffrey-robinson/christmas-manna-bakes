import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Snowfall from '../ui/Snowfall';
import useSlidesPerView from '../../hooks/useSlidesPerView';
import { reviews } from '../../data/reviews';

export default function Reviews() {
  const perView = useSlidesPerView();
  const maxIndex = reviews.length - perView;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i, maxIndex) + 1)), 5000);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const go = (dir) => setIndex(Math.min(Math.max(safeIndex + dir, 0), maxIndex));

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-br from-pine-950 via-pine-900 to-pine-800 py-20 sm:py-24">
      <Snowfall count={22} className="opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Kind words"
          title="Tables we've made"
          highlight="merrier"
          subtitle="Over 12,000 families trusted us with their Christmas centrepiece last year."
        />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${(safeIndex * 100) / perView}%)` }}
            >
              {reviews.map((r) => (
                <div key={r.id} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
                  <figure className="relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-2xl">
                    <Quote size={36} className="absolute right-6 top-6 text-cranberry-100" />
                    <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={17}
                          className={i < r.rating ? 'fill-gold-500 text-gold-500' : 'text-cocoa/15'}
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-cocoa/80">“{r.text}”</blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-cocoa/10 pt-5">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${r.color} font-display text-lg font-bold text-white`}
                      >
                        {r.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                      <div>
                        <p className="font-bold leading-tight">{r.name}</p>
                        <p className="text-xs text-cocoa/55">{r.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={safeIndex === 0}
              aria-label="Previous reviews"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === safeIndex ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={safeIndex === maxIndex}
              aria-label="Next reviews"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20 disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
