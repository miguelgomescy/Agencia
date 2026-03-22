import styles from './FloatingChat.module.css'
import { BsChatFill } from "react-icons/bs";


function FloatingChat() {
  return (
    <a
      href="https://wa.me/5511943865242?text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20projeto%20com%20a%20Cymidia."
      target="_blank"
      rel="noreferrer"
      className={styles.chatButton}
      aria-label="Abrir conversa no WhatsApp"
    >
      <span className={styles.icon}><BsChatFill /></span>
    </a>
  )
}

export default FloatingChat