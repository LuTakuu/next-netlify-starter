import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/cat.jpg" alt="construction worker" className={styles.logo} />
      </footer>
    </>
  )
}
