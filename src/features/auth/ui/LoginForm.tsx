"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

interface LoginFormValues {
  email: string;
  password?: string;
}

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    // TODO: Implement custom login server action
    console.log("Email Login", data);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleSocialLogin = (provider: "google" | "kakao") => {
    // TODO: Implement custom social login initiation (Server Action)
    console.log(`Social Login Init: ${provider}`);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="이메일"
          type="email"
          placeholder="name@nansa.com"
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "로그인 중..." : "이메일로 로그인"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-muted/20" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button variant="google" type="button" onClick={() => handleSocialLogin("google")}>
          Google
        </Button>
        <Button variant="kakao" type="button" onClick={() => handleSocialLogin("kakao")}>
          Kakao
        </Button>
      </div>
    </div>
  );
}
