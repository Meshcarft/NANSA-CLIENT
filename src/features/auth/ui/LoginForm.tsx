"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/shared/ui/input";
import { Separator } from "@/shared/ui/separator";
import { useLogin } from "../api/use-login";
import { LOGIN_FIELDS } from "../libs/constant";
import { loginSchema } from "../model/schema";
import type { LoginInput } from "../model/types";
import { LoginButton } from "./LoginButton";
import { SocialLoginButton } from "./SocialLoginButton";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });
  const { mutate, isPending, error } = useLogin();

  const handleSocialLogin = (provider: string) => {
    // 예: window.location.href = `/api/auth/login/${provider}`;
    console.log(`${provider} 로그인 시도`);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit((data) => mutate(data))} className="space-y-4">
        {LOGIN_FIELDS.map((field) => (
          <Input
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            disabled={isPending}
            error={errors[field.name]?.message}
            {...register(field.name)}
          />
        ))}
        <LoginButton isLoading={isPending} />
      </form>

      <Separator label="Or continue with" className="my-4" />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <SocialLoginButton
          provider="google"
          onClick={() => handleSocialLogin("google")}
          disabled={isPending}
        />
        <SocialLoginButton
          provider="kakao"
          onClick={() => handleSocialLogin("kakao")}
          disabled={isPending}
        />
      </div>
    </div>
  );
}
