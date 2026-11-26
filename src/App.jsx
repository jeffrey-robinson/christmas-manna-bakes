import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import Products from './components/sections/Products';
import Reviews from './components/sections/Reviews';
import Brands from './components/sections/Brands';
import OfferBanner from './components/sections/OfferBanner';
import Toast from './components/ui/Toast';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [toast, setToast] = useState('');
  const timer = useRef(null);

  const addToCart = useCallback((product) => {
    setCartCount((c) => c + 1);
    setToast(`${product.name} added to cart`);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 2200);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Categories onSelectCategory={setActiveCategory} />
        <Products activeCategory={activeCategory} onCategoryChange={setActiveCategory} onAdd={addToCart} />
        <Reviews />
        <Brands />
        <OfferBanner />
      </main>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}
