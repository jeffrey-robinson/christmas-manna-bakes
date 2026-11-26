import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import CakeIllustration from '../ui/CakeIllustration';
import useTilt from '../../hooks/useTilt';
import { categories } from '../../data/categories';

function CategoryCard({ cat, onSelect }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);

  return (
    <button
      type="button"
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onSelect(cat.id)}
      className={`group relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${cat.gradient} p-5 text-left text-white shadow-card transition-transform duration-200 will-change-transform sm:p-6`}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-xl" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{cat.count} cakes</p>
        <h3 className="mt-1 font-display text-xl font-bold leading-tight sm:text-2xl">{cat.name}</h3>
        <p className="mt-1 text-sm text-white/75">{cat.tagline}</p>
      </div>

      <CakeIllustration
        variant={cat.variant}
        sparkle={false}
        className="absolute bottom-10 left-1/2 w-[78%] -translate-x-1/2 drop-shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
      />

      <span className="relative z-10 ml-auto grid h-10 w-10 place-items-center rounded-full bg-white text-cocoa transition group-hover:rotate-45 group-hover:bg-gold-400">
        <ArrowUpRight size={18} />
      </span>
    </button>
  );
}

export default function Categories({ onSelectCategory }) {
  const handleSelect = (id) => {
    onSelectCategory(id);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Find your flavour"
          title="Shop by"
          highlight="category"
          subtitle="From rum-soaked classics to plant-based showstoppers, there is a Christmas cake for every table."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} onSelect={handleSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
