import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark shadow-[var(--shadow-soft)]',
  secondary: 'bg-white text-ink border border-ink/15 hover:bg-surface',
  ghost: 'bg-transparent text-ink hover:bg-white/20',
  light: 'bg-white text-brand-deep hover:bg-white/90',
  dark: 'bg-brand-deep text-white hover:bg-ink',
}

const sizes = {
  md: 'px-6 py-3.5 text-[0.95rem]',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    'disabled:opacity-60 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
