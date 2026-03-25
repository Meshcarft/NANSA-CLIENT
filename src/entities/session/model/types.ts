import type { AuthUser } from "@/features/auth/model/auth-store";

export interface Session {
  user: AuthUser;
  token: string;
  expiresAt: string;
}
