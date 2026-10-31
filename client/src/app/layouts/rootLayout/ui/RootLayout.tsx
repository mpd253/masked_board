import { Outlet } from 'react-router'
import { Header } from '@/widgets/header'
import styles from '../styles/_RootLayout.module.scss'

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  )
}
