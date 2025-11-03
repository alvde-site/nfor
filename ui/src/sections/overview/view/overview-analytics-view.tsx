import type { Dayjs } from 'dayjs';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState, useEffect } from 'react';
import timezone from 'dayjs/plugin/timezone';

// import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { formatTextDate } from 'src/utils/format-date';
import { sortData } from 'src/utils/sort-employee-list';
import { generateColNames } from 'src/utils/generate-colnames';

import { DashboardContent } from 'src/layouts/dashboard';

// import {} from
// _tasks,
// _posts,
// _timeline
// 'src/_mock';

import { users, userKeys } from 'src/utils/users';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { countPercent } from 'src/utils/format-number';

import DatePickerValue from 'src/components/input/DatePickerValue';

import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import {
  months,
  setSeries,
  getDatesArr,
  getArraySum,
  getMaxOfArray,
  getMonthsCount,
  fPercentToColor,
} from '../utils';

interface TDetails {
  categories: string[];
  series: number[];
}

export type TEmplList =
  | never
  | {
      [key: string]: {
        details: TDetails;
        [key: string]: number | TDetails | string;
      };
    };

type TTotalPerMonth =
  | never
  | {
      [key: string]: number;
    };

type TSetBusy = {
  gData: unknown[][];
  empName: string;
};

dayjs.extend(utc);
dayjs.extend(timezone);

type TRates = [string[], number[], number[], number[]];

