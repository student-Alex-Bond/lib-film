import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/users.context";
import { Layout } from "./layouts/Layout/Layout";
import { Main, token } from "./layouts/Main/Main";
import { SignIn } from "./layouts/SingIn/SignIn";
import { Error } from "./components/Error/Error";
import { Favorites } from "./layouts/Favorites/Favorites";
import { FilmItem } from "./layouts/FilmItem/FilmItem";
import axios from "axios";

export const routes = {
  main: "/",
  signIn: "/signin",
  movie: "/movie/:id",
  favorites: "/favorites",
};

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
        loader: async ({ params }) => {
          const options = {
            method: "GET",
            url: `https://api.kinopoisk.dev/v1.4/movie/${params.id}`,
            headers: { accept: "application/json", "X-API-KEY": token },
          };

          const data = await axios
            .request(options)
            .then(function (response) {
              return response.data;
            })
            .catch(function (error) {
              return error;
            });
          return defer({ data });
        },
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
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
