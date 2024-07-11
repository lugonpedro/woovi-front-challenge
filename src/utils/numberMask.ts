export function numberMask(v: string = "") {
  v = v.replace(/\D/g, "");
  return v;
}
