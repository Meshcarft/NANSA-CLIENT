# Spec: Global Layout & Basic Navigation 🖼️

NANSA 플랫폼의 전역 레이아웃과 핵심 네비게이션(GNB, Sidebar, Agent Panel) 구성을 정의한다.

## 1. 개요 (Goal)

- 모든 페이지에서 공통으로 사용될 레이아웃 구조 확립.
- 에이전트 인터랙션의 진입점(Entry Point) 제공.
- 테크포워드(Tech-forward) 디자인 시스템을 적용한 프리미엄 GNB 및 Sidebar 구현.
- **완벽한 반응형(Mobile, Tablet, Desktop) 대응**.
- **다크/라이트 테마 전환 및 Pretendard 폰트 시스템 구축**.

## 2. 데이터 모델 (Data Model)

- **Agent Panel State (Zustand)**: 에이전트 패널의 열림/닫힘 상태 관리.
- **Sidebar State (Zustand)**:
  - `isCollapsed`: 데스크탑/태블릿용 접힘 상태.
  - `isMobileOpen`: 모바일에서의 사이드바 노출 여부.
- **Theme State (next-themes)**: 전역 테마(Dark/Light) 상태 관리.

## 3. 비즈니스 로직 (Business Logic)

- **Theme Switching**: Sidebar 하단(Settings 구역)에서 테마를 전환할 수 있으며, 시스템 설정에 따르지 않고 사용자 명시적 선택을 우선함.
- **Agent Trigger**: GNB 내의 에이전트 전용 아이콘 클릭 시 `AgentPanel`이 오버레이 형태로 노출됨.
- **Header Actions**:
  - 검색창(Desktop), 에이전트 트리거, 유저 프로필, **설정(Settings)** 순으로 배치.
  - 설정 아이콘은 유저 아이콘 우측에 위치하며 `/settings` 경로로 연결됨.
- **Navigation**: Sidebar는 메인 대시보드 메뉴를 담당하며 현재 경로를 시각적으로 하이라이트함.
- **Responsive Behavior**:
  - **Desktop (>1024px)**: Sidebar 존재, 너비 조절 가능.
  - **Tablet (768px~1024px)**: Sidebar 기본 `Collapsed` 상태로 공간 확보.
  - **Mobile (<768px)**: Sidebar Drawer 모드.

## 4. 아키텍처 (FSD Layer)

- **shared/ui**: `Button`, `Logo`, `ThemeToggle` 등 기초 컴포넌트.
- **features/sidebar**: 사이드바 상태 관리.
- **features/agent-panel**: 에이전트 상호작용.
- **widgets/header**: 상단 GNB 섹션 (반응형/테마 대응).
- **widgets/sidebar**: 사이드 네비게이션 섹션 (테마 전환 포함).
- **app/layout.tsx**: 전역 구조 및 `ThemeProvider` 적용.

## 5. UI/UX 요구사항

- **Typography**:
  - 기본 폰트: **Pretendard Variable**.
  - 시스템 폰트 대비 가독성과 테크니컬한 감성을 강조.
- **Theme**:
  - Dark: `oklch(15% 0.02 260)` 등 깊이감 있는 배경.
  - Light: `oklch(97% 0.01 260)` 기반의 깨끗하고 미니멀한 배경.
  - 공통: `oklch`를 사용한 정교한 컬러 시스템 유지.
- **Animations**: 테마 전환 시 `transition-all`을 통해 부드러운 색상 전이 제공.
