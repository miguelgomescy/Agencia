import styles from './FloatingChat.module.css'
import { BsChatFill } from "react-icons/bs";


function FloatingChat() {
  return (
    <a
      href="https://wa.me/5511943865242"
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