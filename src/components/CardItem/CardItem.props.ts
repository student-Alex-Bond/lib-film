import { ComponentProps } from "react";

export type CardItemPpors = ComponentProps<'li'> & {
  name: string;
  rating: number;
  poster: string | undefined;
  id: string;
}
