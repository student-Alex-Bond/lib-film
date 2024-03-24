import { FC } from "react";
import styles from "./FiltItem.module.css";
import cn from "classnames";
import { Rating } from "../../components/Rating/Rating";
import { AddInFavorites } from "../../components/AddInFavorites/AddInFavorites";
import { useParams } from "react-router-dom";
import { ResponseMovieType } from "../../types/responseMovie";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useGetMoviesByIdQuery } from "../../features/movies.slice";

export const FilmItem: FC = () => {
  const { id } = useParams();
  const currentUserName = useSelector(
    (state: RootState) => state.currentUser.name
  );
  if (!id) return;
  const { data, isLoading } = useGetMoviesByIdQuery(id);
  let movieInfo: ResponseMovieType | undefined;
  if (!data) return;
  movieInfo = data;
  console.log(data);

  if (isLoading) return <div>Losding...</div>;

  return (
    <div key={movieInfo.id}>
      <div className={cn(styles["head"])}>
        <span className={cn(styles["subtitle"])}>Поиск фильмов</span>
        <h2 className={cn(styles["title"])}>{`${movieInfo.name} ${
          movieInfo.alternativeName ? `(${movieInfo.alternativeName})` : ""
        }`}</h2>
      </div>
      <div className={cn(styles["content"])}>
        <img
          className={cn(styles["poster"])}
          src={movieInfo.poster.url}
          alt="постер фильма"
        />
        <div className={cn(styles["right-panel"])}>
          <div className={cn(styles["description"])}>
            {movieInfo.description}
          </div>
          <div className={cn(styles["rating"])}>
            <Rating rating={Number(movieInfo.rating.imdb)}></Rating>
            <AddInFavorites
              currentUserName={currentUserName}
              id={String(movieInfo.id)}
            />
          </div>
          <div className={cn(styles["details"])}>
            <span className={cn(styles["name"])}>Тип</span>
            <span className={cn(styles["info"])}>{movieInfo.type}</span>
            <span className={cn(styles["name"])}>Дата Выхода</span>
            <span className={cn(styles["info"])}>
              {movieInfo.premiere.world ? movieInfo.premiere.world.slice(0, 10): ''}
            </span>
            <span className={cn(styles["name"])}>Жанр</span>
            <span className={cn(styles["info"])}>
              {movieInfo.genres.map((genre) => genre.name).join(", ")}
            </span>
          </div>
        </div>
      </div>
      <div className={cn(styles["comments"])}>
        {movieInfo.facts.map((fact) => {
          return <div>{fact.value}</div>;
        })}
      </div>
    </div>
  );
};
