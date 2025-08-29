import { SkeletonBadge, SkeletonLine } from '../../components/common'

import stylesList from './RepoList.module.scss'
import stylesItem from './RepoListItem.module.scss'

interface RepoListSkeletonProps {
  items?: number
}
const RepoListSkeleton = (props: RepoListSkeletonProps) => {
  const { items = 6 } = props

  return (
    <section className={stylesList.repoList} aria-busy="true">
      <div className={stylesList.heading}>
        <SkeletonLine width={140} height={20} marginTop="2rem" />
      </div>
      <ul className={stylesList.repoListContainer}>
        {Array.from({ length: items }).map((_, i) => (
          <li key={i} className={stylesItem.repoItem}>
            <SkeletonLine width="40%" />
            <SkeletonLine width="70%" marginTop="1rem" />
            <div className={stylesItem.badges}>
              <SkeletonBadge marginTop="1rem" height={25} width={65} />
              <SkeletonBadge marginTop="1rem" height={25} width={50} />
              <SkeletonBadge marginTop="1rem" height={25} width={50} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RepoListSkeleton
