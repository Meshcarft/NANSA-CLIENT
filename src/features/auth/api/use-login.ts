import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "../model/auth-store";
import type { LoginInput } from "../model/types";
import { login } from "./auth-api";

export function useLogin() {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();
  const searchParams = useSearchParams();

  return useMutation({
    mutationFn: (input: LoginInput) => login(input),
    onSuccess: (user) => {
      setUser(user);
      const callbackUrl = searchParams.get("callbackUrl") ?? "/";
      router.push(callbackUrl);
    },
    throwOnError: false,
  });
}
