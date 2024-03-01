import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "reset" | "submit";
  children: ReactNode;
  onClick: () => void;
}
