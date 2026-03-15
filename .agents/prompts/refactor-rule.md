# Prompt: Refactoring Principles & FSD Optimization 🏗️

이 프롬프트는 기존 코드를 개선하거나 FSD 아키텍처를 고도화할 때 준수해야 할 정교한 리팩토링 규칙을 정의한다.

## 1. Refactoring Triggers 🚨

- 컴포넌트 파일이 150라인을 초과할 때.
- 하나의 컴포넌트에 3개 이상의 독립된 UI 섹션이 공존할 때.
- 비즈니스 로직(Action)과 UI 표현(View)이 강하게 결합되어 있을 때.
- FSD 레이어 참조 규칙(Cross-layer violation)을 위반했을 때.

## 2. Strategic Splitting 🔪

1. **Assembly to Internal**: Widgets 레이어는 가급적 직접적인 마크업을 최소화하고, 내부 부품(`ui/` 하위 컴포넌트)을 조립하는 형태로 개편한다.
2. **Logic Extraction**: 복잡한 상태 관리나 부수 효과는 Features나 Entities의 전역 스토어(Zustand), 혹은 Shared의 커스텀 훅으로 추출한다.
3. **Public API (index.ts)**: 리팩토링 후에도 외부에서 접근하는 엔트리 포인트는 변하지 않도록 Public API를 철저히 관리한다.

## 3. Atomic Refactoring ⚛️

1. **Small Steps**: 한 번에 너무 많은 것을 고치지 않는다. (기능 보존 -> 구조 개선 -> 스타일 정리 순으로 커밋 분할)
2. **No Feature Change**: 리팩토링 중에는 기능적 변경을 시도하지 않는다. 기능 추가는 리팩토링 완료 후 별도의 `feat` 커밋으로 진행한다.

## 4. Verification & Testing 🧪

1. **Test Consistency**: 리팩토링 후 기존 유닛 테스트가 100% 통과하는지 확인한다. 만약 테스트가 없다면 리팩토링 전 최소한의 테스트를 먼저 작성한다.
2. **Visual Regression Check**: Storybook을 활용하여 UI의 시각적 형태가 리팩토링 전과 동일하게 유지되는지 확인한다.
3. **Lint & Type Check**: `npx biome check`와 `npx tsc`를 통해 구조적 건전성을 최종 검증한다.
