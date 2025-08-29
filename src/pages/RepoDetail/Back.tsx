import { Link } from 'react-router'

import styles from './Back.module.scss'

interface BackProps {
  to?: string
}
function Back(props: BackProps) {
  const { to = '/' } = props

  return (
    <div className={styles.back}>
      <Link to={to} className={styles.backLink} aria-label="Back">
        ← Back
      </Link>
    </div>
  )
}
export default Back
