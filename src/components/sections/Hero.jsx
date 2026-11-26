import { useState } from 'react';
import { ArrowRight, Sparkles, Star, Truck } from 'lucide-react';
import CakeIllustration from '../ui/CakeIllustration';
import Snowfall from '../ui/Snowfall';

const baubles = [
  { top: '8%', left: '6%', size: 56, z: 150, from: '#ff9ca7', to: '#b00f30', delay: '0s' },
  { top: '70%', left: '2%', size: 38, z: 110, from: '#ffe08a', to: '#d9951a', delay: '1.2s' },
  { top: '14%', right: '4%', size: 44, z: 130, from: '#82d4ab', to: '#145039', delay: '0.6s' },
  { top: '62%', right: '6%', size: 62, z: 170, from: '#ffc7cd', to: '#8f102e', delay: '1.8s' },
];

export default function Hero() {
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setRot({ x: -y * 16, y: x * 20 });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-cream via-cranberry-50 to-cream">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-cranberry-200/50 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-pine-200/50 blur-3xl" />
      <Snowfall count={30} className="opacity-90 [&>span]:bg-cranberry-200" />

      <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-cranberry-700 shadow ring-1 ring-cranberry-100 sm:text-sm">
            <Sparkles size={15} className="text-gold-500" />
            Christmas 2026 · Pre-orders now open
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
            Bake the season{' '}
            <span className="relative inline-block">
              <span className="text-gradient-red">magical</span>
              <svg
                className="absolute -bottom-2 left-0 w-full text-gold-400"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 8c40-8 90-8 196-2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cocoa/75 sm:text-lg lg:mx-0">
            Handcrafted tiered Christmas cakes, soaked in tradition and finished with edible gold. Baked fresh,
            boxed with ribbon, and delivered to your table.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#products" className="btn-primary w-full sm:w-auto">
              Shop Christmas Cakes <ArrowRight size={18} />
            </a>
            <a href="#offer" className="btn-ghost w-full sm:w-auto">
              View 25% Offer
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-cocoa/10 pt-8 text-center lg:text-left">
            <div>
              <dt className="flex items-center justify-center gap-1 font-display text-2xl font-bold sm:text-3xl lg:justify-start">
                4.9 <Star size={20} className="fill-gold-500 text-gold-500" />
              </dt>
              <dd className="text-xs text-cocoa/60 sm:text-sm">Avg. rating</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-bold sm:text-3xl">12k+</dt>
              <dd className="text-xs text-cocoa/60 sm:text-sm">Happy tables</dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-bold sm:text-3xl">48h</dt>
              <dd className="text-xs text-cocoa/60 sm:text-sm">Fresh-bake promise</dd>
            </div>
          </dl>
        </div>

        {/* 3D stage */}
        <div
          className="persp"
          onMouseMove={onMove}
          onMouseLeave={() => setRot({ x: 0, y: 0 })}
        >
          <div
            className="preserve-3d relative mx-auto aspect-square w-full max-w-[540px] transition-transform duration-200 ease-out"
            style={{ transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)` }}
          >
            <div
              className="absolute inset-6 rounded-full bg-gradient-to-br from-gold-300 via-cranberry-300 to-cranberry-500 opacity-70 blur-2xl"
              style={{ transform: 'translateZ(-90px)' }}
            />

            <div className="absolute inset-x-6 bottom-[8%] top-[52%]" style={{ transform: 'translateZ(10px) rotateX(72deg)' }}>
              <div className="h-full w-full animate-spin-slow rounded-full border-[3px] border-dashed border-gold-500/70" />
            </div>
            <div className="absolute inset-x-14 bottom-[14%] top-[58%]" style={{ transform: 'translateZ(20px) rotateX(72deg)' }}>
              <div className="h-full w-full rounded-full border border-white/70" />
            </div>

            <div className="absolute inset-0 grid place-items-center" style={{ transform: 'translateZ(70px)' }}>
              <div className="animate-float w-[84%]">
                <CakeIllustration variant="plum" className="w-full drop-shadow-[0_30px_30px_rgba(107,15,38,0.35)]" />
              </div>
            </div>

            {baubles.map((b, i) => (
              <div
                key={i}
                className="absolute"
                style={{ top: b.top, left: b.left, right: b.right, transform: `translateZ(${b.z}px)` }}
              >
                <div
                  className="animate-float-slow rounded-full shadow-xl"
                  style={{
                    width: b.size,
                    height: b.size,
                    animationDelay: b.delay,
                    background: `radial-gradient(circle at 30% 28%, #fff 0, ${b.from} 22%, ${b.to} 80%)`,
                  }}
                />
              </div>
            ))}

            <div className="absolute left-0 top-[34%]" style={{ transform: 'translateZ(190px)' }}>
              <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-xl ring-1 ring-black/5 backdrop-blur">
                <Star size={18} className="fill-gold-500 text-gold-500" />
                <div className="leading-tight">
                  <p className="text-sm font-bold">Loved by 12k+</p>
                  <p className="text-xs text-cocoa/60">Verified reviews</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[10%] right-0" style={{ transform: 'translateZ(190px)' }}>
              <div className="flex items-center gap-2 rounded-2xl bg-pine-900 px-4 py-3 text-white shadow-xl">
                <Truck size={18} className="text-gold-400" />
                <div className="leading-tight">
                  <p className="text-sm font-bold">Free delivery</p>
                  <p className="text-xs text-white/70">On orders over $60</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="relative block w-full text-white" viewBox="0 0 1440 60" preserveAspectRatio="none" height="60">
        <path d="M0 30c120 30 240 30 360 10s240-40 360-30 240 40 360 40 240-30 360-20v30H0Z" fill="currentColor" />
      </svg>
    </section>
  );
}
