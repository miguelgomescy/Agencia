import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact} id="contato">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Soluções para sua empresa</span>
          <h2 className={styles.title}>
            FALE COM
            <br />
            A GENTE
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.infoPanel}>
            <div>
              <h3 className={styles.infoTitle}>
                SEU PROJETO COMEÇA
                <br />
                COM UMA CONVERSA.
              </h3>

              <p className={styles.infoText}>
                Sem formulário de 10 páginas, sem espera de 3 dias úteis.
                <br />
                Você preenche, a gente responde hoje.
              </p>
            </div>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>WHATSAPP</span>
                <span className={styles.contactValue}>(11) 9 4386-5242</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>E-MAIL</span>
                <span className={styles.contactValue}>contato@cymidia.com.br</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>INSTAGRAM</span>
                <span className={styles.contactValue}>@agenciacymidia</span>
              </div>
            </div>

            <div className={styles.infoBox} />
          </div>

          <form className={styles.formPanel}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="name">NOME *</label>
                <input id="name" type="text" placeholder="Seu nome completo" />
              </div>

              <div className={styles.field}>
                <label htmlFor="company">EMPRESA</label>
                <input id="company" type="text" placeholder="Nome do negócio" />
              </div>

              <div className={styles.field}>
                <label htmlFor="whatsapp">WHATSAPP *</label>
                <input id="whatsapp" type="text" placeholder="(11) 9 0000-0000" />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">E-MAIL</label>
                <input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className={styles.field}>
                <label htmlFor="projectType">TIPO DE PROJETO</label>
                <select id="projectType" defaultValue="">
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option>Landing Page</option>
                  <option>Site Institucional</option>
                  <option>Sistema Web</option>
                  <option>Automação</option>
                  <option>Integrações / API</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="deadline">PRAZO DESEJADO</label>
                <select id="deadline" defaultValue="">
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option>Urgente</option>
                  <option>7 dias</option>
                  <option>15 dias</option>
                  <option>30 dias</option>
                  <option>Sem prazo definido</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">ORÇAMENTO ESTIMADO</label>
                <select id="budget" defaultValue="">
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option>Até R$ 1.000</option>
                  <option>R$ 1.000 a R$ 3.000</option>
                  <option>R$ 3.000 a R$ 5.000</option>
                  <option>Acima de R$ 5.000</option>
                  <option>Não sei ainda</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="source">COMO NOS ENCONTROU?</label>
                <select id="source" defaultValue="">
                  <option value="" disabled>
                    Selecione...
                  </option>
                  <option>Instagram</option>
                  <option>Google</option>
                  <option>Indicação</option>
                  <option>LinkedIn</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="message">DESCREVA O QUE VOCÊ PRECISA *</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Fale sobre seu negócio, o que você precisa e qualquer detalhe relevante..."
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.primaryButton}>
                Enviar projeto →
              </button>

              <a
                href="https://wa.me/5511943865242"
                target="_blank"
                rel="noreferrer"
                className={styles.whatsappButton}
              >
                WhatsApp direto
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact