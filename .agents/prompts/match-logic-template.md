# Prompt Template: Agent Matching Logic Calculation 🧮

이 템플릿은 에이전트가 후보자와 기업 간의 적합성(Matching Score)을 산출하는 로직을 생성할 때 참조한다.

## 1. Input Data Structure

- `CandidateProfile`: 기술 스택, 경력 연수, 선호 산업군, 핵심 성과(Bullet points).
- `CompanyRequirement`: 기술 스택, 직무 설명(JD), 팀 문화 코드, 처우 수준.

## 2. Weighted Calculation Formula

에이전트는 다음 가중치를 기반으로 최종 점수(0~100)를 산산한다:

- **Hard Skills (40%)**: 기술 스택 일치도 및 숙련도.
- **Relevant Experience (30%)**: 유관 산업군이나 유사 직무에서의 성과.
- **Cultural Fit (20%)**: 기업의 지향점과 후보자의 가치관 일치도 (과거 이력 분석).
- **Proximity & Condition (10%)**: 연봉 및 통근 거리 등 물리적 조건.

## 3. Logic Implementation Plan

에이전트에게 지시할 때 다음 문구를 포함한다:

> "`.agents/prompts/match-logic-template.md`의 가중치 공식을 사용하여, [후보자 A]와 [기업 B]의 매칭 로직을 TypeScript 함수로 작성해줘. 결과값은 `score`와 각 항목별 `reason`을 포함하는 객체여야 해."

## 4. Constraint (Zero Manual Intervention)

- 점수 산출 후 사람이 "이 점수 맞나요?"라고 물어보는 단계를 만들지 마라.
- 에이전트가 산출한 결과가 즉시 시스템 상태(예: `MATCH_FOUND`)로 반영되도록 설계한다.

## 5. Architecture

- **app**:
  - 애플리케이션의 엔트리 포인트.
  - 전역 프로바이더(QueryClient, ThemeProvider, Zustand 등)와 스타일 설정.
  - `/src/app` (Next.js App Router)와 연결.

- **pages**:
  - 실제 라우팅되는 페이지 단위의 구성.
  - **v2.1 원칙**: 특정 페이지에서만 쓰이는 로직(Fetcher, Forms, UI)은 하위 레이어로 추출하지 않고 이 레이어에 둔다.

- **widgets**:
  - 여러 페이지에서 공통으로 사용되는 자립적인 UI 블록. (예: GNB, 사이드바, 에이전트 패널)
  - 독립적으로 동작 가능한 비즈니스 맥락을 가짐.

- **features**:
  - 반복되는 사용자 상호작용 및 고유 비즈니스 가치. (예: `match-search`, `profile-update`)
  - 실제 재사용이 필요할 때만 추출한다.

- **entities**:
  - 비즈니스 도메인 모델. (예: `User`, `Company`, `JobPost`)
  - 데이터 스키마, 기본 API 요청, 간단한 도메인 UI.

- **shared**:
  - 비즈니스 로직이 없는 인프라성 코드.
  - `ui`: shadcn/ui 기반 컴포넌트 라이브러리.
  - `lib`: 유틸리티 함수.
  - `api`: Axios/Fetch 인스턴스 설정.
