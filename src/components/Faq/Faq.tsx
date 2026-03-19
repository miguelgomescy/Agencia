import { useState } from 'react'
import styles from './Faq.module.css'

const faqItems = [
  {
    question: 'QUANTO TEMPO LEVA PARA ENTREGAR UM SITE?',
    answer:
      'Para landing pages e sites institucionais mais enxutos, conseguimos entregar em poucos dias. Projetos maiores, sistemas e integrações exigem mais tempo e escopo bem definido.',
  },
  {
    question: 'PRECISO DE CONTRATO PARA PROJETOS PEQUENOS?',
    answer:
      'Depende do tipo de projeto. Em demandas menores, podemos trabalhar com proposta formal e alinhamento claro de escopo. Em projetos maiores, contrato é o caminho certo.',
  },
  {
    question: 'VOCÊS FAZEM SUPORTE APÓS A ENTREGA?',
    answer:
      'Sim. Não faz sentido entregar e sumir. Oferecemos suporte inicial e podemos combinar acompanhamento contínuo conforme a necessidade do projeto.',
  },
  {
    question: 'QUAIS SÃO AS FORMAS DE PAGAMENTO?',
    answer:
      'Normalmente trabalhamos com PIX, transferência e, dependendo do projeto, pagamento parcelado por etapas. Isso é alinhado na proposta.',
  },
  {
    question: 'TRABALHAM COM EMPRESAS DE QUAL TAMANHO?',
    answer:
      'Nosso foco principal está em pequenas empresas, negócios locais, prestadores de serviço e operações que precisam estruturar presença digital ou sistemas simples.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
        </div>

        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article key={index} className={styles.item}>
                <button
                  className={styles.questionButton}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-label={item.question}
                >
                  <span className={styles.question}>{item.question}</span>

                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className={styles.answerWrapper}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq