import { LiHTMLAttributes } from "react";

export interface CardItemPpors extends LiHTMLAttributes<HTMLLIElement> {
  poster: string;
  filmName: string;
  rating: number;
}