import { brands } from '../../data/brands';

export default function Brands() {
  const loop = [...brands, ...brands];

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20" aria-label="Our ingredient partners">
      <div className="container-x mb-10 text-center">
        <p className="font-script text-xl text-cranberry-600">Baked with the finest</p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Ingredients from partners we trust</h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          {loop.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="mx-4 flex h-20 min-w-[210px] items-center justify-center rounded-2xl border border-cocoa/10 bg-cream px-8 transition hover:-translate-y-1 hover:border-cranberry-200 hover:bg-cranberry-50"
            >
              <span className={`whitespace-nowrap text-lg text-cocoa/70 ${b.font} ${b.weight}`}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
