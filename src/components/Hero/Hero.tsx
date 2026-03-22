import { useEffect, useMemo, useState } from 'react'
import styles from './Hero.module.css'
import Reveal from '../Reveal/Reveal'

const STATUS_WORDS = ['Operacional', 'Recebendo projetos', 'criando automações']

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = useMemo(() => STATUS_WORDS[wordIndex], [wordIndex])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches) {
      setTypedText(currentWord)
      return
    }

    let timeoutId: number

    if (!isDeleting && typedText.length < currentWord.length) {
      timeoutId = window.setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1))
      }, 70)
    } else if (!isDeleting && typedText.length === currentWord.length) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true)
      }, 1200)
    } else if (isDeleting && typedText.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length - 1))
      }, 38)
    } else {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % STATUS_WORDS.length)
    }

    return () => window.clearTimeout(timeoutId)
  }, [typedText, isDeleting, currentWord])

  return (
    <section className={styles.hero} id="inicio">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.status}>
              <span className={styles.statusDot}></span>

              <p>
                status do sistema:{' '}
                <span className={styles.statusTyping}>{typedText}</span>
                <span className={styles.statusCaret} aria-hidden="true">
                  |
                </span>
              </p>
            </div>

            <Reveal>
              <h1 className={styles.title}>
                Seu site pronto
                <br />
                em 48 horas.
                <br />
                Comece a gerar
                <br />
                clientes.
              </h1>

              <p className={styles.description}>
                Criamos soluções rápidas, integradas e prontas para transformar
                visitas em contatos.
              </p>
            </Reveal>

            <div className={styles.actions}>
              <a href="#contato" className={styles.primaryButton}>
                Entrar em contato
              </a>

              <a href="#servicos" className={styles.secondaryButton}>
                Ver serviços
              </a>
            </div>
          </div>

          <div className={styles.aside}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero