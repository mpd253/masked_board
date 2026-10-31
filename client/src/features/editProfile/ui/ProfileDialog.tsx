import { useState } from 'react'
import type { ChangeEvent } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { updateUser } from '@/entities/user'
import type { User, UserPreferences } from '@/entities/user'
import styles from '../styles/_ProfileDialog.module.scss'

const NICKNAME_MIN_LENGTH = 2
const NICKNAME_MAX_LENGTH = 20
const INTRO_MAX_LENGTH = 300

const PREFERENCE_ITEMS: { key: keyof UserPreferences; label: string }[] = [
  { key: 'showDemographics', label: '운영진에게 성별 · 연령대 공개' },
  { key: 'receiveMail', label: '운영진이 보내는 전체 메일 수신' },
  { key: 'allowRecommend', label: '인기멤버로 추천 허용' },
]

type ProfileDialogProps = {
  user: User
  onClose: () => void
}

export const ProfileDialog = ({ user, onClose }: ProfileDialogProps) => {
  const [nickname, setNickname] = useState(user.nickname)
  const [intro, setIntro] = useState(user.intro)
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl)
  const [preferences, setPreferences] = useState(user.preferences)

  const canEditPreferences = user.auth === 'ADMIN' || user.auth === 'MANAGER'
  const trimmedNickname = nickname.trim()
  const isNicknameValid = trimmedNickname.length >= NICKNAME_MIN_LENGTH
  const isChanged =
    trimmedNickname !== user.nickname ||
    intro !== user.intro ||
    avatarUrl !== user.avatarUrl ||
    preferences !== user.preferences

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setAvatarUrl(reader.result as string)
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  const handleSubmit = () => {
    updateUser({ ...user, nickname: trimmedNickname, intro, avatarUrl, preferences })
    onClose()
  }

  return (
    <Dialog
      open
      fullWidth
      maxWidth="xs"
      onClose={onClose}
      slotProps={{ paper: { className: styles.paper } }}
    >
      <h2 className={styles.title}>프로필 설정</h2>

      <div className={styles.body}>
        <div className={styles.avatarRow}>
          <div className={styles.avatarWrap}>
            <Avatar className={styles.avatar} src={avatarUrl ?? undefined} />
            <label className={styles.camera} aria-label="프로필 이미지 변경">
              <PhotoCameraIcon className={styles.cameraIcon} />
              <input
                className={styles.fileInput}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <p className={styles.guide}>프로필 이미지와 별명을 변경할 수 있습니다.</p>
        </div>

        <label className={styles.label} htmlFor="profileNickname">
          별명
        </label>
        <InputBase
          id="profileNickname"
          className={styles.input}
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          slotProps={{ input: { maxLength: NICKNAME_MAX_LENGTH } }}
          endAdornment={
            nickname && (
              <IconButton
                className={styles.clear}
                size="small"
                aria-label="별명 지우기"
                onClick={() => setNickname('')}
              >
                <CancelIcon fontSize="small" />
              </IconButton>
            )
          }
        />
        <div className={styles.helper}>
          <span className={isNicknameValid ? styles.valid : styles.invalid}>
            {isNicknameValid
              ? '사용할 수 있는 별명입니다.'
              : `별명은 ${NICKNAME_MIN_LENGTH}자 이상 입력해주세요.`}
          </span>
          <span>
            <strong className={styles.count}>{nickname.length}</strong> /{NICKNAME_MAX_LENGTH}
          </span>
        </div>

        <label className={styles.label} htmlFor="profileIntro">
          소개
        </label>
        <InputBase
          id="profileIntro"
          className={styles.input}
          multiline
          rows={4}
          placeholder="자기소개를 입력해주세요"
          value={intro}
          onChange={(event) => setIntro(event.target.value)}
          slotProps={{ input: { maxLength: INTRO_MAX_LENGTH } }}
        />
        <div className={styles.helperEnd}>
          <span>
            {intro.length} /{INTRO_MAX_LENGTH}
          </span>
        </div>

        {canEditPreferences && (
          <ul className={styles.preferences}>
            {PREFERENCE_ITEMS.map(({ key, label }) => (
              <li key={key} className={styles.preference}>
                <span className={styles.preferenceLabel}>{label}</span>
                <RadioGroup
                  row
                  aria-label={label}
                  value={preferences[key] ? 'allow' : 'deny'}
                  onChange={(event) =>
                    setPreferences({
                      ...preferences,
                      [key]: event.target.value === 'allow',
                    })
                  }
                >
                  <FormControlLabel
                    className={styles.option}
                    value="allow"
                    label="허용"
                    control={<Radio className={styles.radio} size="small" />}
                  />
                  <FormControlLabel
                    className={styles.option}
                    value="deny"
                    label="비허용"
                    control={<Radio className={styles.radio} size="small" />}
                  />
                </RadioGroup>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.actions}>
        <Button className={styles.cancel} disableElevation onClick={onClose}>
          취소
        </Button>
        <Button
          className={styles.confirm}
          disableElevation
          disabled={!isNicknameValid || !isChanged}
          onClick={handleSubmit}
        >
          확인
        </Button>
      </div>
    </Dialog>
  )
}
