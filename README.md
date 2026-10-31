<div align="center">

# 🎭 masked_board

**가면 뒤에서, 자유롭게 이야기하세요.**

관리자/유저 권한을 분리한 익명 게시판

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-9-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Sass](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

![Status](https://img.shields.io/badge/status-in%20development-yellow?style=flat-square)

</div>

<br />

## 📖 소개

**masked_board**는 누구나 신원을 드러내지 않고 글을 쓸 수 있는 익명 게시판입니다.
유저는 부담 없이 이야기하고, 관리자는 건강한 커뮤니티가 되도록 게시판을 관리합니다.

> 🚧 현재 개발 중입니다. 화면의 기본 틀과 서버-DB 연결까지 완료했고, 게시판 기능은 구현 예정입니다.

<br />

## ✨ 주요 기능

### ✅ 구현 완료

- 🧭 홈, 공지사항, 게시글, 1:1 문의 페이지 라우팅 (페이지 내용은 준비 중)
- 🖼️ 헤더, 배너, 메뉴 바, 사이드바로 구성된 레이아웃
- 🌗 라이트/다크 모드 전환 (선택 저장, 첫 방문 시 OS 설정 적용)
- 👤 나의 활동 패널 (프로필, 권한, 출석, 게시글, 댓글, 좋아요 수)
- ⚙️ 프로필 설정 창 (이미지, 별명, 소개, ADMIN/MANAGER 전용 수신 설정)
- 🔌 Express 서버와 MySQL 연결 확인 API (`GET /api/health`)

> 사용자 정보는 아직 임시 데이터이며, 프로필 수정 내용은 새로고침하면 초기화됩니다.

### 🔜 구현 예정

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
| **Frontend** | <img src="https://skillicons.dev/icons?i=react,ts,vite,materialui,sass" /> |
| **Backend** | <img src="https://skillicons.dev/icons?i=nodejs,express,mysql" /> |
| **Tooling** | <img src="https://skillicons.dev/icons?i=pnpm,git,github" /> |

</div>

<br />

## 🚀 시작하기

### 요구 사항

- **Node.js** 20.19 이상 또는 22.12 이상
- **pnpm**
- **MySQL** 8.0 (PC에 직접 설치)

### 1. 설치

```bash
git clone https://github.com/mpd253/masked_board.git
cd masked_board
pnpm install
```

### 2. DB 설정 (처음 한 번만)

1. `server/.env.example`을 복사해서 `server/.env`를 만들고, `DB_PASSWORD`에 사용할 비밀번호를 입력합니다.
2. `server/db/init.sql`의 `'password'`를 같은 비밀번호로 바꿉니다.
3. MySQL root 계정으로 SQL을 실행합니다.

   ```powershell
   Get-Content server\db\init.sql | & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
   ```

4. `init.sql`의 비밀번호를 다시 `'password'`로 되돌립니다. 이 파일은 Git에 올라갑니다.

### 3. 실행

```bash
pnpm dev          # 프론트 (http://localhost:5173, 브라우저 자동 열림)
pnpm dev:server   # 백엔드 (http://localhost:4000)
```

`http://localhost:4000/api/health`에서 `{"status":"ok","db":"connected"}`가 나오면 DB까지 연결된 것입니다.

### 📜 명령어

루트 폴더에서 실행합니다.

| 명령어 | 설명 |
|:---|:---|
| `pnpm dev` | 프론트 개발 서버 실행 |
| `pnpm dev:server` | 백엔드 서버 실행 (Express, 포트 4000) |
| `pnpm build` | 프론트와 백엔드를 타입 검사 후 빌드 |
| `pnpm preview` | 프론트 빌드 결과 미리보기 |
| `pnpm lint` | 코드 린트 (oxlint) |

<br />

## 📁 프로젝트 구조

pnpm 워크스페이스로 프론트와 백엔드를 나눕니다. 프론트는 [FSD(Feature-Sliced Design)](https://feature-sliced.design/) 패턴을 따릅니다.

```
masked_board/
├── 📂 client/             # React
│   └── 📂 src/
│       ├── 📂 app/        # 라우터, 레이아웃, 전역 스타일
│       ├── 📂 pages/      # 페이지 (home, notice, post, inquiry)
│       ├── 📂 widgets/    # UI 블록 (header, homeBanner, navBar, sidebar)
│       ├── 📂 features/   # 사용자 기능 (toggleTheme, editProfile)
│       ├── 📂 entities/   # 비즈니스 엔티티 (user)
│       ├── 📂 shared/     # 공용 코드 (routes)
│       └── 📄 main.tsx    # 진입점
└── 📂 server/             # Express + MySQL
    ├── 📂 db/             # DB 초기화 SQL
    └── 📂 src/
        ├── 📂 db/         # MySQL 연결
        ├── 📂 routes/     # API 경로
        ├── 📄 app.ts      # Express 설정
        └── 📄 index.ts    # 서버 시작
```

<br />

## 🗺️ 로드맵

- [x] ⚙️ 프로젝트 초기 세팅 (Vite + React + TypeScript + pnpm)
- [x] 🧱 FSD 구조와 페이지 라우팅
- [x] 🖼️ 공통 레이아웃과 다크 모드
- [x] 👤 나의 활동 패널과 프로필 설정 화면
- [x] 🗄️ Express 서버와 MySQL 연결
- [ ] 🧾 DB 테이블 설계 및 생성
- [ ] 🔐 로그인과 권한 처리 (ADMIN / MANAGER / USER)
- [ ] 📋 게시글 목록 · 상세 · 작성 화면
- [ ] 💬 댓글 기능
- [ ] 📅 출석과 나의 활동 집계
- [ ] 📢 공지사항과 1:1 문의
- [ ] 🛡️ 관리자 페이지
- [ ] 🔌 프론트와 백엔드 API 연동
- [ ] 🌐 배포

<br />

<div align="center">

**🎭 masked_board** · Made with ❤️

</div>
