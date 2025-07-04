import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { processInput } from './format-number';

dayjs.extend(utc);
dayjs.extend(timezone);

const seasonStart = `${dayjs().year()}-08-15`;

export function formatDate(d: string) {
  let result = '';
  const res: string[] = [];
  if (/^\d{4}/.test(d)) {
    res.push(d.slice(0, 10));
  } else {
    const dashReplacer = (_m: any, p1: any, p2: number) => {
      const dashRes = [];
      for (let i = Number(p1); i <= Number(p2); i += 1) {
        dashRes.push(i);
      }
      return dashRes.join(',');
    };
    const yearAdder = (_m: any, p1: any, _: any, str: { match: (arg0: RegExp) => any[] }) => {
      const year = str.match(/\d{4}/g)[0];
      return `${p1}.${year}`;
    };
    result = d.replace(/(\d{2})-(\d{2})/g, dashReplacer);
    result = result.replace(/(\d{2}(?=;))/g, yearAdder);
    const semiSplit = result.split(';');
    semiSplit.forEach((ss) => {
      const dotSplit = ss.split('.');
      const yyyy = dotSplit[2];
      const mm = dotSplit[1];
      const dd = dotSplit[0].split(',');
      dd.forEach((ddDate) => {
        res.push(`${yyyy}-${mm}-${ddDate}`);
      });
    });
  }
  return res;
}

export function formatTextDate(date: string) {
  const curDate = new Date(date);
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  return months[curDate.getMonth()]
    ? `Вызовы рассчитываются на период с 12 ${months[8]} 2025 года по ${curDate.getDate()} ${months[curDate.getMonth()]} ${curDate.getFullYear()} года (дата последнего концерта).`
    : '';
}

export const dateToRange = (dates: string | string[]) => {
  const datejsArr =
    dates.length > 1 ? [dayjs(dates[0]), dayjs(dates[dates.length - 1])] : [dayjs(dates[0])];
  return datejsArr.map((e) => dayjs(e).format('D.MM.YYYY')).join(' - ');
};

export const formatConRehDate = (res: any) =>
  res.map((e: [], i: number) =>
    i ? e.map((el, idx) => (idx === 2 || idx === 3 ? formatDate(el) : el)) : e
  );

export const fHourWeek = (end: Dayjs | null, totalValue: number, start: string = seasonStart) => {
  const number = processInput(totalValue);
  if (number === null || number === 0 || end === null) return '0 ч/нед';
  const dayDiff = dayjs(end).diff(start, 'day') <= 300 ? dayjs(end).diff(start, 'day') : 300;
  return `${Math.round((totalValue * 4) / Math.round(dayDiff / 7))} ч/нед`;
};
