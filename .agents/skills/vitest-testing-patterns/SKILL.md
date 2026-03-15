---
name: vitest-testing-patterns
description: Vitest와 React Testing Library를 사용하여 테스트를 작성합니다. 유닛 테스트, 컴포넌트 테스트, 통합 테스트 작성 또는 의존성 모킹 시 사용합니다. 테스트 파일 생성, 모킹 패턴, 커버리지 및 테스트 베스트 프랙티스를 위해 활성화됩니다.
allowed-tools: Read,Write,Edit,Bash(npm:*,npx:*)
metadata:
  category: Code Quality & Testing
  tags:
  - testing
  - code
  - automation
  - jest
  - react
  pairs-with:
  - skill: test-automation-expert
    reason: Vitest 유닛 테스트는 포괄적인 테스트 자동화 전략의 한 계층입니다.
  - skill: playwright-e2e-tester
    reason: 유닛 테스트(Vitest)와 E2E 테스트(Playwright)는 상호 보완적인 테스트 피라미드 계층을 형성합니다.
  - skill: react-performance-optimizer
    reason: 컴포넌트 테스트 패턴은 성능 최적화가 올바른 동작을 유지하는지 확인합니다.
  - skill: typescript-advanced-patterns
    reason: 타입 안전한 테스트 유틸리티와 모킹 팩토리는 고급 TypeScript 패턴을 활용합니다.
---

# Vitest 테스트 패턴

이 스킬은 프로젝트 컨벤션에 따라 Vitest와 React Testing Library를 사용하여 효과적인 테스트를 작성하는 데 도움을 줍니다.

## 사용 시점

✅ **이럴 때 사용하세요:**

- 유틸리티 및 함수의 유닛 테스트 작성
- React Testing Library를 이용한 컴포넌트 테스트 생성
- API 호출, 데이터베이스 또는 외부 서비스의 모킹(Mock) 설정
- 통합 테스트 패턴 구현
- 테스트 커버리지 및 CI 설정 이해

❌ **이럴 때 사용하지 마세요:**

- Jest 전용 패턴 → 유사하지만 차이점은 Jest 문서를 확인하세요.
- 엔드 투 엔드(E2E) 테스트 → Playwright 또는 Cypress 스킬을 사용하세요.
- 성능 테스트 → 전용 성능 측정 도구를 사용하세요.
- API 계약 테스트 → OpenAPI/Pact 패턴을 사용하세요.

## 테스트 인프라

**설정**: `vitest.config.ts`

- 환경: jsdom
- 설정 파일: `src/test/setup.ts`
- 커버리지: v8 제공자

**명령어**:

```bash
npm test              # 감시(Watch) 모드
npm run test:run      # 단일 실행
npm run test:coverage # 커버리지 포함 실행
```

## 파일 구조

```text
src/
├── app/api/__tests__/        # API 라우트 테스트
├── components/__tests__/     # 컴포넌트 테스트
├── lib/__tests__/            # 라이브러리/유틸리티 테스트
└── lib/{feature}/__tests__/  # 기능별 테스트
```

테스트 파일 이름은 `{name}.test.ts` 또는 `{name}.test.tsx` 형식을 따릅니다.

## 핵심 테스트 패턴

### 1. API 라우트 테스트

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GET, POST } from '../route';
import { NextRequest } from 'next/server';

// 의존성 모킹
vi.mock('@/lib/auth', () => ({
  getSession: vi.fn(),
}));

vi.mock('@/db', () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockResolvedValue([]),
  },
}));

describe('GET /api/feature', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('인증되지 않았을 때 401을 반환함', async () => {
    vi.mocked(getSession).mockResolvedValue(null);

    const request = new NextRequest('http://localhost/api/feature');
    const response = await GET(request);

    expect(response.status).toBe(401);
  });

  it('인증되었을 때 데이터를 반환함', async () => {
    vi.mocked(getSession).mockResolvedValue({ userId: 'user-123' });
    vi.mocked(db.select).mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockResolvedValue([{ id: '1', name: 'Test' }]),
      }),
    });

    const request = new NextRequest('http://localhost/api/feature');
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveLength(1);
  });
});
```

### 2. 컴포넌트 테스트

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeatureComponent } from '../FeatureComponent';

// 훅 모킹
vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn().mockReturnValue({
    user: { id: 'user-123', name: 'Test User' },
    isLoading: false,
  }),
}));

describe('FeatureComponent', () => {
  it('로딩 상태를 렌더링함', () => {
    vi.mocked(useAuth).mockReturnValueOnce({
      user: null,
      isLoading: true,
    });

    render(<FeatureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('사용자 상호작용을 처리함', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<FeatureComponent onSubmit={onSubmit} />);

    await user.type(screen.getByRole('textbox'), 'Test input');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledWith('Test input');
  });

  it('에러 상태를 표시함', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'));

    render(<FeatureComponent />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/error/i);
    });
  });
});
```

