import styles from "./CardItem.module.css";
import cn from "classnames";
import { Rating } from "../Rating/Rating";

export const CardItem = ({ poster, filmName, rating }) => {
  return (
    <li className={cn(styles["card-item"])}>
      <Rating rating={rating} />
      <img className={cn(styles.img)} src={poster} alt="постер фильма" />
      <h2 className={cn(styles.h2)}>{filmName}</h2>
      <button className={cn(styles.button)}>В избранное</button>
    </li>
  );
};
