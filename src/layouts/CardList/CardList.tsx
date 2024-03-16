import styles from "./CardList.module.css";
import cn from "classnames";
import { CardItem } from "../../components/CardItem/CardItem";
import { FC } from "react";
import { Doc } from "../../mocha";

export const CardList: FC<{ movies?: Doc[]; isLoading?: boolean }> = ({
  movies,
  isLoading,
}) => {
  if (!movies) return;

  return (
    <ul className={cn(styles["card-list"])}>
      {isLoading && <div>Loading...</div>}
      {movies.map((movie: Doc) => {
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
