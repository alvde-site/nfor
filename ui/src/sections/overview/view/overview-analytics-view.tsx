import { useState, useEffect, useCallback } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { NforBdApiSet } from 'src/utils/NforBdApi';
import { sortData } from 'src/utils/sort-employee-list';
import { generateColNames } from 'src/utils/generate-colnames';
import { formatDate, formatTextDate } from 'src/utils/format-date';

// import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

// import { AnalyticsNews } from '../analytics-news';
// import { AnalyticsTasks } from '../analytics-tasks';
import { Button } from '@mui/material';

import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------
type TInitData = [][];
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

export function OverviewAnalyticsView() {
  const [initData, setInitData] = useState<TInitData>([]);
  console.log('initData', initData); // initData not used
  const [employeeList, setEmployeeList] = useState<TEmpList>({});
  const [lastConcertDate, setLastConcertDate] = useState('');

  const getLastConcertDate = (arr: string[][]) => {
    const lastItem = arr[arr.length - 1];
    const lastDatesItem = lastItem[3];
    return lastDatesItem[lastDatesItem.length - 1];
  };

  const handleUpdate = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem('data');
    localStorage.removeItem('initData');
    window.location.reload();
  }, []);

  useEffect(() => {
    const workers = ['dem', 'zen', 'bak', 'kli'];
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

    function handleEmpList(sheetData: [][]) {
      workers.forEach((w) => {
        setSingleBusy({ gData: sheetData, empName: w });
      });
      setEmployeeList(empList);
    }

    function checkData() {
      if (!localStorage.getItem('data')) {
        NforBdApiSet.getBdData()
          .then((res) => res.json())
          .then((res) => {
            setInitData(res);
            const formattedData = res.map((e: [], i: number) =>
              i ? e.map((el, idx) => (idx === 2 || idx === 3 ? formatDate(el) : el)) : e
            );
            localStorage.setItem('initData', JSON.stringify(formattedData));
            const sortedData = sortData(formattedData);
            localStorage.setItem('data', JSON.stringify(sortedData));
            setLastConcertDate(getLastConcertDate(sortedData));
            handleEmpList(sortedData);
          });
      } else {
        const localData = JSON.parse(localStorage.getItem('data')!);
        const sortedData = sortData(localData);
        setLastConcertDate(getLastConcertDate(sortedData));
        handleEmpList(sortedData);
      }
    }
    checkData();
  }, []);

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        {`Привет, с возвращением 👋! ${formatTextDate(lastConcertDate)}`}
      </Typography>

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

        <Grid xs={12} md={6} lg={4}>
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
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsConversionRates
            title="Conversion rates"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Italy', 'Japan', 'China', 'Canada', 'France'],
              series: [
                { name: '2022', data: [44, 55, 41, 64, 22] },
                { name: '2023', data: [53, 32, 33, 52, 13] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
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
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsNews title="News" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
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

      <Button
        variant="contained"
        onClick={handleUpdate}
        sx={{
          margin: '20px auto 0',
          maxWidth: '200px',
          width: '100%',
        }}
      >
        Обновить
      </Button>
    </DashboardContent>
  );
}
