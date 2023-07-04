import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/Logo_Small.png" alt="Vultur Logo" className={styles.logo} />
      </footer>
    </>
  )
}
