import { Layout } from '../layouts/Layout/Layout';
import { Error } from '../components/Error/Error';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Main } from '../layouts/Main/Main';
import { SignIn } from '../layouts/SingIn/SignIn';
import { lazy, Suspense } from 'react';
import { Loading } from '../components/Loading';
import { routes } from './constants';

const Movie = lazy(() =>
  import('../layouts/Movie').then(({ Movie }) => ({ default: Movie })),
);
const Favorites = lazy(() =>
  import('../layouts/Favorites').then(({ Favorites }) => ({ default: Favorites })),
);
const AboutActor = lazy(() =>
  import('../layouts/AboutActor').then(({ AboutActor }) => ({ default: AboutActor })),
);

// eslint-disable-next-line react-refresh/only-export-components
export const router = createHashRouter([
  {
    path: routes.main,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: routes.main,
        element: <Main />,
      },
      {
        path: routes.movie,
        element: (
          <Suspense fallback={<Loading width={20} height={20} />}>
            <Movie />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: routes.favorites,
        element: (
          <Suspense fallback={<Loading width={20} height={20} />}>
            <Favorites />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: routes.signIn,
        element: <SignIn />,
        errorElement: <Error />,
      },
      {
        path: routes.actor,
        element: (
          <Suspense fallback={<Loading width={20} height={20} />}>
            <AboutActor />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
