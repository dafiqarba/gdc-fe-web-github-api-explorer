import styles from './HeroCard.module.scss'

interface HeroCardProps {
  height?: string
}

const HeroCard = (props: HeroCardProps) => {
  const { height } = props

  return <div className={styles.hero} style={{ height: height ?? '2rem' }} />
}

export default HeroCard
