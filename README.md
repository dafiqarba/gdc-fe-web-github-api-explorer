# My GitHub API Explorer

A small React app to explore a GitHub user's profile and repositories.

## Live Demo
[My Github Explorer](https://gdc-fe-web-github-api-explorer.vercel.app/)

## Features

- **Search GitHub user** → avatar, name, username, bio, followers/following/repos.
- **Top 10 repos list** name, description, and badges (language, stars, forks).
- **Repo detail page** with name, description, badge (language, stars, forks, topics).
- **Polished UX**: responsive layout, loading skeletons, empty/404/error states.

## Tech

- **React + TypeScript + Vite**
- **React Router**
- **TanStack Query** (React Query) for data + caching
  - No refetch on focus/reconnect/mount; capped retries to avoid rate limits.
- **SCSS Modules** with design tokens (pastel brown theme)

## Setup and Run Locally

```bash
npm i
npm run dev
```

## Scripts

- `dev` – start Vite dev server
- `build` – production build

## Project Structure

```
src/              # router, providers, AppShell
├── styles/       # global styles
├── pages/        # Home, RepoDetail
├── hooks/        # custom hooks
├── types/        # Global reusable type definition
├── utils/        # Function helpers
├── config/       # Configuration related
├── components/
│   ├── common/   # Shared components like Badge, Skeleton, etc
│   ├── layout/   # Header, Footer, etc
```
