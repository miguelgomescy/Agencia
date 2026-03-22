import { useEffect, useRef, useState } from 'react'

type UseCountUpParams = {
  end: number
  duration?: number
  start?: boolean
}

export function useCountUp({
  end,
  duration = 1200,
  start = false,
}: UseCountUpParams) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!start || hasAnimatedRef.current) return

    hasAnimatedRef.current = true
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.round(end * eased)

      setCount(value)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [start, end, duration])

  return count
}