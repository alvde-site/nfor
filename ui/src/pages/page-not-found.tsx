import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`404 страница не найдена! | Ошибка - ${CONFIG.appName}`}</title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
