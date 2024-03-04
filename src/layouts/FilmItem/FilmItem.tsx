import { FC, Suspense } from "react";
import styles from "./FiltItem.module.css";
import cn from "classnames";
import poster from "./../../assets/poster.png";
import { Rating } from "../../components/Rating/Rating";
import { AddInFavorites } from "../../components/AddInFavorites/AddInFavorites";
import { Await, useLoaderData } from "react-router-dom";
import { IResponseMovie } from "../../intrerfaces/responseMovie";

export const FilmItem: FC = () => {
  const data = useLoaderData() as { data: IResponseMovie };
  const movieInfo = data.data;
  return (
    <>
      <Suspense fallback={"Загружаю..."}>
        <Await resolve={movieInfo}>
          {(movieInfo: IResponseMovie) => (
            <div>
              <div className={cn(styles["head"])}>
                <span className={cn(styles["subtitle"])}>Поиск фильмов</span>
                <h2 className={cn(styles["title"])}>{movieInfo.name}</h2>
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
                    <AddInFavorites />
                  </div>
                  <div className={cn(styles["details"])}>
                    <span className={cn(styles["name"])}>Тип</span>
                    <span className={cn(styles["info"])}>{movieInfo.type}</span>
                    <span className={cn(styles["name"])}>Дата Выхода</span>
                    <span className={cn(styles["info"])}>
                      {movieInfo.premiere.world.slice(0, 10)}
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
          )}
        </Await>
      </Suspense>
    </>
  );
};
