// import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Главная',
    path: '/',
    icon: icon('ic-home'),
  },
  {
    title: 'Концерты',
    path: '/concert',
    icon: icon('ic-concert'),
  },
  // {
  //   title: 'Обзор',
  //   path: '/analitic',
  //   icon: icon('ic-statistic'),
  // },
  // {
  //   title: 'Пользователи',
  //   path: '/users',
  //   icon: icon('ic-users'),
  // },
  // {
  //   title: 'Sign in',
  //   path: '/sign-in',
  //   icon: icon('ic-lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic-disabled'),
  // },
];
