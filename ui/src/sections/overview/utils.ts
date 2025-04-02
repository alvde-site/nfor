export const months: { [key: string]: string } = {
  '1': 'январь',
  '2': 'февраль',
  '3': 'март',
  '4': 'апрель',
  '5': 'май',
  '6': 'июнь',
  '7': 'июль',
  '8': 'август',
  '9': 'сентябрь',
  '10': 'октябрь',
  '11': 'ноябрь',
  '12': 'декабрь',
};

export function getMonthsCount(arr: string[]) {
  const monthsCount: number[] = [];
  arr.forEach((e) => {
    monthsCount.push(Number(e.match(/(?<=\d+-)\d{2}/)));
  });
  return monthsCount.reduce((acc: { [key: string | number]: number }, i) => {
    if (Object.hasOwn(acc, i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc;
  }, {});
}

export function getDatesArr(arr: any, idx: number) {
  const datesArr: string[] = [];

  arr.forEach((e: string[]) => {
    datesArr.push(...e[idx]);
  });
  return datesArr;
}

export function getArraySum(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}
