export const BRAND = 'Noël Bakes';
export const CURRENCY = '$';
export const FREE_SHIPPING_FROM = 60;
export const OFFER_CODE = 'NOEL25';
export const OFFER_DISCOUNT = 25;
// Early-bird offer deadline (local time)
export const OFFER_END = new Date('2026-12-20T23:59:59').getTime();

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Cakes', href: '#products' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Offers', href: '#offer' },
  { label: 'Contact', href: '#contact' },
];

export const footerColumns = [
  {
    title: 'Shop',
    links: ['Plum Cakes', 'Chocolate Cakes', 'Red Velvet', 'Vegan Bakes', 'Gift Hampers'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'The Bakery', 'Careers', 'Press', 'Corporate Gifting'],
  },
  {
    title: 'Help',
    links: ['Delivery Info', 'Track Order', 'Allergen Guide', 'Returns', 'FAQs'],
  },
];
