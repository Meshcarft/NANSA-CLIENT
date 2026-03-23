"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface SignupFormValues {
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  terms: boolean;
}

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const termsId = useId();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    defaultValues: {
      terms: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    // TODO: implement signup through Spring Boot API
    console.log("Signup Data", data);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="이름"
          placeholder="홍길동"
          {...register("name", { required: "이름을 입력해주세요." })}
          error={errors.name?.message}
          disabled={isLoading}
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
          disabled={isLoading}
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="••••••••"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "최소 8자 이상의 비밀번호를 입력해주세요.",
            },
          })}
          error={errors.password?.message}
          disabled={isLoading}
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
          disabled={isLoading}
        />
        <div className="flex flex-col space-y-1 pt-2">
          <div className="flex items-center space-x-2">
            <input
              id={termsId}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-white"
              {...register("terms", { required: true })}
            />
            <label htmlFor={termsId} className="text-xs text-muted-foreground leading-none">
              <Link href="/terms" className="hover:text-white underline underline-offset-4">
                이용약관
              </Link>
              {" 및 "}
              <Link href="/privacy" className="hover:text-white underline underline-offset-4">
                개인정보처리방침
              </Link>
              에 동의합니다.
            </label>
          </div>
          {errors.terms && (
            <p className="text-[0.7rem] font-medium text-destructive">
              이용약관에 동의하셔야 합니다.
            </p>
          )}
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "처리 중..." : "회원가입 완료"}
        </Button>
      </form>
    </div>
  );
}
