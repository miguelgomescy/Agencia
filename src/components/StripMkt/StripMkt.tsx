import styles from './StripMkt.module.css'

const items = [
  'EQUIPE DEDICADA',
  'SITE PRONTO EM 48H',
  'FOCO EM RESULTADO',
  'SEM BUROCRACIA',
  'SITE + MARKETING',
  'SUPORTE DIRETO',
]

const repeatedItems = [...items, ...items, ...items, ...items]

function StripTrack() {
  return (
    <div className={styles.track}>
      {repeatedItems.map((item, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.square} />
          <span className={styles.text}>{item}</span>
        </div>
      ))}
    </div>
  )
}

function StripMkt() {
  return (
    <section className={styles.strip} aria-label="Destaques da agência">
      <div className={styles.marquee}>
        <StripTrack />
        <StripTrack />
      </div>
    </section>
  )
}

export default StripMkt