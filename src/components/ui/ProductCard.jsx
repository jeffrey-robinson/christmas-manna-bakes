import { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import CakeIllustration, { PALETTES } from './CakeIllustration';
import useTilt from '../../hooks/useTilt';
import { CURRENCY } from '../../data/site';

const badgeStyles = {
  Bestseller: 'bg-gold-400 text-cocoa',
  New: 'bg-pine-600 text-white',
  Limited: 'bg-cranberry-600 text-white',
  Vegan: 'bg-pine-100 text-pine-800',
  Gift: 'bg-indigo-600 text-white',
  Sale: 'bg-cranberry-600 text-white',
  Premium: 'bg-cocoa text-gold-300',
};

export default function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false);
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);
  const palette = PALETTES[product.variant];

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-cocoa/5 transition-transform duration-200 will-change-transform"
    >
      <div
        className="relative grid place-items-center overflow-hidden px-6 pb-4 pt-8"
        style={{ background: `radial-gradient(circle at 50% 40%, ${palette.frost}, ${palette.shade} 75%)` }}
      >
        {product.badge && (
          <span
            className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold ${
              badgeStyles[product.badge] || 'bg-cocoa text-white'
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={liked}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow transition hover:scale-110"
        >
          <Heart size={17} className={liked ? 'fill-cranberry-600 text-cranberry-600' : 'text-cocoa/60'} />
        </button>
        <CakeIllustration
          variant={product.variant}
          sparkle={false}
          className="w-3/4 drop-shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-cranberry-600">{product.category}</p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug">{product.name}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-cocoa/70">
          <Star size={15} className="fill-gold-500 text-gold-500" />
          <span className="font-semibold text-cocoa">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
          <span className="ml-auto rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium">{product.weight}</span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <span className="font-display text-2xl font-bold text-cocoa">
              {CURRENCY}
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-cocoa/40 line-through">
                {CURRENCY}
                {product.oldPrice}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 rounded-full bg-cocoa px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cranberry-700"
          >
            <ShoppingBag size={16} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
