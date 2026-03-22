import styles from './Tech.module.css'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaMobile,
  FaRobot,
  FaDocker,
  FaWhatsapp,
  FaFigma,
  FaShopify,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiGoogleanalytics } from 'react-icons/si'
import { FcLinux, FcGoogle } from 'react-icons/fc'
import { FaMeta } from 'react-icons/fa6'
import Reveal from '../Reveal/Reveal'

const technologies = [
  { icon: <FaReact />, name: 'REACT' },
  { icon: <FaNodeJs />, name: 'NODE.JS' },
  { icon: <BiLogoPostgresql />, name: 'POSTGRESQL' },
  { icon: <FaPython />, name: 'PYTHON' },
  { icon: <FaMobile />, name: 'REACT NATIVE' },
  { icon: <FaRobot />, name: 'CLAUDE API' },
  { icon: <SiGoogleanalytics />, name: 'GA4' },
  { icon: <FaDocker />, name: 'DOCKER' },
  { icon: <FcLinux />, name: 'LINUX' },
  { icon: <FcGoogle />, name: 'GOOGLE ADS' },
  { icon: <FaMeta />, name: 'META ADS' },
  { icon: <FaWhatsapp />, name: 'WHATSAPP BUSINESS' },
  { icon: <FaFigma />, name: 'FIGMA' },
  { icon: <FaShopify />, name: 'SHOPIFY' },
  { icon: <FaTiktok />, name: 'TIKTOK ADS' },
  { icon: <FaPinterest />, name: 'PINTEREST' },
  { icon: <FaYoutube />, name: 'YOUTUBE' },
  { icon: <FaInstagram />, name: 'INSTAGRAM' },
]

function Tech() {
  return (
    <section className={styles.tech} id="tecnologias">
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal>
            <span className={styles.eyebrow}>Soluções para sua empresa</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className={styles.title}>
              TECNOLOGIAS
              <br />
              UTILIZADAS
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 35}>
              <article className={styles.card}>
                <span className={styles.icon}>{tech.icon}</span>
                <span className={styles.name}>{tech.name}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tech