import { FC, useEffect, useState } from "react";
import { Heading } from "../../components/Heading/Heading";
//import { useGetCurrentUserFavoritesMoviesQuery } from "../../features/movies.slice";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { CardItem } from "../../components/CardItem/CardItem";
import styles from "./Favorites.module.css";
import cn from "classnames";
import { ResponseMovieType } from "../../types/responseMovie";
import { token } from "../../env";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": token,
  },
};
const getMovies = (movieId: string) => {
  const data = fetch(`https://api.kinopoisk.dev/v1.4/movie/${movieId}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return data as Promise<ResponseMovieType>;
};

export const Favorites: FC = () => {
  const [movies, setMovies] = useState<ResponseMovieType[]>([]);
  const favoriteMovies = useSelector(
    (state: RootState) => state.currentUser.favoritesMovies
  );
  const loadAllMovies = async () => {
    const res = await Promise.all(
      favoriteMovies.map((movieId) => getMovies(movieId))
    );
    setMovies(res);
  };
  useEffect(() => {
    loadAllMovies();
  }, [favoriteMovies]);
  //const { data } = useGetCurrentUserFavoritesMoviesQuery(favoriteMovies);
  if (movies.length === 0)
    return <div>запрос на сервер за вашими фильмами </div>;
  return (
    <div>
      <Heading> Мои избранные фильмы</Heading>
      <ul className={cn(styles["favorite_list"])}>
        {movies.map((movie: ResponseMovieType) => {
          return (
            <li key={movie.id + 1}>
              <CardItem
                id={String(movie.id)}
                key={movie.id}
                name={movie.name}
                poster={movie.poster.previewUrl}
                rating={movie.rating.imdb}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
