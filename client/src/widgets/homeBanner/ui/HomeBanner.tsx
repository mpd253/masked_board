import { Link } from 'react-router'
import { ROUTES } from '@/shared/routes'
import bannerDark from '../assets/bannerDark.webp'
import bannerLight from '../assets/bannerLight.webp'
import styles from '../styles/_HomeBanner.module.scss'

const BANNER_ALT =
  '가면 뒤에서, 자유롭게 이야기하세요. 이름도 프로필도 필요 없어요. 하고 싶은 말을 익명으로 남기고 함께 이야기를 나눠 보세요.'

export const HomeBanner = () => {
  return (
    <Link to={ROUTES.HOME}>
      <img className={styles.light} src={bannerLight} alt={BANNER_ALT} />
      <img className={styles.dark} src={bannerDark} alt={BANNER_ALT} />
    </Link>
  )
}
