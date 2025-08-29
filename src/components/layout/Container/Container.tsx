import { Outlet } from 'react-router'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import styles from './Container.module.scss'

const Container = () => {
  return (
    <div className={styles.rootContainer}>
      <Header />
      <main id="content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Container
