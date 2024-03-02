import { FC } from "react";
import styles from "./FiltItem.module.css";
import cn from "classnames";
import poster from "./../../assets/poster.png";
import { Rating } from "../../components/Rating/Rating";
import { AddInFavorites } from "../../components/AddInFavorites/AddInFavorites";
import { useLoaderData } from "react-router-dom";

export const FilmItem: FC = () => {
  const data = useLoaderData() as { data: any };

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await
				resolve={data.data}
			>
				{({ data }: { data: any }) => (
					<>Product - {data.name}</>
				)}
			</Await>
		</Suspense>
	</>;
  return (
    <div>
      <div className={cn(styles["head"])}>
        <span className={cn(styles["subtitle"])}>Поиск фильмов</span>
        <h2 className={cn(styles["title"])}>Avengers: End game</h2>
      </div>
      <div className={cn(styles["content"])}>
        <img
          className={cn(styles["poster"])}
          src={poster}
          alt="постер фильма"
        />
        <div className={cn(styles["right-panel"])}>
          <div className={cn(styles["description"])}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </div>
          <div className={cn(styles["rating"])}>
            <Rating rating={80}></Rating>
            <AddInFavorites />
          </div>
          <div className={cn(styles["details"])}>
            <span className={cn(styles["name"])}>Тип</span>
            <span className={cn(styles["info"])}>Movie</span>
            <span className={cn(styles["name"])}>Дата Выхода</span>
            <span className={cn(styles["info"])}>2019-04-04</span>
            <span className={cn(styles["name"])}>Длительность</span>
            <span className={cn(styles["info"])}>181 мин</span>
            <span className={cn(styles["name"])}>Жанр</span>
            <span className={cn(styles["info"])}>
              Adventure, Science Fiction, Action
            </span>
          </div>
        </div>
      </div>
      <div className={cn(styles["comments"])}>
        <h3 className={cn(styles["comment-name"])}>Отзывы</h3>
        <div className={cn(styles["comment"])}>
          <h4 className={cn(styles["comment-title"])}>
            Not as good as infinity war...
          </h4>
          <div className={cn(styles["text"])}>
            But its a pretty good film. A bit of a mess in some parts, lacking
            the cohesive and effortless feel infinity war somehow managed to
            accomplish. Some silly plot holes and characters that could&apos;ve
            been cut (Ahem, captain marvel and thanos). The use of Captain
            marvel in this film was just ridiculous. Shes there at the start,
            bails for some reason? And then pops up at the end to serve no
            purpose but deux ex machina a space ship...
          </div>
        </div>
      </div>
    </div>
  );
};
