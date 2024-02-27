import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./context/users.context";
import { Layout } from "./layouts/Layout/Layout";
import { Main } from "./layouts/Main/Main";
import { SignIn } from "./layouts/SingIn/SignIn";
import { Error } from "./components/Error/Error";
import { Favorites } from "./layouts/Favorites/Favorites";
import { FilmItem } from "./layouts/FilmItem/FilmItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/film",
        element: <FilmItem />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/signin",
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
