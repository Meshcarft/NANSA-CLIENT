# Infrastructure Spec: Git Flow & Commit Strategy for AI Agents

## 1. 목적 (Goal)

- 에이전트와 인간 개발자가 혼선 없이 협업할 수 있는 명확한 브랜치 전략을 수립한다.
- 모든 코드 변경 건에 대해 자동화된 검증(CI)과 AI 리뷰 루프를 강제한다.

## 2. 브랜치 전략: Scalable GitHub Flow

- **main**: 상시 배포 가능한 최상위 브랜치. 직접 커밋을 금지하며 오직 PR을 통해서만 병합한다.
- **feature/[기능명]**: 새로운 기능 개발. (예: `feature/matching-engine`, `feature/ssam-ui`)
- **fix/[버그명]**: 버그 수정 및 긴급 패치. (예: `fix/header-z-index`)
- **docs/[문서명]**: 스펙 파일 및 프로젝트 문서 수정. (예: `docs/git-strategy`)

## 3. 에이전트 작업 지침 (Action Rules)

### 3.1 브랜치 관리

- 새로운 SDD(Spec-Driven Development) 작업을 시작할 때 반드시 목적에 맞는 접두사를 붙인 브랜치를 생성한다.
- 작업 시작 전 반드시 `main` 브랜치로부터 최신 코드를 pull 받아 브랜치를 생성한다.

### 3.2 커밋 전략: Atomic & Conventional Commits

- **Atomic Commits**: 하나의 커밋은 하나의 논리적 단위(Single Responsibility)만 포함한다.
- **Conventional Commits**: 다음 규격을 100% 준수하며, 메시지 끝에 `(agent)`를 붙여 에이전트의 작업임을 명시한다.
  - `feat: ... (agent)` : 새로운 기능
  - `fix: ... (agent)` : 버그 수정
  - `docs: ... (agent)` : 문서 수정
  - `refactor: ... (agent)` : FSD 구조 조정 등 코드 리팩토링
  - `style: ... (agent)` : 코드 포맷팅 (로직 변경 없음)
  - `test: ... (agent)` : 테스트 코드 추가/수정

### 3.3 PR (Pull Request) 및 병합

- 작업 완료 시 반드시 `main` 브랜치로 PR을 생성한다.
- PR 생성 전 로직 검증(`npm run lint`, `npm run test`, `npx tsc --noEmit`)을 로컬에서 완료해야 한다.
- PR 본문에는 `.github/PULL_REQUEST_TEMPLATE.md`에 따라 연관된 Spec 경로와 변경 요약을 충족해야 한다.

## 4. 에이전트 자동화 루틴 예시

1. `git checkout main` & `git pull origin main`
2. `git checkout -b feature/new-feature`
3. 코드 구현 및 커밋 (`git commit -m "feat: add feature (agent)"`)
4. 로컬 검증 (`npm run lint` 등)
5. `git push origin feature/new-feature` 후 PR 링크 보고
