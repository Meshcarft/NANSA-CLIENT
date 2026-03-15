# Technology Stack Catalog 🛠️

NANSA 프로젝트에서 사용되는 주요 기술 스택과 버전 정보, 권장 컨벤션을 관리한다.

## 1. Core Framework

- **Next.js**: 16.1.6 (App Router 기반)
- **React**: 19.2.3
- **TypeScript**: ^5 (Strict 모드 필수)

## 2. State & Data

- **TanStack Query (React Query) v4**: 서버 상태 관리. (v4 패턴 준수)
- **Zustand**: 클라이언트 전역 상태 관리.
- **Zod**: 스키마 기반 유효성 검사 및 타입 추론.
- **React Hook Form**: 폼 핸들링 및 Zod Resolver 연동.

## 3. Styling & UI

- **Tailwind CSS v4**: CSS-first 디자인 시스템.
- **oklch** 컬러 시스템 사용 권장.
- **@theme**을 통한 토큰 정의.
- **shadcn/ui**: 기본 UI 컴포넌트 라이브러리. (FSD `shared/ui`에 소스코드 포함)
- **assistant-ui**: AI/Agent 특화 UI 시스템.
- **Framer Motion**: 프리미엄 인터랙션 및 애니메이션.
- **Lucide React**: 커스터마이징이 용이한 벡터 아이콘 팩.

## 4. Quality Control & Testing

- **Biome**: 코드 린팅 및 포맷팅 (v2.2.0).
- **Vitest**: 유닛 테스트, 컴포넌트 테스트 및 로직 검증.
- **Storybook**: UI 컴포넌트 독립 개발 및 시각적 테스트.
- **React Testing Library**: 사용자 중심의 컴포넌트 테스트.

## 5. Implementation Rules

- **Modern Syntax**: React 19의 `use` 훅이나 서버 컴포넌트 기능을 적극 활용한다.
- **Type Safety**: any 사용을 엄격히 금지하고 Zod를 통한 런타임 검증을 필수화한다.
- **Consistent Icons**: GNB의 에이전트 패널 아이콘은 Lucide의 `Bot` 또는 커스텀 벡터를 사용하며 일관성을 유지한다.
