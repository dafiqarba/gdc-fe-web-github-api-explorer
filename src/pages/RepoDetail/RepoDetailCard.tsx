import type { RepoDetail } from '../../types'
import { Badge, Button, HeroCard } from '../../components/common'

import styles from './RepoDetailCard.module.scss'

type RepoDetailCardProps = {
  repo: RepoDetail
}

const RepoDetailCard = (props: RepoDetailCardProps) => {
  const { repo } = props

  return (
    <article className={styles.detailCard} aria-label="Repository detail">
      <HeroCard height="2rem" />
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.path}>
            <span className={styles.owner}>{repo.owner.login}</span>
            <span className={styles.sep}>/</span>
            <span className={styles.repo}>{repo.name}</span>
          </p>
          <h1 className={styles.name}>{repo.name}</h1>
        </div>

        {repo.description && <p className={styles.desc}>{repo.description}</p>}

        <div className={styles.badges} aria-label="Repository metadata">
          <Badge dotColor={repo.language ?? 'Unknown'}>
            {repo.language ?? 'Unknown'}
          </Badge>
          <Badge icon={<span>⭐</span>}>{repo.stargazers_count}</Badge>
          <Badge icon={<span>🍴</span>}>{repo.forks_count}</Badge>
          {typeof repo.open_issues_count === 'number' && (
            <Badge>⚠ {repo.open_issues_count} issues</Badge>
          )}
        </div>

        {repo.topics && repo.topics.length > 0 && (
          <div className={styles.chips} aria-label="Topics">
            {repo.topics.map((t) => (
              <Badge key={t} className={styles.chip}>
                #{t}
              </Badge>
            ))}
          </div>
        )}

        {repo.html_url && (
          <Button className={styles.buttonRight}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              Open on GitHub ↗
            </a>
          </Button>
        )}
      </div>
    </article>
  )
}

export default RepoDetailCard
