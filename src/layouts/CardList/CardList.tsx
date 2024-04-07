import styles from "./CardList.module.css";
import cn from "classnames";
import { CardItem } from "../../components/CardItem/CardItem";
import { FC } from "react";
import { MovieType } from "../../types/responseAllMovies";

export const CardList: FC<{ movies: MovieType[]; isLoading: boolean }> = ({
  movies = [],
  isLoading,
}) => {
  if (movies.length === 0)
    return (
      <div>
        Введите название фильма, либо нажмите на кнопку искать
        <br />
        (пустой запрос вернет популярные фильмы)
      </div>
    );

  return (
    <ul className={cn(styles["card-list"])}>
      {isLoading && <div>Loading...</div>}
      {movies.map((movie: MovieType) => {
        return (
          <CardItem
            id={String(movie.id)}
            key={movie.id}
            name={movie.name}
            poster={movie.poster.previewUrl}
            rating={movie.rating.imdb}
          />
        );
      })}
    </ul>
  );
};
