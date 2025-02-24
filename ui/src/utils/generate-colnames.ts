export function generateColNames(name: string) {
  return [
    `${name.replace(/^\w/, (c) => `C${c.toUpperCase()}`)}`,
    `${name.replace(/^\w/, (c) => `R${c.toUpperCase()}`)}`,
  ];
}
