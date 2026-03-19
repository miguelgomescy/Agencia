import styles from './Footer.module.css'
import { FaLinkedin, FaInstagram  } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";



function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

         <a href="#inicio" className={styles.logoWrapper} aria-label="Voltar para o início">
          <img src={'/cymidia.png'} alt="Logo CY Mídia" className={styles.logoImage} />
        </a>


        <div className={styles.socials}>
          <a href="https://www.instagram.com/agenciacymidia/" aria-label="Instagram" className={styles.socialButton} target="_blank">
            <span><FaInstagram /></span>
          </a>

          <a href="https://www.linkedin.com/company/agenciacymidia/" aria-label="LinkedIn" className={styles.socialButton} target="_blank">
            <span><FaLinkedin /></span>
          </a>

          <a href="#contato" aria-label="Email" className={styles.socialButton}>
            <span><IoIosMail /></span>
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