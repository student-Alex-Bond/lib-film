import { AnchorHTMLAttributes } from "react";

export interface CardItemPpors extends AnchorHTMLAttributes<HTMLLIElement> {
  name: string;
  rating: number;
  poster: string | undefined;
  id: string;
}
