/** Original ELVA Health product visuals — not based on third-party brand assets. */

export function PouchStack({ className = '' }) {
  return (
    <div className={`relative mx-auto aspect-[4/5] w-full max-w-md ${className}`} aria-hidden>
      <div className="absolute left-[8%] top-[12%] w-[58%] -rotate-[14deg] rounded-2xl border border-white/50 bg-white/90 p-4 shadow-[var(--shadow-soft)]">
        <PouchFace time="08:00 AM" tone="#FFF4C8" icon="sun" />
      </div>
      <div className="absolute left-[22%] top-[28%] z-10 w-[62%] rounded-2xl border border-white/60 bg-white p-4 shadow-[var(--shadow-soft)]">
        <PouchFace time="02:00 PM" tone="#FFE0A8" icon="sun" />
      </div>
      <div className="absolute left-[34%] top-[48%] z-20 w-[58%] rotate-[12deg] rounded-2xl border border-white/50 bg-white/95 p-4 shadow-[var(--shadow-soft)]">
        <PouchFace time="09:00 PM" tone="#D7E8F5" icon="moon" />
      </div>
    </div>
  )
}

function PouchFace({ time, tone, icon }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted">ELVA HEALTH</p>
          <p className="mt-1 text-lg font-extrabold tracking-tight text-ink">{time}</p>
        </div>
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-ink"
          style={{ backgroundColor: tone }}
        >
          {icon === 'moon' ? '☾' : '☀'}
        </span>
      </div>
      <div className="mt-4 space-y-2 border-t border-line pt-3">
        <div className="h-2 w-[78%] rounded-full bg-surface-2" />
        <div className="h-2 w-[64%] rounded-full bg-surface-2" />
        <div className="h-2 w-[52%] rounded-full bg-surface-2" />
      </div>
      <div className="mt-4 flex gap-2">
        <span className="h-6 w-6 rounded-full bg-[#F4B183]" />
        <span className="h-6 w-10 rounded-full bg-[#E8E8E8]" />
        <span className="h-6 w-6 rounded-full bg-[#E07A5F]" />
      </div>
    </div>
  )
}

export function DoseBox({ className = '' }) {
  const slots = [
    { label: 'Morning', tone: '#FFF1A8' },
    { label: 'Afternoon', tone: '#FFE0A8' },
    { label: 'Evening', tone: '#D9EAF7' },
    { label: 'Night', tone: '#C9D7E8' },
  ]

  return (
    <div
      className={`mx-auto w-full max-w-lg overflow-hidden rounded-[1.5rem] bg-white p-5 shadow-[var(--shadow-soft)] md:p-6 ${className}`}
      aria-hidden
    >
      <div className="flex items-start justify-between gap-3 border-b border-line pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand">Organised routine</p>
          <p className="mt-1 text-xl font-extrabold text-ink">Daily dose plan</p>
        </div>
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">ELVA</span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {slots.map((slot) => (
          <div key={slot.label} className="rounded-xl p-2 text-center" style={{ backgroundColor: slot.tone }}>
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-ink/70">{slot.label}</p>
            <div className="mx-auto mt-3 h-10 w-8 rounded-md bg-white/80 shadow-sm" />
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {['Clear dose labels', 'Time-based organisation', 'Easy for caregivers'].map((row) => (
          <div key={row} className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5 text-sm font-semibold text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-brand" />
            {row}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ReminderCard({ className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-sm rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-soft)] ${className}`}
      aria-hidden
    >
      <p className="text-xs font-bold uppercase tracking-wider text-brand">Reminder</p>
      <p className="mt-3 display text-3xl">Time for your evening dose</p>
      <p className="mt-3 text-muted">9:00 PM · Organised with ELVA Health</p>
      <div className="mt-6 flex gap-3">
        <span className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white">Taken</span>
        <span className="rounded-full bg-surface-2 px-4 py-2 text-sm font-bold text-ink">Snooze</span>
      </div>
    </div>
  )
}

export function DeliveryVisual({ className = '' }) {
  return (
    <div className={`relative mx-auto aspect-square w-full max-w-md ${className}`} aria-hidden>
      <div className="absolute inset-[12%] rounded-[2rem] bg-white/40" />
      <div className="absolute inset-[18%] flex flex-col justify-between rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-soft)]">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand">Doorstep delivery</p>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink">Your routine, ready</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-[3/4] rounded-xl bg-gradient-to-b from-brand-soft to-mist/40 p-2">
              <div className="h-full rounded-lg bg-white/80" />
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-muted">Prepared · Packed · Delivered</p>
      </div>
    </div>
  )
}
