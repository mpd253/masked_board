import { NavLink } from 'react-router'
import { ThemeToggle } from '@/features/toggleTheme'
import { ROUTES } from '@/shared/routes'
import styles from '../styles/_Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to={ROUTES.HOME} className={styles.logo}>
        🎭 masked_board
      </NavLink>
      <ThemeToggle />
    </header>
  )
}
