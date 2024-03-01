import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/users.context";
import { Layout } from "./layouts/Layout/Layout";
import { Main } from "./layouts/Main/Main";
import { SignIn } from "./layouts/SingIn/SignIn";
import { Error } from "./components/Error/Error";
import { Favorites } from "./layouts/Favorites/Favorites";
import { FilmItem } from "./layouts/FilmItem/FilmItem";

export const routes = {
  main: "/",
  signIn: "/signin",
  movie: "/movie:id",
  favorites: '/favorites'
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
