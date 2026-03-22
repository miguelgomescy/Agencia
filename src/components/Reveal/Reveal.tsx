import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: 'up' | 'left' | 'right'
  delay?: number
}

function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: RevealProps) {
  const ref = useReveal()

  const baseClass =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'right'
        ? 'reveal-right'
        : 'reveal'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${baseClass} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal