/* eslint-disable new-cap */
/* eslint-disable react/display-name */
import { ElementType, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/main';
import PokeLayout from '../layouts/pokemon/PokeLayout';

// ----------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Component {...props} />
    </Suspense>
  );

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        // { path: 'about-us', element: <About /> },
        // { path: 'contact-us', element: <Contact /> },
        // { path: 'faqs', element: <Faqs /> },
      ],
    },
    {
      path: 'pokemon',
      element: <PokeLayout />,
      children: [{ path: ':name', element: <PokeDetails /> }],
    },
  ]);
}

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const PokeDetails = Loadable(lazy(() => import('../pages/PokeDetails')));
