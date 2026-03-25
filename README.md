# NANSA Client

> AI 기반 자율 에이전트 커리어 매칭 플랫폼 — 꿈에 그리던 커리어를 찾는 지름길

## Overview

NANSA는 AI 에이전트가 사용자의 커리어 목표에 맞는 채용 공고를 자율적으로 탐색하고 매칭해주는 플랫폼입니다. Next.js App Router 기반으로 구축되었으며, Feature Sliced Design(FSD) 아키텍처를 적용했습니다.

## Tech Stack

| Category | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Server State | TanStack React Query v5 |
| Client State | Zustand v5 |
| Form | React Hook Form + Zod |
| Animation | Framer Motion |
| Testing | Vitest + Testing Library |
| Component Dev | Storybook |
| Lint/Format | Biome |
| Git Hooks | Husky + CommitLint |

## Getting Started

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

### Test Credentials

| Role | Email | Password |
|---|---|---|
| User | `test@nansa.com` | `nansa1234` |
| Admin | `admin@nansa.com` | `nansa1234` |

## Scripts

```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버
pnpm test         # 단위 테스트 (Vitest)
pnpm lint         # Biome 린트
pnpm format       # Biome 포맷
pnpm storybook    # Storybook 개발 서버 (port 6006)
```

## Project Structure

Feature Sliced Design(FSD) 아키텍처를 따릅니다.

```
src/
├── app/                    # Next.js App Router (라우트 & 레이아웃)
│   ├── (auth)/            # 인증 라우트 (login, signup)
│   ├── (main)/            # 보호된 라우트 (/, resume, portfolio, consult, settings)
│   ├── privacy/           # 개인정보처리방침
│   └── terms/             # 이용약관
├── entities/               # 도메인 엔티티 (job, resume, mentor, session)
├── features/               # 기능 모듈
│   ├── auth/              # 인증 (server actions, Zustand store, UI)
│   ├── agent-panel/       # AI 에이전트 패널 (드래그 & 리사이즈)
│   ├── job-filters/       # 채용 필터 상태
│   └── job-search/        # 채용 검색 UI
├── widgets/                # 복합 컴포넌트 (페이지 섹션 단위)
│   ├── header/            # 헤더 (네비게이션, 유저 메뉴)
│   ├── sidebar/           # 사이드바 (네비게이션, 필터)
│   ├── job-hero-slider/   # 채용 히어로 슬라이더
│   ├── job-list/          # 채용 목록
│   ├── resume/            # 이력서 위젯
│   ├── portfolio/         # 포트폴리오 위젯
│   └── consult/           # 컨설팅 위젯
└── shared/                 # 공유 유틸리티 & 컴포넌트
    ├── ui/                # 재사용 UI 컴포넌트 (button, card, input 등)
    ├── providers/         # React Context Provider (Query, Theme)
    ├── lib/               # 유틸리티 함수 (cn 등)
    └── types/             # 공유 TypeScript 타입
```

## Architecture

### Authentication

next-auth를 제거하고 Next.js Server Actions 기반의 커스텀 인증으로 전환했습니다.

- **미들웨어 보호**: 인증되지 않은 사용자는 `/login?callbackUrl=<path>`로 리다이렉트
- **세션**: `access_token` 쿠키 (httpOnly, 프로덕션에서 secure)
- **상태**: Zustand + localStorage 퍼시스턴스

### State Management

- **서버 상태**: React Query v5 (캐싱, 에러 바운더리 연동)
- **클라이언트 상태**: Zustand (인증, 필터, 사이드바 상태)

### Error Handling

`react-error-boundary` + React Query v5의 `throwOnError` 옵션을 결합하여 선언적 에러 처리를 구현했습니다.

## Conventions

### Commit Messages

[Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

```
feat: 새로운 기능
fix: 버그 수정
chore: 빌드/도구 관련 변경
refactor: 리팩토링
test: 테스트 추가/수정
docs: 문서 변경
```

### Code Style

Biome을 사용합니다. 커밋 전 자동으로 lint/format이 실행됩니다 (Husky).
