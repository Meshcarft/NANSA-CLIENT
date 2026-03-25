import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "이메일을 입력해주세요.").email("유효한 이메일 주소를 입력해주세요."), // 여전히 유효하지만, 1순위로 빈 값 체크를 먼저 넣는 게 좋습니다.
  password: z.string().min(8, "최소 8자 이상의 비밀번호를 입력해주세요."),
});
