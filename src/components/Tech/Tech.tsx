import styles from './Tech.module.css'

const technologies = [
  { icon: '⚛️', name: 'REACT' },
  { icon: '🟩', name: 'NODE.JS' },
  { icon: '🐘', name: 'POSTGRESQL' },
  { icon: '🐍', name: 'PYTHON' },
  { icon: '📱', name: 'REACT NATIVE' },
  { icon: '🤖', name: 'CLAUDE API' },
  { icon: '📊', name: 'GA4' },
  { icon: '🐳', name: 'DOCKER' },
  { icon: '🔌', name: 'ESP32' },
  { icon: '🔁', name: 'N8N' },
  { icon: '💬', name: 'WHATSAPP API' },
  { icon: '☁️', name: 'AWS/VPS' },
  { icon: '🎨', name: 'FIGMA' },
  { icon: '📣', name: 'META ADS' },
  { icon: '🔎', name: 'GOOGLE ADS' },
  { icon: '🚀', name: 'VERCEL' },
  { icon: '▲', name: 'NEXT.JS' },
  { icon: '💳', name: 'STRIPE' },
]

function Tech() {
  return (
    <section className={styles.tech} id="tecnologias">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Soluções para sua empresa</span>
          <h2 className={styles.title}>
            TECNOLOGIAS
            <br />
            UTILIZADAS
          </h2>
        </div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <article key={index} className={styles.card}>
              <span className={styles.icon}>{tech.icon}</span>
              <span className={styles.name}>{tech.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tech