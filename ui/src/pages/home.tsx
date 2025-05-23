import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function Page({ data }: { data: any }) {
  return (
    <>
      <Helmet>
        <title> {`Главная - ${CONFIG.appName}`}</title>
        <meta name="description" content="Расписание группы тромбонов оркестра НФОР" />
        <meta name="keywords" content="НФОР, тромбоны" />
      </Helmet>

      <HomeView formattedData={data} />
    </>
  );
}
