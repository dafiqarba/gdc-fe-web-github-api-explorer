import { Link } from 'react-router'

import type { Repo } from '../../types'
import { Badge, Button } from '../../components/common'

import styles from './RepoListItem.module.scss'

interface RepoListItemProps {
  repo: Repo
}

const RepoListItem = (props: RepoListItemProps) => {
  const { repo } = props
  const to = `/repo/${repo.owner.login}/${repo.name}`

  return (
    <li className={styles.repoItem}>
      <div className={styles.itemHead}>
        <Link className={styles.name} to={to}>
          {repo.name}
        </Link>
        {repo.html_url && (
          <Button className={styles.toGithubLink}>
            <a
              target="_blank"
              rel="noreferrer"
              href={repo.html_url}
              aria-label="Open on GitHub"
            >
              ↗
            </a>
          </Button>
        )}
      </div>
      {repo.description && <p className={styles.repoDesc}>{repo.description}</p>}

      <div className={styles.badges} aria-label="Repository metadata">
        <Badge dotColor={repo.language ?? 'Unknown'}>{repo.language ?? 'Unknown'}</Badge>
        <Badge icon={<span>⭐</span>}>{repo.stargazers_count}</Badge>
        <Badge icon={<span>🍴</span>}>{repo.forks_count}</Badge>
      </div>
    </li>
  )
}

export default RepoListItem
