export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center', light = false }) {
  return (
    <div className={`mx-auto mb-12 max-w-2xl ${align === 'center' ? 'text-center' : 'text-left mx-0'}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-script text-xl ${light ? 'text-gold-400' : 'text-cranberry-600'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-cocoa'
        }`}
      >
        {title}{' '}
        {highlight && <span className={light ? 'text-gradient-gold' : 'text-gradient-red'}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-cocoa/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
