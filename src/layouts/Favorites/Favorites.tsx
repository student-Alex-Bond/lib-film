import { FC } from "react";
import { Heading } from "../../components/Heading/Heading";
import { useGetCurrentUserFavoritesMoviesQuery } from "../../features/movies.slice";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { CardItem } from "../../components/CardItem/CardItem";
import styles from "./Favorites.module.css";
import cn from "classnames";
import { ResponseMovieType } from "../../types/responseMovie";
export const Favorites: FC = () => {
  const favoriteMovies = useSelector(
    (state: RootState) => state.currentUser.favoritesMovies
  );
  const { data } = useGetCurrentUserFavoritesMoviesQuery(favoriteMovies);
  if (!data) return <div>запрос на сервер за вашими фильмами </div>;
  return (
    <div>
      <Heading>Favorites</Heading>
      <ul className={cn(styles["favorite_list"])}>
        {data.map((movie: ResponseMovieType) => {
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
