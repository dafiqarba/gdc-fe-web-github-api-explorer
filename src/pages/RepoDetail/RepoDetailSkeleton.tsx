import {
  HeroCard,
  SkeletonBadge,
  SkeletonLine,
  SkeletonTitle,
} from '../../components/common'

import styles from './RepoDetailCard.module.scss'

const RepoDetailSkeleton = () => {
  return (
    <article className={styles.detailCard} aria-busy="true">
      <HeroCard height="2rem" />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.path}>
            <SkeletonLine width="40%" />
          </div>
          <h1 className={styles.name}>
            <SkeletonTitle width="60%" marginTop={12} />
          </h1>
        </div>

        <SkeletonLine width="80%" marginTop={20} />

        <div className={styles.badges}>
          <SkeletonBadge marginTop={10} />
          <SkeletonBadge marginTop={10}/>
        </div>
      </div>
    </article>
  )
}

export default RepoDetailSkeleton
