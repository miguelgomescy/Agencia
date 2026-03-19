import styles from './Services.module.css'

const services = [
  {
    title: 'AUTOMAÇÃO DE PROCESSOS',
    description:
      'Integrações e automações para reduzir tarefas manuais, acelerar rotinas e melhorar a operação do negócio.',
  },
  {
    title: 'SISTEMA DE AGENDAMENTO',
    description:
      'Soluções para clínicas, estúdios e prestadores de serviço organizarem horários, contatos e atendimento.',
  },
  {
    title: 'INTEGRAÇÕES E APIS',
    description:
      'Conectamos sistemas, formulários, CRMs e ferramentas externas para centralizar processos e dados.',
  },
  {
    title: 'SISTEMA DE PEDIDOS',
    description:
      'Estrutura digital para pedidos, acompanhamento de status e organização comercial em operações simples.',
  },
  {
    title: 'DESENVOLVIMENTO MOBILE E PWA',
    description:
      'Aplicações responsivas e experiências mobile para ampliar presença digital e facilitar o acesso.',
  },
  {
    title: 'MIGRAÇÃO E ATUALIZAÇÃO DE SISTEMAS',
    description:
      'Modernização de sistemas antigos, ajustes estruturais e melhorias para manter a operação funcionando.',
  },
]

function Services() {
  return (
    <section className={styles.services} id="servicos">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Soluções para sua empresa</span>

          <h2 className={styles.title}>NOSSOS SERVIÇOS</h2>

          <div className={styles.actions}>
            <button className={`${styles.actionButton} ${styles.actionButtonActive}`}>
              Construir um sistema
            </button>

            <button className={styles.actionButton}>
              Escalar marca e marketing
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.iconBox}>ICONE</div>

              <h3 className={styles.cardTitle}>{service.title}</h3>

              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services