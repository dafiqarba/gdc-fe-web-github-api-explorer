import type { User } from '../../types'
import { formatToK } from '../../utils'
import { HeroCard } from '../../components/common'

import styles from './UserCard.module.scss'

interface UserCardProps {
  user: User
  children?: React.ReactNode
}

const UserCard = (props: UserCardProps) => {
  const { user, children } = props

  return (
    <section className={styles.card} aria-label="GitHub user profile">
      <HeroCard height="3rem" />
      <div className={styles.content}>
        <img
          src={user.avatar_url}
          className={styles.avatar}
          alt={`${user.login} avatar`}
        />
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>{user.name || user.login}</h2>
            {user.name && <span className={styles.handle}>@{user.login}</span>}
          </div>
        </div>

        {user.bio && <p className={styles.bio}>"{user.bio}"</p>}

        <div className={styles.socialStats} role="list">
          <div role="listitem">
            <strong>{formatToK(user.followers)}</strong>
            <span>Followers</span>
          </div>
          <div role="listitem">
            <strong>{formatToK(user.following)}</strong>
            <span>Following</span>
          </div>
          <div role="listitem">
            <strong>{formatToK(user.public_repos)}</strong>
            <span>Repos</span>
          </div>
        </div>
      </div>

      {children}
    </section>
  )
}

export default UserCard
