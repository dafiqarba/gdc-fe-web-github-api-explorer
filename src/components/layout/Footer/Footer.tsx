import styles from './Footer.module.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {year} Github API Explorer</p>
        <p className={styles.desc}>
          Built with Vite, React, Typescript, SASS, TanStack Query, and Github API
        </p>
      </div>
    </footer>
  )
}

export default Footer
