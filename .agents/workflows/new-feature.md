# Workflow: New Feature Implementation 🚀

새로운 기능을 추가할 때 준수해야 할 정석 절차를 정의한다.

## Step 1: Requirements & API Specification 📋

- 기능의 비즈니스 목적을 확인한다. (에이전트 자율성 기반)
- 필요한 데이터를 정의하고 API 명세를 확정한다.

## Step 2: Shared UI & Entity Scaffolding 🧱

- 필요한 UI 원자재가 `shared/ui`에 없다면 shadcn/ui를 통해 추가한다.
- 데이터 모델을 `entities/[name]` 레이어에 Zod 스키마와 함께 작성한다.

## Step 3: Feature Logic Implementation ⚙️

- 비즈니스 로직(React Hook Form 연동, React Query 등)을 구현한다.
- 매칭 알고리즘이 포함된 경우 `prompts/match-logic-template.md`를 참조한다.

## Step 4: Widget Assembly & Page Composition 🧩

- 피처들을 모아 `widgets`를 구성하거나 바로 `pages`에서 조립한다.
- Framer Motion을 사용하여 프리미엄 인터랙션을 입힌다.

## Step 5: Verification & Testing 🧪

- Vitest로 주요 로직이나 상태 전이가 올바른지 검증한다.
- 사용자의 수동 승인 없이도 에이전트가 다음 동작을 수행하는지 확인한다.
