import { ComponentProps } from "react";

export type AddInFavoritesProps  = ComponentProps<'button'> & {
    id: string;
    currentUserName: string;
  }