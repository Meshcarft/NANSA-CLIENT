import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../model/auth-store";
import { logout } from "./auth-api";

export function useLogout() {
  const clearUser = useAuthStore((s) => s.clearUser);
  const router = useRouter();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearUser();
      router.push("/login");
    },
  });
}
