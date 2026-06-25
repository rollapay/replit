import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-lift',
  secondary:
    'bg-white text-ink border border-black/10 hover:border-brand-300 hover:text-brand-700',
  ghost: 'text-ink-soft hover:text-brand-700',
  white: 'bg-white text-brand-700 hover:bg-brand-50 shadow-soft',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Link>
  )
}
