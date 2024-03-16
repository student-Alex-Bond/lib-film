import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts/Layout/Layout";
import { Main } from "./layouts/Main/Main";
import { SignIn } from "./layouts/SingIn/SignIn";
import { Error } from "./components/Error/Error";
import { Favorites } from "./layouts/Favorites/Favorites";
import { FilmItem } from "./layouts/FilmItem/FilmItem";
import { routes } from "./routes";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
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
        element: <FilmItem />,
        errorElement: <div>ошибка фильма по ид</div>,
      },
      {
        path: routes.favorites,
        element: <Favorites />,
      },
      {
        path: routes.signIn,
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
