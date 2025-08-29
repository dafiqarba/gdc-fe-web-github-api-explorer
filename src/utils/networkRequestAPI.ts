import type { Repo, RepoDetail, User } from '../types'

const BASE = import.meta.env.VITE_API_BASE_URL || ''

export async function getUser(username: string, signal?: AbortSignal): Promise<User> {
  const res = await fetch(`${BASE}/users/${username}`, { signal })
  if (!res.ok) {
    const errJson = await res.json()

    throw new Error(errJson.message || 'Request failed', {
      cause: { status: res.status },
    })
  }

  return res.json()
}

export async function getUserRepos(
  username: string,
  signal?: AbortSignal
): Promise<Repo[]> {
  const res = await fetch(`${BASE}/users/${username}/repos?per_page=100&sort=updated`, {
    signal,
  })
  if (!res.ok) {
    const errJson = await res.json()

    throw new Error(errJson.message || 'Request failed', {
      cause: { status: res.status },
    })
  }

  const repos: Repo[] = await res.json()
  return repos.slice(0, 10)
}

export async function getRepoDetail(
  owner: string,
  name: string,
  signal?: AbortSignal
): Promise<RepoDetail> {
  const res = await fetch(`${BASE}/repos/${owner}/${name}`, {
    signal,
  })
  if (!res.ok) {
    const errJson = await res.json()

    throw new Error(errJson.message || 'Request failed', {
      cause: { status: res.status },
    })
  }
  return res.json()
}
