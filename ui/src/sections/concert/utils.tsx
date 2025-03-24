import type { TInitDataItem } from 'src/utils/bdData';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { users } from 'src/utils/users';

dayjs.extend(utc);
dayjs.extend(timezone);

type TEmplDet = string[][];

export type TConcertItemProps = {
  id: number;
  title: string;
  coverUrl: string;
  description: string;
  concertDate: string | string[];
  rehearsalDate: string | string[];
  emplDet: string[][];
  comments: string;
  approved: boolean;
  details: string;
  notes: string;
};

export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
} as const;

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

export function defaultLabelDisplayedRows({ from, to, count }: any) {
  return `${from}–${to} из ${count !== -1 ? count : `more than ${to}`}`;
}

export function createConcertList(sheetData: TInitDataItem[]) {
  return sheetData.map((e) => ({
    id: e[0],
    title: e[1],
    coverUrl: `/assets/images/cover/cover-${Math.floor(1 + Math.random() * (30 - 1))}.webp`,
    description: `Состав: ${handleEpmList(e).join(', ')}`,
    concertDate: e[2],
    rehearsalDate: e[3],
    emplDet: [
      [''].concat(users),
      ['Концерты', `${e[4]}`, `${e[6]}`, `${e[8]}`, `${e[10]}`],
      ['Репетиции', `${e[5]}`, `${e[7]}`, `${e[9]}`, `${e[11]}`],
    ],
    comments: e[14],
    approved: e[15],
    details: e[16],
    notes: e[17],
  }));
}

export function handleEpmList(c: TInitDataItem) {
  const res: string[] = [];
  for (let i = 0; i <= c.length; i += 1) {
    switch (i) {
      case 4:
        if (c[i]) res.push(users[0]);
        break;
      case 6:
        if (c[i]) res.push(users[1]);
        break;
      case 8:
        if (c[i]) res.push(users[2]);
        break;
      case 10:
        if (c[i]) res.push(users[3]);
        break;
      default:
        res.push('');
    }
  }
  return res.filter((i) => i.length);
}

const removeEmptyRow = (arrRow: TEmplDet) => {
  const res = [arrRow[0]];
  for (let i = 1; i < arrRow.length; i += 1) {
    if (!arrRow[i].slice(1).every((e) => e === '0')) {
      res.push(arrRow[i]);
    }
  }
  return res;
};

const removeEmptyCol = (arrCol: TEmplDet) => {
  const res: any[] = [];
  const arrColLen = arrCol.length;

  if (arrColLen < 2) return res;

  for (let i = 0; i < arrColLen; i += 1) {
    res.push([]);
  }

  for (let i = 0; i < arrCol[0].length; i += 1) {
    let isEmptyCol = 0;
    for (let j = 0; j < arrColLen; j += 1) {
      if (arrCol[j][i] !== '0') {
        isEmptyCol += 1;
      }
    }

    if (i === 0 || isEmptyCol > 1) {
      for (let j = 0; j < arrColLen; j += 1) {
        res[j].push(arrCol[j][i]);
      }
    }
  }
  return res;
};

export const removeEmptyData = (bd: TEmplDet) => {
  const cleanedBd = removeEmptyCol(removeEmptyRow(bd));
  return cleanedBd;
};
