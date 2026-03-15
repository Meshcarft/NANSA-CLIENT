# Feature Spec: Git Hooks & Linting (Husky) 🛠️

## 1. 목적 (Goal)

- 커밋 전 코드 스타일(Biome) 및 린트 검사 자동화.
- 커밋 메시지 규격화(Conventional Commits)를 통한 프로젝트 히스토리 관리.
- 잘못된 코드가 레포지토리에 올라가는 것을 방지하여 코드 품질 유지.

## 2. 도구 구성 (Tooling)

- **Husky**: Git Hook 제어 (v9+).
- **lint-staged**: 변경된 파일만 검사하여 속도 최적화.
- **Commitlint**: 커밋 메시지 규격화 (`feat:`, `fix:` 등).
- **Biome**: 프로젝트의 핵심 린터 및 포맷터. Rust 기반의 속도와 TypeScript/React 최적화 룰 적용.

## 3. 상세 동작 (Detailed Hooks & Config)

- **Biome Config**:
  - `formatter`: 2 spaces, space indent style.
  - `linter`: recommended 룰셋 활성화 + React/Next.js 특화 룰 적용.
  - `organizeImports`: 커밋 시 자동으로 임포트 정렬.
- **pre-commit**: `npx lint-staged` 실행.
  - `.ts`, `.tsx`, `.js`, `.jsx` 파일에 대해 `biome check --apply` 실행.
  - `.css` 파일 등에 대해 필요한 포맷팅 적용.
- **commit-msg**: `npx --no -- commitlint --edit ${1}` 실행.
  - @commitlint/config-conventional 규칙 적용.

## 4. 제약 사항 (Constraints)

- 프로젝트 루트의 `.husky` 폴더 내에 설정을 유지한다.
- `package.json`의 scripts를 간결하게 유지한다.
- `biome` 설정을 존중하며, 중복된 규칙을 피한다.

## 5. 설치 및 설정 단계 (Setup Steps)

1. 필요한 패키지 설치: `husky`, `lint-staged`, `@commitlint/cli`, `@commitlint/config-conventional`.
2. Husky 초기화.
3. `commitlint.config.js` 생성.
4. `package.json`에 `lint-staged` 설정 추가.
5. `.husky/pre-commit` 및 `.husky/commit-msg` 훅 생성.
