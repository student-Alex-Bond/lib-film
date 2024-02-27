import { InputHTMLAttributes, ChangeEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  isIcon?: boolean;
  isValidText?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
