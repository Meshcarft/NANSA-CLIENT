# Component Development & FSD Architecture Standard 🏗️

NANSA 프로젝트의 일관된 코드 품질과 FSD(Feature-Sliced Design) 아키텍처 준수를 위한 컴포넌트 설계 지침을 정의한다.

## 1. 위젯(Widgets) 구성 원칙

- **역할**: 위젯은 독립적인 비즈니스 가치를 지닌 화면의 큰 조각이다. (예: Header, Sidebar, AgentPanel)
- **조립식 구조**: 위젯은 복잡한 비즈니스 로직을 직접 처리하기보다, 하위 레이어(`Features`, `Entities`, `Shared`)를 조합하여 화면을 구성하는 'Assembly' 역할을 수행한다.
- **제약**: 위젯끼리는 서로 참조할 수 없다. 오직 하위 레이어만 참조한다.

## 2. 컴포넌트 분리 및 추출 기준

- **라인 수 제약**: 하나의 파일(컴포넌트)이 **150라인**을 초과할 경우, 논리적 단위로 파일을 분리한다.
- **섹션 분리**: 하나의 컴포넌트 내부에 UI 섹션(예: Header, Nav, Footer)이 **3개 이상** 존재할 경우, 각 섹션을 내부 부품 컴포넌트로 분리한다.
- **배치**:
  - 특정 위젯에서만 쓰이는 부품은 `widgets/{slice}/ui/` 하위에 배치한다.
  - 범용적으로 재사용 가능한 UI는 `shared/ui/`로 이동한다.
  - 비즈니스 데이터 모델과 결합된 UI는 `entities/` 레이어로 추출한다.

## 3. React 19 & Client/Server 분리

- **Server First**: 기본적으로 모든 컴포넌트는 Server Component로 설계한다.
- **Selective Client**: `use client`는 인터랙션(이벤트 핸들러), 상태 관리(`useState`, `useStore`), 브라우저 API가 필요한 최소한의 리프(Leaf) 컴포넌트에만 선언한다.
- **LCP 최적화**: 레이아웃 구성 요소는 가급적 서버 사이드에서 구조를 잡고, 인터랙션 요소만 클라이언트로 위임한다.

## 4. Props 및 타입 설계

- **Interface 사용**: 모든 컴포넌트의 Props는 `interface`로 정의하며, `type`보다 확장성을 우선한다.
- **기본 속성 확장**:
  - `children`: ReactNode 스타일의 구성을 지원한다.
  - `className`: 스타일 확장이 가능하도록 `tailwind-merge`(`cn`)를 사용하여 전달받은 클래스를 병합한다.
- **Read-only**: Props는 불변(Immutable) 객체로 취급한다.

## 5. Directory Structure Example (Widget)

```plaintext
widgets/sidebar/
├── ui/
│   ├── Sidebar.tsx          (Main Entry: Assembly)
│   ├── SidebarHeader.tsx    (Internal Part)
│   ├── SidebarNav.tsx       (Internal Part)
│   └── SidebarFooter.tsx    (Internal Part)
├── model/                   (Widget-specific stores or constants)
├── config/                  (Menu items or static configurations)
└── index.ts                 (Public API: Only export Sidebar)
```

## 6. 레이어별 생명 주기 (Responsibility)

1. **Shared**: 순수 UI (비즈니스 로직 0%). 원자 단위 컴포넌트.
2. **Entities**: 비즈니스 데이터 모델 중심. 특정 도메인(User, Job, Agent)의 정보를 표현.
3. **Features**: 사용자의 행동(Action) 중심. 버튼 클릭, 필터링, 검색 요청 등.
4. **Widgets**: Entities와 Features를 조합하여 화면의 기능적 구역 완성.
