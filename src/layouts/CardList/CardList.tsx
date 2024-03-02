import styles from "./CardList.module.css";
import cn from "classnames";
import { CardItem } from "../../components/CardItem/CardItem";
import { FC } from "react";
import { Doc, IResponse } from "../../mocha";

export const CardList: FC<{ props: IResponse | undefined }> = (props) => {
  if (props.props === undefined) {
    return;
  }
  const { docs } = props.props;
  return (
    <ul className={cn(styles["card-list"])}>
      {docs.map((movie: Doc) => {
        return (
          <CardItem
            id={String(movie.id)}
            key={movie.id}
            name={movie.name}
            poster={movie.backdrop.url || movie.backdrop.previewUrl}
            rating={movie.rating.imdb}
          />
        );
      })}
    </ul>
  );
};
