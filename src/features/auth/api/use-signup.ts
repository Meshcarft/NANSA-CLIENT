import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { SignupInput } from "../model/types";
import { signup } from "./auth-api";

export function useSignup() {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      name,
      email,
      password,
    }: Omit<SignupInput, "confirmPassword" | "agreeToTerms">) => signup({ name, email, password }),
    onSuccess: () => {
      router.push("/login");
    },
  });
}
