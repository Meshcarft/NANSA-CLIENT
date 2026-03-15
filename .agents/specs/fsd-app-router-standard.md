# Infrastructure Spec: FSD Pages Layer with Next.js App Router

## 1. 목적 (Goal)

- Next.js의 `app/` 디렉토리를 FSD의 **Pages** 레이어로 사용하여 라우팅과 페이지 구성을 통합한다.
- FSD의 엄격한 레이어 분리 원칙을 유지하면서 Next.js 15+ (React 19)의 기능을 극대화한다.

## 2. 구조적 매핑 (Mapping)

- **FSD App Layer**: `src/app/layout.tsx`, `src/app/globals.css`, `src/app/providers.tsx` 등 프로젝트 전역 설정.
- **FSD Pages Layer**: `src/app/**/page.tsx` 각 라우트별 진입점.

## 3. 작성 규칙 (Implementation Rules)

- **Pure Entry Point**: `app/` 내부의 `page.tsx`는 가급적 UI 로직을 직접 가지지 않는 '진입점' 역할만 수행한다.
- **Widget Composition**: `page.tsx`는 `widgets` 레이어의 컴포넌트들을 조합하여 화면을 구성한다.
- **Data Fetching**: 서버 컴포넌트인 `page.tsx`에서 데이터를 패치하고, 필요한 데이터를 하위 `widgets`나 `features`로 Props로 전달한다.
- **Complexity Limit**: `page.tsx` 내용이 50라인을 넘어가려 하면, UI 로직을 즉시 `widgets` 레이어로 추출한다.

## 4. 디렉토리 구조 예시

```plaintext
src/
├── app/ (FSD App & Pages Layer)
│   ├── layout.tsx       # Root Layout (App Layer 역할)
│   ├── page.tsx         # Home Page Entry (Pages Layer 역할)
│   └── match/           # Match Route
│       └── page.tsx     # Widgets을 조립하는 엔트리 (Pages Layer 역할)
├── widgets/             # 대형 UI 블록 (Header, Sidebar, MatchDashboard)
├── features/            # 사용자 상호작용 (MatchStartButton, Filter)
├── entities/            # 데이터 모델 (JobCard, UserProfile)
└── shared/              # 공통 UI 및 유틸리티 (Button, Icons)
```
