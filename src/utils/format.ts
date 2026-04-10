const currencyFormatter = new Intl.NumberFormat("es-GT", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactFormatter = new Intl.NumberFormat("es-GT", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const dateFormatter = new Intl.DateTimeFormat("es-GT", {
  dateStyle: "medium",
  timeStyle: "short",
});

export const formatCurrency = (value: number) => currencyFormatter.format(value);

export const formatCompactNumber = (value: number) => compactFormatter.format(value);

export const formatDateTime = (value: string) => dateFormatter.format(new Date(value));
