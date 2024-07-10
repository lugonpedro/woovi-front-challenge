export function formatNumberToLocale(num: number): string {
  return num.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
}
