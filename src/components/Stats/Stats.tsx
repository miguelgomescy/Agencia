import styles from './Stats.module.css'

function Stats() {
  const stats = [
    {
      value: '48h',
      label: 'Pra colocar seu site no ar',
    },
    {
      value: '12 soluções',
      label: 'Digitais disponíveis',
    },
    {
      value: '30+',
      label: 'Projetos entregues',
    },
    {
      value: '0%',
      label: 'Burocracia',
    },
  ]

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        {stats.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.value}>{item.value}</h3>
            <p className={styles.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats