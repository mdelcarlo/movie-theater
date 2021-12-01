export const toCamel = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );

export function keysToCamel(o: any): any {
  if (o === Object(o) && !Array.isArray(o) && typeof o !== "function") {
    const n: { [key: string]: any } = {};
    Object.keys(o).forEach((k: string) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });
    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => keysToCamel(i));
  }
  return o;
}
