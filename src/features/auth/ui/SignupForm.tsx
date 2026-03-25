"use client";

import Link from "next/link";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useSignup } from "../api/use-signup";
import type { SignupInput } from "../model/types";

export function SignupForm() {
  const termsId = useId();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupInput>({
    defaultValues: { agreeToTerms: false },
  });

  const password = watch("password");
  const { mutate, isPending } = useSignup();

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(({ name, email, password: pw }) =>
          mutate({ name, email, password: pw }),
        )}
        className="space-y-4"
      >
        <Input
          label="이름"
          placeholder="홍길동"
          {...register("name", { required: "이름을 입력해주세요." })}
          error={errors.name?.message}
          disabled={isPending}
        />
        <Input
          label="이메일"
          type="email"
          placeholder="name@example.com"
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "유효한 이메일 주소를 입력해주세요.",
            },
          })}
          error={errors.email?.message}
          disabled={isPending}
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="••••••••"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: { value: 8, message: "최소 8자 이상의 비밀번호를 입력해주세요." },
          })}
          error={errors.password?.message}
          disabled={isPending}
        />
        <Input
          label="비밀번호 확인"
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword", {
            required: "비밀번호 확인을 위해 한 번 더 입력해주세요.",
            validate: (value) => value === password || "비밀번호가 일치하지 않습니다.",
          })}
          error={errors.confirmPassword?.message}
          disabled={isPending}
        />

        <div className="flex flex-col space-y-1 pt-2">
          <div className="flex items-center space-x-2">
            <input
              id={termsId}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-white"
              {...register("agreeToTerms", { required: true })}
            />
            <label htmlFor={termsId} className="text-xs text-muted-foreground leading-none">
              <Link href="/terms" className="hover:text-foreground underline underline-offset-4">
                이용약관
              </Link>
              {" 및 "}
              <Link href="/privacy" className="hover:text-foreground underline underline-offset-4">
                개인정보처리방침
              </Link>
              에 동의합니다.
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-[0.7rem] font-medium text-destructive">
              이용약관에 동의하셔야 합니다.
            </p>
          )}
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "처리 중..." : "회원가입 완료"}
        </Button>
      </form>
    </div>
  );
}
