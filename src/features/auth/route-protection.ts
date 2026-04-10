import { sessionPlaceholder } from "@/features/auth/session";

export const getSession = async () => {
  return sessionPlaceholder;
};

export const requireAuthenticatedSession = async () => {
  const session = await getSession();

  return session;
};
