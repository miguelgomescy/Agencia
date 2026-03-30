import styles from './Portifolio.module.css'
import Reveal from '../Reveal/Reveal'

const projects = [
  {
    category: 'LANDING PAGE + GESTÃO DE REDES',
    title: 'SITE PARA CANIL',
    tags: ['Site', 'Instagram', 'CRM'],
  },
  {
    category: 'SISTEMA COMERCIAL WEB',
    title: 'SISTEMA DE AGENDAMENTO',
    tags: ['React', 'Node.js', 'WhatsApp'],
  },
  {
    category: 'E-COMMERCE + AUTOMAÇÃO',
    title: 'LOJA VIRTUAL',
    tags: ['Next.js', 'Pagamento', 'Chatbot'],
  },
  {
    category: 'IOT + DASHBOARD',
    title: 'SITE PARA TRANSPORTADORA',
    tags: ['React', 'Node.js', 'WhatsApp'],
  },
]

function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <span className={styles.eyebrow}>Soluções para sua empresa</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.title}>
              PORTIFOLIO &<br />
              CASES
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className={styles.card}>
                <button
                  className={styles.arrowButton}
                  aria-label={`Ver projeto ${project.title}`}
                >
                  →
                </button>

                <div className={styles.cardContent}>
                  <span className={styles.category}>{project.category}</span>

                  <h3 className={styles.cardTitle}>{project.title}</h3>

                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
