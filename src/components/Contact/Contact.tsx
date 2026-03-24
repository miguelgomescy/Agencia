import { useState } from 'react'
import styles from './Contact.module.css'
import Reveal from '../Reveal/Reveal'

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwL37yl3OHFwQLEltjKXlxGFLChdXxjxBnS_DrWmskkM4lABEUENQ8Kt4im3dx8vO7Q/exec'

type FormData = {
  name: string
  company: string
  whatsapp: string
  email: string
  projectType: string
  deadline: string
  budget: string
  source: string
  message: string
}

const initialForm: FormData = {
  name: '',
  company: '',
  whatsapp: '',
  email: '',
  projectType: '',
  deadline: '',
  budget: '',
  source: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [isError, setIsError] = useState(false)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { id, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()

  setFeedback('')
  setIsError(false)

  if (!formData.name || !formData.whatsapp || !formData.message) {
    setIsError(true)
    setFeedback('Preencha nome, WhatsApp e mensagem.')
    return
  }

  try {
    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      company: formData.company,
      whatsapp: formData.whatsapp,
      email: formData.email,
      project_type: formData.projectType,
      deadline: formData.deadline,
      budget: formData.budget,
      source: formData.source,
      message: formData.message,
    }

    await fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    setFeedback('Projeto enviado com sucesso.')
    setIsError(false)
    setFormData(initialForm)
  } catch (error) {
    setIsError(true)
    setFeedback('Não foi possível enviar agora.')
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <section className={styles.contact} id="contato">
      <div className={styles.container}>
        <div className={styles.header}>

          <Reveal delay={80}>
          <span className={styles.eyebrow}>Soluções para sua empresa</span>
          <h2 className={styles.title}>
            FALE COM
            <br />
            A GENTE
          </h2>
          </Reveal>
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
                <span className={styles.contactValue}>agencicymidia@gmail.com</span>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>INSTAGRAM</span>
                <span className={styles.contactValue}>@agenciacymidia</span>
              </div>
            </div>

            <div className={styles.infoBox} />
          </div>

          <form className={styles.formPanel} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="name">NOME *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="company">EMPRESA</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Nome do negócio"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="whatsapp">WHATSAPP *</label>
                <input
                  id="whatsapp"
                  type="text"
                  placeholder="(11) 9 0000-0000"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">E-MAIL</label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="projectType">TIPO DE PROJETO</label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Selecione...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="Sistema Web">Sistema Web</option>
                  <option value="Automação">Automação</option>
                  <option value="Integrações / API">Integrações / API</option>
                  <option value="Integrações / API">Projeto Industrial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="deadline">PRAZO DESEJADO</label>
                <select
                  id="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                >
                  <option value="">Selecione...</option>
                  <option value="Urgente">Urgente</option>
                  <option value="7 dias">7 dias</option>
                  <option value="15 dias">15 dias</option>
                  <option value="30 dias">30 dias</option>
                  <option value="Sem prazo definido">Sem prazo definido</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">ORÇAMENTO ESTIMADO</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Selecione...</option>
                  <option value="Até R$ 1.000">Até R$ 1.000</option>
                  <option value="R$ 1.000 a R$ 3.000">R$ 1.000 a R$ 3.000</option>
                  <option value="R$ 3.000 a R$ 5.000">R$ 3.000 a R$ 5.000</option>
                  <option value="Acima de R$ 5.000">Acima de R$ 5.000</option>
                  <option value="Não sei ainda">Não sei ainda</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="source">COMO NOS ENCONTROU?</label>
                <select
                  id="source"
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option value="">Selecione...</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google">Google</option>
                  <option value="Indicação">Indicação</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div className={`${styles.field} ${styles.fullWidth}`}>
              <label htmlFor="message">DESCREVA O QUE VOCÊ PRECISA *</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Fale sobre seu negócio, o que você precisa e qualquer detalhe relevante..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {feedback && (
              <p
                style={{
                  marginBottom: '16px',
                  color: isError ? '#b42318' : '#1d7a34',
                  fontSize: '14px',
                }}
              >
                {feedback}
              </p>
            )}

            <div className={styles.actions}>
              <button type="submit" className={styles.primaryButton} disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar projeto →'}
              </button>

              <a
                href="https://wa.me/5511943865242?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20projeto%20com%20a%20Cymidia."
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