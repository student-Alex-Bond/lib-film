import { Layout } from "./layouts/Layout/Layout";
import { Error } from "./components/Error/Error";
import { createHashRouter } from "react-router-dom";
import { Favorites } from "./layouts/Favorites/Favorites";
import { FilmItem } from "./layouts/FilmItem/FilmItem";
import { Main } from "./layouts/Main/Main";
import { SignIn } from "./layouts/SingIn/SignIn";
import { AboutActor } from "./layouts/AboutActor/AboutActor";

export const routes = {
  main: "/",
  signIn: "/signin",
  movie: "/movie/:id",
  favorites: "/favorites",
  actor: "/name/:id",
};

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
      {
        path: routes.actor,
        element: <AboutActor/>
      }
    ],
  },
]);
