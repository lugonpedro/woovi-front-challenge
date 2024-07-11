export function formatCardMaturity(v: string = "") {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "$1/$2");
  return v;
}