export function OverviewAnalyticsView({ formattedData }: any) {
  const [employeeList, setEmployeeList] = useState<TEmplList>({});
  const [lastConcertDate, setLastConcertDate] = useState('');
  const [dateValue, setDateValue] = useState<Dayjs | null>(
    !dayjs().isBefore(dayjs('2025-09-14')) ? dayjs() : dayjs('2025-09-14')
  );
  const [monthsRates, setMonthsRates] = useState<TRates>([[], [], [], []]);

  useEffect(() => {
    // circl data
    let empList = {};

    function setSingleBusy({ gData, empName }: TSetBusy) {
      const empSingle = { [empName]: {} };
      let total = 0;
      const details = { categories: [], series: [] };
      const totalPerMonths: TTotalPerMonth = {};

      generateColNames(empName).forEach((e) => {
        const empIdx = gData[0].indexOf(e as never);
        let sum = 0;
        for (let i = 1; i < gData.length; i += 1) {
          sum += gData[i][empIdx] as number;
          const monthNum = Number(
            (gData[i][2] as string[])[(gData[i][2] as string[]).length - 1].match(/(?<=\d+-)\d{2}/)
          );
          if (Object.hasOwn(totalPerMonths, monthNum)) {
            totalPerMonths[monthNum] += gData[i][empIdx] as number;
          } else {
            totalPerMonths[monthNum] = gData[i][empIdx] as number;
          }
        }
        empSingle[empName] = { ...empSingle[empName], [e]: sum };
        total += sum;
        empSingle[empName] = { ...empSingle[empName], total };
      });

      for (let i = 8; i <= 12; i += 1) {
        (details as TDetails).categories.push(months[`${i}`]);
        (details as TDetails).series.push(totalPerMonths[i] ? totalPerMonths[i] * 4 : 0);
      }

      for (let i = 1; i <= 7; i += 1) {
        (details as TDetails).categories.push(months[`${i}`]);
        (details as TDetails).series.push(totalPerMonths[i] ? totalPerMonths[i] * 4 : 0);
      }

      empSingle[empName] = { ...empSingle[empName], details };
      empList = { ...empList, ...empSingle };
      return empSingle;
    }

    function createEmployeeList(sheetData: [][]) {
      userKeys.forEach((w) => {
        setSingleBusy({ gData: sheetData, empName: w });
      });

      const totalArr = userKeys.map((u) => (empList as TEmplList)[u].total);

      const maxTotal = getMaxOfArray(totalArr as number[]);
      userKeys.forEach((u) => {
        (empList as TEmplList)[u].maxTotal = maxTotal;
      });
      setEmployeeList(empList);
    }
    // end circl data
    // --------------------------------------------------------------------------------------------------
    // rates data

    function createRateList(concertData: string | any[]) {
      const rates: TRates = [[], [], [], []];
      const formatConcertData = concertData.slice(1);
      const conDatesCount = getMonthsCount(getDatesArr(formatConcertData, 2));
      const rehDatesCount = getMonthsCount(getDatesArr(formatConcertData, 3));

      for (let i = 9; i <= 12; i += 1) {
        if (
          Object.prototype.hasOwnProperty.call(conDatesCount, i) ||
          Object.prototype.hasOwnProperty.call(rehDatesCount, i)
        ) {
          const con = conDatesCount[`${i}`] || 0;
          const reh = rehDatesCount[`${i}`] || 0;
          rates[0].push(months[`${i}`]);
          rates[1].push(con);
          rates[2].push(reh);
        }
      }

      for (let i = 1; i <= 8; i += 1) {
        if (
          Object.prototype.hasOwnProperty.call(conDatesCount, i) ||
          Object.prototype.hasOwnProperty.call(rehDatesCount, i)
        ) {
          const con = conDatesCount[`${i}`] || 0;
          const reh = rehDatesCount[`${i}`] || 0;
          rates[0].push(months[`${i}`]);
          rates[1].push(con);
          rates[2].push(reh);
        }
      }

      for (let i = 0; i < rates[0].length; i += 1) {
        rates[3].push(rates[1][i] + rates[2][i]);
      }
      console.log(rates);
      return rates;
    }

    // end rates data

    function checkData() {
      if (formattedData.length) {
        const sortedData = sortData(formattedData, dateValue);
        const lastConcert = sortedData
          .map((e: string[][], i: number) => (i ? e[2][e[2].length - 1] : [0]))
          .reverse()
          .find((d: string) => dayjs(dateValue) >= dayjs(d));
        const rates = createRateList(sortedData);
        setLastConcertDate(lastConcert);
        createEmployeeList(sortedData);
        setMonthsRates(rates);
      }
    }
    checkData();
  }, [dateValue, formattedData]);

  return (
    <DashboardContent maxWidth="xl">
      <Typography
        component="h4"
        variant="h5"
        sx={{ mb: { xs: 3, md: 5 } }}
      >{`${formatTextDate(lastConcertDate)}`}</Typography>
      <DatePickerValue value={dateValue} setValue={setDateValue} />

      <Grid container spacing={3}>
        {userKeys.map((u, i) => (
          <Grid xs={12} sm={6} md={3} key={i}>
            <AnalyticsWidgetSummary
              title={users[i]}
              percent={
                u in employeeList
                  ? countPercent(employeeList[u].total as number, getArraySum(monthsRates[3]))
                  : 0
              }
              total={u in employeeList ? (employeeList[u].total as number) : 0}
              currentDay={dateValue}
              startSeason="2025-08-15"
              color={fPercentToColor(
                u in employeeList ? (employeeList[u].maxTotal as number) : 1,
                u in employeeList ? (employeeList[u].total as number) : 0,
                getArraySum(monthsRates[3])
              )}
              icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
              chart={{
                categories: u in employeeList ? employeeList[u].details.categories : [],
                series: u in employeeList ? employeeList[u].details.series : [],
              }}
            />
          </Grid>
        ))}

        <Grid xs={12} md={12} lg={4}>
          <AnalyticsCurrentVisits
            title="Общее количество вызовов"
            chart={{
              series: setSeries(userKeys, users, employeeList),
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Вызовы по концертам"
            chart={{
              series: setSeries(userKeys, users, employeeList, 'C'),
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Вызовы по репетициям"
            chart={{
              series: setSeries(userKeys, users, employeeList, 'R'),
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={12}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Team A', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Team B', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid> */}

        <Grid xs={12}>
          <AnalyticsConversionRates
            title="Сезон 2025-2026"
            subheader={`Концерты - ${getArraySum(monthsRates[1])}. Репетиции - ${getArraySum(monthsRates[2])}. Всего - ${getArraySum(monthsRates[3])}.`}
            chart={{
              categories: monthsRates[0],
              series: [
                { name: 'Концерты', data: monthsRates[1] },
                { name: 'Репетиции', data: monthsRates[2] },
                { name: 'Всего', data: monthsRates[3] },
              ],
            }}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentSubject
            title="Current subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid> */}

        {/* <Grid xs={12}>
          <AnalyticsNews
            title={
              conсertList.slice(0, 10).length ? 'Концерты' : 'В этом сезоне больше нет концертов'
            }
            list={conсertList.slice(0, 10)}
          />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AnalyticsOrderTimeline title="Order timeline" list={_timeline} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsTrafficBySite
            title="Traffic by site"
            list={[
              { value: 'facebook', label: 'Facebook', total: 323234 },
              { value: 'google', label: 'Google', total: 341212 },
              { value: 'linkedin', label: 'Linkedin', total: 411213 },
              { value: 'twitter', label: 'Twitter', total: 443232 },
            ]}
          />
        </Grid>

        {/* <Grid xs={12} md={6} lg={8}>
          <AnalyticsTasks title="Tasks" list={_tasks} />
        </Grid> */}
      </Grid>

      {/* <Button
        variant="contained"
        onClick={handleUpdate}
        sx={{
          margin: '20px auto 0',
          maxWidth: '200px',
          width: '100%',
        }}
      >
        Обновить
      </Button> */}
    </DashboardContent>
  );
}
