import {
  HeroCard,
  SkeletonLine,
  SkeletonTitle,
  SkeletonCircle,
} from '../../components/common'

import styles from './UserCard.module.scss'

interface UserCardSkeletonProps {
  children?: React.ReactNode
}
const UserCardSkeleton = (props: UserCardSkeletonProps) => {
  const { children } = props

  return (
    <section className={styles.card} aria-busy="true">
      <HeroCard height="3rem" />
      <div className={styles.content}>
        <SkeletonCircle className={styles.avatar} noInlineSize />

        <div className={styles.header}>
          <div className={styles.title}>
            <h2>
              <SkeletonTitle width="20rem" />
            </h2>
            <span className={styles.handle}>
              <SkeletonLine width="10rem" marginTop="1rem" />
            </span>
          </div>
        </div>

        <div className={styles.socialStats}>
          <SkeletonLine width="3rem" />
          <SkeletonLine width="3rem" />
          <SkeletonLine width="3rem" />
        </div>
      </div>

      {children}
    </section>
  )
}

export default UserCardSkeleton
