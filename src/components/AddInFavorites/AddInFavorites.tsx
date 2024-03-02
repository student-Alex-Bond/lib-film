import styles from "./AddInFavorites.module.css";
import cn from "classnames";
import { FC, useState } from "react";
import like from "./../../assets/like.svg";
import addedToFavorites from "./../../assets/addedToFavorites.svg";

export const AddInFavorites: FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const invertValue = () => {
    setIsFavorite((state) => !state);
  };

  const img = isFavorite ? addedToFavorites : like;

  return (
    <button
      onClick={invertValue}
      className={cn(styles.button, {
        [styles["active"]]: isFavorite,
      })}
    >
      <img src={img} alt="иконка избранное" />
      {isFavorite ? "В избранном" : "В избранное"}
    </button>
  );
};
