# Design System Style Guide: NANSA 🎨

에이전트가 UI 컴포넌트를 생성하거나 스타일을 적용할 때 사용하는 구체적인 디자인 명세이다.

## 1. Color Palette (OKLCH Based)

Tailwind v4의 OKLCH 시스템을 기본으로 사용한다.

- **Primary (Deep Blue)**: `oklch(45% 0.2 260)` - 신뢰감 있는 지능형 시스템의 메인 컬러.
- **Success (Matching)**: `oklch(65% 0.15 160)` - 매칭 성공 시의 긍정적인 신호.
- **Danger (Mismatch)**: `oklch(55% 0.2 25)` - 부적합하거나 경고 시 사용하는 컬러.
- **Background**: `oklch(15% 0.02 260)` - 다크 모드 기반의 프리미엄 배경.
- **Surface**: `oklch(22% 0.02 260)` - 카드 및 오버레이 요소의 배경.

## 2. Typography

- **Brand & Body**: `Pretendard Variable` - 가독성이 높고 현대적인 한글/영문 폰트.
- **Monospace & Numbers**: `JetBrains Mono` - 정교한 분석 결과나 데이터 수치를 보여줄 때 사용.
- **Scale**:
  - `Display`: 4.5rem / Lead 1.1 / Tracking -0.02em
  - `Heading`: 2.5rem / Lead 1.2
  - `Body`: 1rem / Lead 1.5

## 3. UI Components Attributes

- **Border-radius**: `rounded-2xl` (16px)을 기본으로 하여 부드럽고 세련된 인상을 준다.
- **Shadow**: `shadow-[0_8px_30px_rgb(0,0,0,0.12)]` - 미세하고 깊이 있는 그림자로 레이어를 구분한다.
- **Border**: `1px solid oklch(25% 0.02 260)` - 명확하지만 너무 튀지 않는 경계선.

## 4. Spacing & Grid

- **Base Unit**: 4px (tail-spacing-1)
- **Container**: 최대 폭 `1280px`, 중앙 정렬.
- **Gutter**: 24px (Desktop), 16px (Mobile).

## 5. Animation (Framer Motion)

- **Timing Function**: `[0.23, 1, 0.32, 1]` (Ease Out Quint) - 매끄럽고 가속도가 느껴지는 움직임.
- **Micro-interactions**: 호버 시 `scale: 1.02` 및 `border-color` 변화를 통해 반응성을 보여준다.
- **Agent Reveal**: 에이전트 패널이 열릴 때 스타거(Stagger) 효과를 적용하여 정보가 순차적으로 등장하게 한다.
