import { useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone, Snowflake } from 'lucide-react';
import { BRAND, footerColumns } from '../../data/site';
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from '../ui/SocialIcons';

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'X', Icon: XIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail('');
  };

  return (
    <footer id="contact" className="relative bg-pine-950 text-white">
      <svg className="absolute -top-px left-0 block w-full text-cream" viewBox="0 0 1440 50" preserveAspectRatio="none" height="50">
        <path d="M0 0h1440v20c-120 30-240 30-360 10S840 -10 720 0 480 40 360 40 120 10 0 30Z" fill="currentColor" />
      </svg>

      <div className="container-x pb-10 pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cranberry-700 text-gold-300">
                <Snowflake size={24} />
              </span>
              <span className="font-display text-2xl font-bold">{BRAND}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Small-batch Christmas cakes, baked with real butter and a lot of festive love. Made fresh, wrapped in
              ribbon, delivered with care.
            </p>

            <form onSubmit={submit} className="mt-7 max-w-sm">
              <label htmlFor="newsletter" className="mb-2 block text-sm font-semibold text-gold-300">
                Get recipes & early offers
              </label>
              <div className="flex gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 focus-within:ring-gold-400">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setDone(false);
                  }}
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-400 text-cocoa transition hover:bg-gold-300"
                >
                  {done ? <Check size={18} /> : <ArrowRight size={18} />}
                </button>
              </div>
              {done && <p className="mt-2 text-xs text-pine-200">Thanks! Check your inbox for a sweet surprise.</p>}
            </form>

            <div className="mt-7 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-cranberry-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-lg font-bold text-gold-300">{col.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/65">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="transition hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display text-lg font-bold text-gold-300">Visit us</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li className="flex gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" /> 12 Gingerbread Lane, Frostville
                </li>
                <li className="flex gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" /> +1 (555) 012-2512
                </li>
                <li className="flex gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" /> hello@noelbakes.example
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 {BRAND}. Baked with love. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-5">
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </li>
          </ul>
          <p>Secure checkout · Visa · Mastercard · UPI · PayPal</p>
        </div>
      </div>
    </footer>
  );
}
