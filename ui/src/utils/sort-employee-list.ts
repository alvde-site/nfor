export function sortData(sData: any) {
  const curDate = new Date();
  return sData.filter((d: [][], i: number) => (i ? curDate >= new Date(d[2][d[2].length - 1]) : d));
}
