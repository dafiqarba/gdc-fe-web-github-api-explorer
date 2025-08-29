import clsx from 'clsx'

import HeroCard from '../HeroCard/HeroCard'

import styles from './EmptyStateCard.module.scss'

interface EmptyCardProps {
  emoji?: string
  title?: string
  className?: string
  heroHeight?: string
  description?: string
  children?: React.ReactNode
}

const EmptyStateCard = (props: EmptyCardProps) => {
  const { title = '', description = '', children, emoji, heroHeight, className } = props

  return (
    <section className={clsx(styles.emptyStateCard, className)} aria-live="polite">
      <HeroCard height={heroHeight} />
      <div className={styles.inner}>
        <div className={styles.emoji} aria-hidden>
          {emoji}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <div className={styles.children}>{children}</div>
      </div>
    </section>
  )
}

export default EmptyStateCard
