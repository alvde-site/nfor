import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { OverviewAnalyticsView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function Page({ data }: { data: any }) {
  console.log('home', data);
  return (
    <>
      <Helmet>
        <title> {`Обзор - ${CONFIG.appName}`}</title>
      </Helmet>

      <OverviewAnalyticsView formattedData={data} />
    </>
  );
}
