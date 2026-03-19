import styles from './StripMkt.module.css'

const items = [
  'EQUIPE DEDICADA',
  'SITE PRONTO EM 48H',
  'FOCO EM RESULTADO',
  'SEM BUROCRACIA',
  'SITE + MARKETING',
  'SUPORTE DIRETO',
]

function MktStrip() {
  const repeatedItems = [...items, ...items]

  return (
    <section className={styles.strip}>
      <div className={styles.track}>
        {repeatedItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.square} />
            <span className={styles.text}>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MktStrip