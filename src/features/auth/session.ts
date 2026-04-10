import type { SessionState } from "@/features/auth/types";

export const sessionPlaceholder: SessionState = {
  isAuthenticated: false,
  user: null,
};
