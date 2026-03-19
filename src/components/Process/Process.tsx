import styles from './Process.module.css'

const steps = [
  {
    number: '01',
    icon: '🔎',
    title: 'DIAGNÓSTICO',
    description:
      'Entendemos o que sua empresa precisa de verdade — sem jargão, sem enrolação. Uma conversa resolve.',
  },
  {
    number: '02',
    icon: '🏗️',
    title: 'DESENVOLVIMENTO',
    description:
      'Construímos a solução com tecnologia moderna, código limpo e design focado em resultado.',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'ENTREGA',
    description:
      'Você recebe o projeto funcionando, testado em mobile e pronto para gerar resultado desde o primeiro dia.',
  },
  {
    number: '04',
    icon: '🤝',
    title: 'SUPORTE',
    description:
      'Não sumimos após a entrega. Acompanhamos a evolução e garantimos que o sistema continue no ar e performando.',
  },
]

function Process() {
  return (
    <section className={styles.process} id="processo">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Soluções para sua empresa</span>
          <h2 className={styles.title}>O PROCESSO</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <article key={index} className={styles.card}>
              <span className={styles.number}>{step.number}</span>
              <span className={styles.icon}>{step.icon}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process