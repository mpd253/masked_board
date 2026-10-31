import { useState } from 'react'
import type { ChangeEvent } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Switch from '@mui/material/Switch'
import styles from '../styles/_ThemeToggle.module.scss'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.dataset.theme === 'dark',
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextIsDark = event.target.checked
    const nextTheme = nextIsDark ? 'dark' : 'light'
    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem('theme', nextTheme)
    setIsDark(nextIsDark)
  }

  return (
    <Switch
      className={styles.toggle}
      checked={isDark}
      onChange={handleChange}
      icon={<LightModeIcon className={styles.light} />}
      checkedIcon={<DarkModeIcon className={styles.dark} />}
      slotProps={{ input: { 'aria-label': '다크 모드' } }}
    />
  )
}
