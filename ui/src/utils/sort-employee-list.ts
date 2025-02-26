import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';

export function sortData(sData: any, curDate: Dayjs | null) {
  const currentDate = curDate || dayjs();
  return sData.filter((d: [][], i: number) =>
    i ? currentDate >= dayjs(d[2][d[2].length - 1]) : d
  );
}
