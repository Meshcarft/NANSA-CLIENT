# Prompt: Task Initialization & Execution Flow 🚀

이 프롬프트는 새로운 기능을 구현하거나 대규모 리팩토링을 시작할 때 에이전트가 준수해야 할 표준 절차를 정의한다.

## Phase 1: Context & Specification 📝

1. **Check Existing KIs**: 시작 전 관련 지식 아이템(KIs)이 있는지 반드시 확인한다.
2. **Spec Creation**: `.agents/specs/[feature-name].md` 파일을 생성하여 다음 내용을 정의한다.
   - 기능의 목적 및 비즈니스 로직
   - FSD 레이어 설계 (App, Widgets, Features, Entities, Shared)
   - 주요 데이터 모델 및 인터페이스 (Zod 스키마 포함)
   - UI/UX 인터랙션 설계 (Framer Motion 등)
3. **Approval**: 명세서에 대해 사용자의 최종 승인("확정", "승인")을 받는다.

## Phase 2: Environment & Git 🌿

1. **Branch Out**: `git checkout main` -> `git pull` -> `git checkout -b feature/[feature-name]` (또는 `fix/`) 순으로 브랜치를 생성한다.
2. **Dependency Check**: 필요한 라이브러리가 스택에 없는 경우 사용자에게 승인 후 설치한다.

## Phase 3: Implementation 🛠️

1. **Scaffolding**: FSD 구조에 맞춰 폴더와 `index.ts` (Public API)를 먼저 구성한다.
2. **Logic & UI**: 명세를 100% 준수하며 코드를 작성한다. 커밋은 논리적 단위로 쪼개어 `feat: ... (agent)` 형식을 유지한다.
3. **Internal Splitting**: 위젯이 150라인을 넘거나 복잡해지면 즉시 내부 컴포넌트로 분리한다.

## Phase 4: Validation & Quality Control 🧪

1. **Lint & Format**: `npx biome check --write .`를 실행하여 포맷팅과 린트를 해결한다.
2. **Type Check**: `npx tsc --noEmit`을 통해 프로젝트 전체의 타입 안정성을 검증한다.
3. **Tests**: `npm run test -- --run`으로 유닛 테스트가 모두 통과하는지 확인한다.
4. **Zero Tolerance**: 상기 검사 중 하나라도 실패하면 작업을 완료하지 않고 스스로 해결책을 찾아 반복한다.

## Phase 5: PR & Feedback 🔁

1. **Push**: 원격 저장소에 브랜치를 푸시한다.
2. **Create PR**: `.github/PULL_REQUEST_TEMPLATE.md`에 맞춰 PR 본문을 성실히 작성한다.
3. **AI Review Loop**: Gemini Code Assist 등의 리뷰 코멘트가 올라오면 즉시 분석하여 반영하고 재푸시한다.
4. **Final Report**: 모든 자동화 검증이 끝난 후 사용자에게 보고한다.
