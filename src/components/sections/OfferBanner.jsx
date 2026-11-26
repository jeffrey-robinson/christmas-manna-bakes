import { useState } from 'react';
import { Check, Copy, Gift } from 'lucide-react';
import Snowfall from '../ui/Snowfall';
import CakeIllustration from '../ui/CakeIllustration';
import useCountdown from '../../hooks/useCountdown';
import useTilt from '../../hooks/useTilt';
import { OFFER_CODE, OFFER_DISCOUNT, OFFER_END } from '../../data/site';

const pad = (n) => String(n).padStart(2, '0');

export default function OfferBanner() {
  const time = useCountdown(OFFER_END);
  const [copied, setCopied] = useState(false);
  const { ref, onMouseMove, onMouseLeave } = useTilt(12);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(OFFER_CODE);
    } catch {
      /* clipboard may be unavailable; still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const units = [
    ['Days', time.days],
    ['Hours', time.hours],
    ['Mins', time.minutes],
    ['Secs', time.seconds],
  ];

  return (
    <section id="offer" className="bg-cream py-16 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cranberry-700 via-cranberry-800 to-cranberry-900 px-6 py-12 shadow-2xl sm:px-12 lg:px-16 lg:py-16">
          <Snowfall count={26} className="opacity-70" />
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-pine-400/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-gold-300 ring-1 ring-white/20">
                <Gift size={16} /> Early-bird Christmas offer
              </span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Save <span className="text-gradient-gold">{OFFER_DISCOUNT}%</span> on every Christmas cake
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/80 lg:mx-0">
                Reserve your centrepiece early and lock in your preferred delivery slot. Use the code at checkout.
              </p>

              <div className="mt-8 flex justify-center gap-3 sm:gap-4 lg:justify-start" role="timer" aria-live="off">
                {units.map(([label, value]) => (
                  <div
                    key={label}
                    className="w-[72px] rounded-2xl bg-white/10 py-3 text-center ring-1 ring-white/20 backdrop-blur sm:w-20 sm:py-4"
                  >
                    <div className="font-display text-3xl font-bold tabular-nums text-white sm:text-4xl">{pad(value)}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={copy}
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-dashed border-gold-400 bg-white/5 px-6 py-3.5 font-mono text-lg font-bold tracking-widest text-gold-300 transition hover:bg-white/10"
                >
                  {OFFER_CODE}
                  {copied ? <Check size={18} /> : <Copy size={18} className="opacity-70 group-hover:opacity-100" />}
                </button>
                <a href="#products" className="btn-gold w-full sm:w-auto">
                  Claim my discount
                </a>
              </div>
              <p className="mt-3 text-xs text-white/55">{copied ? 'Code copied to clipboard!' : 'Click the code to copy it.'}</p>
            </div>

            <div className="persp mx-auto w-full max-w-sm">
              <div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="preserve-3d relative rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/25 backdrop-blur transition-transform duration-200"
              >
                <div className="animate-float">
                  <CakeIllustration variant="velvet" className="w-full drop-shadow-2xl" />
                </div>
                <div
                  className="absolute -right-3 -top-3 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-gold-400 text-center font-display font-extrabold leading-none text-cocoa shadow-xl"
                  style={{ transform: 'translateZ(60px) rotate(12deg)' }}
                >
                  <span>
                    <span className="block text-3xl">{OFFER_DISCOUNT}%</span>
                    <span className="block text-xs font-bold tracking-widest">OFF</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
