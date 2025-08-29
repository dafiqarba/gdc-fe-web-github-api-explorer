import { useParams } from 'react-router'

import Back from './Back'
import { useRepoDetail } from '../../hooks'
import RepoDetailCard from './RepoDetailCard'
import RepoDetailSkeleton from './RepoDetailSkeleton'
import { EmptyStateCard } from '../../components/common'

export default function RepoDetailPage() {
  const { owner, name } = useParams()

  const backToUserProfile = () => {
    if (owner) {
      return `/?user=${owner}#${name || ''}`
    }
    return '/'
  }

  const { data, isLoading, isError, error } = useRepoDetail(owner, name)

  if (isError) {
    const message = (error as Error)?.message || ''
    const is404 = error?.cause?.status === 404

    const errDesc = is404
      ? 'Check the owner and repo name in the URL.'
      : 'An unexpected error occurred.'

    return (
      <>
        <Back to={backToUserProfile()} />
        <EmptyStateCard emoji="🤷‍♂️" title={`Error: ${message}`} description={errDesc} />
      </>
    )
  }

  if (data && !isLoading) {
    return (
      <>
        <Back to={backToUserProfile()} />
        {data && <RepoDetailCard repo={data} />}
      </>
    )
  }

  return (
    <>
      <Back to={backToUserProfile()} />
      <RepoDetailSkeleton />
    </>
  )
}
