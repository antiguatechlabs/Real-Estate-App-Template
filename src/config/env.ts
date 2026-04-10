const getBoolean = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) {
    return fallback;
  }

  return value === "true";
};

export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api",
  useMocks: getBoolean(process.env.NEXT_PUBLIC_USE_MOCKS, true),
};
