import { useEffect, useMemo, useState } from "react";
import styles from "./Links.module.css";
import Reveal from "../../components/Reveal/Reveal";

import {
  FiGlobe,
  FiMail,
  FiInstagram,
  FiLinkedin,
  FiMessageCircle,
  FiArrowRight,
  FiMonitor,
  FiCode,
  FiSettings,
  FiRepeat,
  FiTrendingUp,
  FiLayers,
  FiUsers,
  FiActivity,
  FiLayout,
  FiSmartphone,
} from "react-icons/fi";

type ServiceCategory = "system" | "marketing";

type LinkServiceItem = {
  title: string;
  icon: React.ElementType;
  category: ServiceCategory;
};

const serviceItems: LinkServiceItem[] = [
  { title: "Landing Page", icon: FiLayout, category: "system" },
  { title: "Sites Institucionais", icon: FiMonitor, category: "system" },
  { title: "Sistemas Web", icon: FiCode, category: "system" },
  { title: "APIs", icon: FiCode, category: "system" },
  { title: "Automação", icon: FiSettings, category: "system" },
  { title: "Integrações", icon: FiRepeat, category: "system" },

  { title: "Landing de Conversão", icon: FiLayout, category: "marketing" },
  { title: "Tráfego Pago", icon: FiTrendingUp, category: "marketing" },
  { title: "Gestão de Conteúdo", icon: FiLayers, category: "marketing" },
  { title: "Captação", icon: FiUsers, category: "marketing" },
  { title: "Conversão", icon: FiActivity, category: "marketing" },
  { title: "Presença Digital", icon: FiSmartphone, category: "marketing" },
];

function Links() {
  useEffect(() => {
    document.title = "CY Mídia — Links";
  }, []);

  const links = {
    site: "https://cymidia.vercel.app/",
    contato: "https://cymidia.vercel.app/#contato",
    instagram: "https://www.instagram.com/agenciacymidia/",
    linkedin: "https://www.linkedin.com/company/agenciacymidia/about/",
    email: "agenciacymidia@gmail.com",
    whatsapp:
      "https://wa.me/5511943865242?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20projeto%20com%20a%20Cymidia.",
  };

  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory>("system");

  const filteredServices = useMemo(() => {
    return serviceItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Reveal>
          <div className={styles.header}>
            <img src="/cymidia.png" alt="CY Mídia" className={styles.logo} />
            <h1>@agenciacymidia</h1>
            <p>
              Sites, sistemas e marketing para negócios que querem crescer com
              tecnologia.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.socialStrip}>
            <a href={links.site} target="_blank" rel="noreferrer">
              <FiGlobe />
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
            <a href={`mailto:${links.email}`}>
              <FiMail />
            </a>

         {/*    <a href={links.whatsapp} target="_blank" rel="noreferrer">
              <FiMessageCircle />
            </a> */}

          </div>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h2>Principais Links</h2>

            <a
              href={links.site}
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <FiGlobe />
              <span>Site Oficial</span>
              <FiArrowRight />
            </a>

            <a href={links.contato} className={styles.linkItem}>
              <FiMessageCircle />
              <span>Entrar em contato</span>
              <FiArrowRight />
            </a>

            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <FiInstagram />
              <span>Instagram</span>
              <FiArrowRight />
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <FiLinkedin />
              <span>LinkedIn</span>
              <FiArrowRight />
            </a>

            <a href={`mailto:${links.email}`} className={styles.linkItem}>
              <FiMail />
              <span>Email</span>
              <FiArrowRight />
            </a>
{/* 

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={styles.linkItem}
            >
              <FiMessageCircle />
              <span>WhatsApp</span>
              <FiArrowRight />
            </a>
 */}

          </section>
        </Reveal>

        <Reveal>
          <section className={styles.section}>
            <h2>Nossos Serviços</h2>

            <div
              className={styles.tags}
              role="tablist"
              aria-label="Categorias de serviços"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "system"}
                className={`${styles.tagButton} ${
                  activeCategory === "system" ? styles.tagButtonActive : ""
                }`}
                onClick={() => setActiveCategory("system")}
              >
                Sistemas e TI
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === "marketing"}
                className={`${styles.tagButton} ${
                  activeCategory === "marketing" ? styles.tagButtonActive : ""
                }`}
                onClick={() => setActiveCategory("marketing")}
              >
                Marketing & Ads
              </button>
            </div>

            <div className={styles.grid}>
              {filteredServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div key={service.title} className={styles.card}>
                    <div className={styles.cardIcon}>
                      <Icon />
                    </div>
                    <span>{service.title}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}

export default Links;