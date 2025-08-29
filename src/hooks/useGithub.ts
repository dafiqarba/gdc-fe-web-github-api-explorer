import { useQuery } from '@tanstack/react-query'

import { getRepoDetail, getUser, getUserRepos } from '../utils'
import type { CustomError, Repo, RepoDetail, User } from '../types'

export const useUser = (username?: string) =>
  useQuery<User, CustomError>({
    enabled: !!username,
    queryKey: ['user', username],
    queryFn: ({ signal }) => getUser(username!, signal),
  })

export const useUserRepos = (username?: string) =>
  useQuery<Repo[], CustomError>({
    enabled: !!username,
    queryKey: ['repos', username],
    queryFn: ({ signal }) => getUserRepos(username!, signal),
  })

export const useRepoDetail = (owner?: string, name?: string) =>
  useQuery<RepoDetail, CustomError>({
    enabled: !!owner && !!name,
    queryKey: ['repo', owner, name],
    queryFn: ({ signal }) => getRepoDetail(owner!, name!, signal),
  })
