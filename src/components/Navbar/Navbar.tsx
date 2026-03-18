import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${isAtTop ? styles.atTop : styles.scrolled}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="#inicio" className={styles.logoLink} aria-label="Ir para o início">
            <img src="/cymidia.png" alt="Logo CY Mídia" className={styles.logo} />
          </a>

          <nav className={styles.nav}>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#contato" className={styles.cta}>
            Entrar em contato
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar