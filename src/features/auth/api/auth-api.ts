"use server";

import { cookies } from "next/headers";
import type { AuthUser } from "../model/auth-store";
import type { LoginInput, SignupInput } from "../model/types";

// 테스트 계정 (개발 환경 전용)
const TEST_ACCOUNTS: Record<string, AuthUser> = {
  "test@nansa.com": {
    id: "user-test-1",
    name: "테스트 유저",
    email: "test@nansa.com",
    role: "user",
  },
  "admin@nansa.com": {
    id: "user-admin-1",
    name: "관리자",
    email: "admin@nansa.com",
    role: "admin",
  },
};

const TEST_PASSWORD = "nansa1234";

// TODO: Spring Boot API 연동 시 실제 응답으로 교체
export async function login(input: LoginInput): Promise<AuthUser> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const testUser = TEST_ACCOUNTS[input.email];
  if (!testUser || input.password !== TEST_PASSWORD) {
    throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
  }

  const cookieStore = await cookies();
  cookieStore.set("access_token", "mock_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return testUser;
}

export async function signup(
  input: Omit<SignupInput, "confirmPassword" | "agreeToTerms">,
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.log("Signup:", input.email);
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
}

export async function socialLogin(provider: "google" | "kakao"): Promise<void> {
  // TODO: OAuth 리디렉션 URL로 redirect()
  console.log("Social login:", provider);
}
