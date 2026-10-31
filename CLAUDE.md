# masked_board

React로 개발하는 게시판 프로젝트. Vite + React 19, TypeScript(TSX).
관리자/유저 두 가지 권한을 가진 익명 게시판이다. 백엔드는 `server/` 폴더의 Express.js + MySQL이다.

## 프로젝트 구조

pnpm 워크스페이스이며, 프론트는 `client/`, 백엔드는 `server/`에 둔다. 아래 명령어는 루트에서 실행한다.

## 명령어

패키지 매니저는 **pnpm**을 사용한다. `npm`/`yarn`으로 설치하지 않는다.

- 패키지 설치: `pnpm install`
- 프론트 패키지 추가: `pnpm --filter masked-board-client add <패키지>` (개발용: `-D` 추가)
- 프론트 개발 서버: `pnpm dev`
- 빌드: `pnpm build` (client와 server 모두 타입 검사 후 빌드)
- 린트: `pnpm lint` (oxlint, client와 server 공통)
- 빌드 미리보기: `pnpm preview`

## 백엔드 (server/)

- pnpm 워크스페이스 패키지 `masked-board-server`이다. 실행: `pnpm dev:server` (http://localhost:4000)
- 패키지 추가: `pnpm --filter masked-board-server add <패키지>`
- MySQL은 PC에 직접 설치해서 사용한다. Docker는 사용하지 않는다.
- ORM(Prisma 등)은 사용하지 않고, `mysql2`로 SQL을 직접 작성한다. 값은 항상 `?` 파라미터 바인딩으로 넘긴다.
- 접속 정보는 `server/.env`에 둔다 (Git 제외). 항목 목록은 `server/.env.example`에 있다.
- `server/`는 FSD가 아니라 `routes/`, `controllers/`, `services/`, `middlewares/`, `db/` 구조를 따른다.

## 폴더 구조 (FSD)

`client/src`는 FSD(Feature-Sliced Design) 패턴을 따른다. 레이어는 위에서 아래로만 import할 수 있다.
`app` → `pages` → `widgets` → `features` → `entities` → `shared`

| 레이어 | 역할 | 예 |
|---|---|---|
| `app` | 앱 진입점, 라우터, 레이아웃, 전역 스타일 | `app/router`, `app/layouts` |
| `pages` | 라우트 단위 페이지 | `pages/home`, `pages/notice` |
| `widgets` | 여러 기능을 조합한 큰 UI 블록 | `widgets/header` |
| `features` | 사용자 행동 단위 기능 | `features/createPost` |
| `entities` | 비즈니스 엔티티 | `entities/post`, `entities/user` |
| `shared` | 재사용 UI, 유틸, 설정 | `shared/routes`, `shared/ui` |

- 슬라이스 폴더 이름은 하이픈(`-`) 대신 camelCase로 짓는다. 예: `widgets/homeBanner`
- 슬라이스 안은 `ui/`, `styles/`, `assets/`, `model/`, `api/`, `lib/` 세그먼트로 나눈다.
- 각 슬라이스는 `index.ts`로 공개 API를 내보내고, 외부에서는 `index.ts`를 통해서만 import한다.
- 같은 레이어의 다른 슬라이스끼리는 import하지 않는다.
- import 경로는 `@/` 별칭을 사용한다. 예: `import { Header } from '@/widgets/header'`
- 라우트 경로는 `shared/routes/routes.ts`의 `ROUTES` 상수를 사용한다.

## 컴포넌트 작성 규칙

- 모든 컴포넌트는 **화살표 함수**로 작성한다. `function` 선언식 컴포넌트는 사용하지 않는다.
- 클래스 컴포넌트는 사용하지 않는다.
- 컴포넌트 이름과 파일 이름은 PascalCase로 한다. 예: `PostList.tsx`
- 하나의 파일에는 하나의 컴포넌트를 두고, `export const 파일이름 = () => {}` 형식의 이름 내보내기(named export)로 내보낸다. `export default`는 사용하지 않는다.
- props 타입은 `컴포넌트명Props` 이름의 `type`으로 정의하고, 매개변수에서 구조 분해로 받는다.
- `React.FC`는 사용하지 않는다.
- `any`는 사용하지 않는다.

```tsx
type PostItemProps = {
  title: string
  author: string
}

export const PostItem = ({ title, author }: PostItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <span>{author}</span>
    </li>
  )
}
```

슬라이스의 `index.ts`에서는 이름 그대로 다시 내보낸다. 예: `export { PostItem } from './ui/PostItem'`

## 스타일 규칙

- 스타일은 **SCSS**(`.scss`)로 작성한다. `.css` 파일은 만들지 않는다.
- 모든 SCSS 파일 이름 앞에는 `_`를 붙인다.
- 컴포넌트 스타일은 **CSS Module**(`_컴포넌트명.module.scss`)로 만들고, 컴포넌트는 `ui/`, 스타일은 `styles/` 폴더에 나눠 둔다. 예: `widgets/header/ui/Header.tsx` + `widgets/header/styles/_Header.module.scss`
- `import styles from '../styles/_Header.module.scss'`로 가져와서 `className={styles.logo}`처럼 사용한다.
- 모듈 안의 클래스 이름은 짧은 camelCase로 짓는다. 예: `.logo`, `.navItem`, `.active` (BEM 사용 안 함)
- 레이아웃도 `app/layouts/레이아웃명/`(camelCase) 폴더로 나누고 같은 구조를 따른다. 예: `app/layouts/rootLayout/ui/RootLayout.tsx`
- 전역 스타일과 CSS 변수는 모듈이 아닌 `app/styles/_index.scss`에 둔다.
- UI 컴포넌트가 필요하면 **Material UI**(`@mui/material`, `@mui/icons-material`)를 사용한다. MUI 컴포넌트의 스타일도 `sx` 대신 모듈 SCSS로 조정한다.

## 커밋 메시지 규칙

형식: `<type>: <제목>`. type은 영어 소문자로, 제목은 한국어로 50자 이내, 마침표 없이 쓴다.
type 목록은 `.gitmessage`에 있다.

| type | 용도 |
|---|---|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `style` | 코드 포맷, 세미콜론 등 (동작 변경 없음) |
| `refactor` | 리팩토링 (기능 변경 없음) |
| `design` | CSS 등 UI 디자인 변경 |
| `docs` | 문서 수정 |
| `test` | 테스트 코드 추가/수정 |
| `chore` | 빌드, 패키지 매니저, 설정 변경 |
| `rename` | 파일/폴더 이름 변경 또는 이동 |
| `remove` | 파일 삭제 |

예: `feat: 게시글 작성 기능 추가`, `fix: 댓글 삭제 시 목록이 갱신되지 않는 문제 수정`

### 커밋 메시지 추천 요청 시 답변 형식

```
<type>: <제목>

1. 변경사항에 대한 내용
2. 변경사항에 대한 내용
...
```

## 기타

- 상태 관리는 Hooks(`useState`, `useEffect` 등)를 사용한다.
- 이벤트 핸들러도 컴포넌트 안에서 화살표 함수로 정의한다. 예: `const handleClick = () => { ... }`
