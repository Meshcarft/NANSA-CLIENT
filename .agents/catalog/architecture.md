# Architecture Guide: Feature-Sliced Design (FSD) v2.1 🏗️

NANSA 플랫폼은 코드의 결합도를 낮추고 유지보수성을 극대화하기 위해 **FSD v2.1**을 아키텍처 표준으로 채택한다.

## 1. Layers Overview (Top to Bottom)

- **app**: 애플리케이션의 엔트리 포인트. 전역 프로바이더와 스타일 설정.
- **pages**: 실제 라우팅되는 페이지 단위의 구성. v2.1 원칙에 따라 페이지 전용 로직은 최대한 이 레이어에 유지한다.
- **widgets**: 여러 페이지에서 공통으로 사용되는 자립적인 UI 블록 (예: GNB, 사이드바).
- **features**: 반복되는 사용자 상호작용 및 비즈니스 가치 (예: `match-search`).
- **entities**: 비즈니스 도메인 모델 (예: `User`, `Company`). 데이터 스키마 및 기본 API 포함.
- **shared**: 비즈니스 로직이 없는 인프라성 코드 (예: UI Kit, 유틸리티).

## 2. Strict Rules

- **Vertical Imports**: 상위 레이어는 하위 레이어만 참조할 수 있다.
- **Zero Same-Layer Imports**: 같은 레이어 내의 슬라이스 간 참조는 금지된다.
- **Public API (index.ts)**: 슬라이스 내부의 파일에 직접 접근하지 않고 항상 `index.ts`를 통해 노출된 것만 사용한다.

## 3. "Pages First" Decision Loop

1. **페이지 개발 시작**: 모든 로직과 UI를 `pages/[page-name]/` 아래에 구성한다.
2. **중복 발견**: 다른 페이지에서 똑같은 요소가 필요해지면, 그때 해당 부분을 추출하여 하위 레이어로 이동시킨다.
3. **도메인 정립**: 공통 데이터 모델이 명확해지면 `entities`로 정립한다.
