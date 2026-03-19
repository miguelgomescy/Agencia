import styles from './Footer.module.css'



function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

         <a href="#inicio" className={styles.logoWrapper} aria-label="Voltar para o início">
          <img src={'/cymidia.png'} alt="Logo CY Mídia" className={styles.logoImage} />
        </a>


        <div className={styles.socials}>
          <a href="#" aria-label="Instagram" className={styles.socialButton}>
            <span>◎</span>
          </a>

          <a href="#" aria-label="LinkedIn" className={styles.socialButton}>
            <span>in</span>
          </a>

          <a href="mailto:contato@cymidia.com.br" aria-label="Email" className={styles.socialButton}>
            <span>✉</span>
          </a>
        </div>

        <nav className={styles.nav}>
          <a href="#inicio">INÍCIO</a>
          <a href="#servicos">SERVIÇOS</a>
          <a href="#processo">PROCESSO</a>
          <a href="#portfolio">PORTIFÓLIO</a>
          <a href="#faq">FAQ</a>
        </nav>

        <p className={styles.copy}>
          Agência Cy Midia — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer