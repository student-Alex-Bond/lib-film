import { ComponentProps, ReactNode } from "react";

export type ButtonProps = ComponentProps<'button'> & {
  type: "button" | "reset" | "submit";
  children: ReactNode;
  onClick: () => void;
}
