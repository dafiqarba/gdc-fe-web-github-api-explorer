import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...rest } = props

  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
