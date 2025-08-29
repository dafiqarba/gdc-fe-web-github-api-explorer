import type { Repo } from '../../types'
import RepoListItem from './RepoListItem'
import { EmptyStateCard } from '../../components/common'

import styles from './RepoList.module.scss'

interface RepoListProps {
  repos?: Repo[]
}

const RepoList = (props: RepoListProps) => {
  const { repos } = props

  if (!repos?.length) {
    return (
      <EmptyStateCard
        heroHeight="0"
        title="No repositories found"
        className={styles.emptyRepoList}
        description="This user has no public repositories."
      />
    )
  }

  return (
    <section className={styles.repoList} aria-label="Top repositories">
      <h3 className={styles.heading}>Top 10 Repositories</h3>
      <ul className={styles.repoListContainer}>
        {repos.map((repo) => (
          <RepoListItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  )
}

export default RepoList
