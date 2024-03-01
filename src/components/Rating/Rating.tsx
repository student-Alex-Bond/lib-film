import styles from "./Rating.module.css";
import cn from "classnames";
import star from "./../../assets/star.svg";
import { FC } from "react";

export const Rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className={cn(styles.rating)}>
      <img src={star} alt="иконка звезда" />
      {rating}
    </div>
  );
};
