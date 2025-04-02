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

import { workers } from 'src/utils/users';

import DatePickerValue from 'src/components/input/DatePickerValue';

import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { months, getDatesArr, getMonthsCount, getArraySum } from '../utils';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

type TEmpList =
  | {}
  | {
      [key: string]: {
        [key: string]: number;
      };
    };
type TSetBusy = {
  gData: [][];
  empName: string;
};

dayjs.extend(utc);
dayjs.extend(timezone);

type TRates = [string[], number[], number[], number[]];

export function OverviewAnalyticsView({ formattedData }: any) {
  const [employeeList, setEmployeeList] = useState<TEmpList>({});
  const [lastConcertDate, setLastConcertDate] = useState('');
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [monthsRates, setMonthsRates] = useState<TRates>([[], [], [], []]);

  useEffect(() => {
    // circl data
    let empList = {};

    function setSingleBusy({ gData, empName }: TSetBusy) {
      const empSingle = { [empName]: {} };
      let total = 0;

      generateColNames(empName).forEach((e) => {
        const empIdx = gData[0].indexOf(e as never);
        let sum = 0;
        for (let i = 1; i < gData.length; i += 1) {
          sum += gData[i][empIdx];
        }
        empSingle[empName] = { ...empSingle[empName], [e]: sum };
        total += sum;
        empSingle[empName] = { ...empSingle[empName], total };
      });
      empList = { ...empList, ...empSingle };
      return empSingle;
    }

    function createEmployeeList(sheetData: [][]) {
      workers.forEach((w) => {
        setSingleBusy({ gData: sheetData, empName: w });
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
          Object.prototype.hasOwnProperty.call(conDatesCount, i) &&
          Object.prototype.hasOwnProperty.call(rehDatesCount, i)
        ) {
          rates[0].push(months[`${i}`]);
          rates[1].push(conDatesCount[`${i}`]);
          rates[2].push(rehDatesCount[`${i}`]);
        }
      }

      for (let i = 1; i <= 8; i += 1) {
        if (
          Object.prototype.hasOwnProperty.call(conDatesCount, i) &&
          Object.prototype.hasOwnProperty.call(rehDatesCount, i)
        ) {
          rates[0].push(months[`${i}`]);
          rates[1].push(conDatesCount[`${i}`]);
          rates[2].push(rehDatesCount[`${i}`]);
        }
      }

      for (let i = 0; i < rates[0].length; i += 1) {
        rates[3].push(rates[1][i] + rates[2][i]);
      }

      return rates;
    }

    // end rates data

    function checkData() {
      if (formattedData.length) {
        const lastConcert = formattedData
          .map((e: string[][], i: number) => (i ? e[2][e[2].length - 1] : [0]))
          .reverse()
          .find((d: string) => new Date() >= new Date(d));
        const sortedData = sortData(formattedData, dateValue);
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
        {/* <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Weekly sales"
            percent={2.6}
            total={714000}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="New users"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Purchase orders"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            percent={3.6}
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid> */}

        <Grid xs={12} md={12} lg={4}>
          <AnalyticsCurrentVisits
            title="Общее количество вызовов"
            chart={{
              series: [
                { label: 'Демиденко', value: 'dem' in employeeList ? employeeList.dem.total : 0 },
                { label: 'Зенчугов', value: 'zen' in employeeList ? employeeList.zen.total : 0 },
                { label: 'Баканов', value: 'bak' in employeeList ? employeeList.bak.total : 0 },
                { label: 'Клименко', value: 'kli' in employeeList ? employeeList.kli.total : 0 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Вызовы по концертам"
            chart={{
              series: [
                { label: 'Демиденко', value: 'dem' in employeeList ? employeeList.dem.CDem : 0 },
                { label: 'Зенчугов', value: 'zen' in employeeList ? employeeList.zen.CZen : 0 },
                { label: 'Баканов', value: 'bak' in employeeList ? employeeList.bak.CBak : 0 },
                { label: 'Клименко', value: 'kli' in employeeList ? employeeList.kli.CKli : 0 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Вызовы по репетициям"
            chart={{
              series: [
                { label: 'Демиденко', value: 'dem' in employeeList ? employeeList.dem.RDem : 0 },
                { label: 'Зенчугов', value: 'zen' in employeeList ? employeeList.zen.RZen : 0 },
                { label: 'Баканов', value: 'bak' in employeeList ? employeeList.bak.RBak : 0 },
                { label: 'Клименко', value: 'kli' in employeeList ? employeeList.kli.RKli : 0 },
              ],
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
            title="Сезон 2024-2025"
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
 */}
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
