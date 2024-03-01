import { LiHTMLAttributes } from "react";
import { IResponse } from "../../mocha";

export interface CardItemPpors extends LiHTMLAttributes<HTMLLIElement> {
  name: string;
  rating: number;
  poster: string | undefined;
}
