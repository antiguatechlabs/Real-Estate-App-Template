export const formats = {
  dateTime: {
    short: {
      dateStyle: "medium" as const,
    },
  },
  number: {
    compact: {
      notation: "compact" as const,
    },
    currency: {
      currency: "USD",
      maximumFractionDigits: 0,
      style: "currency" as const,
    },
  },
};
