# masked_board

React로 개발하는 게시판 프로젝트. Vite + React 19, TypeScript(TSX).
관리자/유저 두 가지 권한을 가진 익명 게시판이다. 백엔드는 추후 Express.js + MySQL로 추가할 예정이다.

## 명령어

패키지 매니저는 **pnpm**을 사용한다. `npm`/`yarn`으로 설치하지 않는다.

- 패키지 설치: `pnpm install` / 추가: `pnpm add <패키지>` (개발용: `pnpm add -D <패키지>`)
- 개발 서버: `pnpm dev`
- 빌드: `pnpm build` (`tsc -b`로 타입 검사 후 빌드)
- 린트: `pnpm lint` (oxlint)
- 빌드 미리보기: `pnpm preview`

## 컴포넌트 작성 규칙

- 모든 컴포넌트는 **화살표 함수**로 작성한다. `function` 선언식 컴포넌트는 사용하지 않는다.
- 클래스 컴포넌트는 사용하지 않는다.
- 컴포넌트 이름과 파일 이름은 PascalCase로 한다. 예: `PostList.tsx`
- 하나의 파일에는 하나의 컴포넌트를 두고, 파일 끝에서 `export default`로 내보낸다.
- props 타입은 `컴포넌트명Props` 이름의 `type`으로 정의하고, 매개변수에서 구조 분해로 받는다.
- `React.FC`는 사용하지 않는다.
- `any`는 사용하지 않는다.

```tsx
type PostItemProps = {
  title: string
  author: string
}

const PostItem = ({ title, author }: PostItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <span>{author}</span>
    </li>
  )
}

export default PostItem
```

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
