import styles from './Portifolio.module.css'

const projects = [
  {
    category: 'LANDING PAGE + GESTÃO DE REDES',
    title: 'CLÍNICA ESTÉTICA SP',
    tags: ['Site', 'Instagram', 'CRM'],
  },
  {
    category: 'SISTEMA COMERCIAL WEB',
    title: 'SISTEMA DE AGENDAMENTO',
    tags: ['React', 'Node.js', 'WhatsApp'],
  },
  {
    category: 'E-COMMERCE + AUTOMAÇÃO',
    title: 'LOJA VIRTUAL COM IA',
    tags: ['Next.js', 'Pagamento', 'Chatbot'],
  },
  {
    category: 'IOT + DASHBOARD',
    title: 'MONITOR INDUSTRIAL',
    tags: ['ESP32', 'MQTT', 'Dashboard'],
  },
]

function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Soluções para sua empresa</span>
          <h2 className={styles.title}>
            PORTIFOLIO &<br />
            CASES
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article key={index} className={styles.card}>
              <button className={styles.arrowButton} aria-label={`Ver projeto ${project.title}`}>
                →
              </button>

              <div className={styles.cardContent}>
                <span className={styles.category}>{project.category}</span>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio