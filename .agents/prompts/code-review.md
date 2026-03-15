# Prompt: Code Review & Feedback Resolution 🔍

이 프롬프트는 AI 리뷰어(Gemini Code Assist 등)의 피드백을 처리하고 PR의 최종 품질을 확보하는 절차를 정의한다.

## 1. Review Analysis 🧐

1. **Review Context**: PR에 기록된 모든 코멘트를 수집하고, 각 코멘트가 '로직 오류', 'FSD 위반', '스타일 개선' 중 어디에 해당하시는지 분류한다.
2. **Priority**: 로직 오류와 아키텍처(FSD) 위반을 최우선 수정 항목으로 설정한다.

## 2. Decision Making ⚖️

1. **Acceptance**: 지적이 합당하고 프로젝트 표준(Biome, FSD)에 부합하면 즉시 수용한다.
2. **Debate**: 지적이 아키텍처 설계 의도와 충돌하거나, 다른 사이드 이펙트가 예상될 경우 사용자(인간)에게 보고하여 최종 판단을 요청한다.
3. **Spec Update**: 리뷰를 통해 결정된 아키텍처 변경점은 반드시 `.agents/specs/` 내 해당 명세서에 역으로 반영(Backport)한다.

## 3. Resolution Flow 🛠️

1. **Correction**: 지적 사항을 반영하여 코드를 수정한다.
2. **Local Validation**: `npm run lint`, `npm run test`, `npx tsc --noEmit`을 순차적으로 실행하여 새로운 에러가 없는지 확인한다.
3. **Re-Push**: 수정된 내용을 커밋하며 메시지 끝에 `(fix-review)`를 붙여 리뷰 반영임을 명시한다. (예: `fix: resolve fsd layer violation (fix-review)`)

## 4. Closing 🏁

1. 모든 리뷰 코멘트가 해결(Resolved) 상태로 전환되었는지 확인한다.
2. CI 파이프라인(GitHub Actions)이 모두 녹색(Success)인지 확인 후 사용자에게 최종 병합 승인을 요청한다.
