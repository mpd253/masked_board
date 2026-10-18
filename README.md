<div align="center">

# 🎭 masked_board

**가면 뒤에서, 자유롭게 이야기하세요.**

관리자/유저 권한을 분리한 익명 게시판

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)

</div>

<br />

## 📖 소개

**masked_board**는 누구나 신원을 드러내지 않고 글을 쓸 수 있는 익명 게시판입니다.
유저는 부담 없이 이야기하고, 관리자는 건강한 커뮤니티가 되도록 게시판을 관리합니다.

> 🚧 현재 개발 초기 단계입니다. 아래 기능은 구현 예정입니다.

<br />

## ✨ 주요 기능

<table>
  <tr>
    <th width="50%">👤 유저</th>
    <th width="50%">🛡️ 관리자</th>
  </tr>
  <tr>
    <td valign="top">

- 📝 익명 게시글 작성 · 수정 · 삭제
- 📋 게시글 목록 및 상세 보기
- 💬 익명 댓글 작성
- 🔍 게시글 검색

</td>
    <td valign="top">

- 🔐 관리자 로그인
- 🙈 게시글 · 댓글 숨김 및 삭제
- 📢 공지사항 작성
- 📊 게시판 현황 대시보드

</td>
  </tr>
</table>

<br />

## 🛠️ 기술 스택

<div align="center">

| 구분 | 기술 |
|:---:|:---|
| **Frontend** | <img src="https://skillicons.dev/icons?i=react,ts,vite" /> |
| **Backend** | <img src="https://skillicons.dev/icons?i=nodejs,express,mysql" /> 🔜 예정 |
| **Tooling** | <img src="https://skillicons.dev/icons?i=pnpm,git,github" /> |

</div>

<br />

## 🚀 시작하기

### 요구 사항

- **Node.js** 20.19 이상 또는 22.12 이상
- **pnpm**

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/mpd253/masked_board.git
cd masked_board

# 2. 패키지 설치
pnpm install

# 3. 개발 서버 실행 (브라우저가 자동으로 열립니다)
pnpm dev
```

### 📜 명령어

| 명령어 | 설명 |
|:---|:---|
| `pnpm dev` | 개발 서버 실행 |
| `pnpm build` | 타입 검사 후 프로덕션 빌드 |
| `pnpm preview` | 빌드 결과 미리보기 |
| `pnpm lint` | 코드 린트 (oxlint) |

<br />

## 📁 프로젝트 구조

```
masked_board/
├── 📂 public/          # 정적 파일
├── 📂 src/
│   ├── 📂 assets/      # 이미지 등 리소스
│   ├── 📄 App.tsx      # 루트 컴포넌트
│   └── 📄 main.tsx     # 진입점
├── 📄 index.html
└── ⚙️ vite.config.ts
```

<br />

## 🗺️ 로드맵

- [x] ⚙️ 프로젝트 초기 세팅 (Vite + React + TypeScript + pnpm)
- [ ] 📋 게시글 목록 · 상세 · 작성 화면
- [ ] 💬 댓글 기능
- [ ] 🛡️ 관리자 페이지
- [ ] 🗄️ 백엔드 구축 (Express + MySQL)
- [ ] 🔌 백엔드 API 연동
- [ ] 🌐 배포

<br />

<div align="center">

**🎭 masked_board** · Made with ❤️

</div>
