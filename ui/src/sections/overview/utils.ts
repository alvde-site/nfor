import type { ColorType } from 'src/theme/core';

import type { TEmplList } from './view';

export const visits = ['Общее количество вызовов', 'Вызовы по концертам', 'Вызовы по репетициям'];

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

export function setSeries(
  usersKey: string[],
  userSurname: string[],
  emplList: TEmplList,
  colName: string = 'total'
) {
  const res = usersKey.map((k, i) => ({
    label: userSurname[i],
    value:
      k in emplList
        ? (emplList[k][
            colName !== 'total' ? `${colName}${k[0].toUpperCase()}${k.substring(1)}` : 'total'
          ] as number)
        : 0,
  }));
  return res;
}

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

export function getMaxOfArray(numArray: number[]) {
  return Math.max.apply(null, numArray);
}

export function fPercentToColor(max: number = 1, cur: number = 0, total: number = 1) {
  const maxPercent = Math.round((max / total) * 100);
  const curPercent = Math.round((cur / total) * 100);
  let color: ColorType = 'primary';
  if (maxPercent - curPercent <= 2) {
    color = 'success';
  }

  if (maxPercent - curPercent > 2 && maxPercent - curPercent <= 4) {
    color = 'warning';
  }

  if (maxPercent - curPercent > 4) {
    color = 'error';
  }
  return color;
}
