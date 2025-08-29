import { useSearchParams } from 'react-router'

import UserCard from './UserCard'
import RepoList from './RepoList'
import SearchBar from './SearchBar'
import UserCardSkeleton from './UserCardSkeleton'
import RepoListSkeleton from './RepoListSkeleton'
import { useUser, useUserRepos } from '../../hooks'
import { EmptyStateCard } from '../../components/common'

const Home = () => {
  const [params, setParams] = useSearchParams()
  const username = params.get('user') || ''

  const {
    data: user,
    error: errUser,
    isError: isErrUser,
    isLoading: isLoadUserData,
  } = useUser(username)

  const {
    data: repos,
    error: errRepos,
    isError: isErrRepos,
    isLoading: isLoadUserRepo,
  } = useUserRepos(username)

  const errorMessage = `Error ${(errUser || errRepos)?.cause?.status}: ${
    (errUser || errRepos)?.message
  }`

  return (
    <>
      <SearchBar
        defaultValue={username}
        onSubmit={(val) => setParams(val ? { user: val } : {})}
      />

      {!username && (
        <EmptyStateCard
          emoji="🔎"
          heroHeight="3rem"
          title="Finds GitHub users"
          description="Type a username, hit Enter, and see profile + top 10 repos."
        />
      )}

      {(isLoadUserData || isLoadUserRepo) && username && (
        <UserCardSkeleton>
          <RepoListSkeleton />
        </UserCardSkeleton>
      )}

      {(isErrUser || isErrRepos) && username && (
        <EmptyStateCard
          emoji="⚠️"
          heroHeight="3rem"
          title="Failed to fetch data"
          description={errorMessage ?? 'Please try again.'}
        />
      )}

      {!isLoadUserData && !isLoadUserRepo && user && (
        <UserCard user={user} children={<RepoList repos={repos} />} />
      )}
    </>
  )
}

export default Home
