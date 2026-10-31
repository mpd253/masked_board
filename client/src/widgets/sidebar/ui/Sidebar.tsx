import { useState } from 'react'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import SettingsIcon from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar'
import { useUser } from '@/entities/user'
import type { UserAuth } from '@/entities/user'
import { ProfileDialog } from '@/features/editProfile'
import styles from '../styles/_Sidebar.module.scss'

const AUTH_LABELS: Record<UserAuth, string> = {
  ADMIN: '관리자',
  MANAGER: '매니저',
  USER: '멤버',
}

export const Sidebar = () => {
  const user = useUser()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const activityItems = [
    {
      label: '출석',
      count: user.attendanceCount,
      unit: '회',
      icon: <EventAvailableIcon className={styles.icon} />,
    },
    {
      label: '내가 쓴 게시글',
      count: user.postCount,
      unit: '개',
      icon: <ArticleOutlinedIcon className={styles.icon} />,
    },
    {
      label: '내가 쓴 댓글',
      count: user.commentCount,
      unit: '개',
      icon: <ChatBubbleOutlineIcon className={styles.icon} />,
    },
    {
      label: '내가 보낸 좋아요',
      count: user.likeCount,
      unit: '개',
      icon: <FavoriteIcon className={styles.icon} />,
    },
  ]

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>나의활동</h2>
      <div className={styles.profile}>
        <button
          type="button"
          className={styles.avatarButton}
          aria-label="프로필 설정"
          onClick={() => setIsDialogOpen(true)}
        >
          <Avatar className={styles.avatar} src={user.avatarUrl ?? undefined} />
          <span className={styles.settings}>
            <SettingsIcon className={styles.settingsIcon} />
          </span>
        </button>
        <div className={styles.info}>
          <strong className={styles.nickname}>{user.nickname}</strong>
          <span className={styles.joinedAt}>{user.joinedAt} 가입</span>
        </div>
      </div>
      <ul className={styles.activity}>
        <li className={styles.activityItem}>
          <MilitaryTechIcon className={styles.icon} />
          <span className={styles.label}>{AUTH_LABELS[user.auth]}</span>
        </li>
        {activityItems.map(({ label, count, unit, icon }) => (
          <li key={label} className={styles.activityItem}>
            {icon}
            <span className={styles.label}>{label}</span>
            <span>
              <strong className={styles.count}>{count}</strong>
              {unit}
            </span>
          </li>
        ))}
      </ul>
      {isDialogOpen && (
        <ProfileDialog user={user} onClose={() => setIsDialogOpen(false)} />
      )}
    </aside>
  )
}