### 3. 라이브러리/유틸리티 테스트

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { processData, formatDate } from '../utils';

describe('processData', () => {
  it('입력을 올바르게 변환함', () => {
    const input = { raw: 'data' };
    const result = processData(input);

    expect(result).toEqual({
      processed: true,
      data: 'DATA',
    });
  });

  it('유효하지 않은 입력에 대해 에러를 던짐', () => {
    expect(() => processData(null)).toThrow('Invalid input');
  });
});

describe('formatDate', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-01-15T10:00:00Z'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('상대 날짜를 포맷함', () => {
    const yesterday = new Date('2025-01-14T10:00:00Z');
    expect(formatDate(yesterday)).toBe('yesterday');
  });
});
```

## 모킹 패턴

### 모듈 모킹

```typescript
// 전체 모듈 모킹
vi.mock('@/lib/auth', () => ({
  getSession: vi.fn(),
  requireAuth: vi.fn(),
}));

// 일부 구현만 포함하여 모킹
vi.mock('date-fns', async () => {
  const actual = await vi.importActual('date-fns');
  return {
    ...actual,
    format: vi.fn(() => '2025-01-15'),
  };
});

// 기본 내보내기(default export) 모킹
vi.mock('@anthropic-ai/sdk', () => ({
  default: class MockAnthropic {
    messages = {
      create: vi.fn().mockResolvedValue({
        content: [{ type: 'text', text: 'Mock response' }],
        usage: { input_tokens: 10, output_tokens: 20 },
      }),
    };
  },
}));
```

### 함수 모킹

```typescript
// 모크 함수 생성
const mockFn = vi.fn();

// 반환 값 설정
mockFn.mockReturnValue('sync value');
mockFn.mockResolvedValue('async value');
mockFn.mockRejectedValue(new Error('Failed'));

// 1회성 동작 설정
mockFn.mockReturnValueOnce('first call only');

// 사용자 정의 구현
mockFn.mockImplementation((arg) => arg.toUpperCase());

// 호출 검증
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(2);
expect(mockFn).toHaveBeenCalledWith('expected', 'args');
```

### 체이닝 모킹 패턴 (Drizzle ORM 등)

```typescript
vi.mock('@/db', () => ({
  db: {
    select: vi.fn().mockReturnValue({
      from: vi.fn().mockReturnValue({
        where: vi.fn().mockReturnValue({
          orderBy: vi.fn().mockReturnValue({
            limit: vi.fn().mockResolvedValue([{ id: '1' }]),
          }),
        }),
      }),
    }),
    insert: vi.fn().mockReturnValue({
      values: vi.fn().mockReturnValue({
        returning: vi.fn().mockResolvedValue([{ id: 'new-1' }]),
      }),
    }),
  },
}));
```

### 타이머 모킹

```typescript
describe('debounced function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('호출을 디바운스함', async () => {
    const callback = vi.fn();
    const debounced = debounce(callback, 300);

    debounced();
    debounced();
    debounced();

    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(300);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
```

## 쿼리 우선순위

다음 순서대로 쿼리를 사용하세요 (가장 선호되는 순서):

1. **getByRole** - 접근성 기반 쿼리 (버튼, 링크, 제목 등)
2. **getByLabelText** - 라벨이 있는 폼 필드
3. **getByPlaceholderText** - 플레이스홀더가 있는 입력창
4. **getByText** - 비대화형 요소
5. **getByTestId** - 최후의 수단 (data-testid)

```typescript
// 선호되는 방식
screen.getByRole('button', { name: /submit/i });
screen.getByRole('heading', { level: 1 });
screen.getByLabelText(/email/i);

// 필요한 경우가 아니면 피하세요
screen.getByTestId('submit-button');
```

## 비동기 패턴

```typescript
// 요소가 나타날 때까지 대기
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});

// Find (내장된 waitFor)
const element = await screen.findByText('Loaded');

// 요소가 사라질 때까지 대기
await waitFor(() => {
  expect(screen.queryByText('Loading')).not.toBeInTheDocument();
});
```

## 테스트 정리

```typescript
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();            // React 정리 (setup.ts에서 자동 수행됨)
  vi.clearAllMocks();   // 모크 호출 횟수 초기화
  vi.resetAllMocks();   // 모크를 초기 상태로 리셋
  vi.restoreAllMocks(); // 원래 구현으로 복구
});
```

## 접근성 테스트

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('접근성 위반 사항이 없음', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 공통 매처 (Matchers)

```typescript
// jest-dom 매처 (setup.ts에서 설정)
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toBeDisabled();
expect(element).toHaveTextContent('text');
expect(element).toHaveAttribute('href', '/path');
expect(element).toHaveClass('active');
expect(input).toHaveValue('input value');
```

## 참고 자료

- [Vitest 모킹 가이드](https://vitest.dev/guide/mocking)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Testing Library 쿼리 안내](https://testing-library.com/docs/queries/about)
