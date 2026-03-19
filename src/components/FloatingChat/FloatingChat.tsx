import styles from './FloatingChat.module.css'

function FloatingChat() {
  return (
    <a
      href="https://wa.me/5511990000000"
      target="_blank"
      rel="noreferrer"
      className={styles.chatButton}
      aria-label="Abrir conversa no WhatsApp"
    >
      <span className={styles.icon}>💬</span>
    </a>
  )
}

export default FloatingChat