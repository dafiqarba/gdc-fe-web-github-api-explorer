export type User = {
  login: string
  avatar_url: string
  name: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
}

export type Repo = {
  id: number
  name: string
  full_name: string
  description?: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  owner: { login: string }
  html_url?: string | null
}

export type RepoDetail = Repo & {
  topics?: string[]
  html_url: string
  open_issues_count: number
}

export interface CustomError extends Error {
  message: string
  cause: { status: number }
}