import { ComponentProps } from "react";

export type CardItemProps = ComponentProps<'li'> & {
    name: string;
    rating: number;
    poster?: string;
    id: string;
  };