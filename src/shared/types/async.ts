/** 목록 조회 훅의 반환 타입 */
export interface ListState<T> {
  data: T[];
  isPending: boolean;
}

/** 단건 조회 훅의 반환 타입 */
export interface ItemState<T> {
  data: T | undefined;
  isPending: boolean;
}

/** 에러 포함 확장 버전 (useQuery 연동 후 사용) */
export interface AsyncState<T> {
  data: T | undefined;
  isPending: boolean;
  isError: boolean;
  error: Error | null;
}
