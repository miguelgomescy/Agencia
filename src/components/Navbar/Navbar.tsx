import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`${styles.navbar} ${isAtTop ? styles.atTop : styles.scrolled}`}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <a
            href="#inicio"
            className={styles.logoLink}
            aria-label="Ir para o início"
            onClick={handleCloseMenu}
          >
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

          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <a href="#inicio" onClick={handleCloseMenu}>Início</a>
          <a href="#servicos" onClick={handleCloseMenu}>Serviços</a>
          <a href="#processo" onClick={handleCloseMenu}>Processo</a>
          <a href="#portfolio" onClick={handleCloseMenu}>Portfólio</a>
          <a href="#faq" onClick={handleCloseMenu}>FAQ</a>
          <a href="#contato" className={styles.mobileCta} onClick={handleCloseMenu}>
            Entrar em contato
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar