import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ConcertView } from 'src/sections/concert/view';

// ----------------------------------------------------------------------

export default function Page({ data }: { data: any }) {
  console.log('concert', data);
  return (
    <>
      <Helmet>
        <title> {`Концерты - ${CONFIG.appName}`}</title>
      </Helmet>

      <ConcertView formattedData={data} />
    </>
  );
}
