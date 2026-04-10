export interface SessionUser {
  id: string;
  fullName: string;
  email: string;
  role: "admin" | "manager" | "seller";
  companyId: string;
}

export interface SessionState {
  isAuthenticated: boolean;
  user: SessionUser | null;
}
