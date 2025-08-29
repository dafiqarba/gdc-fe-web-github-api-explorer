import { useRef } from 'react'

import styles from './SearchBar.module.scss'

interface SearchBarProps {
  defaultValue?: string
  onSubmit: (v: string) => void
}

const SearchBar = (props: SearchBarProps) => {
  const { defaultValue = '', onSubmit } = props
  const ref = useRef<HTMLInputElement>(null)

  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(ref.current!.value.trim())
      }}
    >
      <input
        ref={ref}
        className={styles.input}
        defaultValue={defaultValue}
        placeholder="Enter github username"
      />
      <button className={styles.btn} type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar
