import styles from "./CardList.module.css";
import cn from "classnames";
import { CardItem } from "../../components/CardItem/CardItem";
import { CardItemPpors } from "../../components/CardItem/CardItem.props";
import { FC } from "react";

export const CardList:FC<CardItemPpors> = ({ poster, filmName, rating }) => {
  return (
    <ul className={cn(styles["card-list"])}>
      <CardItem poster={poster} filmName={filmName} rating={rating} />
      <CardItem poster={poster} filmName={filmName} rating={rating} />
      <CardItem poster={poster} filmName={filmName} rating={rating} />
      <CardItem poster={poster} filmName={filmName} rating={rating} />
      <CardItem poster={poster} filmName={filmName} rating={rating} />
      <CardItem poster={poster} filmName={filmName} rating={rating} />
    </ul>
  );
};
