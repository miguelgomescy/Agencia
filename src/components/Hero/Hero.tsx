import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.status}>
              <span className={styles.statusDot}></span>
              <p>status do sistema: Operacional / Recebendo projetos</p>
            </div>

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

            <div className={styles.actions}>
              <a href="#contato" className={styles.primaryButton}>
                Entrar em contato
              </a>

              <a href="#servicos" className={styles.secondaryButton}>
                Ver serviços
              </a>
            </div>
          </div>

          <div className={styles.aside}>
            <div className={styles.placeholder}>
              <p>
                Aqui vai o vídeo
                <br />
                ou vantagens da
                <br />
                CY Mídia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero