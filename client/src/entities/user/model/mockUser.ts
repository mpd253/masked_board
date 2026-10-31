export type UserAuth = 'ADMIN' | 'MANAGER' | 'USER'

export type UserPreferences = {
  showDemographics: boolean
  receiveMail: boolean
  allowRecommend: boolean
}

export type User = {
  nickname: string
  intro: string
  avatarUrl: string | null
  auth: UserAuth
  joinedAt: string
  attendanceCount: number
  postCount: number
  commentCount: number
  likeCount: number
  preferences: UserPreferences
}

// 백엔드 연동 전까지 사용하는 임시 데이터
export const mockUser: User = {
  nickname: '익명의 가면',
  intro: '',
  avatarUrl: null,
  auth: 'MANAGER',
  joinedAt: '2026.10.31.',
  attendanceCount: 0,
  postCount: 0,
  commentCount: 0,
  likeCount: 0,
  preferences: {
    showDemographics: false,
    receiveMail: true,
    allowRecommend: true,
  },
}
