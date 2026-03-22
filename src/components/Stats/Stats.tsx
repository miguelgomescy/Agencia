import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'
import Reveal from '../Reveal/Reveal'
import { useCountUp } from '../../hooks/useContUp'

type StatItem = {
  end: number
  suffix?: string
  prefix?: string
  label: string
}

const stats: StatItem[] = [
  {
    end: 48,
    suffix: 'h',
    label: 'Pra colocar seu site no ar',
  },
  {
    end: 12,
    suffix: '+',
    label: 'Soluções digitais disponíveis',
  },
  {
    end: 30,
    suffix: '+',
    label: 'Projetos entregues',
  },
  {
    end: 0,
    suffix: '%',
    label: 'Burocracia',
  },
]

function StatNumber({
  end,
  suffix = '',
  prefix = '',
  label,
  start,
}: StatItem & { start: boolean }) {
  const count = useCountUp({
    end,
    duration: 1300,
    start,
  })

  return (
    <>
      <h3 className={styles.value}>
        {prefix}
        {count}
        {suffix}
      </h3>
      <p className={styles.label}>{label}</p>
    </>
  )
}

function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          obs.unobserve(element)
        }
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 80}>
            <div className={styles.card}>
              <StatNumber {...item} start={startCount} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Stats