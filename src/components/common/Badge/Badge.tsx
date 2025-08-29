import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './Badge.module.scss'

type Size = 'sm' | 'md'
type Tone = 'soft' | 'topic'

interface BadgeProps {
  tone?: Tone
  size?: Size
  icon?: ReactNode
  className?: string
  children: ReactNode
  dotColor?: string | null
}

const langColor = (lang?: string | null): string => {
  const map: Record<string, string> = {
    C: '#555555',
    Go: '#00ADD8',
    CSS: '#563d7c',
    PHP: '#4F5D95',
    Java: '#B07219',
    Ruby: '#701516',
    HTML: '#e34c26',
    'C#': '#178600',
    Shell: '#89e051',
    'C++': '#f34b7d',
    Python: '#3572A5',
    TypeScript: '#3178C6',
    JavaScript: '#F1E05A',
    Unknown: 'var(--brand-300)',
  }

  return (lang && map[lang]) || 'var(--brand-300)'
}

const Badge = (props: BadgeProps) => {
  const { children, className, dotColor, icon, tone = 'soft', size = 'sm' } = props

  return (
    <span className={clsx(styles.badge, styles[tone], styles[size], className)}>
      {dotColor && (
        <span className={styles.dot} style={{ background: langColor(dotColor) }} />
      )}
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </span>
  )
}

export default Badge
