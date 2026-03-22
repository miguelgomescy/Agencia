import { useMemo, useState } from 'react'
import {
  FiActivity,
  FiMapPin,
  FiCalendar,
  FiCode,
  FiGlobe,
  FiLayers,
  FiRepeat,
  FiSettings,
  FiShoppingBag,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import styles from './Services.module.css'
import Reveal from '../Reveal/Reveal'

type ServiceCategory = 'system' | 'marketing'

type ServiceItem = {
  title: string
  description: string
  icon: React.ElementType
  category: ServiceCategory
}

const services: ServiceItem[] = [
  {
    title: 'AUTOMAÇÃO DE PROCESSOS',
    description:
      'Integrações e fluxos automatizados para reduzir tarefas manuais, acelerar operação e eliminar gargalos repetitivos.',
    icon: FiSettings,
    category: 'system',
  },
  {
    title: 'SISTEMA DE AGENDAMENTO',
    description:
      'Estrutura para clínicas, estúdios e prestadores organizarem horários, leads, confirmação e atendimento.',
    icon: FiCalendar,
    category: 'system',
  },
  {
    title: 'INTEGRAÇÕES E APIs',
    description:
      'Conectamos CRM, formulários, gateways, plataformas e sistemas para centralizar dados e operação.',
    icon: FiCode,
    category: 'system',
  },
  {
    title: 'SISTEMA DE PEDIDOS',
    description:
      'Ambiente digital para pedidos, acompanhamento de status e organização comercial em operações simples.',
    icon: FiShoppingBag,
    category: 'system',
  },
  {
    title: 'DESENVOLVIMENTO MOBILE E PWA',
    description:
      'Aplicações responsivas com foco em acesso rápido, usabilidade e presença digital multiplataforma.',
    icon: FiSmartphone,
    category: 'system',
  },
  {
    title: 'MIGRAÇÃO E ATUALIZAÇÃO DE SISTEMAS',
    description:
      'Modernização de sistemas antigos, refatoração estrutural e melhorias para manter a operação confiável.',
    icon: FiRepeat,
    category: 'system',
  },
  {
    title: 'LANDING PAGES DE CONVERSÃO',
    description:
      'Páginas rápidas, objetivas e desenhadas para transformar tráfego em lead, contato ou venda.',
    icon: FiGlobe,
    category: 'marketing',
  },
  {
    title: 'TRÁFEGO PAGO',
    description:
      'Estrutura e gestão de campanhas para gerar demanda qualificada com foco em custo, volume e retorno.',
    icon: FiTrendingUp,
    category: 'marketing',
  },
  {
    title: 'GESTÃO DE CONTEÚDO',
    description:
      'Planejamento visual e comunicação para posicionar marca, dar consistência e aumentar percepção de valor.',
    icon: FiLayers,
    category: 'marketing',
  },
  {
    title: 'ESTRATÉGIA DE CAPTAÇÃO',
    description:
      'Organização da jornada de aquisição com oferta, criativo, página, formulário e follow-up.',
    icon: FiUsers,
    category: 'marketing',
  },
  {
    title: 'OTIMIZAÇÃO DE CONVERSÃO',
    description:
      'Ajustes em copy, interface, CTA e fluxo para aumentar taxa de contato e reduzir atrito.',
    icon: FiActivity,
    category: 'marketing',
  },
  {
    title: 'POSICIONAMENTO DIGITAL',
    description:
      'Clareza de mensagem, presença visual e organização da vitrine digital para parecer empresa séria.',
    icon: FiMapPin,
    category: 'marketing',
  },
]

function Services() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('system')

  const filteredServices = useMemo(() => {
    return services.filter((service) => service.category === activeCategory)
  }, [activeCategory])

  return (
    <section className={styles.services} id="servicos">
      <div className={styles.container}>
        <div className={styles.header}>


                <Reveal>
                  <span className={styles.eyebrow}>Soluções para sua empresa</span>
                </Reveal>

              <Reveal delay={80}>
                  <h2 className={styles.title}>NOSSOS SERVIÇOS</h2>
                </Reveal>

                <Reveal delay={160}>
                  <div className={styles.actions}>
                   
                  </div>
                </Reveal>


          
            
          <div className={styles.actions} role="tablist" aria-label="Categorias de serviços">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'system'}
              className={`${styles.actionButton} ${
                activeCategory === 'system' ? styles.actionButtonActive : ''
              }`}
              onClick={() => setActiveCategory('system')}
            >
              Construir um sistema
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'marketing'}
              className={`${styles.actionButton} ${
                activeCategory === 'marketing' ? styles.actionButtonActive : ''
              }`}
              onClick={() => setActiveCategory('marketing')}
            >
              Escalar marca e marketing
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {filteredServices.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.title} className={styles.card}>
                <div className={styles.iconBox}>
                  <Icon className={styles.icon} />
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>

                <p className={styles.cardDescription}>{service.description}</p>

           
                
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services