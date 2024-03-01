import styles from "./CardItem.module.css";
import cn from "classnames";
import { Rating } from "../Rating/Rating";
import { CardItemPpors } from "./CardItem.props";
import { FC } from "react";

export const CardItem: FC<CardItemPpors> = ({poster,name,rating}) => {
  return (
    <li className={cn(styles["card-item"])}>
      <div className={cn(styles["wrapper-rating"])}>
        <Rating rating={rating} />
      </div>

      <img className={cn(styles.img)} src={poster} alt="постер фильма" />
      <h2 className={cn(styles.h2)}>{name}</h2>
      <button className={cn(styles.button)}>В избранное</button>
    </li>
  );
};
