# Feature Spec: Agent Panel Drag Resize

## 1. 개요 (Overview)

난사의 핵심 기능인 '매칭 에이전트 패널'의 사용자 경험을 향상시키기 위해 패널의 너비를 자유롭게 조절할 수 있는 기능을 추가한다. 사용자는 대용량 분석 로그나 상세 매칭 데이터를 볼 때 더 넓은 화면이 필요할 수 있다.

## 2. 요구 사항 (Requirements)

- 패널의 왼쪽 가장자리에 마우스 호버 시 크기 조절 핸들이 나타나야 함.
- 드래그 앤 드롭을 통해 너비를 실시간으로 조절 가능.
- 최소 너비: `200px`
- 최대 너비: `600px`
- 초기 기본 너비: `448px` (기존 `max-w-md` 상당)
- 브라우저 창 크기가 작아질 경우 패널이 화면을 넘어가지 않도록 제어.

## 3. 디자인 가이드 (Design Guide)

- **핸들**: 투명하지만 호버 시 `primary` 색상의 얇은 수직선과 `col-resize` 커서 표시.
- **인터랙션**: 드래그 중에는 패널 내용의 텍스트 선택이 방지되어야 함 (`user-select: none`).
- **피드백**: 드래그 중 패널 너비 변화는 프레임 저하 없이 부드러워야 함.

## 4. FSD 아키텍처 컨텍스트 (FSD Context)

- **Layer**: `features`
- **Slice**: `agent-panel`
- **Structure**:
  - `model/agent-store.ts`: 패널의 상태(열림/닫힘, 너비) 관리.
  - `ui/AgentPanel.tsx`: 메인 패널 UI 및 리사이즈 로직.
  - `ui/ResizeHandle.tsx`: (필요 시 분리) 드래그 핸들 전용 컴포넌트.

## [Implementation Plan]

### Step 1: 상태 관리 확장 (model)

- `useAgentStore`에 `width` 상태 및 `setWidth` 액션 추가.
- 초기값은 `448`로 설정.

### Step 2: 드래그 핸들 컴포넌트 추가 (ui)

- `AgentPanel` 내부, 패널 컨테이너의 맨 왼쪽에 위치할 `ResizeHandle` 요소를 추가.
- `absolute left-0 top-0 bottom-0 w-2 cursor-col-resize` 스타일 적용.

### Step 3: 드래그 로직 구현

- `onMouseDown` 이벤트를 통해 드래그 시작 감지.
- `window.addEventListener('mousemove', ...)`와 `window.addEventListener('mouseup', ...)`를 사용하여 전역 마우스 이동 추적.
- `clientX` 변화량을 계산하여 새로운 너비 산출 (`window.innerWidth - clientX`).
- 최소(`200`), 최대(`600`) 범위를 `Math.min`, `Math.max`로 클램핑.

### Step 4: UI 반영

- `motion.div`의 `style` 속성에 계산된 `width`를 연결.
- 기존의 `max-w-md` 클래스는 제거하거나 동적 스타일로 대체.
