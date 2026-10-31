import { NavLink } from 'react-router'
import { ROUTES } from '@/shared/routes'
import styles from '../styles/_NavBar.module.scss'

const NAV_ITEMS = [
  { to: ROUTES.HOME, label: '홈' },
  { to: ROUTES.NOTICE, label: '공지사항' },
  { to: ROUTES.POST, label: '게시글' },
  { to: ROUTES.INQUIRY, label: '1:1 문의' },
]

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      {NAV_ITEMS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === ROUTES.HOME}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
