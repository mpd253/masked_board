import { Outlet } from 'react-router'
import { HomeBanner } from '@/widgets/homeBanner'
import { NavBar } from '@/widgets/navBar'
import { Sidebar } from '@/widgets/sidebar'
import styles from '../styles/_ContentLayout.module.scss'

export const ContentLayout = () => {
  return (
    <>
      <HomeBanner />
      <NavBar />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </>
  )
}
