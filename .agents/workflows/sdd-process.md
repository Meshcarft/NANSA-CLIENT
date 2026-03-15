# Workflow: SDD (Spec-Driven Development) Process 🔄

명세 기반 개발을 통한 코드 일관성과 품질 확보를 위한 프로세스이다.

## Step 1: Spec Creation 📝

- 사용자의 요청을 분석하여 `.agents/templates/spec-template.md`를 기반으로 `.agents/specs/[feature-name].md` 파일을 작성한다.
- 이때 기술 스택, 톤앤매너, FSD 아키텍처 가이드를 모두 반영한다.

## Step 2: Spec Review & Approval 🔍

- 작성된 명세서를 사용자에게 제시하고 검토를 요청한다.
- 사용자가 "승인" 또는 "확정" 메시지를 주어야 다음 단계로 넘어간다.

## Step 3: Implementation Based on Spec 🛠️

- 승인된 명세서의 내용을 100% 준수하며 코드를 작성한다.
- 코드 작성 중 명세와 충돌이 발생하면 즉시 보고하고 명세를 먼저 수정한다.

## Step 4: Validation & Quality Control 🧪

- 코드 작성이 끝나면 다음 명령어를 순차적으로 실행하여 검증한다:
  1. `npx biome check --write .` (자동 교정 및 임포트 정렬)
  2. `npm run lint` (최종 린트 검사)
  3. `npm run test` (유닛 테스트 확인)
- 모든 검사를 통과(Exit Code 0)한 경우에만 작업 완료를 보고한다.
- 에러가 발생한 경우 Step 3로 돌아가 에러를 해결하고 다시 검증한다.

## Step 5: AI Review & Feedback Loop 🔁

- 코드 반영 후 AI 리뷰어(Gemini Code Assist 등)의 코멘트가 발생하면 이를 분석한다.
- 지적 사항이 합당할 경우 즉시 반영하여 코드를 수정하고 Step 4를 재수행한다.
- 리뷰가 완료되고 인간(사용자)의 최종 승인이 있을 때 프로세스를 종료한다.
