export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`display text-[clamp(1.75rem,4vw,2.75rem)] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed ${
            light ? 'text-white/80' : 'text-muted'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
