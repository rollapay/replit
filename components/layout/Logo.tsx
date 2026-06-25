import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Logo({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5 group', className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-soft">
        <span className="absolute h-2.5 w-2.5 rounded-full bg-accent-400 -translate-x-1.5" />
        <span className="absolute h-2.5 w-2.5 rounded-full bg-white translate-x-1.5" />
      </span>
      <span
        className={cn(
          'font-display text-xl font-bold tracking-tight',
          light ? 'text-white' : 'text-ink'
        )}
      >
        Rolla
      </span>
    </Link>
  )
}
