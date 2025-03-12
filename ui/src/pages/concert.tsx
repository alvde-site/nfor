import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ConcertView } from 'src/sections/concert/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Концерты - ${CONFIG.appName}`}</title>
      </Helmet>

      <ConcertView />
    </>
  );
}
