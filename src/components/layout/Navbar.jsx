import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, Snowflake, X } from 'lucide-react';
import { BRAND, FREE_SHIPPING_FROM, navLinks } from '../../data/site';

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!cartCount) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 400);
    return () => clearTimeout(t);
  }, [cartCount]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-pine-900 py-2 text-center text-xs font-medium tracking-wide text-white/90 sm:text-sm">
        <span className="text-gold-400">★</span> Free delivery over ${FREE_SHIPPING_FROM} · Order by 22 Dec for Christmas Eve
        delivery <span className="text-gold-400">★</span>
      </div>

      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'bg-cream/90 shadow-md backdrop-blur-lg' : 'bg-cream/60 backdrop-blur'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between sm:h-20">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cranberry-700 text-gold-300 shadow-lg shadow-cranberry-700/30">
              <Snowflake size={22} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">{BRAND}</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-semibold text-cocoa/80 transition hover:text-cranberry-700 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-cranberry-600 after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full text-cocoa/80 transition hover:bg-cocoa/5"
            >
              <Search size={20} />
            </button>
            <a
              href="#products"
              aria-label={`Cart, ${cartCount} items`}
              className="relative grid h-10 w-10 place-items-center rounded-full bg-cocoa text-white transition hover:bg-cranberry-700"
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span
                  className={`absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold-400 px-1 text-[11px] font-bold text-cocoa ${
                    bump ? 'animate-pop' : ''
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full text-cocoa transition hover:bg-cocoa/5 lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            open ? 'grid-rows-[1fr] border-t border-cocoa/10' : 'grid-rows-[0fr]'
          }`}
        >
          <ul className="min-h-0 overflow-hidden">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3.5 text-base font-semibold text-cocoa/80 transition hover:bg-cranberry-50 hover:text-cranberry-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
