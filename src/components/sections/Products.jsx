import { useMemo, useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../ui/ProductCard';
import { filterTabs, products } from '../../data/products';

const PAGE_SIZE = 8;

export default function Products({ activeCategory, onCategoryChange, onAdd }) {
  const [sort, setSort] = useState('featured');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const list = useMemo(() => {
    const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);
    const sorted = [...filtered];
    if (sort === 'low') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    return sorted;
  }, [activeCategory, sort]);

  const shown = list.slice(0, visible);

  return (
    <section id="products" className="bg-gradient-to-b from-white to-cranberry-50/60 py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Fresh from the oven"
          title="Our Christmas"
          highlight="collection"
          subtitle="Every cake is baked to order, hand-decorated, and delivered within 48 hours of leaving the oven."
        />

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  onCategoryChange(tab);
                  setVisible(PAGE_SIZE);
                }}
                aria-pressed={activeCategory === tab}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === tab
                    ? 'bg-cranberry-600 text-white shadow-lg shadow-cranberry-600/30'
                    : 'bg-white text-cocoa/70 ring-1 ring-cocoa/10 hover:bg-cranberry-50 hover:text-cranberry-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm font-medium text-cocoa/70">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border-0 bg-white px-4 py-2.5 text-sm font-semibold text-cocoa shadow ring-1 ring-cocoa/10 focus:outline-none focus:ring-2 focus:ring-cranberry-500"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>

        {shown.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-cocoa/60">No cakes in this category yet. Check back soon!</p>
        )}

        {visible < list.length && (
          <div className="mt-12 text-center">
            <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className="btn-ghost">
              Load more cakes ({list.length - visible})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
