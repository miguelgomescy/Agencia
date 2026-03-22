import { useEffect, useRef } from 'react'

type RevealOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useReveal(options: RevealOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -8% 0px',
    once = true,
  } = options

  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          element.classList.add('is-revealed')

          if (once) {
            obs.unobserve(element)
          }
        } else if (!once) {
          element.classList.remove('is-revealed')
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}