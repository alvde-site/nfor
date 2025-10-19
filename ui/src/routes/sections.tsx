import { useCookies } from 'react-cookie';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { NforBdApiSet } from 'src/utils/NforBdApi';
import { formatConRehDate } from 'src/utils/format-date';

import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const ConcertPage = lazy(() => import('src/pages/concert'));
export const AnaliticsPage = lazy(() => import('src/pages/analitics'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  const [cookies, setCookie] = useCookies(['isSubmit', 'isSignin']);
  // const data = useRef([]);
  const [data, setData] = useState([]);
  const handleCookie = useCallback(() => {
    setCookie('isSubmit', true, { maxAge: 3600 * 24 });
    localStorage.removeItem('initData');
  }, [setCookie]);
  useEffect(() => {
    if (!cookies.isSubmit) {
      window.addEventListener('beforeunload', handleCookie);
    }
  }, [cookies.isSubmit, handleCookie]);

  useEffect(() => {
    function checkData() {
      if (!localStorage.getItem('initData')) {
        NforBdApiSet.getBdData()
          .then((res) => res.json())
          .then((res) => {
            const formattedData = formatConRehDate(res);
            localStorage.setItem('initData', JSON.stringify(formattedData));
            setData(formattedData);
          });
      } else if (localStorage.getItem('initData')) {
        const localData = JSON.parse(localStorage.getItem('initData')!);
        setData(localData);
      }
    }
    checkData();
  }, []);
  return useRoutes([
    {
      path: '/',
      element: cookies.isSignin ? (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ) : (
        <Navigate to="sign-in" />
      ),
      children: [
        { element: <HomePage data={data} />, index: true },
        // { path: 'user', element: <UserPage /> },
        { path: 'concert', element: <ConcertPage data={data} /> },
        { path: 'analitics', element: <AnaliticsPage data={data} /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'sign-in',
      element: (
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
